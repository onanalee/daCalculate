imageZoom("myimage", "myresult");

function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);
    result = document.getElementById(resultID);
    /* Create lens: */
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    /* Insert lens: */
    img.parentElement.insertBefore(lens, img);
    /* Calculate the ratio between result DIV and lens: */
    cx = 0.5 * (result.offsetWidth / lens.offsetWidth);
    cy = 0.5 * (result.offsetHeight / lens.offsetHeight);
    /* Set background properties for the result DIV */
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /* Execute a function when someone moves the cursor over the image, or the lens: */
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /* And also for touch screens: */
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);

    function moveLens(e) {
        var pos, x, y;
        /* Prevent any other actions that may occur when moving over the image */
        e.preventDefault();
        /* Get the cursor's x and y positions: */
        pos = getCursorPos(e);
        /* Calculate the position of the lens: */
        x = pos.x - (lens.offsetWidth / 2);
        y = pos.y - (lens.offsetHeight / 2);
        /* Prevent the lens from being positioned outside the image: */
        if (x > img.width - lens.offsetWidth) {
            x = img.width - lens.offsetWidth;
        }
        if (x < 0) {
            x = 0;
        }
        if (y > img.height - lens.offsetHeight) {
            y = img.height - lens.offsetHeight;
        }
        if (y < 0) {
            y = 0;
        }
        /* Set the position of the lens: */
        lens.style.left = x + "px";
        lens.style.top = y + "px";
        /* Display what the lens "sees": */
        result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }

    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;
        /* Get the x and y positions of the image: */
        a = img.getBoundingClientRect();
        /* Calculate the cursor's x and y coordinates, relative to the image: */
        x = e.pageX - a.left;
        y = e.pageY - a.top;
        /* Consider any page scrolling: */
        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return {x: x, y: y};
    }
}


let users = [
    "Africa/Abidjan",
    "Africa/Accra",
    "Africa/Addis_Ababa", "Addis Ababa",
    "Africa/Algiers",
    "Africa/Asmara",
    "Africa/Asmera",
    "Africa/Bamako",
    "Africa/Bangui",
    "Africa/Banjul",
    "Africa/Blantyre",
    "Africa/Brazzaville",
    "Africa/Bujumbura",
    "Africa/Cairo",
    "Africa/Casablanca",
    "Africa/Ceuta",
    "Africa/Conakry",
    "Africa/Dakar",
    "Africa/Dar_es_Salaam", "Dar es Salaam",
    "Africa/Djibouti",
    "Africa/Douala",
    "Africa/El_Aaiun", "El Aaiun",
    "Africa/Freetown",
    "Africa/Gaborone",
    "Africa/Harare",
    "Africa/Johannesburg",
    "Africa/Juba",
    "Africa/Kampala",
    "Africa/Khartoum",
    "Africa/Kigali",
    "Africa/Kinshasa",
    "Africa/Lagos",
    "Africa/Libreville",
    "Africa/Lome",
    "Africa/Luanda",
    "Africa/Lubumbashi",
    "Africa/Lusaka",
    "Africa/Malabo",
    "Africa/Maputo",
    "Africa/Maseru",
    "Africa/Mbabane",
    "Africa/Mogadishu",
    "Africa/Monrovia",
    "Africa/Nairobi",
    "Africa/Ndjamena",
    "Africa/Niamey",
    "Africa/Nouakchott",
    "Africa/Ouagadougou",
    "Africa/Porto-Novo",
    "Africa/Sao_Tome",
    "Africa/Timbuktu",
    "Africa/Tripoli",
    "Africa/Tunis",
    "Africa/Windhoek",
    "America/Adak",
    "America/Anchorage",
    "America/Anguilla",
    "America/Antigua",
    "America/Araguaina",
    "America/Argentina/Buenos_Aires", "Buenos Aires",
    "America/Argentina/Catamarca",
    "America/Argentina/ComodRivadavia",
    "America/Argentina/Cordoba",
    "America/Argentina/Jujuy",
    "America/Argentina/La_Rioja", "La Rioja",
    "America/Argentina/Mendoza",
    "America/Argentina/Rio_Gallegos", "Rio Gallegos",
    "America/Argentina/Salta",
    "America/Argentina/San_Juan", "San Juan",
    "America/Argentina/San_Luis", "San Luis",
    "America/Argentina/Tucuman",
    "America/Argentina/Ushuaia",
    "America/Aruba",
    "America/Asuncion",
    "America/Atikokan",
    "America/Atka",
    "America/Bahia",
    "America/Bahia_Banderas", "Bahia Banderas",
    "America/Barbados",
    "America/Belem",
    "America/Belize",
    "America/Blanc-Sablon", "Blanc Sablon",
    "America/Boa_Vista",
    "America/Bogota",
    "America/Boise",
    "America/Buenos_Aires",
    "America/Cambridge_Bay", "Cambridge Bay",
    "America/Campo_Grande", "Campo Grande",
    "America/Cancun",
    "America/Caracas",
    "America/Catamarca",
    "America/Cayenne",
    "America/Cayman",
    "America/Chicago",
    "America/Chihuahua",
    "America/Coral_Harbour",
    "America/Cordoba",
    "America/Costa_Rica",
    "America/Creston",
    "America/Cuiaba",
    "America/Curacao",
    "America/Danmarkshavn",
    "America/Dawson",
    "America/Dawson_Creek",
    "America/Denver",
    "America/Detroit",
    "America/Dominica",
    "America/Edmonton",
    "America/Eirunepe",
    "America/El_Salvador", "El Salvador",
    "America/Ensenada",
    "America/Fort_Wayne", "Fort Wayne",
    "America/Fortaleza",
    "America/Glace_Bay",
    "America/Godthab",
    "America/Goose_Bay",
    "America/Grand_Turk",
    "America/Grenada",
    "America/Guadeloupe",
    "America/Guatemala",
    "America/Guayaquil",
    "America/Guyana",
    "America/Halifax",
    "America/Havana",
    "America/Hermosillo",
    "America/Indiana/Indianapolis",
    "America/Indiana/Knox",
    "America/Indiana/Marengo",
    "America/Indiana/Petersburg",
    "America/Indiana/Tell_City",
    "America/Indiana/Valparaiso",
    "America/Indiana/Vevay",
    "America/Indiana/Vincennes",
    "America/Indiana/Winamac",
    "America/Indianapolis",
    "America/Inuvik",
    "America/Iqaluit",
    "America/Jamaica",
    "America/Jujuy",
    "America/Juneau",
    "America/Kentucky/Louisville",
    "America/Kentucky/Monticello",
    "America/Knox_IN",
    "America/Kralendijk",
    "America/La_Paz", "La Paz",
    "America/Lima",
    "America/Los_Angeles", "Los Angeles",
    "America/Louisville",
    "America/Lower_Princes", "Lower Princes",
    "America/Maceio",
    "America/Managua",
    "America/Manaus",
    "America/Marigot",
    "America/Martinique",
    "America/Matamoros",
    "America/Mazatlan",
    "America/Mendoza",
    "America/Menominee",
    "America/Merida",
    "America/Metlakatla",
    "America/Mexico_City", "Mexico City",
    "America/Miquelon",
    "America/Moncton",
    "America/Monterrey",
    "America/Montevideo",
    "America/Montreal",
    "America/Montserrat",
    "America/Nassau",
    "America/New_York", "New York",
    "America/Nipigon",
    "America/Nome",
    "America/Noronha",
    "America/North_Dakota/Beulah",
    "America/North_Dakota/Center",
    "America/North_Dakota/New_Salem",
    "America/Ojinaga",
    "America/Panama",
    "America/Pangnirtung",
    "America/Paramaribo",
    "America/Phoenix",
    "America/Port_of_Spain", "Port of Spain",
    "America/Port-au-Prince", "Port au Prince",
    "America/Porto_Acre",
    "America/Porto_Velho",
    "America/Puerto_Rico", "Puerto Rico",
    "America/Rainy_River",
    "America/Rankin_Inlet",
    "America/Recife",
    "America/Regina",
    "America/Resolute",
    "America/Rio_Branco", "Rio Branco",
    "America/Rosario",
    "America/Santa_Isabel",
    "America/Santarem",
    "America/Santiago",
    "America/Santo_Domingo",
    "America/Sao_Paulo", "Sao Paulo",
    "America/Scoresbysund",
    "America/Shiprock",
    "America/Sitka",
    "America/St_Barthelemy",
    "America/St_Johns",
    "America/St_Kitts",
    "America/St_Lucia",
    "America/St_Thomas",
    "America/St_Vincent",
    "America/Swift_Current",
    "America/Tegucigalpa",
    "America/Thule",
    "America/Thunder_Bay",
    "America/Tijuana",
    "America/Toronto",
    "America/Tortola",
    "America/Vancouver",
    "America/Virgin",
    "America/Whitehorse",
    "America/Winnipeg",
    "America/Yakutat",
    "America/Yellowknife",
    "Antarctica/Casey",
    "Antarctica/Davis",
    "Antarctica/DumontDUrville",
    "Antarctica/Macquarie",
    "Antarctica/Mawson",
    "Antarctica/McMurdo",
    "Antarctica/Palmer",
    "Antarctica/Rothera",
    "Antarctica/South_Pole", "South Pole",
    "Antarctica/Syowa",
    "Antarctica/Troll",
    "Antarctica/Vostok",
    "Arctic/Longyearbyen",
    "Asia/Aden",
    "Asia/Almaty",
    "Asia/Amman",
    "Asia/Anadyr",
    "Asia/Aqtau",
    "Asia/Aqtobe",
    "Asia/Ashgabat",
    "Asia/Ashkhabad",
    "Asia/Baghdad",
    "Asia/Bahrain",
    "Asia/Baku",
    "Asia/Bangkok",
    "Asia/Beirut",
    "Asia/Bishkek",
    "Asia/Brunei",
    "Asia/Calcutta",
    "Asia/Choibalsan",
    "Asia/Chongqing",
    "Asia/Chungking",
    "Asia/Colombo",
    "Asia/Dacca",
    "Asia/Damascus",
    "Asia/Dhaka",
    "Asia/Dili",
    "Asia/Dubai",
    "Asia/Dushanbe",
    "Asia/Gaza",
    "Asia/Harbin",
    "Asia/Hebron",
    "Asia/Ho_Chi_Minh", "Ho Chi Minh",
    "Asia/Hong_Kong", "Hongkong", "Hong Kong", "Macau", "Mongolia", "Taiwan", "Brunei", "Central Indonesia", "Malaysia", "Philippines",
    "Asia/Hovd",
    "Asia/Irkutsk",
    "Asia/Istanbul",
    "Asia/Jakarta",
    "Asia/Jayapura",
    "Asia/Jerusalem",
    "Asia/Kabul",
    "Asia/Kamchatka",
    "Asia/Karachi",
    "Asia/Kashgar",
    "Asia/Kathmandu",
    "Asia/Katmandu",
    "Asia/Khandyga",
    "Asia/Kolkata",
    "Asia/Krasnoyarsk",
    "Asia/Kuala_Lumpur",
    "Asia/Kuching",
    "Asia/Kuwait",
    "Asia/Macao",
    "Asia/Macau",
    "Asia/Magadan",
    "Asia/Makassar",
    "Asia/Manila",
    "Asia/Muscat",
    "Asia/Nicosia",
    "Asia/Novokuznetsk",
    "Asia/Novosibirsk",
    "Asia/Omsk",
    "Asia/Oral",
    "Asia/Phnom_Penh", "Phnom Penh",
    "Asia/Pontianak",
    "Asia/Pyongyang",
    "Asia/Qatar",
    "Asia/Qyzylorda",
    "Asia/Rangoon",
    "Asia/Riyadh",
    "Asia/Saigon",
    "Asia/Sakhalin",
    "Asia/Samarkand",
    "Asia/Seoul",
    "Asia/Shanghai",
    "Asia/Singapore",
    "Asia/Taipei",
    "Asia/Tashkent",
    "Asia/Tbilisi",
    "Asia/Tehran",
    "Asia/Tel_Aviv", "Tel Aviv",
    "Asia/Thimbu",
    "Asia/Thimphu",
    "Asia/Tokyo",
    "Asia/Ujung_Pandang",
    "Asia/Ulaanbaatar",
    "Asia/Ulan_Bator",
    "Asia/Urumqi",
    "Asia/Ust-Nera",
    "Asia/Vientiane",
    "Asia/Vladivostok",
    "Asia/Yakutsk",
    "Asia/Yekaterinburg",
    "Asia/Yerevan",
    "Atlantic/Azores",
    "Atlantic/Bermuda",
    "Atlantic/Canary",
    "Atlantic/Cape_Verde",
    "Atlantic/Faeroe",
    "Atlantic/Faroe",
    "Atlantic/Jan_Mayen",
    "Atlantic/Madeira",
    "Atlantic/Reykjavik",
    "Atlantic/South_Georgia",
    "Atlantic/St_Helena",
    "Atlantic/Stanley",
    "Australia/ACT",
    "Australia/Adelaide",
    "Australia/Brisbane",
    "Australia/Broken_Hill",
    "Australia/Canberra",
    "Australia/Currie",
    "Australia/Darwin",
    "Australia/Eucla",
    "Australia/Hobart",
    "Australia/LHI",
    "Australia/Lindeman",
    "Australia/Lord_Howe",
    "Australia/Melbourne",
    "Australia/North",
    "Australia/NSW",
    "Australia/Perth",
    "Australia/Queensland",
    "Australia/South",
    "Australia/Sydney",
    "Australia/Tasmania",
    "Australia/Victoria",
    "Australia/West",
    "Australia/Yancowinna",
    "Brazil/Acre",
    "Brazil/DeNoronha",
    "Brazil/East",
    "Brazil/West",
    "Canada/Atlantic",
    "Canada/Central",
    "Canada/Eastern",
    "Canada/East-Saskatchewan",
    "Canada/Mountain",
    "Canada/Newfoundland",
    "Canada/Pacific",
    "Canada/Saskatchewan",
    "Canada/Yukon",
    "Chile/Continental",
    "Chile/EasterIsland",
    "Cuba",
    "Egypt",
    "Etc/GMT",
    "Etc/UCT",
    "Etc/Universal",
    "Etc/Zulu",
    "Europe/Amsterdam",
    "Europe/Andorra",
    "Europe/Athens",
    "Europe/Belfast",
    "Europe/Belgrade",
    "Europe/Berlin",
    "Europe/Bratislava",
    "Europe/Brussels",
    "Europe/Bucharest",
    "Europe/Budapest",
    "Europe/Busingen",
    "Europe/Chisinau",
    "Europe/Copenhagen",
    "Europe/Dublin",
    "Europe/Gibraltar",
    "Europe/Guernsey",
    "Europe/Helsinki",
    "Europe/Isle_of_Man", "Isle of Man",
    "Europe/Istanbul",
    "Europe/Jersey",
    "Europe/Kaliningrad",
    "Europe/Kiev",
    "Europe/Lisbon",
    "Europe/Ljubljana",
    "Europe/London",
    "Europe/Luxembourg",
    "Europe/Madrid",
    "Europe/Malta",
    "Europe/Mariehamn",
    "Europe/Minsk",
    "Europe/Monaco",
    "Europe/Moscow",
    "Europe/Nicosia",
    "Europe/Oslo",
    "Europe/Paris",
    "Europe/Podgorica",
    "Europe/Prague",
    "Europe/Riga",
    "Europe/Rome",
    "Europe/Samara",
    "Europe/San_Marino",
    "Europe/Sarajevo",
    "Europe/Simferopol",
    "Europe/Skopje",
    "Europe/Sofia",
    "Europe/Stockholm",
    "Europe/Tallinn",
    "Europe/Tirane",
    "Europe/Tiraspol",
    "Europe/Uzhgorod",
    "Europe/Vaduz",
    "Europe/Vatican",
    "Europe/Vienna",
    "Europe/Vilnius",
    "Europe/Volgograd",
    "Europe/Warsaw",
    "Europe/Zagreb",
    "Europe/Zaporozhye",
    "Europe/Zurich",
    "GMT",
    "GMT0",
    "Greenwich",
    "Indian/Antananarivo",
    "Indian/Chagos",
    "Indian/Christmas",
    "Indian/Cocos",
    "Indian/Comoro",
    "Indian/Kerguelen",
    "Indian/Mahe",
    "Indian/Maldives",
    "Indian/Mauritius",
    "Indian/Mayotte",
    "Indian/Reunion",
    "Iran",
    "Israel",
    "Japan",
    "Kwajalein",
    "Libya",
    "Mexico/BajaNorte",
    "Mexico/BajaSur",
    "Mexico/General",
    "Navajo",
    "Pacific/Apia",
    "Pacific/Auckland",
    "Pacific/Chatham",
    "Pacific/Chuuk",
    "Pacific/Easter",
    "Pacific/Efate",
    "Pacific/Enderbury",
    "Pacific/Fakaofo",
    "Pacific/Fiji",
    "Pacific/Funafuti",
    "Pacific/Galapagos",
    "Pacific/Gambier",
    "Pacific/Guadalcanal",
    "Pacific/Guam",
    "Pacific/Honolulu",
    "Pacific/Johnston",
    "Pacific/Kiritimati",
    "Pacific/Kosrae",
    "Pacific/Kwajalein",
    "Pacific/Majuro",
    "Pacific/Marquesas",
    "Pacific/Midway",
    "Pacific/Nauru",
    "Pacific/Niue",
    "Pacific/Norfolk",
    "Pacific/Noumea",
    "Pacific/Pago_Pago",
    "Pacific/Palau",
    "Pacific/Pitcairn",
    "Pacific/Pohnpei",
    "Pacific/Ponape",
    "Pacific/Port_Moresby", "Port Moresby",
    "Pacific/Rarotonga",
    "Pacific/Saipan",
    "Pacific/Samoa",
    "Pacific/Tahiti",
    "Pacific/Tarawa",
    "Pacific/Tongatapu",
    "Pacific/Truk",
    "Pacific/Wake",
    "Pacific/Wallis",
    "Pacific/Yap",
    "Poland",
    "Portugal",
    "Singapore",
    "Turkey", "Saudi Arabia", "Iraq", "Yemen", "Qatar", "Bahrain", "Kuwait",
    "US/Alaska",
    "US/Aleutian",
    "US/Arizona",
    "US/Central",
    "US/Eastern",
    "US/Hawaii",
    "US/Michigan",
    "US/Mountain",
    "US/Pacific",
    "US/Samoa",
    "UTC",
    "Zulu",
    "Austria",
    "Belgium", "Croatia", "Czech Republic", "Denmark", "France", "Germany", "Hungary", "Italy", "Netherlands", "Norway", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland",
    "Albania", "Andorra", "Bosnia", "Kosovo", "Luxembourg", "Monaco",
    "Botswana", "Burundi", "Malawi", "Mozambique", "Namibia", "Rwanda", "Sudan", "Zambia", "Zimbabwe", "Democratic Republic of the Congo (east)",
    "China",
    "Comoros", "Djibouti", "Eritrea", "Ethiopia", "Kenya", "Madagascar", "Somalia", "South Sudan", "Tanzania", "Uganda",
    "Algeria", "Angola", "Benin", "Cameroon", "Central African Republic", "Chad", "Democratic Republic of the Congo (west)", "Equatorial Guinea", "Gabon", "Morocco", "Niger", "Nigeria", "Republic of the Congo", "Tunisia", "Western Sahara",
    "Burkina Faso", "Gambia", "Ghana", "Guinea - Bissau", "Iceland", "Ivory Coast", "Liberia", "Mali", "Mauritania", "Saint Helena", "Ascension", "Tristan da Cunha", "Senegal", "Sierra Leone", "Togo",
    "Great Britain", "Britain", "United Kingdom", "Portugal", "UK", "England", "Wales", "Scotland", "Northern Ireland",
    "South Korea",
    "North Korea",
    "Armenia", "Azerbaijan", "Georgia", "Oman", "United Arab Emirates (UAE)", "Mauritius", "Seychelles",
    "Maldives", "Pakistan", "Uzbekistan", "Turkmenistan", "Tajikistan",
    "Kazakhstan", "Kyrgyzstan", "Bhutan", "Bangladesh",
    "Cambodia", "Western Indonesia", "Laos", "Thailand", "Vietnam",
    "Eastern Indonesia", "East Timor", "Palau",
    "Ireland", "Nepal"
];

//searchable select-option

let A = document.getElementById("users-listA");

var render_listsA = function (lists) {
    var li = "";
    for (index in lists) {
        li += "<option>" + lists[index] + "</option>";
    }
    A.innerHTML = li;
}

render_listsA(users);

// lets filters it
let inputA = document.getElementById('timezoneInputA');

var filterUsersA = function (event) {
    keyword = inputA.value.toLowerCase();
    filtered_usersA = users.filter(function (user) {
        user = user.toLowerCase();
        return user.indexOf(keyword) > -1;
    });

    render_listsA(filtered_usersA);
}

inputA.addEventListener('keyup', filterUsersA);


// $(document).ready(function () {
//     let local = spacetime().goto(null);
//     let final = local.unixFmt('yyyy.MM.dd h:mm a');
//     $('#timezoneA').text(final);
// })

function timezoneA() {
    let now = spacetime(new Date());
    let timezone = $("#users-listA option:selected").text();
    if (timezone === "Japan") {
        let time = now.goto("Asia/Tokyo");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else if (timezone === "South Korea" || timezone === "Eastern Indonesia" || timezone === "East Timor" || timezone === "Palau") {
        let time = now.goto("Asia/Seoul");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else if (timezone === "North Korea") {
        let time = now.goto("Asia/Pyongyang");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else if (timezone === "China") {
        let time = now.goto("Asia/Shanghai");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else if (timezone === "Cuba") {
        let time = now.goto("America/Havana");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else if (timezone === "Iran") {
        let time = now.goto("Asia/Tehran");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else if (timezone === "Greece") {
        let time = now.goto("Europe/Athens");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else if (timezone === "Nepal") {
        let time = now.goto("Asia/Kathmandu");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else if (timezone === "Austria" || timezone === "Belgium" || timezone === "Croatia" || timezone === "Czech Republic" || timezone === "Denmark" || timezone === "France" || timezone === "Germany" || timezone === "Hungary" || timezone === "Italy" || timezone === "Netherlands" || timezone === "Norway" || timezone === "Poland" || timezone === "Serbia" || timezone === "Slovakia" || timezone === "Slovenia" || timezone === "Spain" || timezone === "Sweden" || timezone === "Switzerland" || timezone === "Albania" || timezone === "Andorra" || timezone === "Bosnia" || timezone === "Kosovo" || timezone === "Luxembourg" || timezone === "Monaco") {
        let time = now.goto("Europe/Paris");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else if (timezone === "Comoros" || timezone === "Djibouti" || timezone === "Eritrea" || timezone === "Ethiopia" || timezone === "Kenya" || timezone === "Madagascar" || timezone === "South Sudan" || timezone === "Tanzania" || timezone === "Somalia" || timezone === "Uganda") {
        let time = now.goto("Europe/Moscow");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else if (timezone === "Algeria" || timezone === "Angola" || timezone === "Benin" || timezone === "Cameroon" || timezone === "Central African Republic" || timezone === "Chad" || timezone === "Democratic Republic of the Congo (west)" || timezone === "Equatorial Guinea" || timezone === "Gabon" || timezone === "Morocco" || timezone === "Niger" || timezone === "Nigeria" || timezone === "Republic of the Congo" || timezone === "Tunisia" || timezone === "Western Sahara") {
        let time = now.goto("Europe/Moscow");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else if (timezone === "Egypt" || timezone === "Libya") {
        let time = now.goto("Europe/Kaliningrad");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else if (timezone === "Botswana" || timezone === "Democratic Republic of the Congo (eest)" || timezone === "Burundi" || timezone === "Malawi" || timezone === "Mozambique" || timezone === "Namibia" || timezone === "Rwanda" || timezone === "Sudan" || timezone === "Zambia" || timezone === "Zimbabwe") {
        let time = now.goto("Africa/Gaborone");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return
    } else if (timezone === "Burkina Faso" || timezone === "Gambia" || timezone === "Ghana" || timezone === "Guinea - Bissau" || timezone === "Guinea" || timezone === "Iceland" || timezone === "Ivory Coast" || timezone === "Liberia" || timezone === "Mali" || timezone === "Mauritania" || timezone === "Saint Helena" || timezone === "Ascension" || timezone === "Tristan da Cunha" || timezone === "Senegal" || timezone === "Togo" || timezone === "Sierra Leone") {
        let time = now.goto("Etc/GMT");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return
    } else if (timezone === "Great Britain" || timezone === "Britain" || timezone === "United Kingdom" || timezone === "UK" || timezone === "Portugal" || timezone === "England" || timezone === "Scotland" || timezone === "Wales" || timezone === "Northern Ireland") {
        let time = now.goto("Europe/London");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return
    } else if (timezone === "Turkey") {
        let time = now.goto("Asia/Istanbul");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else if (timezone === "Ireland") {
        let time = now.goto("Europe/Belfast");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else if (timezone === "Israel") {
        let time = now.goto("Asia/Jerusalem");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else if (timezone === "Armenia" || timezone === "Azerbaijan" || timezone === "Georgia" || timezone === "Oman" || timezone === "United Arab Emirates (UAE)" || timezone === "Mauritius" || timezone === "Seychelles") {
        let time = now.goto("Asia/Tbilisi");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return
    } else if (timezone === "Saudi Arabia" || timezone === "Iraq" || timezone === "Yemen" || timezone === "Qatar" || timezone === "Bahrain" || timezone === "Kuwait") {
        let time = now.goto("Asia/Riyadh");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return
    } else if (timezone === "Maldives" || timezone === "Pakistan" || timezone === "Uzbekistan" || timezone === "Turkmenistan" || timezone === "Tajikistan") {
        let time = now.goto("Asia/Yekaterinburg");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return
    } else if (timezone === "Kazakhstan" || timezone === "Kyrgyzstan" || timezone === "Bhutan" || timezone === "Bangladesh") {
        let time = now.goto("Asia/Omsk");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return
    } else if (timezone === "Cambodia" || timezone === "Western Indonesia" || timezone === "Laos" || timezone === "Thailand" || timezone === "Vietnam") {
        let time = now.goto("Asia/Bangkok");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return
    } else if (timezone === "Hongkong" || timezone === "Hong Kong" || timezone === "Macau" || timezone === "Mongolia" || timezone === "Taiwan" || timezone === "Brunei" || timezone === "Central Indonesia" || timezone === "Malaysia" || timezone === "Philippines") {
        let time = now.goto("Asia/Singapore");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return
    } else if (timezone === "US/Alaska") {
        let time = now.goto("America/Anchorage");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else if (timezone === "US/Aleutian") {
        let time = now.goto("America/Adak");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else if (timezone === "US/Arizona") {
        let time = now.goto("America/Phoenix");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else if (timezone === "US/Central") {
        let time = now.goto("America/Chicago");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else if (timezone === "US/Eastern") {
        let time = now.goto("America/New_York");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else if (timezone === "US/Hawaii") {
        let time = now.goto("Pacific/Honolulu");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else if (timezone === "US/Michigan") {
        let time = now.goto("America/Detroit");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else if (timezone === "US/Mountain") {
        let time = now.goto("America/Denver");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else if (timezone === "US/Pacific") {
        let time = now.goto("America/Los_Angeles");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else if (timezone === "US/Samoa") {
        let time = now.goto("Pacific/Pago_Pago");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    } else {
        let time = now.goto(timezone);
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneA').text(final);
        return;
    }
}


//////////////////////////


let
    B = document.getElementById("users-listB");

var render_listsB = function (lists) {
    var li = "";
    for (index in lists) {
        li += "<option>" + lists[index] + "</option>";
    }
    B.innerHTML = li;
}

render_listsB(users);

// lets filters it
let inputB = document.getElementById('timezoneInputB');

var filterUsersB = function (event) {
    keyword = inputB.value.toLowerCase();
    filtered_usersB = users.filter(function (user) {
        user = user.toLowerCase();
        return user.indexOf(keyword) > -1;
    });

    render_listsB(filtered_usersB);
}

inputB.addEventListener('keyup', filterUsersB);

function timezoneB() {
    let now = spacetime(new Date());
    let timezone = $("#users-listB option:selected").text();
    if (timezone === "Japan") {
        let time = now.goto("Asia/Tokyo");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else if (timezone === "South Korea" || timezone === "Eastern Indonesia" || timezone === "East Timor" || timezone === "Palau") {
        let time = now.goto("Asia/Seoul");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else if (timezone === "North Korea") {
        let time = now.goto("Asia/Pyongyang");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else if (timezone === "China") {
        let time = now.goto("Asia/Shanghai");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else if (timezone === "Cuba") {
        let time = now.goto("America/Havana");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else if (timezone === "Iran") {
        let time = now.goto("Asia/Tehran");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else if (timezone === "Greece") {
        let time = now.goto("Europe/Athens");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else if (timezone === "Nepal") {
        let time = now.goto("Asia/Kathmandu");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else if (timezone === "Austria" || timezone === "Belgium" || timezone === "Croatia" || timezone === "Czech Republic" || timezone === "Denmark" || timezone === "France" || timezone === "Germany" || timezone === "Hungary" || timezone === "Italy" || timezone === "Netherlands" || timezone === "Norway" || timezone === "Poland" || timezone === "Serbia" || timezone === "Slovakia" || timezone === "Slovenia" || timezone === "Spain" || timezone === "Sweden" || timezone === "Switzerland" || timezone === "Albania" || timezone === "Andorra" || timezone === "Bosnia" || timezone === "Kosovo" || timezone === "Luxembourg" || timezone === "Monaco") {
        let time = now.goto("Europe/Paris");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else if (timezone === "Comoros" || timezone === "Djibouti" || timezone === "Eritrea" || timezone === "Ethiopia" || timezone === "Kenya" || timezone === "Madagascar" || timezone === "South Sudan" || timezone === "Tanzania" || timezone === "Somalia" || timezone === "Uganda") {
        let time = now.goto("Europe/Moscow");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else if (timezone === "Algeria" || timezone === "Angola" || timezone === "Benin" || timezone === "Cameroon" || timezone === "Central African Republic" || timezone === "Chad" || timezone === "Democratic Republic of the Congo (west)" || timezone === "Equatorial Guinea" || timezone === "Gabon" || timezone === "Morocco" || timezone === "Niger" || timezone === "Nigeria" || timezone === "Republic of the Congo" || timezone === "Tunisia" || timezone === "Western Sahara") {
        let time = now.goto("Europe/Moscow");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else if (timezone === "Egypt" || timezone === "Libya") {
        let time = now.goto("Europe/Kaliningrad");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else if (timezone === "Botswana" || timezone === "Democratic Republic of the Congo (eest)" || timezone === "Burundi" || timezone === "Malawi" || timezone === "Mozambique" || timezone === "Namibia" || timezone === "Rwanda" || timezone === "Sudan" || timezone === "Zambia" || timezone === "Zimbabwe") {
        let time = now.goto("Africa/Gaborone");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return
    } else if (timezone === "Burkina Faso" || timezone === "Gambia" || timezone === "Ghana" || timezone === "Guinea - Bissau" || timezone === "Iceland" || timezone === "Ivory Coast" || timezone === "Liberia" || timezone === "Mali" || timezone === "Mauritania" || timezone === "Saint Helena" || timezone === "Ascension" || timezone === "Tristan da Cunha" || timezone === "Senegal" || timezone === "Togo" || timezone === "Sierra Leone") {
        let time = now.goto("Etc/GMT");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return
    } else if (timezone === "Great Britain" || timezone === "Britain" || timezone === "United Kingdom" || timezone === "UK" || timezone === "Portugal" || timezone === "England" || timezone === "Scotland" || timezone === "Wales" || timezone === "Northern Ireland") {
        let time = now.goto("Europe/London");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return
    } else if (timezone === "Turkey") {
        let time = now.goto("Asia/Istanbul");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else if (timezone === "Ireland") {
        let time = now.goto("Europe/Belfast");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else if (timezone === "Israel") {
        let time = now.goto("Asia/Jerusalem");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else if (timezone === "Armenia" || timezone === "Azerbaijan" || timezone === "Georgia" || timezone === "Oman" || timezone === "United Arab Emirates (UAE)" || timezone === "Mauritius" || timezone === "Seychelles") {
        let time = now.goto("Asia/Tbilisi");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return
    } else if (timezone === "Saudi Arabia" || timezone === "Iraq" || timezone === "Yemen" || timezone === "Qatar" || timezone === "Bahrain" || timezone === "Kuwait") {
        let time = now.goto("Asia/Riyadh");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return
    } else if (timezone === "Maldives" || timezone === "Pakistan" || timezone === "Uzbekistan" || timezone === "Turkmenistan" || timezone === "Tajikistan") {
        let time = now.goto("Asia/Yekaterinburg");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return
    } else if (timezone === "Kazakhstan" || timezone === "Kyrgyzstan" || timezone === "Bhutan" || timezone === "Bangladesh") {
        let time = now.goto("Asia/Omsk");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return
    } else if (timezone === "Cambodia" || timezone === "Western Indonesia" || timezone === "Laos" || timezone === "Thailand" || timezone === "Vietnam") {
        let time = now.goto("Asia/Bangkok");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return
    } else if (timezone === "Hongkong" || timezone === "Hong Kong" || timezone === "Macau" || timezone === "Mongolia" || timezone === "Taiwan" || timezone === "Brunei" || timezone === "Central Indonesia" || timezone === "Malaysia" || timezone === "Philippines") {
        let time = now.goto("Asia/Singapore");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return
    } else if (timezone === "US/Alaska") {
        let time = now.goto("America/Anchorage");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else if (timezone === "US/Aleutian") {
        let time = now.goto("America/Adak");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else if (timezone === "US/Arizona") {
        let time = now.goto("America/Phoenix");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else if (timezone === "US/Central") {
        let time = now.goto("America/Chicago");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else if (timezone === "US/Eastern") {
        let time = now.goto("America/New_York");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else if (timezone === "US/Hawaii") {
        let time = now.goto("Pacific/Honolulu");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else if (timezone === "US/Michigan") {
        let time = now.goto("America/Detroit");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else if (timezone === "US/Mountain") {
        let time = now.goto("America/Denver");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else if (timezone === "US/Pacific") {
        let time = now.goto("America/Los_Angeles");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else if (timezone === "US/Samoa") {
        let time = now.goto("Pacific/Pago_Pago");
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    } else {
        let time = now.goto(timezone);
        let final = time.unixFmt('yyyy.MM.dd h:mm a');
        $('#timezoneB').text(final);
        return;
    }
}

//// get time difference
//
// $(document).ready(function () {
//     difference();
//     window.setInterval("difference()", 1000);
// })
//
// function difference() {
//     let a = $('#timezoneA').text();
//     let b = $('#timezoneB').text();
//
//     let yearA = a.substring(0,4);
//     let monthA = a.substring(5,7);
//     let dayA = a.substring(8,10);
//     let hourA = a.slice(-8, -6);
//     let minuteA = a.slice(-5,-3);
//     let ampmA = a.includes('PM');
//     if(ampmA===false){
//         hourA = Number(hourA) + 12;
//     }
//
//     let yearB = b.substring(0,4);
//     let monthB = b.substring(5,7);
//     let dayB = b.substring(8,10);
//     let hourB = b.slice(-8, -6);
//     let minuteB = b.slice(-5,-3);
//     let ampmB = b.includes('PM');
//     if(ampmB===false){
//         hourB = Number(hourB) + 12;
//     }
//
//     let before = spacetime([yearA, monthA, dayA, hourA, minuteA])
//     let now = spacetime([yearB, monthB, dayB, hourB, minuteB])
//     let difference = now.since(before);
//     let diffDay = difference['diff']['days'];
//     let diffHour = difference['diff']['hours'];
//     let diffMinutes = difference['diff']['minutes'];
//
//     console.log(diffDay, diffHour, diffMinutes);
//     // console.log(difference);
//
//     // if (ampm === True){
//     // }
//
//     // let difference = ;
//     // $('#difference').text(difference);
// }
