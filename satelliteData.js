const ISRO_SATELLITES_DATA = [
  {
    name: "Aryabhata",
    orbitType: "LEO",
    status: "inactive",
    launchDate: "1975-04-19",
    launchVehicle: "Cosmos-3M",
    mass: "360 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Aryabhata_satellite_(model).jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Aryabhata",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "Bhaskara-I",
    orbitType: "LEO",
    status: "inactive",
    launchDate: "1979-06-07",
    launchVehicle: "Cosmos-3M",
    mass: "444 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Bhaskara_I.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Bhaskara-I",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "Bhaskara-II",
    orbitType: "LEO",
    status: "inactive",
    launchDate: "1981-11-20",
    launchVehicle: "Cosmos-3M",
    mass: "444 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Bhaskara_II.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Bhaskara-II",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "Rohini RS-1",
    orbitType: "LEO",
    status: "inactive",
    launchDate: "1980-07-18",
    launchVehicle: "SLV-3",
    mass: "35 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Rohini_Satellite_RS-1.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Rohini_RS-1",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "APPLE",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "1981-06-19",
    launchVehicle: "Ariane 1",
    mass: "670 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Apple_satellite.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/APPLE",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "INSAT-1A",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "1982-04-10",
    launchVehicle: "Delta 3914",
    mass: "1152 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Insat-1.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/INSAT-1A",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "INSAT-1B",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "1983-08-30",
    launchVehicle: "Shuttle",
    mass: "1152 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Insat-1.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/INSAT-1B",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "INSAT-1C",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "1988-07-21",
    launchVehicle: "Ariane 3",
    mass: "1190 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Insat-1.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/INSAT-1C",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "INSAT-1D",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "1990-06-12",
    launchVehicle: "Delta 4925",
    mass: "1190 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Insat-1.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/INSAT-1D",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "IRS-1A",
    orbitType: "LEO",
    status: "inactive",
    launchDate: "1988-03-17",
    launchVehicle: "Vostok",
    mass: "975 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Irs-1a.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/IRS-1A",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "IRS-1B",
    orbitType: "LEO",
    status: "inactive",
    launchDate: "1991-08-29",
    launchVehicle: "Vostok",
    mass: "975 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Irs-1b.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/IRS-1B",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "INSAT-2A",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "1992-07-10",
    launchVehicle: "Ariane 4",
    mass: "1906 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Insat-2.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/INSAT-2A",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "INSAT-2B",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "1993-07-22",
    launchVehicle: "Ariane 4",
    mass: "1931 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Insat-2.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/INSAT-2B",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "IRS-P2",
    orbitType: "LEO",
    status: "inactive",
    launchDate: "1994-10-15",
    launchVehicle: "PSLV-D2",
    mass: "804 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Irs-p2.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/IRS-P2",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "INSAT-2C",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "1995-12-07",
    launchVehicle: "Ariane 4",
    mass: "2106 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Insat-2.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/INSAT-2C",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "IRS-1C",
    orbitType: "LEO",
    status: "inactive",
    launchDate: "1995-12-28",
    launchVehicle: "Molniya",
    mass: "1250 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Irs-1c.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/IRS-1C",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "IRS-P3",
    orbitType: "LEO",
    status: "inactive",
    launchDate: "1996-03-21",
    launchVehicle: "PSLV-D3",
    mass: "1137 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Irs-p3.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/IRS-P3",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "INSAT-2D",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "1997-06-04",
    launchVehicle: "Ariane 4",
    mass: "2079 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Insat-2.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/INSAT-2D",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "IRS-1D",
    orbitType: "LEO",
    status: "inactive",
    launchDate: "1997-09-29",
    launchVehicle: "PSLV-C1",
    mass: "1200 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Irs-1d.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/IRS-1D",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "INSAT-2E",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "1999-04-03",
    launchVehicle: "Ariane 4",
    mass: "2550 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Insat-2.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/INSAT-2E",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "Oceansat-1 (IRS-P4)",
    orbitType: "LEO",
    status: "inactive",
    launchDate: "1999-05-26",
    launchVehicle: "PSLV-C2",
    mass: "1050 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Oceansat-1.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Oceansat-1_(IRS-P4)",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "INSAT-3B",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "2000-03-22",
    launchVehicle: "Ariane 5",
    mass: "2070 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Insat-3b.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/INSAT-3B",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "GSAT-1",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "2001-04-18",
    launchVehicle: "GSLV-D1",
    mass: "1530 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT1/GSAT1.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-1",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "INSAT-3C",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "2002-01-24",
    launchVehicle: "Ariane 4",
    mass: "2750 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Insat-3c.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/INSAT-3C",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "Kalpana-1 (METSAT-1)",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "2002-09-12",
    launchVehicle: "PSLV-C4",
    mass: "1060 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Kalpana-1.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Kalpana-1_(METSAT-1)",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "INSAT-3A",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "2003-04-10",
    launchVehicle: "Ariane 5",
    mass: "2950 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Insat-3a.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/INSAT-3A",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "GSAT-2",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "2003-05-08",
    launchVehicle: "GSLV-D2",
    mass: "1825 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT2/GSAT2.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-2",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "INSAT-3E",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "2003-09-28",
    launchVehicle: "Ariane 5",
    mass: "2775 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Insat-3e.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/INSAT-3E",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "EDUSAT (GSAT-3)",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "2004-09-20",
    launchVehicle: "GSLV-F01",
    mass: "1950 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Edusat.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/EDUSAT_(GSAT-3)",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "CARTOSAT-1",
    orbitType: "LEO",
    status: "inactive",
    launchDate: "2005-05-05",
    launchVehicle: "PSLV-C6",
    mass: "1560 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Cartosat-1.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/CARTOSAT-1",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "INSAT-4A",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "2005-12-22",
    launchVehicle: "Ariane 5",
    mass: "3081 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Insat-4a.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/INSAT-4A",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "CARTOSAT-2",
    orbitType: "LEO",
    status: "inactive",
    launchDate: "2007-01-10",
    launchVehicle: "PSLV-C7",
    mass: "680 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Cartosat-2.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/CARTOSAT-2",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "INSAT-4B",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "2007-03-12",
    launchVehicle: "Ariane 5",
    mass: "3025 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Insat-4b.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/INSAT-4B",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "INSAT-4CR",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "2007-09-02",
    launchVehicle: "GSLV-F04",
    mass: "2130 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Insat-4cr.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/INSAT-4CR",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "CARTOSAT-2A",
    orbitType: "LEO",
    status: "active",
    launchDate: "2008-04-28",
    launchVehicle: "PSLV-C9",
    mass: "690 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Cartosat-2a.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/CARTOSAT-2A",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "Chandrayaan-1",
    orbitType: "HEO",
    status: "inactive",
    launchDate: "2008-10-22",
    launchVehicle: "PSLV-C11",
    mass: "1380 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Chandrayaan-1_Artist_Impression.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Chandrayaan-1",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "RISAT-2",
    orbitType: "LEO",
    status: "inactive",
    launchDate: "2009-04-20",
    launchVehicle: "PSLV-C12",
    mass: "300 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Risat-2.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/RISAT-2",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "OCEANSAT-2",
    orbitType: "LEO",
    status: "inactive",
    launchDate: "2009-09-23",
    launchVehicle: "PSLV-C14",
    mass: "960 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Oceansat-2.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/OCEANSAT-2",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "GSAT-4",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "2010-04-15",
    launchVehicle: "GSLV-D3",
    mass: "2220 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT4/GSAT4.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-4",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "CARTOSAT-2B",
    orbitType: "LEO",
    status: "inactive",
    launchDate: "2010-07-12",
    launchVehicle: "PSLV-C15",
    mass: "694 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Cartosat-2b.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/CARTOSAT-2B",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "GSAT-5P",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "2010-12-25",
    launchVehicle: "GSLV-F06",
    mass: "2310 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT5P/GSAT5P.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-5P",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "GSAT-8",
    orbitType: "GEO",
    status: "active",
    launchDate: "2011-05-21",
    launchVehicle: "Ariane 5",
    mass: "3093 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table,
    image: "https://www.isro.gov.in/media_isro/mission/GSAT8/GSAT8.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-8",
    altitude: 35786,
    tle1: "1 37605U 11022A   26101.85044681  .00000088  00000+0  00000+0 0  9997", // Needs separate update if propagation required,
    tle2: "2 37605   1.9585  82.6069 0005360 225.0904 253.6027  1.00271856 52550",
    noradId: 37605,
  },
  {
    name: "GSAT-12",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "2011-07-15",
    launchVehicle: "PSLV-C17",
    mass: "1410 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT12/GSAT12.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-12",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "Megha-Tropiques",
    orbitType: "LEO",
    status: "inactive",
    launchDate: "2011-10-12",
    launchVehicle: "PSLV-C18",
    mass: "1000 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Megha-Tropiques.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Megha-Tropiques",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "RISAT-1",
    orbitType: "LEO",
    status: "inactive",
    launchDate: "2012-04-26",
    launchVehicle: "PSLV-C19",
    mass: "1858 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Risat-1.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/RISAT-1",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "GSAT-10",
    orbitType: "GEO",
    status: "active",
    launchDate: "2012-09-29",
    launchVehicle: "Ariane 5",
    mass: "3400 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table,
    image: "https://www.isro.gov.in/media_isro/mission/GSAT10/GSAT10.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-10",
    altitude: 35786,
    tle1: "1 38779U 12051B   26101.89359648 -.00000163  00000+0  00000+0 0  9994", // Needs separate update if propagation required,
    tle2: "2 38779   0.0657 265.2392 0006599 174.5955 164.9708  1.00272239 49439",
    noradId: 38779,
  },
  {
    name: "SARAL",
    noradId: 39086,
    orbitType: "LEO",
    status: "active",
    launchDate: "2013-02-25",
    launchVehicle: "PSLV-C20",
    mass: "407 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Saral_satellite.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/SARAL",
    altitude: 500,
    tle1: "1 39086U 13009A   26101.91087213  .00000073  00000+0  42700-4 0  9996", // Needs separate update if propagation required
    tle2: "2 39086  98.5567 289.3133 0002912 109.1749 250.9750 14.32839828686110"
  },
  {
    name: "IRNSS-1A",
    orbitType: "GSO",
    status: "inactive",
    launchDate: "2013-07-01",
    launchVehicle: "PSLV-C22",
    mass: "1425 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/IRNSS1A/IRNSS1A.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/IRNSS-1A",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "INSAT-3D",
    noradId: 39216,
    orbitType: "GEO",
    status: "active",
    launchDate: "2013-07-26",
    launchVehicle: "Ariane 5",
    mass: "2060 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Insat-3d.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/INSAT-3D",
    altitude: 35786,
    tle1: "1 39216U 13038B   26101.90286986 -.00000336  00000+0  00000+0 0  9995", // Needs separate update if propagation required
    tle2: "2 39216   1.7537  83.3568 0001344 264.4101 306.8995  1.00272654 46411"
  },
  {
    name: "GSAT-7",
    noradId: 39234,
    orbitType: "GEO",
    status: "active",
    launchDate: "2013-08-30",
    launchVehicle: "Ariane 5",
    mass: "2650 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT7/GSAT7.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-7",
    altitude: 35786,
    tle1: "1 39234U 13044B   26101.89186315 -.00000075  00000+0  00000+0 0  9995", // Needs separate update if propagation required
    tle2: "2 39234   0.0536  84.5795 0004915 217.1474 293.4435  1.00271703 44593"
  },
  {
    name: "Mars Orbiter Mission",
    orbitType: "HEO",
    status: "inactive",
    launchDate: "2013-11-05",
    launchVehicle: "PSLV-C25",
    mass: "1337 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Mars_Orbiter_Mission_rendering.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Mars_Orbiter_Mission",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "GSAT-14",
    noradId: 39498,
    orbitType: "GEO",
    status: "active",
    launchDate: "2014-01-05",
    launchVehicle: "GSLV-D5",
    mass: "1982 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT14/GSAT14.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-14",
    altitude: 35786,
    tle1: "1 39498U 14001A   26101.89186315 -.00000075  00000+0  00000+0 0  9991", // Needs separate update if propagation required
    tle2: "2 39498   0.0006 174.5791 0002641 147.7526 272.8498  1.00271449 44714"
  },
  {
    name: "IRNSS-1B",
    orbitType: "GSO",
    status: "active",
    launchDate: "2014-04-04",
    launchVehicle: "PSLV-C24",
    mass: "1432 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table,
    image: "https://www.isro.gov.in/media_isro/mission/IRNSS1B/IRNSS1B.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/IRNSS-1B",
    altitude: 35786,
    tle1: "1 39635U 14017A   26101.46036174  .00000100  00000+0  00000+0 0  9999", // Needs separate update if propagation required,
    tle2: "2 39635  29.0414 241.5454 0023029 180.5081 358.3760  1.00267997 44126",
    noradId: 39635,
  },
  {
    name: "IRNSS-1C",
    orbitType: "GEO",
    status: "active",
    launchDate: "2014-10-16",
    launchVehicle: "PSLV-C26",
    mass: "1425 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table,
    image: "https://www.isro.gov.in/media_isro/mission/IRNSS1C/IRNSS1C.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/IRNSS-1C",
    altitude: 35786,
    tle1: "1 40269U 14061A   26101.89368315 -.00000155  00000+0  00000+0 0  9996", // Needs separate update if propagation required,
    tle2: "2 40269   6.3487  90.1951 0021097 356.7195 157.9680  1.00271979 42021",
    noradId: 40269,
  },
  {
    name: "GSAT-16",
    orbitType: "GEO",
    status: "active",
    launchDate: "2014-12-07",
    launchVehicle: "Ariane 5",
    mass: "3181 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table,
    image: "https://www.isro.gov.in/media_isro/mission/GSAT16/GSAT16.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-16",
    altitude: 35786,
    tle1: "1 40332U 14078A   26101.88813646  .00000086  00000+0  00000+0 0  9998", // Needs separate update if propagation required,
    tle2: "2 40332   0.0777  82.1765 0006717 352.0622 140.6756  1.00273766 41449",
    noradId: 40332,
  },
  {
    name: "IRNSS-1D",
    noradId: 40547,
    orbitType: "GSO",
    status: "active",
    launchDate: "2015-03-28",
    launchVehicle: "PSLV-C27",
    mass: "1425 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/IRNSS1D/IRNSS1D.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/IRNSS-1D",
    altitude: 35786,
    tle1: "1 40547U 15018A   26101.65848354 -.00000142  00000+0  00000+0 0  9994", // Needs separate update if propagation required
    tle2: "2 40547  19.7085 240.1975 0007758 355.4681 176.6621  0.97959688 40250"
  },
  {
    name: "GSAT-6",
    noradId: 40880,
    orbitType: "GEO",
    status: "active",
    launchDate: "2015-08-27",
    launchVehicle: "GSLV-D6",
    mass: "2117 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT6/GSAT6.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-6",
    altitude: 35786,
    tle1: "1 40880U 15041A   26101.89993392 -.00000156  00000+0  00000+0 0  9994", // Needs separate update if propagation required
    tle2: "2 40880   1.7486  83.3986 0003110 306.4050 216.7594  1.00269137 38934"
  },
  {
    name: "ASTROSAT",
    orbitType: "LEO",
    status: "active",
    launchDate: "2015-09-28",
    launchVehicle: "PSLV-C30",
    mass: "1513 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table,
    image: "https://en.wikipedia.org/wiki/File:Astrosat_Artist_Impression.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/ASTROSAT",
    altitude: 500,
    tle1: "1 40930U 15052A   26098.39318762  .00001881  00000+0  14763-3 0  9994", // Needs separate update if propagation required,
    tle2: "2 40930   5.9974 297.6975 0007381 120.2801 239.8057 14.82383411 56945",
    noradId: 40930,
  },
  {
    name: "GSAT-15",
    orbitType: "GEO",
    status: "active",
    launchDate: "2015-11-11",
    launchVehicle: "Ariane 5",
    mass: "3164 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table,
    image: "https://www.isro.gov.in/media_isro/mission/GSAT15/GSAT15.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-15",
    altitude: 35786,
    tle1: "1 41028U 15065A   26101.89567649 -.00000256  00000+0  00000+0 0  9998", // Needs separate update if propagation required,
    tle2: "2 41028   0.0135 139.2736 0003033 272.2777 204.5145  1.00273127 38139",
    noradId: 41028,
  },
  {
    name: "IRNSS-1E",
    noradId: 41241,
    orbitType: "GSO",
    status: "active",
    launchDate: "2016-01-20",
    launchVehicle: "PSLV-C31",
    mass: "1425 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/IRNSS1E/IRNSS1E.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/IRNSS-1E",
    altitude: 35786,
    tle1: "1 41241U 16003A   26097.89014760 -.00000287  00000+0  00000+0 0  9997", // Needs separate update if propagation required
    tle2: "2 41241  33.0851  60.7613 0016820 186.1026  21.5213  1.00270489 37373"
  },
  {
    name: "IRNSS-1F",
    orbitType: "GEO",
    status: "active",
    launchDate: "2016-03-10",
    launchVehicle: "PSLV-C32",
    mass: "1425 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table,
    image: "https://www.isro.gov.in/media_isro/mission/IRNSS1F/IRNSS1F.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/IRNSS-1F",
    altitude: 35786,
    tle1: "1 41384U 16015A   26101.74095616  .00000164  00000+0  00000+0 0  9990", // Needs separate update if propagation required,
    tle2: "2 41384   5.1814  98.3203 0017595 190.6615 210.2431  1.00266863 37006",
    noradId: 41384,
  },
  {
    name: "IRNSS-1G",
    noradId: 41469,
    orbitType: "GSO",
    status: "active",
    launchDate: "2016-04-28",
    launchVehicle: "PSLV-C33",
    mass: "1425 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/IRNSS1G/IRNSS1G.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/IRNSS-1G",
    altitude: 35786,
    tle1: "1 41469U 16027A   26101.90278319 -.00000329  00000+0  00000+0 0  9992", // Needs separate update if propagation required
    tle2: "2 41469   5.0321  99.0394 0006059 333.0684 222.4556  1.00266970 36510"
  },
  {
    name: "CARTOSAT-2C",
    noradId: 41599,
    orbitType: "LEO",
    status: "active",
    launchDate: "2016-06-22",
    launchVehicle: "PSLV-C34",
    mass: "727 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/CARTOSAT2_Series/CARTOSAT2_Series.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/CARTOSAT-2C",
    altitude: 500,
    tle1: "1 41599U 16040A   26101.93304551  .00002732  00000+0  13266-3 0  9993", // Needs separate update if propagation required
    tle2: "2 41599  97.4545 162.7991 0009358  13.2871 346.8608 15.19272967543653"
  },
  {
    name: "INSAT-3DR",
    noradId: 41752,
    orbitType: "GEO",
    status: "active",
    launchDate: "2016-09-08",
    launchVehicle: "GSLV-F05",
    mass: "2211 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/INSAT3DR/INSAT3DR.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/INSAT-3DR",
    altitude: 35786,
    tle1: "1 41752U 16054A   26101.89186315 -.00000076  00000+0  00000+0 0  9998", // Needs separate update if propagation required
    tle2: "2 41752   0.0761  85.3757 0011753 196.3817 313.4408  1.00271896 35153"
  },
  {
    name: "SCATSAT-1",
    orbitType: "LEO",
    status: "active",
    launchDate: "2016-09-26",
    launchVehicle: "PSLV-C35",
    mass: "371 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Scatsat-1.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/SCATSAT-1",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "GSAT-18",
    noradId: 41793,
    orbitType: "GEO",
    status: "active",
    launchDate: "2016-10-06",
    launchVehicle: "Ariane 5",
    mass: "3404 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT18/GSAT18.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-18",
    altitude: 35786,
    tle1: "1 41793U 16060A   26101.89186315 -.00000075  00000+0  00000+0 0  9999", // Needs separate update if propagation required
    tle2: "2 41793   0.0346  86.9634 0004930 325.6859 182.5106  1.00272948 34866"
  },
  {
    name: "RESOURCESAT-2A",
    noradId: 41877,
    orbitType: "LEO",
    status: "active",
    launchDate: "2016-12-07",
    launchVehicle: "PSLV-C36",
    mass: "1235 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/RESOURCESAT2A/RESOURCESAT2A.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/RESOURCESAT-2A",
    altitude: 500,
    tle1: "1 41877U 16074A   26101.91130610 -.00000021  00000+0  10630-4 0  9993", // Needs separate update if propagation required
    tle2: "2 41877  98.7548 175.9491 0000992 269.6400  90.4663 14.21613369484889"
  },
  {
    name: "CARTOSAT-2D",
    orbitType: "LEO",
    status: "active",
    launchDate: "2017-02-15",
    launchVehicle: "PSLV-C37",
    mass: "714 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/CARTOSAT2_Series/CARTOSAT2_Series.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/CARTOSAT-2D",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "GSAT-9 (South Asia Satellite)",
    orbitType: "GEO",
    status: "active",
    launchDate: "2017-05-05",
    launchVehicle: "GSLV-F09",
    mass: "2230 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT9/GSAT9.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-9_(South_Asia_Satellite)",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "GSAT-19",
    noradId: 42747,
    orbitType: "GEO",
    status: "active",
    launchDate: "2017-06-05",
    launchVehicle: "GSLV-Mk III-D1",
    mass: "3136 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT19/GSAT19.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-19",
    altitude: 35786,
    tle1: "1 42747U 17031A   26101.90206758  .00000127  00000+0  00000+0 0  9991", // Needs separate update if propagation required
    tle2: "2 42747   0.0432 255.6953 0006861 142.8314 174.1695  1.00273538 32483"
  },
  {
    name: "CARTOSAT-2E",
    noradId: 42767,
    orbitType: "LEO",
    status: "active",
    launchDate: "2017-06-23",
    launchVehicle: "PSLV-C38",
    mass: "712 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/CARTOSAT2_Series/CARTOSAT2_Series.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/CARTOSAT-2E",
    altitude: 500,
    tle1: "1 42767U 17036C   26101.91737229 -.00000436  00000+0 -17514-4 0  9999", // Needs separate update if propagation required
    tle2: "2 42767  97.4337 162.7894 0003326 158.5952 201.5422 15.19214219488086"
  },
  {
    name: "GSAT-17",
    orbitType: "GEO",
    status: "active",
    launchDate: "2017-06-29",
    launchVehicle: "Ariane 5",
    mass: "3477 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT17/GSAT17.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-17",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "IRNSS-1H",
    orbitType: "GSO",
    status: "inactive",
    launchDate: "2017-08-31",
    launchVehicle: "PSLV-C39",
    mass: "1425 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/IRNSS1H/IRNSS1H.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/IRNSS-1H",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "CARTOSAT-2F",
    orbitType: "LEO",
    status: "active",
    launchDate: "2018-01-12",
    launchVehicle: "PSLV-C40",
    mass: "710 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table,
    image: "https://www.isro.gov.in/media_isro/mission/CARTOSAT2_Series/CARTOSAT2_Series.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/CARTOSAT-2F",
    altitude: 500,
    tle1: "1 43111U 18004A   26101.94916122  .00002452  00000+0  11940-3 0  9997", // Needs separate update if propagation required,
    tle2: "2 43111  97.4100 162.4961 0002438 120.5264 239.6212 15.19295369457279",
    noradId: 43111,
  },
  {
    name: "GSAT-6A",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "2018-03-29",
    launchVehicle: "GSLV-F08",
    mass: "2140 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT6A/GSAT6A.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-6A",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "IRNSS-1I",
    noradId: 43286,
    orbitType: "GSO",
    status: "active",
    launchDate: "2018-04-12",
    launchVehicle: "PSLV-C41",
    mass: "1425 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/IRNSS1I/IRNSS1I.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/IRNSS-1I",
    altitude: 35786,
    tle1: "1 43286U 18035A   26096.01016933  .00000091  00000+0  00000+0 0  9994", // Needs separate update if propagation required
    tle2: "2 43286  29.0088  75.3074 0018340 190.0927 347.8119  1.00279620 29351"
  },
  {
    name: "GSAT-29",
    noradId: 43698,
    orbitType: "GEO",
    status: "active",
    launchDate: "2018-11-14",
    launchVehicle: "GSLV-Mk III-D2",
    mass: "3423 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT29/GSAT29.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-29",
    altitude: 35786,
    tle1: "1 43698U 18089A   26101.88813646  .00000087  00000+0  00000+0 0  9993", // Needs separate update if propagation required
    tle2: "2 43698   0.0534  74.7190 0002638 312.6827 187.5074  1.00270364 27127"
  },
  {
    name: "HySIS",
    noradId: 43719,
    orbitType: "LEO",
    status: "active",
    launchDate: "2018-11-29",
    launchVehicle: "PSLV-C43",
    mass: "380 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Hysis_satellite.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/HySIS",
    altitude: 500,
    tle1: "1 43719U 18096A   26101.96232012  .00001163  00000+0  16580-3 0  9996", // Needs separate update if propagation required
    tle2: "2 43719  97.9883 169.2144 0001272  65.4019 294.7325 14.78646548397637"
  },
  {
    name: "GSAT-11",
    orbitType: "GEO",
    status: "active",
    launchDate: "2018-12-05",
    launchVehicle: "Ariane 5",
    mass: "5854 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT11/GSAT11.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-11",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "GSAT-7A",
    noradId: 43864,
    orbitType: "GEO",
    status: "active",
    launchDate: "2018-12-19",
    launchVehicle: "GSLV-F11",
    mass: "2250 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT7A/GSAT7A.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-7A",
    altitude: 35786,
    tle1: "1 43864U 18105A   26101.92963922  .00000028  00000+0  00000+0 0  9990", // Needs separate update if propagation required
    tle2: "2 43864   0.0134 264.4779 0002288 123.2166 209.9349  1.00271642 26787"
  },
  {
    name: "Microsat-R",
    orbitType: "LEO",
    status: "inactive",
    launchDate: "2019-01-24",
    launchVehicle: "PSLV-C44",
    mass: "740 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Microsat-R.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Microsat-R",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "GSAT-31",
    orbitType: "GEO",
    status: "active",
    launchDate: "2019-02-06",
    launchVehicle: "Ariane 5",
    mass: "2536 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table,
    image: "https://www.isro.gov.in/media_isro/mission/GSAT31/GSAT31.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-31",
    altitude: 35786,
    tle1: "1 44035U 19007B   26101.90226875  .00000127  00000+0  00000+0 0  9990", // Needs separate update if propagation required,
    tle2: "2 44035   0.0708 260.3900 0003966  76.4761 235.9249  1.00273026 26304",
    noradId: 44035,
  },
  {
    name: "EMISAT",
    noradId: 44078,
    orbitType: "LEO",
    status: "active",
    launchDate: "2019-04-01",
    launchVehicle: "PSLV-C45",
    mass: "436 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Emisat.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/EMISAT",
    altitude: 500,
    tle1: "1 44078U 19018A   26101.95517536  .00000088  00000+0  38927-4 0  9991", // Needs separate update if propagation required
    tle2: "2 44078  98.4708 161.1001 0019631  59.5582 300.7544 14.43644953370506"
  },
  {
    name: "RISAT-2B",
    orbitType: "LEO",
    status: "active",
    launchDate: "2019-05-22",
    launchVehicle: "PSLV-C46",
    mass: "615 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table,
    image: "https://www.isro.gov.in/media_isro/mission/RISAT2B/RISAT2B.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/RISAT-2B",
    altitude: 500,
    tle1: "1 44233U 19028A   26101.91711856  .00002545  00000+0  20015-3 0  9990", // Needs separate update if propagation required,
    tle2: "2 44233  36.9981  27.0431 0005948 231.2835 128.7376 15.01304302377865",
    noradId: 44233,
  },
  {
    name: "Chandrayaan-2",
    orbitType: "HEO",
    status: "active/inactive",
    launchDate: "2019-07-22",
    launchVehicle: "GSLV-Mk III-M1",
    mass: "3850 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Chandrayaan-2_Artist_Impression.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Chandrayaan-2",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "CARTOSAT-3",
    noradId: 44804,
    orbitType: "LEO",
    status: "active",
    launchDate: "2019-11-27",
    launchVehicle: "PSLV-C47",
    mass: "1625 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/CARTOSAT3/CARTOSAT3.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/CARTOSAT-3",
    altitude: 500,
    tle1: "1 44804U 19081A   26101.89835792  .00003583  00000+0  17311-3 0  9994", // Needs separate update if propagation required
    tle2: "2 44804  97.4365 164.8101 0012588  28.9586 331.2345 15.19210272353405"
  },
  {
    name: "RISAT-2BR1",
    noradId: 44857,
    orbitType: "LEO",
    status: "active",
    launchDate: "2019-12-11",
    launchVehicle: "PSLV-C48",
    mass: "628 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/RISAT2BR1/RISAT2BR1.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/RISAT-2BR1",
    altitude: 500,
    tle1: "1 44857U 19089F   26101.58634722  .00002805  00000+0  21968-3 0  9995", // Needs separate update if propagation required
    tle2: "2 44857  36.9596 146.7213 0011969 345.9795  14.0614 15.01303875347182"
  },
  {
    name: "GSAT-30",
    orbitType: "GEO",
    status: "active",
    launchDate: "2020-01-16",
    launchVehicle: "Ariane 5",
    mass: "3357 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table,
    image: "https://www.isro.gov.in/media_isro/mission/GSAT30/GSAT30.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-30",
    altitude: 35786,
    tle1: "1 45026U 20005A   26101.89359648 -.00000163  00000+0  00000+0 0  9995", // Needs separate update if propagation required,
    tle2: "2 45026   0.0129 231.3134 0002362 189.5530 183.9405  1.00273441 22840",
    noradId: 45026,
  },
  {
    name: "EOS-01",
    orbitType: "LEO",
    status: "active",
    launchDate: "2020-11-07",
    launchVehicle: "PSLV-C49",
    mass: "630 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/EOS01/EOS01.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/EOS-01",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "CMS-01",
    orbitType: "GEO",
    status: "active",
    launchDate: "2020-12-17",
    launchVehicle: "PSLV-C50",
    mass: "1410 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table,
    image: "https://www.isro.gov.in/media_isro/mission/CMS01/CMS01.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/CMS-01",
    altitude: 35786,
    tle1: "1 47256U 20099A   26101.89359648 -.00000163  00000+0  00000+0 0  9995", // Needs separate update if propagation required,
    tle2: "2 47256   0.0256 123.5779 0005204 173.7562 307.4616  1.00272768 19533",
    noradId: 47256,
  },
  {
    name: "EOS-03 (GISAT-1)",
    orbitType: "GEO",
    status: "inactive",
    launchDate: "2021-08-12",
    launchVehicle: "GSLV-F10",
    mass: "2268 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GISAT1/GISAT1.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/EOS-03_(GISAT-1)",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "EOS-04",
    orbitType: "LEO",
    status: "active",
    launchDate: "2022-02-14",
    launchVehicle: "PSLV-C52",
    mass: "1710 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table,
    image: "https://www.isro.gov.in/media_isro/mission/EOS04/EOS04.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/EOS-04",
    altitude: 500,
    tle1: "1 51656U 22013A   26101.95135137  .00002415  00000+0  14153-3 0  9993", // Needs separate update if propagation required,
    tle2: "2 51656  97.5145 109.6067 0001870  99.2563 260.8880 15.12731350229479",
    noradId: 51656,
  },
  {
    name: "EOS-02",
    orbitType: "LEO",
    status: "inactive",
    launchDate: "2022-08-07",
    launchVehicle: "SSLV-D1",
    mass: "135 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/EOS02/EOS02.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/EOS-02",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "EOS-06",
    orbitType: "LEO",
    status: "active",
    launchDate: "2022-11-26",
    launchVehicle: "PSLV-C54",
    mass: "1117 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table,
    image: "https://www.isro.gov.in/media_isro/mission/EOS06/EOS06.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/EOS-06",
    altitude: 500,
    tle1: "1 54361U 22158A   26101.91797616  .00000212  00000+0  70352-4 0  9998", // Needs separate update if propagation required,
    tle2: "2 54361  98.3487 201.0071 0001922 126.8933 233.2436 14.46987791178259",
    noradId: 54361,
  },
  {
    name: "EOS-07",
    orbitType: "LEO",
    status: "active",
    launchDate: "2023-02-10",
    launchVehicle: "SSLV-D2",
    mass: "156.3 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/EOS07/EOS07.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/EOS-07",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "NVS-01",
    orbitType: "GSO",
    status: "active",
    launchDate: "2023-05-29",
    launchVehicle: "GSLV-F12",
    mass: "2232 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table,
    image: "https://www.isro.gov.in/media_isro/mission/NVS01/NVS01.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/NVS-01",
    altitude: 35786,
    tle1: "1 56759U 23076A   26101.90286986 -.00000337  00000+0  00000+0 0  9990", // Needs separate update if propagation required,
    tle2: "2 56759   2.3259 247.1781 0005629  49.9722 357.5087  1.00276112 10455",
    noradId: 56759,
  },
  {
    name: "Chandrayaan-3",
    orbitType: "HEO",
    status: "inactive",
    launchDate: "2023-07-14",
    launchVehicle: "LVM3-M4",
    mass: "3900 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/Chandrayaan3/Chandrayaan3.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Chandrayaan-3",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "Aditya-L1",
    orbitType: "HEO",
    status: "active",
    launchDate: "2023-09-02",
    launchVehicle: "PSLV-C57",
    mass: "1475 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/AdityaL1/AdityaL1.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Aditya-L1",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "XPoSat",
    orbitType: "LEO",
    status: "active",
    launchDate: "2024-01-01",
    launchVehicle: "PSLV-C58",
    mass: "469 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table,
    image: "https://www.isro.gov.in/media_isro/mission/XPoSat/XPoSat.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/XPoSat",
    altitude: 500,
    tle1: "1 58694U 24001A   26076.76662780  .00001916  00000+0  16662-3 0  9992", // Needs separate update if propagation required,
    tle2: "2 58694   5.9863 122.0275 0009787 264.8772  95.0238 14.79082282119462",
    noradId: 58694,
  },
  {
    name: "INSAT-3DS",
    orbitType: "GEO",
    status: "active",
    launchDate: "2024-02-17",
    launchVehicle: "GSLV-F14",
    mass: "2275 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/INSAT3DS/INSAT3DS.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/INSAT-3DS",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "ANUSAT",
    orbitType: "LEO",
    status: "inactive",
    launchDate: "2009-04-20",
    launchVehicle: "PSLV-C12",
    mass: "40 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Anusat.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/ANUSAT",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "STUDSAT",
    orbitType: "LEO",
    status: "inactive",
    launchDate: "2010-07-12",
    launchVehicle: "PSLV-C15",
    mass: "1 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Studsat.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/STUDSAT",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "SRMSAT",
    orbitType: "LEO",
    status: "active",
    launchDate: "2011-10-12",
    launchVehicle: "PSLV-C18",
    mass: "10.9 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Srmsat.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/SRMSAT",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "Jugnu",
    orbitType: "LEO",
    status: "active",
    launchDate: "2011-10-12",
    launchVehicle: "PSLV-C18",
    mass: "3 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Jugnu_satellite.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Jugnu",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "Swayam",
    orbitType: "LEO",
    status: "active",
    launchDate: "2016-06-22",
    launchVehicle: "PSLV-C34",
    mass: "1 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Swayam_satellite.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Swayam",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "Sathyabamasat",
    orbitType: "LEO",
    status: "active",
    launchDate: "2016-06-22",
    launchVehicle: "PSLV-C34",
    mass: "1.5 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Sathyabamasat.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Sathyabamasat",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "PISAT",
    orbitType: "LEO",
    status: "active",
    launchDate: "2016-09-26",
    launchVehicle: "PSLV-C35",
    mass: "5.25 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Pisat.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/PISAT",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "NIUSAT",
    orbitType: "LEO",
    status: "active",
    launchDate: "2017-06-23",
    launchVehicle: "PSLV-C38",
    mass: "15 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Niusat.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/NIUSAT",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "ExseedSat-1",
    orbitType: "LEO",
    status: "active",
    launchDate: "2018-12-05",
    launchVehicle: "SpaceX",
    mass: "1 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Exseedsat-1.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/ExseedSat-1",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "Kalamsat-V2",
    orbitType: "LEO",
    status: "inactive",
    launchDate: "2019-01-24",
    launchVehicle: "PSLV-C44",
    mass: "1.2 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Kalamsat-v2.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Kalamsat-V2",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "UnitySat",
    orbitType: "LEO",
    status: "active",
    launchDate: "2021-02-28",
    launchVehicle: "PSLV-C51",
    mass: "1.1 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Unitysat.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/UnitySat",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "Satish Dhawan SAT (SDSAT)",
    orbitType: "LEO",
    status: "active",
    launchDate: "2021-02-28",
    launchVehicle: "PSLV-C51",
    mass: "1.9 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Sdsat.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/Satish_Dhawan_SAT_(SDSAT)",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "INS-2TD",
    orbitType: "LEO",
    status: "active",
    launchDate: "2022-02-14",
    launchVehicle: "PSLV-C52",
    mass: "17.5 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/INS2TD/INS2TD.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/INS-2TD",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "INSPIREsat-1",
    orbitType: "LEO",
    status: "active",
    launchDate: "2022-02-14",
    launchVehicle: "PSLV-C52",
    mass: "8.1 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Inspiresat-1.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/INSPIREsat-1",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "INS-2B",
    orbitType: "LEO",
    status: "active",
    launchDate: "2022-11-26",
    launchVehicle: "PSLV-C54",
    mass: "18.2 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/INS2B/INS2B.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/INS-2B",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "AzaadiSAT-2",
    orbitType: "LEO",
    status: "active",
    launchDate: "2023-02-10",
    launchVehicle: "SSLV-D2",
    mass: "8.7 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Azaadisat.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/AzaadiSAT-2",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "NISAR",
    noradId: 65053,
    orbitType: "SSO",
    status: "active",
    launchDate: "2025-07-30",
    launchVehicle: "GSLV-F16",
    mass: "2393 kg",
    purpose: "Earth Observation (Dual-Band SAR — L-band & S-band)",
    image: "https://en.wikipedia.org/wiki/Special:FilePath/NISAR_satellite.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/NISAR_(satellite)",
    altitude: 747,
    inclination: 98.4,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
];