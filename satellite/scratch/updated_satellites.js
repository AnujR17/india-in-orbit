const UPDATED_SATS = [
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
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT8/GSAT8.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-8",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
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
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT10/GSAT10.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-10",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "SARAL",
    orbitType: "LEO",
    status: "active",
    launchDate: "2013-02-25",
    launchVehicle: "PSLV-C20",
    mass: "407 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Saral_satellite.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/SARAL",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
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
    orbitType: "GEO",
    status: "active",
    launchDate: "2013-07-26",
    launchVehicle: "Ariane 5",
    mass: "2060 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Insat-3d.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/INSAT-3D",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "GSAT-7",
    orbitType: "GEO",
    status: "active",
    launchDate: "2013-08-30",
    launchVehicle: "Ariane 5",
    mass: "2650 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT7/GSAT7.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-7",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
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
    orbitType: "GEO",
    status: "active",
    launchDate: "2014-01-05",
    launchVehicle: "GSLV-D5",
    mass: "1982 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT14/GSAT14.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-14",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "IRNSS-1B",
    orbitType: "GSO",
    status: "active",
    launchDate: "2014-04-04",
    launchVehicle: "PSLV-C24",
    mass: "1432 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/IRNSS1B/IRNSS1B.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/IRNSS-1B",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "IRNSS-1C",
    orbitType: "GEO",
    status: "active",
    launchDate: "2014-10-16",
    launchVehicle: "PSLV-C26",
    mass: "1425 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/IRNSS1C/IRNSS1C.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/IRNSS-1C",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "GSAT-16",
    orbitType: "GEO",
    status: "active",
    launchDate: "2014-12-07",
    launchVehicle: "Ariane 5",
    mass: "3181 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT16/GSAT16.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-16",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "IRNSS-1D",
    orbitType: "GSO",
    status: "active",
    launchDate: "2015-03-28",
    launchVehicle: "PSLV-C27",
    mass: "1425 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/IRNSS1D/IRNSS1D.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/IRNSS-1D",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "GSAT-6",
    orbitType: "GEO",
    status: "active",
    launchDate: "2015-08-27",
    launchVehicle: "GSLV-D6",
    mass: "2117 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT6/GSAT6.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-6",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "ASTROSAT",
    orbitType: "LEO",
    status: "active",
    launchDate: "2015-09-28",
    launchVehicle: "PSLV-C30",
    mass: "1513 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Astrosat_Artist_Impression.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/ASTROSAT",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "GSAT-15",
    orbitType: "GEO",
    status: "active",
    launchDate: "2015-11-11",
    launchVehicle: "Ariane 5",
    mass: "3164 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT15/GSAT15.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-15",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "IRNSS-1E",
    orbitType: "GSO",
    status: "active",
    launchDate: "2016-01-20",
    launchVehicle: "PSLV-C31",
    mass: "1425 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/IRNSS1E/IRNSS1E.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/IRNSS-1E",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "IRNSS-1F",
    orbitType: "GEO",
    status: "active",
    launchDate: "2016-03-10",
    launchVehicle: "PSLV-C32",
    mass: "1425 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/IRNSS1F/IRNSS1F.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/IRNSS-1F",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "IRNSS-1G",
    orbitType: "GSO",
    status: "active",
    launchDate: "2016-04-28",
    launchVehicle: "PSLV-C33",
    mass: "1425 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/IRNSS1G/IRNSS1G.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/IRNSS-1G",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "CARTOSAT-2C",
    orbitType: "LEO",
    status: "active",
    launchDate: "2016-06-22",
    launchVehicle: "PSLV-C34",
    mass: "727 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/CARTOSAT2_Series/CARTOSAT2_Series.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/CARTOSAT-2C",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "INSAT-3DR",
    orbitType: "GEO",
    status: "active",
    launchDate: "2016-09-08",
    launchVehicle: "GSLV-F05",
    mass: "2211 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/INSAT3DR/INSAT3DR.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/INSAT-3DR",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
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
    orbitType: "GEO",
    status: "active",
    launchDate: "2016-10-06",
    launchVehicle: "Ariane 5",
    mass: "3404 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT18/GSAT18.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-18",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "RESOURCESAT-2A",
    orbitType: "LEO",
    status: "active",
    launchDate: "2016-12-07",
    launchVehicle: "PSLV-C36",
    mass: "1235 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/RESOURCESAT2A/RESOURCESAT2A.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/RESOURCESAT-2A",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
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
    orbitType: "GEO",
    status: "active",
    launchDate: "2017-06-05",
    launchVehicle: "GSLV-Mk III-D1",
    mass: "3136 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT19/GSAT19.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-19",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "CARTOSAT-2E",
    orbitType: "LEO",
    status: "active",
    launchDate: "2017-06-23",
    launchVehicle: "PSLV-C38",
    mass: "712 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/CARTOSAT2_Series/CARTOSAT2_Series.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/CARTOSAT-2E",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
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
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/CARTOSAT2_Series/CARTOSAT2_Series.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/CARTOSAT-2F",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
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
    orbitType: "GSO",
    status: "active",
    launchDate: "2018-04-12",
    launchVehicle: "PSLV-C41",
    mass: "1425 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/IRNSS1I/IRNSS1I.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/IRNSS-1I",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "GSAT-29",
    orbitType: "GEO",
    status: "active",
    launchDate: "2018-11-14",
    launchVehicle: "GSLV-Mk III-D2",
    mass: "3423 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT29/GSAT29.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-29",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "HySIS",
    orbitType: "LEO",
    status: "active",
    launchDate: "2018-11-29",
    launchVehicle: "PSLV-C43",
    mass: "380 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Hysis_satellite.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/HySIS",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
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
    orbitType: "GEO",
    status: "active",
    launchDate: "2018-12-19",
    launchVehicle: "GSLV-F11",
    mass: "2250 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT7A/GSAT7A.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-7A",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
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
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT31/GSAT31.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-31",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "EMISAT",
    orbitType: "LEO",
    status: "active",
    launchDate: "2019-04-01",
    launchVehicle: "PSLV-C45",
    mass: "436 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://en.wikipedia.org/wiki/File:Emisat.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/EMISAT",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "RISAT-2B",
    orbitType: "LEO",
    status: "active",
    launchDate: "2019-05-22",
    launchVehicle: "PSLV-C46",
    mass: "615 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/RISAT2B/RISAT2B.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/RISAT-2B",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
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
    orbitType: "LEO",
    status: "active",
    launchDate: "2019-11-27",
    launchVehicle: "PSLV-C47",
    mass: "1625 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/CARTOSAT3/CARTOSAT3.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/CARTOSAT-3",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "RISAT-2BR1",
    orbitType: "LEO",
    status: "active",
    launchDate: "2019-12-11",
    launchVehicle: "PSLV-C48",
    mass: "628 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/RISAT2BR1/RISAT2BR1.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/RISAT-2BR1",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
  },
  {
    name: "GSAT-30",
    orbitType: "GEO",
    status: "active",
    launchDate: "2020-01-16",
    launchVehicle: "Ariane 5",
    mass: "3357 kg",
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/GSAT30/GSAT30.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/GSAT-30",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
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
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/CMS01/CMS01.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/CMS-01",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
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
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/EOS04/EOS04.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/EOS-04",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
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
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/EOS06/EOS06.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/EOS-06",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
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
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/NVS01/NVS01.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/NVS-01",
    altitude: 35786,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
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
    purpose: "Research & Development", // Default if not detailed in simplified table
    image: "https://www.isro.gov.in/media_isro/mission/XPoSat/XPoSat.jpg",
    wikiUrl: "https://en.wikipedia.org/wiki/XPoSat",
    altitude: 500,
    tle1: "", // Needs separate update if propagation required
    tle2: ""
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
];
module.exports = UPDATED_SATS;