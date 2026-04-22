const fs = require('fs');
const path = require('path');

const SERVER_JS_PATH = path.join(__dirname, 'server.js');
const TLE_FILES = [
  'science_tles.txt',
  'weather_tles.txt',
  'geo_tles.txt',
  'gnss_tles.txt',
  'resources_tles.txt'
];

// Pre-seeded TLEs from manual lookup/browser
const MANUAL_TLES = {
  'GSAT-8': {
    tle1: '1 37605U 11022A   26101.85044681  .00000088  00000+0  00000+0 0  9997',
    tle2: '2 37605   1.9585  82.6069 0005360 225.0904 253.6027  1.00271856 52550'
  },
  'GSAT-10': {
    tle1: '1 38779U 12051B   26101.89359648 -.00000163  00000+0  00000+0 0  9994',
    tle2: '2 38779   0.0657 265.2392 0006599 174.5955 164.9708  1.00272239 49439'
  },
  'INSAT-3D': {
    tle1: '1 39216U 13038B   26101.90286986 -.00000336  00000+0  00000+0 0  9995',
    tle2: '2 39216   1.7537  83.3568 0001344 264.4101 306.8995  1.00272654 46411'
  },
  'INSAT-3DR': {
    tle1: '1 41752U 16054A   26101.89186315 -.00000076  00000+0  00000+0 0  9998',
    tle2: '2 41752   0.0761  85.3757 0011753 196.3817 313.4408  1.00271896 35153'
  },
  'IRNSS-1G': {
    tle1: '1 41469U 16027A   26101.90278319 -.00000329  00000+0  00000+0 0  9992',
    tle2: '2 41469   5.0321  99.0394 0006059 333.0684 222.4556  1.00266970 36510'
  },
  'IRNSS-1I': {
    tle1: '1 43286U 18035A   26096.01016933  .00000091  00000+0  00000+0 0  9994',
    tle2: '2 43286  29.0088  75.3074 0018340 190.0927 347.8119  1.00279620 29351'
  },
  'EOS-04': {
    tle1: '1 51656U 22013A   26101.95135137  .00002415  00000+0  14153-3 0  9993',
    tle2: '2 51656  97.5145 109.6067 0001870  99.2563 260.8880 15.12731350229479'
  },
  'EOS-06': {
    tle1: '1 54361U 22158A   26101.91797616  .00000212  00000+0  70352-4 0  9998',
    tle2: '2 54361  98.3487 201.0071 0001922 126.8933 233.2436 14.46987791178259'
  }
};

function normalizeName(name) {
  return name.toUpperCase().replace(/[^A-Z0-9]/g, '').trim();
}

function parseTLEs(text) {
  const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const tles = {};
  
  for (let i = 0; i < lines.length - 2; i++) {
    const line0 = lines[i];
    const line1 = lines[i+1];
    const line2 = lines[i+2];
    
    // Check if line1 and line2 are valid TLE lines
    if (line1.startsWith('1 ') && line2.startsWith('2 ') && !line0.startsWith('1 ') && !line0.startsWith('2 ')) {
      const name = line0;
      tles[normalizeName(name)] = { 
        tle1: line1, 
        tle2: line2 
      };
      i += 2; // Skip next two lines
    }
  }
  return tles;
}

let allTles = { ...MANUAL_TLES };
// Also index manual TLES by normalized name
Object.keys(MANUAL_TLES).forEach(k => {
  allTles[normalizeName(k)] = MANUAL_TLES[k];
});

TLE_FILES.forEach(filename => {
  const filePath = path.join(__dirname, filename);
  if (fs.existsSync(filePath)) {
    console.log(`Parsing ${filename}...`);
    const content = fs.readFileSync(filePath, 'utf8');
    const tles = parseTLEs(content);
    Object.assign(allTles, tles);
    console.log(`Added ${Object.keys(tles).length} TLEs from ${filename}`);
  }
});

console.log(`Total TLEs in database: ${Object.keys(allTles).length}`);

// Read server.js
let serverContent = fs.readFileSync(SERVER_JS_PATH, 'utf8');

// Find the ISRO_SATELLITES array
// We need to match the array block and update objects inside it
const arrayStartMarker = 'const ISRO_SATELLITES = [';
const startIndex = serverContent.indexOf(arrayStartMarker);
if (startIndex === -1) {
  console.error('Could not find ISRO_SATELLITES array');
  process.exit(1);
}

// Find the end of the array (bracket matching)
let bracketCount = 1;
let endIndex = -1;
for (let i = startIndex + arrayStartMarker.length; i < serverContent.length; i++) {
  if (serverContent[i] === '[') bracketCount++;
  if (serverContent[i] === ']') bracketCount--;
  if (bracketCount === 0) {
    endIndex = i;
    break;
  }
}

if (endIndex === -1) {
  console.error('Could not find end of ISRO_SATELLITES array');
  process.exit(1);
}

let arrayContent = serverContent.substring(startIndex, endIndex + 1);

// Regex to find each object block in the array
const objectRegex = /\{[\s\S]*?\}/g;
let updatedCount = 0;

const updatedArrayContent = arrayContent.replace(objectRegex, (match) => {
  const nameMatch = match.match(/name:\s*"(.*?)"/);
  if (!nameMatch) return match;
  
  const name = nameMatch[1];
  const normalized = normalizeName(name);
  
  if (allTles[normalized]) {
    const { tle1, tle2 } = allTles[normalized];
    updatedCount++;
    console.log(`Updating ${name}...`);
    
    // Replace tle1 and tle2 fields
    let updatedObject = match.replace(/tle1:\s*".*?"/, `tle1: "${tle1}"`);
    updatedObject = updatedObject.replace(/tle2:\s*".*?"/, `tle2: "${tle2}"`);
    
    // If NORAD ID is in the TLE, extract it
    const noradId = tle1.substring(2, 7).trim();
    if (noradId) {
       // Only add noradId if it's not already there or update it
       if (updatedObject.includes('noradId:')) {
         updatedObject = updatedObject.replace(/noradId:\s*\d+/, `noradId: ${parseInt(noradId)}`);
       } else {
         // Insert after name
         updatedObject = updatedObject.replace(/(name:\s*".*?",)/, `$1\n    noradId: ${parseInt(noradId)},`);
       }
    }
    
    return updatedObject;
  }
  return match;
});

console.log(`Updated ${updatedCount} satellites with correct TLE data.`);

const finalContent = serverContent.substring(0, startIndex) + updatedArrayContent + serverContent.substring(endIndex + 1);
fs.writeFileSync(SERVER_JS_PATH, finalContent);
console.log('Successfully updated server.js');
