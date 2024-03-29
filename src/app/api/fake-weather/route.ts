import { NextResponse } from "next/server";

export const fetchCache = 'force-no-store'

export async function GET() {
//  declare global {
//     interface Array<T> {
//         random(o: T): T[];
//     }
// }
//   Array.prototype.random = function (o) {
//     return this[Math.floor(Math.random() * this.length)];
//   };
  const randomSel = (arr: any[]) => {
    return arr[Math.floor(Math.random() * arr.length)]
  }
  const windSpeed = () => {
    let sample: number[] = [];
    while(sample.length < 10) {
        sample.push(Math.min(Number((Math.random() * 110).toFixed(2))))
        console.log(sample)
    }
    return Math.min(...sample);
  }
  const temp = Math.random() * (110 - -23 + -23);
  const high = temp + Math.random() * 20;
  const low = temp - Math.random() * 20;
  const name = [
    "Aberdeen",
    "Abilene",
    "Akron",
    "Albany",
    "Albuquerque",
    "Alexandria",
    "Allentown",
    "Amarillo",
    "Anaheim",
    "Anchorage",
    "Ann Arbor",
    "Antioch",
    "Apple Valley",
    "Appleton",
    "Arlington",
    "Arvada",
    "Asheville",
    "Athens",
    "Atlanta",
    "Atlantic City",
    "Augusta",
    "Aurora",
    "Austin",
    "Bakersfield",
    "Baltimore",
    "Barnstable",
    "Baton Rouge",
    "Beaumont",
    "Bel Air",
    "Bellevue",
    "Berkeley",
    "Bethlehem",
    "Billings",
    "Birmingham",
    "Bloomington",
    "Boise",
    "Boise City",
    "Bonita Springs",
    "Boston",
    "Boulder",
    "Bradenton",
    "Bremerton",
    "Bridgeport",
    "Brighton",
    "Brownsville",
    "Bryan",
    "Buffalo",
    "Burbank",
    "Burlington",
    "Cambridge",
    "Canton",
    "Cape Coral",
    "Carrollton",
    "Cary",
    "Cathedral City",
    "Cedar Rapids",
    "Chandler",
    "Charleston",
    "Charlotte",
    "Chattanooga",
    "Chesapeake",
    "Chicago",
    "Chula Vista",
    "Cincinnati",
    "Clarke County",
    "Clarksville",
    "Clearwater",
    "Cleveland",
    "College Station",
    "Colorado Springs",
    "Columbia",
    "Columbus",
    "Concord",
    "Coral Springs",
    "Corona",
    "Corpus Christi",
    "Costa Mesa",
    "Dallas",
    "Daly City",
    "Danbury",
    "Davenport",
    "Davidson County",
    "Dayton",
    "Daytona Beach",
    "Deltona",
    "Denton",
    "Denver",
    "Des Moines",
    "Detroit",
    "Downey",
    "Duluth",
    "Durham",
    "El Monte",
    "El Paso",
    "Elizabeth",
    "Elk Grove",
    "Elkhart",
    "Erie",
    "Escondido",
    "Eugene",
    "Evansville",
    "Fairfield",
    "Fargo",
    "Fayetteville",
    "Fitchburg",
    "Flint",
    "Fontana",
    "Fort Collins",
    "Fort Lauderdale",
    "Fort Smith",
    "Fort Walton Beach",
    "Fort Wayne",
    "Fort Worth",
    "Frederick",
    "Fremont",
    "Fresno",
    "Fullerton",
    "Gainesville",
    "Garden Grove",
    "Garland",
    "Gastonia",
    "Gilbert",
    "Glendale",
    "Grand Prairie",
    "Grand Rapids",
    "Grayslake",
    "Green Bay",
    "GreenBay",
    "Greensboro",
    "Greenville",
    "Gulfport-Biloxi",
    "Hagerstown",
    "Hampton",
    "Harlingen",
    "Harrisburg",
    "Hartford",
    "Havre de Grace",
    "Hayward",
    "Hemet",
    "Henderson",
    "Hesperia",
    "Hialeah",
    "Hickory",
    "High Point",
    "Hollywood",
    "Honolulu",
    "Houma",
    "Houston",
    "Howell",
    "Huntington",
    "Huntington Beach",
    "Huntsville",
    "Independence",
    "Indianapolis",
    "Inglewood",
    "Irvine",
    "Irving",
    "Jackson",
    "Jacksonville",
    "Jefferson",
    "Jersey City",
    "Johnson City",
    "Joliet",
    "Kailua",
    "Kalamazoo",
    "Kaneohe",
    "Kansas City",
    "Kennewick",
    "Kenosha",
    "Killeen",
    "Kissimmee",
    "Knoxville",
    "Lacey",
    "Lafayette",
    "Lake Charles",
    "Lakeland",
    "Lakewood",
    "Lancaster",
    "Lansing",
    "Laredo",
    "Las Cruces",
    "Las Vegas",
    "Layton",
    "Leominster",
    "Lewisville",
    "Lexington",
    "Lincoln",
    "Little Rock",
    "Long Beach",
    "Lorain",
    "Los Angeles",
    "Louisville",
    "Lowell",
    "Lubbock",
    "Macon",
    "Madison",
    "Manchester",
    "Marina",
    "Marysville",
    "McAllen",
    "McHenry",
    "Medford",
    "Melbourne",
    "Memphis",
    "Merced",
    "Mesa",
    "Mesquite",
    "Miami",
    "Milwaukee",
    "Minneapolis",
    "Miramar",
    "Mission Viejo",
    "Mobile",
    "Modesto",
    "Monroe",
    "Monterey",
    "Montgomery",
    "Moreno Valley",
    "Murfreesboro",
    "Murrieta",
    "Muskegon",
    "Myrtle Beach",
    "Naperville",
    "Naples",
    "Nashua",
    "Nashville",
    "New Bedford",
    "New Haven",
    "New London",
    "New Orleans",
    "New York",
    "New York City",
    "Newark",
    "Newburgh",
    "Newport News",
    "Norfolk",
    "Normal",
    "Norman",
    "North Charleston",
    "North Las Vegas",
    "North Port",
    "Norwalk",
    "Norwich",
    "Oakland",
    "Ocala",
    "Oceanside",
    "Odessa",
    "Ogden",
    "Oklahoma City",
    "Olathe",
    "Olympia",
    "Omaha",
    "Ontario",
    "Orange",
    "Orem",
    "Orlando",
    "Overland Park",
    "Oxnard",
    "Palm Bay",
    "Palm Springs",
    "Palmdale",
    "Panama City",
    "Pasadena",
    "Paterson",
    "Pembroke Pines",
    "Pensacola",
    "Peoria",
    "Philadelphia",
    "Phoenix",
    "Pittsburgh",
    "Plano",
    "Pomona",
    "Pompano Beach",
    "Port Arthur",
    "Port Orange",
    "Port Saint Lucie",
    "Port St. Lucie",
    "Portland",
    "Portsmouth",
    "Poughkeepsie",
    "Providence",
    "Provo",
    "Pueblo",
    "Punta Gorda",
    "Racine",
    "Raleigh",
    "Rancho Cucamonga",
    "Reading",
    "Redding",
    "Reno",
    "Richland",
    "Richmond",
    "Richmond County",
    "Riverside",
    "Roanoke",
    "Rochester",
    "Rockford",
    "Roseville",
    "Round Lake Beach",
    "Sacramento",
    "Saginaw",
    "Saint Louis",
    "Saint Paul",
    "Saint Petersburg",
    "Salem",
    "Salinas",
    "Salt Lake City",
    "San Antonio",
    "San Bernardino",
    "San Buenaventura",
    "San Diego",
    "San Francisco",
    "San Jose",
    "Santa Ana",
    "Santa Barbara",
    "Santa Clara",
    "Santa Clarita",
    "Santa Cruz",
    "Santa Maria",
    "Santa Rosa",
    "Sarasota",
    "Savannah",
    "Scottsdale",
    "Scranton",
    "Seaside",
    "Seattle",
    "Sebastian",
    "Shreveport",
    "Simi Valley",
    "Sioux City",
    "Sioux Falls",
    "South Bend",
    "South Lyon",
    "Spartanburg",
    "Spokane",
    "Springdale",
    "Springfield",
    "St. Louis",
    "St. Paul",
    "St. Petersburg",
    "Stamford",
    "Sterling Heights",
    "Stockton",
    "Sunnyvale",
    "Syracuse",
    "Tacoma",
    "Tallahassee",
    "Tampa",
    "Temecula",
    "Tempe",
    "Thornton",
    "Thousand Oaks",
    "Toledo",
    "Topeka",
    "Torrance",
    "Trenton",
    "Tucson",
    "Tulsa",
    "Tuscaloosa",
    "Tyler",
    "Utica",
    "Vallejo",
    "Vancouver",
    "Vero Beach",
    "Victorville",
    "Virginia Beach",
    "Visalia",
    "Waco",
    "Warren",
    "Washington",
    "Waterbury",
    "Waterloo",
    "West Covina",
    "West Valley City",
    "Westminster",
    "Wichita",
    "Wilmington",
    "Winston",
    "Winter Haven",
    "Worcester",
    "Yakima",
    "Yonkers",
    "York",
    "Youngstown",
  ];

  let newName = randomSel(name);

  const weather = [
    {
      id: 801,
      main: "Clouds",
      description: "few clouds",
      icon: "02d",
    },
    {
      id: 501,
      main: "Rain",
      description: "moderate rain",
      icon: "10d",
    },
    {
      id: 503,
      main: "Rain",
      description: "very heavy rain",
      icon: "10d",
    },
    {
      id: 511,
      main: "Rain",
      description: "freezing rain",
      icon: "13d",
    },
    {
      id: 201,
      main: "Thunderstorm",
      description: "thunderstorm with rain",
      icon: "11d",
    },
    {
      id: 301,
      main: "Drizzle",
      description: "drizzle",
      icon: "09d",
    },
    {
      id: 602,
      main: "Snow",
      description: "heavy snow",
      icon: "13d",
    },
    {
      id: 762,
      main: "Ash",
      description: "volcanic ash",
      icon: "50d",
    },
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01d",
    },
  ];
  const data = {
    weather: randomSel(weather),
    base: "stations",
    main: {
      temp: Number(temp.toFixed(2)),
      temp_min: Number(low.toFixed(2)),
      temp_max: Number(high.toFixed(2)),
      pressure: 1018,
      humidity: 37,
    },
    visibility: 10000,
    wind: {
      speed: Number(`${windSpeed()}`),
      deg: Number((Math.random() * 360).toFixed(2)),
    },
    clouds: {
      all: 20,
    },
    dt: 1700161927,
    sys: {
      type: 2,
      id: 2016635,
      country: "US",
      sunrise: 1700137178,
      sunset: 1700173559,
    },
    timezone: -18000,
    id: 0,
    name: `${newName}`,
    cod: 200,
  };

  return NextResponse.json({ data });
}
