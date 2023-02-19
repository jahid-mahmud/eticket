const COUNTRIES = [
    {
        "name": "Afghanistan",
        "domain": ".af",
        "id": "004",
        "code": "AF"
    },
    {
        "name": "Albania",
        "domain": ".al",
        "id": "008",
        "code": "AL"
    },
    {
        "name": "Algeria",
        "domain": ".dz",
        "id": "012",
        "code": "DZ"
    },
    {
        "name": "American Samoa",
        "domain": ".as",
        "id": "016",
        "code": "AS"
    },
    {
        "name": "Andorra",
        "domain": ".ad",
        "id": "020",
        "code": "AD"
    },
    {
        "name": "Angola",
        "domain": ".ao",
        "id": "024",
        "code": "AO"
    },
    {
        "name": "Anguilla",
        "domain": ".ai",
        "id": "660",
        "code": "AI"
    },
    {
        "name": "Antarctica",
        "domain": ".aq",
        "id": "010",
        "code": "AQ"
    },
    {
        "name": "Antigua and Barbuda",
        "domain": ".ag",
        "id": "028",
        "code": "AG"
    },
    {
        "name": "Argentina",
        "domain": ".ar",
        "id": "032",
        "code": "AR"
    },
    {
        "name": "Armenia",
        "domain": ".am",
        "id": "051",
        "code": "AM"
    },
    {
        "name": "Aruba",
        "domain": ".aw",
        "id": "533",
        "code": "AW"
    },
    {
        "name": "Australia",
        "domain": ".au",
        "id": "036",
        "code": "AU"
    },
    {
        "name": "Austria",
        "domain": ".at",
        "id": "040",
        "code": "AT"
    },
    {
        "name": "Azerbaijan",
        "domain": ".az",
        "id": "031",
        "code": "AZ"
    },
    {
        "name": "Bahamas",
        "domain": ".bs",
        "id": "044",
        "code": "BS"
    },
    {
        "name": "Bahrain",
        "domain": ".bh",
        "id": "048",
        "code": "BH"
    },
    {
        "name": "Bangladesh",
        "domain": ".bd",
        "id": "050",
        "code": "BN"
    },
    {
        "name": "Barbados",
        "domain": ".bb",
        "id": "052",
        "code": "BB"
    },
    {
        "name": "Belarus",
        "domain": ".by",
        "id": "112",
        "code": "BY"
    },
    {
        "name": "Belgium",
        "domain": ".be",
        "id": "056",
        "code": "BE"
    },
    {
        "name": "Belize",
        "domain": ".bz",
        "id": "084",
        "code": "BZ"
    },
    {
        "name": "Benin",
        "domain": ".bj",
        "id": "204",
        "code": "BJ"
    },
    {
        "name": "Bermuda",
        "domain": ".bm",
        "id": "060",
        "code": "BM"
    },
    {
        "name": "Bhutan",
        "domain": ".bt",
        "id": "064",
        "code": "BT"
    },
    {
        "name": "Bolivia",
        "domain": ".bo",
        "id": "068",
        "code": "BO"
    },
    {
        "name": "Bosnia and Herzegovina",
        "domain": ".ba",
        "id": "070",
        "code": "BA"
    },
    {
        "name": "Botswana",
        "domain": ".bw",
        "id": "072",
        "code": "BW"
    },
    {
        "name": "Bouvet Island",
        "domain": ".bv",
        "id": "074",
        "code": "BV"
    },
    {
        "name": "Brazil",
        "domain": ".br",
        "id": "076",
        "code": "BR"
    },
    {
        "name": "British Indian Ocean Territory",
        "domain": ".io",
        "id": "086",
        "code": "IO"
    },
    {
        "name": "British Virgin Islands",
        "domain": ".vg",
        "id": "092",
        "code": "VG"
    },
    {
        "name": "Brunei",
        "domain": ".bn",
        "id": "096",
        "code": "BN"
    },
    {
        "name": "Bulgaria",
        "domain": ".bg",
        "id": "100",
        "code": "BG"
    },
    {
        "name": "Burkina Faso",
        "domain": ".bf",
        "id": "854",
        "code": "BF"
    },
    {
        "name": "Burundi",
        "domain": ".bi",
        "id": "108",
        "code": "BI"
    },
    {
        "name": "Cambodia",
        "domain": ".kh",
        "id": "116",
        "code": "KH"
    },
    {
        "name": "Cameroon",
        "domain": ".cm",
        "id": "120",
        "code": "CM"
    },
    {
        "name": "Canada",
        "domain": ".ca",
        "id": "124",
        "code": "CA"
    },
    {
        "name": "Cape Verde",
        "domain": ".cv",
        "id": "132",
        "code": "CV"
    },
    {
        "name": "Caribbean Netherlands",
        "domain": ".bq",
        "id": "535",
        "code": "BQ"
    },
    {
        "name": "Cayman Islands",
        "domain": ".ky",
        "id": "136",
        "code": "KY"
    },
    {
        "name": "Central African Republic",
        "domain": ".cf",
        "id": "140",
        "code": "CF"
    },
    {
        "name": "Chad",
        "domain": ".td",
        "id": "148",
        "code": "TD"
    },
    {
        "name": "Chile",
        "domain": ".cl",
        "id": "152",
        "code": "CL"
    },
    {
        "name": "China",
        "domain": ".cn",
        "id": "156",
        "code": "CN"
    },
    {
        "name": "Christmas Island",
        "domain": ".cx",
        "id": "162",
        "code": "CX"
    },
    {
        "name": "Cocos (Keeling) Islands",
        "domain": ".cc",
        "id": "166",
        "code": "CC"
    },
    {
        "name": "Colombia",
        "domain": ".co",
        "id": "170",
        "code": "CO"
    },
    {
        "name": "Comoros",
        "domain": ".km",
        "id": "174",
        "code": "KM"
    },
    {
        "name": "Cook Islands",
        "domain": ".ck",
        "id": "184",
        "code": "CK"
    },
    {
        "name": "Costa Rica",
        "domain": ".cr",
        "id": "188",
        "code": "CR"
    },
    {
        "name": "Croatia",
        "domain": ".hr",
        "id": "191",
        "code": "HR"
    },
    {
        "name": "Cuba",
        "domain": ".cu",
        "id": "192",
        "code": "CU"
    },
    {
        "name": "Curaçao",
        "domain": ".cw",
        "id": "531",
        "code": "CW"
    },
    {
        "name": "Cyprus",
        "domain": ".cy",
        "id": "196",
        "code": "CY"
    },
    {
        "name": "Czechia",
        "domain": ".cz",
        "id": "203",
        "code": "CZ"
    },
    {
        "name": "DR Congo",
        "domain": ".cd",
        "id": "180",
        "code": "CD"
    },
    {
        "name": "Denmark",
        "domain": ".dk",
        "id": "208",
        "code": "DK"
    },
    {
        "name": "Djibouti",
        "domain": ".dj",
        "id": "262",
        "code": "DJ"
    },
    {
        "name": "Dominica",
        "domain": ".dm",
        "id": "212",
        "code": "DM"
    },
    {
        "name": "Dominican Republic",
        "domain": ".do",
        "id": "214",
        "code": "DO"
    },
    {
        "name": "Ecuador",
        "domain": ".ec",
        "id": "218",
        "code": "EC"
    },
    {
        "name": "Egypt",
        "domain": ".eg",
        "id": "818",
        "code": "EG"
    },
    {
        "name": "El Salvador",
        "domain": ".sv",
        "id": "222",
        "code": "SV"
    },
    {
        "name": "Equatorial Guinea",
        "domain": ".gq",
        "id": "226",
        "code": "GQ"
    },
    {
        "name": "Eritrea",
        "domain": ".er",
        "id": "232",
        "code": "ER"
    },
    {
        "name": "Estonia",
        "domain": ".ee",
        "id": "233",
        "code": "EE"
    },
    {
        "name": "Eswatini",
        "domain": ".sz",
        "id": "748",
        "code": "SZ"
    },
    {
        "name": "Ethiopia",
        "domain": ".et",
        "id": "231",
        "code": "ET"
    },
    {
        "name": "Falkland Islands",
        "domain": ".fk",
        "id": "238",
        "code": "FK"
    },
    {
        "name": "Faroe Islands",
        "domain": ".fo",
        "id": "234",
        "code": "FO"
    },
    {
        "name": "Fiji",
        "domain": ".fj",
        "id": "242",
        "code": "FJ"
    },
    {
        "name": "Finland",
        "domain": ".fi",
        "id": "246",
        "code": "FI"
    },
    {
        "name": "France",
        "domain": ".fr",
        "id": "250",
        "code": "FR"
    },
    {
        "name": "French Guiana",
        "domain": ".gf",
        "id": "254",
        "code": "GF"
    },
    {
        "name": "French Polynesia",
        "domain": ".pf",
        "id": "258",
        "code": "PF"
    },
    {
        "name": "French Southern and Antarctic Lands",
        "domain": ".tf",
        "id": "260",
        "code": "TF"
    },
    {
        "name": "Gabon",
        "domain": ".ga",
        "id": "266",
        "code": "GA"
    },
    {
        "name": "Gambia",
        "domain": ".gm",
        "id": "270",
        "code": "GM"
    },
    {
        "name": "Georgia",
        "domain": ".ge",
        "id": "268",
        "code": "GE"
    },
    {
        "name": "Germany",
        "domain": ".de",
        "id": "276",
        "code": "DE"
    },
    {
        "name": "Ghana",
        "domain": ".gh",
        "id": "288",
        "code": "GH"
    },
    {
        "name": "Gibraltar",
        "domain": ".gi",
        "id": "292",
        "code": "GI"
    },
    {
        "name": "Greece",
        "domain": ".gr",
        "id": "300",
        "code": "GR"
    },
    {
        "name": "Greenland",
        "domain": ".gl",
        "id": "304",
        "code": "GL"
    },
    {
        "name": "Grenada",
        "domain": ".gd",
        "id": "308",
        "code": "GD"
    },
    {
        "name": "Guadeloupe",
        "domain": ".gp",
        "id": "312",
        "code": "GP"
    },
    {
        "name": "Guam",
        "domain": ".gu",
        "id": "316",
        "code": "GU"
    },
    {
        "name": "Guatemala",
        "domain": ".gt",
        "id": "320",
        "code": "GT"
    },
    {
        "name": "Guernsey",
        "domain": ".gg",
        "id": "831",
        "code": "GG"
    },
    {
        "name": "Guinea",
        "domain": ".gn",
        "id": "324",
        "code": "GN"
    },
    {
        "name": "Guinea-Bissau",
        "domain": ".gw",
        "id": "624",
        "code": "GW"
    },
    {
        "name": "Guyana",
        "domain": ".gy",
        "id": "328",
        "code": "GY"
    },
    {
        "name": "Haiti",
        "domain": ".ht",
        "id": "332",
        "code": "HT"
    },
    {
        "name": "Heard Island and McDonald Islands",
        "domain": ".hm",
        "id": "334",
        "code": "HM"
    },
    {
        "name": "Honduras",
        "domain": ".hn",
        "id": "340",
        "code": "HN"
    },
    {
        "name": "Hong Kong",
        "domain": ".hk",
        "id": "344",
        "code": "HK"
    },
    {
        "name": "Hungary",
        "domain": ".hu",
        "id": "348",
        "code": "HU"
    },
    {
        "name": "Iceland",
        "domain": ".is",
        "id": "352",
        "code": "IS"
    },
    {
        "name": "India",
        "domain": ".in",
        "id": "356",
        "code": "IN"
    },
    {
        "name": "Indonesia",
        "domain": ".id",
        "id": "360",
        "code": "ID"
    },
    {
        "name": "Iran",
        "domain": ".ir",
        "id": "364",
        "code": "IR"
    },
    {
        "name": "Iraq",
        "domain": ".iq",
        "id": "368",
        "code": "IQ"
    },
    {
        "name": "Ireland",
        "domain": ".ie",
        "id": "372",
        "code": "IE"
    },
    {
        "name": "Isle of Man",
        "domain": ".im",
        "id": "833",
        "code": "IM"
    },
    {
        "name": "Israel",
        "domain": ".il",
        "id": "376",
        "code": "IL"
    },
    {
        "name": "Italy",
        "domain": ".it",
        "id": "380",
        "code": "IT"
    },
    {
        "name": "Ivory Coast",
        "domain": ".ci",
        "id": "384",
        "code": "CI"
    },
    {
        "name": "Jamaica",
        "domain": ".jm",
        "id": "388",
        "code": "JM"
    },
    {
        "name": "Japan",
        "domain": ".jp",
        "id": "392",
        "code": "JP"
    },
    {
        "name": "Jersey",
        "domain": ".je",
        "id": "832",
        "code": "JE"
    },
    {
        "name": "Jordan",
        "domain": ".jo",
        "id": "400",
        "code": "JO"
    },
    {
        "name": "Kazakhstan",
        "domain": ".kz",
        "id": "398",
        "code": "KZ"
    },
    {
        "name": "Kenya",
        "domain": ".ke",
        "id": "404",
        "code": "KE"
    },
    {
        "name": "Kiribati",
        "domain": ".ki",
        "id": "296",
        "code": "KI"
    },
    {
        "name": "Kosovo",
        "domain": "",
        "code": "XK"
    },
    {
        "name": "Kuwait",
        "domain": ".kw",
        "id": "414",
        "code": "KW"
    },
    {
        "name": "Kyrgyzstan",
        "domain": ".kg",
        "id": "417",
        "code": "KG"
    },
    {
        "name": "Laos",
        "domain": ".la",
        "id": "418",
        "code": "LA"
    },
    {
        "name": "Latvia",
        "domain": ".lv",
        "id": "428",
        "code": "LV"
    },
    {
        "name": "Lebanon",
        "domain": ".lb",
        "id": "422",
        "code": "LB"
    },
    {
        "name": "Lesotho",
        "domain": ".ls",
        "id": "426",
        "code": "LS"
    },
    {
        "name": "Liberia",
        "domain": ".lr",
        "id": "430",
        "code": "LR"
    },
    {
        "name": "Libya",
        "domain": ".ly",
        "id": "434",
        "code": "LY"
    },
    {
        "name": "Liechtenstein",
        "domain": ".li",
        "id": "438",
        "code": "LI"
    },
    {
        "name": "Lithuania",
        "domain": ".lt",
        "id": "440",
        "code": "LT"
    },
    {
        "name": "Luxembourg",
        "domain": ".lu",
        "id": "442",
        "code": "LU"
    },
    {
        "name": "Macau",
        "domain": ".mo",
        "id": "446",
        "code": "MO"
    },
    {
        "name": "Madagascar",
        "domain": ".mg",
        "id": "450",
        "code": "MG"
    },
    {
        "name": "Malawi",
        "domain": ".mw",
        "id": "454",
        "code": "MW"
    },
    {
        "name": "Malaysia",
        "domain": ".my",
        "id": "458",
        "code": "MY"
    },
    {
        "name": "Maldives",
        "domain": ".mv",
        "id": "462",
        "code": "MV"
    },
    {
        "name": "Mali",
        "domain": ".ml",
        "id": "466",
        "code": "ML"
    },
    {
        "name": "Malta",
        "domain": ".mt",
        "id": "470",
        "code": "MT"
    },
    {
        "name": "Marshall Islands",
        "domain": ".mh",
        "id": "584",
        "code": "MH"
    },
    {
        "name": "Martinique",
        "domain": ".mq",
        "id": "474",
        "code": "MQ"
    },
    {
        "name": "Mauritania",
        "domain": ".mr",
        "id": "478",
        "code": "MR"
    },
    {
        "name": "Mauritius",
        "domain": ".mu",
        "id": "480",
        "code": "MU"
    },
    {
        "name": "Mayotte",
        "domain": ".yt",
        "id": "175",
        "code": "YT"
    },
    {
        "name": "Mexico",
        "domain": ".mx",
        "id": "484",
        "code": "MX"
    },
    {
        "name": "Micronesia",
        "domain": ".fm",
        "id": "583",
        "code": "FM"
    },
    {
        "name": "Moldova",
        "domain": ".md",
        "id": "498",
        "code": "MD"
    },
    {
        "name": "Monaco",
        "domain": ".mc",
        "id": "492",
        "code": "MC"
    },
    {
        "name": "Mongolia",
        "domain": ".mn",
        "id": "496",
        "code": "MN"
    },
    {
        "name": "Montenegro",
        "domain": ".me",
        "id": "499",
        "code": "ME"
    },
    {
        "name": "Montserrat",
        "domain": ".ms",
        "id": "500",
        "code": "MS"
    },
    {
        "name": "Morocco",
        "domain": ".ma",
        "id": "504",
        "code": "MA"
    },
    {
        "name": "Mozambique",
        "domain": ".mz",
        "id": "508",
        "code": "MZ"
    },
    {
        "name": "Myanmar",
        "domain": ".mm",
        "id": "104",
        "code": "MM"
    },
    {
        "name": "Namibia",
        "domain": ".na",
        "id": "516",
        "code": "NA"
    },
    {
        "name": "Nauru",
        "domain": ".nr",
        "id": "520",
        "code": "NR"
    },
    {
        "name": "Nepal",
        "domain": ".np",
        "id": "524",
        "code": "NP"
    },
    {
        "name": "Netherlands",
        "domain": ".nl",
        "id": "528",
        "code": "NL"
    },
    {
        "name": "New Caledonia",
        "domain": ".nc",
        "id": "540",
        "code": "NC"
    },
    {
        "name": "New Zealand",
        "domain": ".nz",
        "id": "554",
        "code": "NZ"
    },
    {
        "name": "Nicaragua",
        "domain": ".ni",
        "id": "558",
        "code": "NI"
    },
    {
        "name": "Niger",
        "domain": ".ne",
        "id": "562",
        "code": "NE"
    },
    {
        "name": "Nigeria",
        "domain": ".ng",
        "id": "566",
        "code": "NG"
    },
    {
        "name": "Niue",
        "domain": ".nu",
        "id": "570",
        "code": "NU"
    },
    {
        "name": "Norfolk Island",
        "domain": ".nf",
        "id": "574",
        "code": "NF"
    },
    {
        "name": "North Korea",
        "domain": ".kp",
        "id": "408",
        "code": "KP"
    },
    {
        "name": "North Macedonia",
        "domain": ".mk",
        "id": "807",
        "code": "MK"
    },
    {
        "name": "Northern Mariana Islands",
        "domain": ".mp",
        "id": "580",
        "code": "MP"
    },
    {
        "name": "Norway",
        "domain": ".no",
        "id": "578",
        "code": "NO"
    },
    {
        "name": "Oman",
        "domain": ".om",
        "id": "512",
        "code": "OM"
    },
    {
        "name": "Pakistan",
        "domain": ".pk",
        "id": "586",
        "code": "PK"
    },
    {
        "name": "Palau",
        "domain": ".pw",
        "id": "585",
        "code": "PW"
    },
    {
        "name": "Palestine",
        "domain": ".ps",
        "id": "275",
        "code": "PS"
    },
    {
        "name": "Panama",
        "domain": ".pa",
        "id": "591",
        "code": "PA"
    },
    {
        "name": "Papua New Guinea",
        "domain": ".pg",
        "id": "598",
        "code": "PG"
    },
    {
        "name": "Paraguay",
        "domain": ".py",
        "id": "600",
        "code": "PY"
    },
    {
        "name": "Peru",
        "domain": ".pe",
        "id": "604",
        "code": "PE"
    },
    {
        "name": "Philippines",
        "domain": ".ph",
        "id": "608",
        "code": "PH"
    },
    {
        "name": "Pitcairn Islands",
        "domain": ".pn",
        "id": "612",
        "code": "PN"
    },
    {
        "name": "Poland",
        "domain": ".pl",
        "id": "616",
        "code": "PL"
    },
    {
        "name": "Portugal",
        "domain": ".pt",
        "id": "620",
        "code": "PT"
    },
    {
        "name": "Puerto Rico",
        "domain": ".pr",
        "id": "630",
        "code": "PR"
    },
    {
        "name": "Qatar",
        "domain": ".qa",
        "id": "634",
        "code": "QA"
    },
    {
        "name": "Republic of the Congo",
        "domain": ".cg",
        "id": "178",
        "code": "CG"
    },
    {
        "name": "Romania",
        "domain": ".ro",
        "id": "642",
        "code": "RO"
    },
    {
        "name": "Russia",
        "domain": ".ru",
        "id": "643",
        "code": "RU"
    },
    {
        "name": "Rwanda",
        "domain": ".rw",
        "id": "646",
        "code": "RW"
    },
    {
        "name": "Réunion",
        "domain": ".re",
        "id": "638",
        "code": "RE"
    },
    {
        "name": "Saint Barthélemy",
        "domain": ".bl",
        "id": "652",
        "code": "BL"
    },
    {
        "name": "Saint Helena, Ascension and Tristan da Cunha",
        "domain": ".sh",
        "id": "654",
        "code": "SH"
    },
    {
        "name": "Saint Kitts and Nevis",
        "domain": ".kn",
        "id": "659",
        "code": "KN"
    },
    {
        "name": "Saint Lucia",
        "domain": ".lc",
        "id": "662",
        "code": "LC"
    },
    {
        "name": "Saint Martin",
        "domain": ".fr",
        "id": "663",
        "code": "MF"
    },
    {
        "name": "Saint Pierre and Miquelon",
        "domain": ".pm",
        "id": "666",
        "code": "PM"
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "domain": ".vc",
        "id": "670",
        "code": "VC"
    },
    {
        "name": "Samoa",
        "domain": ".ws",
        "id": "882",
        "code": "WS"
    },
    {
        "name": "San Marino",
        "domain": ".sm",
        "id": "674",
        "code": "SM"
    },
    {
        "name": "Saudi Arabia",
        "domain": ".sa",
        "id": "682",
        "code": "SA"
    },
    {
        "name": "Senegal",
        "domain": ".sn",
        "id": "686",
        "code": "SN"
    },
    {
        "name": "Serbia",
        "domain": ".rs",
        "id": "688",
        "code": "RS"
    },
    {
        "name": "Seychelles",
        "domain": ".sc",
        "id": "690",
        "code": "SC"
    },
    {
        "name": "Sierra Leone",
        "domain": ".sl",
        "id": "694",
        "code": "SL"
    },
    {
        "name": "Singapore",
        "domain": ".sg",
        "id": "702",
        "code": "SG"
    },
    {
        "name": "Sint Maarten",
        "domain": ".sx",
        "id": "534",
        "code": "SX"
    },
    {
        "name": "Slovakia",
        "domain": ".sk",
        "id": "703",
        "code": "SK"
    },
    {
        "name": "Slovenia",
        "domain": ".si",
        "id": "705",
        "code": "SI"
    },
    {
        "name": "Solomon Islands",
        "domain": ".sb",
        "id": "090",
        "code": "SB"
    },
    {
        "name": "Somalia",
        "domain": ".so",
        "id": "706",
        "code": "SO"
    },
    {
        "name": "South Africa",
        "domain": ".za",
        "id": "710",
        "code": "ZA"
    },
    {
        "name": "South Georgia",
        "domain": ".gs",
        "id": "239",
        "code": "GS"
    },
    {
        "name": "South Korea",
        "domain": ".kr",
        "id": "410",
        "code": "KR"
    },
    {
        "name": "South Sudan",
        "domain": ".ss",
        "id": "728",
        "code": "SS"
    },
    {
        "name": "Spain",
        "domain": ".es",
        "id": "724",
        "code": "ES"
    },
    {
        "name": "Sri Lanka",
        "domain": ".lk",
        "id": "144",
        "code": "LK"
    },
    {
        "name": "Sudan",
        "domain": ".sd",
        "id": "729",
        "code": "SD"
    },
    {
        "name": "Suriname",
        "domain": ".sr",
        "id": "740",
        "code": "SR"
    },
    {
        "name": "Svalbard and Jan Mayen",
        "domain": ".sj",
        "id": "744",
        "code": "SJ"
    },
    {
        "name": "Sweden",
        "domain": ".se",
        "id": "752",
        "code": "SE"
    },
    {
        "name": "Switzerland",
        "domain": ".ch",
        "id": "756",
        "code": "CH"
    },
    {
        "name": "Syria",
        "domain": ".sy",
        "id": "760",
        "code": "SY"
    },
    {
        "name": "São Tomé and Príncipe",
        "domain": ".st",
        "id": "678",
        "code": "ST"
    },
    {
        "name": "Taiwan",
        "domain": ".tw",
        "id": "158",
        "code": "TW"
    },
    {
        "name": "Tajikistan",
        "domain": ".tj",
        "id": "762",
        "code": "TJ"
    },
    {
        "name": "Tanzania",
        "domain": ".tz",
        "id": "834",
        "code": "TZ"
    },
    {
        "name": "Thailand",
        "domain": ".th",
        "id": "764",
        "code": "TH"
    },
    {
        "name": "Timor-Leste",
        "domain": ".tl",
        "id": "626",
        "code": "TL"
    },
    {
        "name": "Togo",
        "domain": ".tg",
        "id": "768",
        "code": "TG"
    },
    {
        "name": "Tokelau",
        "domain": ".tk",
        "id": "772",
        "code": "TK"
    },
    {
        "name": "Tonga",
        "domain": ".to",
        "id": "776",
        "code": "TO"
    },
    {
        "name": "Trinidad and Tobago",
        "domain": ".tt",
        "id": "780",
        "code": "TT"
    },
    {
        "name": "Tunisia",
        "domain": ".tn",
        "id": "788",
        "code": "TN"
    },
    {
        "name": "Turkey",
        "domain": ".tr",
        "id": "792",
        "code": "TR"
    },
    {
        "name": "Turkmenistan",
        "domain": ".tm",
        "id": "795",
        "code": "TM"
    },
    {
        "name": "Turks and Caicos Islands",
        "domain": ".tc",
        "id": "796",
        "code": "TC"
    },
    {
        "name": "Tuvalu",
        "domain": ".tv",
        "id": "798",
        "code": "TV"
    },
    {
        "name": "Uganda",
        "domain": ".ug",
        "id": "800",
        "code": "UG"
    },
    {
        "name": "Ukraine",
        "domain": ".ua",
        "id": "804",
        "code": "UA"
    },
    {
        "name": "United Arab Emirates",
        "domain": ".ae",
        "id": "784",
        "code": "AE"
    },
    {
        "name": "United Kingdom",
        "domain": ".uk",
        "id": "826",
        "code": "GB"
    },
    {
        "name": "United States",
        "domain": ".us",
        "id": "840",
        "code": "US"
    },
    {
        "name": "United States Minor Outlying Islands",
        "domain": ".us",
        "id": "581",
        "code": "UM"
    },
    {
        "name": "United States Virgin Islands",
        "domain": ".vi",
        "id": "850",
        "code": "VI"
    },
    {
        "name": "Uruguay",
        "domain": ".uy",
        "id": "858",
        "code": "UY"
    },
    {
        "name": "Uzbekistan",
        "domain": ".uz",
        "id": "860",
        "code": "UZ"
    },
    {
        "name": "Vanuatu",
        "domain": ".vu",
        "id": "548",
        "code": "VU"
    },
    {
        "name": "Vatican City",
        "domain": ".va",
        "id": "336",
        "code": "VA"
    },
    {
        "name": "Venezuela",
        "domain": ".ve",
        "id": "862",
        "code": "VE"
    },
    {
        "name": "Vietnam",
        "domain": ".vn",
        "id": "704",
        "code": "VN"
    },
    {
        "name": "Wallis and Futuna",
        "domain": ".wf",
        "id": "876",
        "code": "WF"
    },
    {
        "name": "Western Sahara",
        "domain": ".eh",
        "id": "732",
        "code": "EH"
    },
    {
        "name": "Yemen",
        "domain": ".ye",
        "id": "887",
        "code": "YE"
    },
    {
        "name": "Zambia",
        "domain": ".zm",
        "id": "894",
        "code": "ZM"
    },
    {
        "name": "Zimbabwe",
        "domain": ".zw",
        "id": "716",
        "code": "ZW"
    },
    {
        "name": "Åland Islands",
        "domain": ".ax",
        "id": "248",
        "code": "AX"
    }
];

export function GetCountries() {
    return JSON.parse(JSON.stringify(COUNTRIES));
}