import RandomGeolocation from "./random.js";


// Iso codes and countries. 
// Used to get country name from country code after data is gotten from reverse_geocoder
var isoCountries = {
    'AF' : 'Afghanistan',
    'AX' : 'Aland Islands',
    'AL' : 'Albania',
    'DZ' : 'Algeria',
    'AS' : 'American Samoa',
    'AD' : 'Andorra',
    'AO' : 'Angola',
    'AI' : 'Anguilla',
    'AQ' : 'Antarctica',
    'AG' : 'Antigua And Barbuda',
    'AR' : 'Argentina',
    'AM' : 'Armenia',
    'AW' : 'Aruba',
    'AU' : 'Australia',
    'AT' : 'Austria',
    'AZ' : 'Azerbaijan',
    'BS' : 'Bahamas',
    'BH' : 'Bahrain',
    'BD' : 'Bangladesh',
    'BB' : 'Barbados',
    'BY' : 'Belarus',
    'BE' : 'Belgium',
    'BZ' : 'Belize',
    'BJ' : 'Benin',
    'BM' : 'Bermuda',
    'BT' : 'Bhutan',
    'BO' : 'Bolivia',
    'BA' : 'Bosnia And Herzegovina',
    'BW' : 'Botswana',
    'BV' : 'Bouvet Island',
    'BR' : 'Brazil',
    'IO' : 'British Indian Ocean Territory',
    'BN' : 'Brunei Darussalam',
    'BG' : 'Bulgaria',
    'BF' : 'Burkina Faso',
    'BI' : 'Burundi',
    'KH' : 'Cambodia',
    'CM' : 'Cameroon',
    'CA' : 'Canada',
    'CV' : 'Cape Verde',
    'KY' : 'Cayman Islands',
    'CF' : 'Central African Republic',
    'TD' : 'Chad',
    'CL' : 'Chile',
    'CN' : 'China',
    'CX' : 'Christmas Island',
    'CC' : 'Cocos (Keeling) Islands',
    'CO' : 'Colombia',
    'KM' : 'Comoros',
    'CG' : 'Congo',
    'CD' : 'Congo, Democratic Republic',
    'CK' : 'Cook Islands',
    'CR' : 'Costa Rica',
    'CI' : 'Cote D\'Ivoire',
    'HR' : 'Croatia',
    'CU' : 'Cuba',
    'CY' : 'Cyprus',
    'CZ' : 'Czech Republic',
    'DK' : 'Denmark',
    'DJ' : 'Djibouti',
    'DM' : 'Dominica',
    'DO' : 'Dominican Republic',
    'EC' : 'Ecuador',
    'EG' : 'Egypt',
    'SV' : 'El Salvador',
    'GQ' : 'Equatorial Guinea',
    'ER' : 'Eritrea',
    'EE' : 'Estonia',
    'ET' : 'Ethiopia',
    'FK' : 'Falkland Islands (Malvinas)',
    'FO' : 'Faroe Islands',
    'FJ' : 'Fiji',
    'FI' : 'Finland',
    'FR' : 'France',
    'GF' : 'French Guiana',
    'PF' : 'French Polynesia',
    'TF' : 'French Southern Territories',
    'GA' : 'Gabon',
    'GM' : 'Gambia',
    'GE' : 'Georgia',
    'DE' : 'Germany',
    'GH' : 'Ghana',
    'GI' : 'Gibraltar',
    'GR' : 'Greece',
    'GL' : 'Greenland',
    'GD' : 'Grenada',
    'GP' : 'Guadeloupe',
    'GU' : 'Guam',
    'GT' : 'Guatemala',
    'GG' : 'Guernsey',
    'GN' : 'Guinea',
    'GW' : 'Guinea-Bissau',
    'GY' : 'Guyana',
    'HT' : 'Haiti',
    'HM' : 'Heard Island & Mcdonald Islands',
    'VA' : 'Holy See (Vatican City State)',
    'HN' : 'Honduras',
    'HK' : 'Hong Kong',
    'HU' : 'Hungary',
    'IS' : 'Iceland',
    'IN' : 'India',
    'ID' : 'Indonesia',
    'IR' : 'Iran, Islamic Republic Of',
    'IQ' : 'Iraq',
    'IE' : 'Ireland',
    'IM' : 'Isle Of Man',
    'IL' : 'Israel',
    'IT' : 'Italy',
    'JM' : 'Jamaica',
    'JP' : 'Japan',
    'JE' : 'Jersey',
    'JO' : 'Jordan',
    'KZ' : 'Kazakhstan',
    'KE' : 'Kenya',
    'KI' : 'Kiribati',
    'KR' : 'Korea',
    'KW' : 'Kuwait',
    'KG' : 'Kyrgyzstan',
    'LA' : 'Lao People\'s Democratic Republic',
    'LV' : 'Latvia',
    'LB' : 'Lebanon',
    'LS' : 'Lesotho',
    'LR' : 'Liberia',
    'LY' : 'Libyan Arab Jamahiriya',
    'LI' : 'Liechtenstein',
    'LT' : 'Lithuania',
    'LU' : 'Luxembourg',
    'MO' : 'Macao',
    'MK' : 'Macedonia',
    'MG' : 'Madagascar',
    'MW' : 'Malawi',
    'MY' : 'Malaysia',
    'MV' : 'Maldives',
    'ML' : 'Mali',
    'MT' : 'Malta',
    'MH' : 'Marshall Islands',
    'MQ' : 'Martinique',
    'MR' : 'Mauritania',
    'MU' : 'Mauritius',
    'YT' : 'Mayotte',
    'MX' : 'Mexico',
    'FM' : 'Micronesia, Federated States Of',
    'MD' : 'Moldova',
    'MC' : 'Monaco',
    'MN' : 'Mongolia',
    'ME' : 'Montenegro',
    'MS' : 'Montserrat',
    'MA' : 'Morocco',
    'MZ' : 'Mozambique',
    'MM' : 'Myanmar',
    'NA' : 'Namibia',
    'NR' : 'Nauru',
    'NP' : 'Nepal',
    'NL' : 'Netherlands',
    'AN' : 'Netherlands Antilles',
    'NC' : 'New Caledonia',
    'NZ' : 'New Zealand',
    'NI' : 'Nicaragua',
    'NE' : 'Niger',
    'NG' : 'Nigeria',
    'NU' : 'Niue',
    'NF' : 'Norfolk Island',
    'MP' : 'Northern Mariana Islands',
    'NO' : 'Norway',
    'OM' : 'Oman',
    'PK' : 'Pakistan',
    'PW' : 'Palau',
    'PS' : 'Palestinian Territory, Occupied',
    'PA' : 'Panama',
    'PG' : 'Papua New Guinea',
    'PY' : 'Paraguay',
    'PE' : 'Peru',
    'PH' : 'Philippines',
    'PN' : 'Pitcairn',
    'PL' : 'Poland',
    'PT' : 'Portugal',
    'PR' : 'Puerto Rico',
    'QA' : 'Qatar',
    'RE' : 'Reunion',
    'RO' : 'Romania',
    'RU' : 'Russian Federation',
    'RW' : 'Rwanda',
    'BL' : 'Saint Barthelemy',
    'SH' : 'Saint Helena',
    'KN' : 'Saint Kitts And Nevis',
    'LC' : 'Saint Lucia',
    'MF' : 'Saint Martin',
    'PM' : 'Saint Pierre And Miquelon',
    'VC' : 'Saint Vincent And Grenadines',
    'WS' : 'Samoa',
    'SM' : 'San Marino',
    'ST' : 'Sao Tome And Principe',
    'SA' : 'Saudi Arabia',
    'SN' : 'Senegal',
    'RS' : 'Serbia',
    'SC' : 'Seychelles',
    'SL' : 'Sierra Leone',
    'SG' : 'Singapore',
    'SK' : 'Slovakia',
    'SI' : 'Slovenia',
    'SB' : 'Solomon Islands',
    'SO' : 'Somalia',
    'ZA' : 'South Africa',
    'GS' : 'South Georgia And Sandwich Isl.',
    'ES' : 'Spain',
    'LK' : 'Sri Lanka',
    'SD' : 'Sudan',
    'SR' : 'Suriname',
    'SJ' : 'Svalbard And Jan Mayen',
    'SZ' : 'Swaziland',
    'SE' : 'Sweden',
    'CH' : 'Switzerland',
    'SY' : 'Syrian Arab Republic',
    'TW' : 'Taiwan',
    'TJ' : 'Tajikistan',
    'TZ' : 'Tanzania',
    'TH' : 'Thailand',
    'TL' : 'Timor-Leste',
    'TG' : 'Togo',
    'TK' : 'Tokelau',
    'TO' : 'Tonga',
    'TT' : 'Trinidad And Tobago',
    'TN' : 'Tunisia',
    'TR' : 'Turkey',
    'TM' : 'Turkmenistan',
    'TC' : 'Turks And Caicos Islands',
    'TV' : 'Tuvalu',
    'UG' : 'Uganda',
    'UA' : 'Ukraine',
    'AE' : 'United Arab Emirates',
    'GB' : 'United Kingdom',
    'US' : 'United States',
    'UM' : 'United States Outlying Islands',
    'UY' : 'Uruguay',
    'UZ' : 'Uzbekistan',
    'VU' : 'Vanuatu',
    'VE' : 'Venezuela',
    'VN' : 'Viet Nam',
    'VG' : 'Virgin Islands, British',
    'VI' : 'Virgin Islands, U.S.',
    'WF' : 'Wallis And Futuna',
    'EH' : 'Western Sahara',
    'YE' : 'Yemen',
    'ZM' : 'Zambia',
    'ZW' : 'Zimbabwe'
};

      function getCountryName(countryCode) {
       if (isoCountries.hasOwnProperty(countryCode)) {
        return isoCountries[countryCode];
       } else {
        return countryCode;
       }
     }

let getRandomPosition = function () {
  var latlng = RandomGeolocation.randomLatlng();
  return latlng;
};

/* Call the function as soon as the page loads */

// window.onload = myLocation;

function myLocation() {
  // Ensure the browser supports the geolocation API
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, showError, options);
  } else {
    // Show error is browser does not support
    alert("Sorry your browser does not support geolocation");
  }
}

var options = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 0
};

/*
function showLocation(position) {
  // Get logitude and latitude
  let crd = position.coords;
  var latitude = crd.latitude;
  var longitude = crd.longitude;
  let currentCoordinates = {
    curLat : latitude,
    curLong : longitude
  }
  currentLoc.innerHTML = `You're at latitude ${latitude} and longitude ${longitude}`;

  var distanceInKm = calcDistance(position.coords, randPos);
  var distanceElement = document.getElementById("distance");
  distanceElement.innerHTML =
    "You are " + distanceInKm + " km from given location";
    
}
*/

// Posible errors
function showError(error) {
  let possibleErrors = {
    0: "Unknown error",
    1: "Permission denied by user",
    2: "Position not available",
    3: "Request timed out"
  };
  let errorMsg = possibleErrors[error.code];
  if (error.code == 0 || error.code == 2) {
    errorMsg = errorMsg + " " + error.message;
  }
  // Display error message
  currentLoc.innerHTML = errorMsg;
}

 myLocation();
    
    

// Distance between two locations
function calcDistance(startCoords, destinationCoords) {
  var startLatRads = degreesToRadians(startCoords.latitude);
  var startLongRads = degreesToRadians(startCoords.longitude);
  var destinationLatRads = degreesToRadians(destinationCoords.latitude);
  var destinationLongRads = degreesToRadians(destinationCoords.longitude);

  var Radius = 6371; // radius of the earth in km

  var distance =
    Math.acos(
      Math.sin(startLatRads) * Math.sin(destinationLatRads) +
        Math.cos(startLatRads) *
          Math.cos(destinationLatRads) *
          Math.cos(startLongRads - destinationLongRads)
    ) * Radius;

  return distance;
}

// Convert from degrees to radians
function degreesToRadians(degrees) {
  var radians = (degrees * Math.PI) / 180;
  return radians;
}


var currentLoc = document.getElementById("current-location");
var cLat = document.getElementById("current-lat");
var cLong = document.getElementById("current-long");
var cArea = document.getElementById("current-area");
var dLat = document.getElementById("random-lat");
var dLong = document.getElementById("random-long");
var dArea = document.getElementById("random-area");
var randomLoc = document.getElementById("random-location");


function showLocation(position) {
  // Get logitude and latitude
  let crd = position.coords;
  var latitude = crd.latitude;
  var longitude = crd.longitude;
  
  let currentCoordinates = {
    lat : latitude,
    long : longitude
  }
  
  async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data)
  });
  let geoData = response.json();
  return geoData // parses JSON response into native JavaScript objects
}
// JSON.stringify(_data)
postData('/geo', currentCoordinates)
  .then(data => {
  // JSON data parsed by `data.json()` call
    // return city (admin2)
    let city = `${data.name} (${data.admin1}, ${getCountryName(data.cc)})`
    /*
    currentLoc.innerHTML = `You're at latitude ${latitude} and longitude ${longitude} - ${city}`;
    */
    cLat.innerHTML = latitude;
    cLong.innerHTML = longitude;
    cArea.innerHTML = city;
  });
      
}

// Show random location when page is loaded 
getRandLocation()

//Click button to generate new locations
document.getElementById("newloc").addEventListener("click", function() {
  getRandLocation();
}); 

function getRandLocation(){
let randPos = getRandomPosition();

let randomCoordinates = {
  lat: randPos.latitude,
  long: randPos.longitude
}

var loc = document.getElementById("loc");
let area = [];
async function postData1(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache', 
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data)
  });
  let geoData = response.json();
  return geoData // parses JSON response into native JavaScript objects
}
// JSON.stringify(_data)
postData1('/geo', randomCoordinates)
  .then(data => {   
    let city = `${data.name} (${data.admin1}, ${getCountryName(data.cc)})`
    /*
    randomLoc.innerHTML = `Random location is latitude ${randomCoordinates.lat} and longitude ${randomCoordinates.long} - ${city}`;
    */
    dLat.innerHTML = randomCoordinates.lat;
    dLong.innerHTML = randomCoordinates.long;
    dArea.innerHTML = city;
  });
 
  /*
  var distanceElement = document.getElementById("distance");
  distanceElement.innerHTML =
    "You are " + distanceInKm + " km from given location";
  */
}

document.getElementById("guessBtn").addEventListener("click", function() {
var guessVal = document.getElementById("guessVal");
var realVal = document.getElementById("actualVal");
var distanceInput = document.getElementById("distInput");
var newCLat = document.getElementById("current-lat");
var newCLong = document.getElementById("current-long");
var newDLat = document.getElementById("random-lat");
var newDLong = document.getElementById("random-long");
var accuracyText = document.getElementById("accuracy");
var remarkText = document.getElementById("remark");

  let currentCoordsFromHTML = {
    latitude: parseFloat(newCLat.innerHTML),
    longitude: parseFloat(newCLong.innerHTML)
  };
 
   let randomCoordsFromHTML = {
    latitude: parseFloat(newDLat.innerHTML),
    longitude: parseFloat(newDLong.innerHTML)
  }; 
  var distanceInKm = calcDistance(currentCoordsFromHTML, randomCoordsFromHTML);
  guessVal.innerHTML = distanceInput.value;
  realVal.innerHTML = distanceInKm;
  let valA = parseFloat(distanceInput.value);

  //let accuracy =  (distanceInKm - valA) / valA * 100;
  let diff = Math.abs(distanceInKm - valA);
  //console.log(accuracy);
  accuracyText.innerHTML = diff;

  if (diff <= (0/100) * distanceInKm || diff >= (100/100) * distanceInKm){
    remarkText.innerHTML = "Ooof. That's a bad guess. Better luck next time."
  }
  else if (diff <= (20/100) * distanceInKm || diff >= (120/100) * distanceInKm){
    remarkText.innerHTML = "Wow! Great guess. I bet you can't score higher than this ;)"
  }
  else if (diff <= (40/100) * distanceInKm || diff >= (140/100) * distanceInKm){
    remarkText.innerHTML = "Nice guess. Think you can do better? Go for it!"
  }
  else if (diff <= (70/100) * distanceInKm || diff >= (170/100) * distanceInKm){
    remarkText.innerHTML = "Meh. Not close enough. Try again."
  }
  distanceInput.value = "";
 getRandLocation();    
});



