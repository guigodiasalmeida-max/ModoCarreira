// Dados de clubes e ligas usados pelo Career Mode
const LIGAS_BASE = {

    Brasil:{
        nome:"Brasileirão",
        A:[
            ["Flamengo",90],["Palmeiras",89],["Atlético-MG",86],["Botafogo",84],["Fluminense",83],
            ["São Paulo",83],["Corinthians",82],["Internacional",81],["Grêmio",80],["Cruzeiro",79],
            ["Bahia",78],["Athletico-PR",77],["Santos",76],["Bragantino",75],["Fortaleza",74],
            ["Vasco",73],["Ceará",72],["Sport",70],["Vitória",69],["Juventude",68]
        ],
        B:[
            ["Coritiba",67],["Goiás",67],["América-MG",66],["Criciúma",65],["Avaí",64],
            ["Chapecoense",63],["Ponte Preta",62],["Guarani",61],["Vila Nova",61],["Operário-PR",60],
            ["Novorizontino",60],["Paysandu",59],["Remo",58],["Náutico",58],["Santa Cruz",57],
            ["CRB",57],["Cuiabá",57],["Londrina",55],["Botafogo-SP",54],["Brusque",53]
        ]
    },
    Inglaterra:{
        nome:"Premier League",
        A:[
            ["Manchester City",94],["Liverpool",92],["Arsenal",91],["Chelsea",87],["Manchester United",86],
            ["Newcastle",84],["Tottenham",83],["Aston Villa",82],["Brighton",79],["West Ham",77],
            ["Crystal Palace",76],["Everton",75],["Fulham",74],["Brentford",74],["Wolves",73],
            ["Bournemouth",72],["Nottingham Forest",71],["Leeds",70],["Leicester",69],["Southampton",68]
        ],
        B:[
            ["Burnley",72],["Sunderland",71],["Middlesbrough",70],["West Bromwich Albion",69],["Sheffield United",68],
            ["Norwich City",67],["Coventry City",66],["Watford",65],["Queens Park Rangers",64],["Stoke City",64],
            ["Swansea City",63],["Bristol City",62],["Hull City",62],["Blackburn Rovers",61],["Preston",60],
            ["Millwall",59],["Derby County",58],["Sheffield Wednesday",57],["Portsmouth",56],["Cardiff City",56]
        ]
    },
    Espanha:{
        nome:"La Liga",
        A:[
            ["Real Madrid",95],["Barcelona",93],["Atlético de Madrid",88],["Athletic Club",82],["Real Sociedad",81],
            ["Villarreal",80],["Real Betis",79],["Sevilla",78],["Valencia",77],["Girona",76],
            ["Celta de Vigo",73],["Osasuna",72],["Mallorca",71],["Rayo Vallecano",70],["Getafe",70],
            ["Alavés",69],["Espanyol",68],["Las Palmas",67],["Valladolid",66],["Leganés",65]
        ],
        B:[
            ["Almería",69],["Levante",68],["Sporting Gijón",67],["Real Oviedo",67],["Granada",66],
            ["Zaragoza",65],["Eibar",64],["Elche",64],["Tenerife",63],["Cádiz",62],
            ["Burgos",61],["Racing Santander",61],["Huesca",60],["Mirandés",59],["Málaga",59],
            ["Deportivo La Coruña",58],["Racing Ferrol",57],["Eldense",56],["Cartagena",55],["Albacete",55]
        ]
    },
    Italia:{
        nome:"Serie A",
        A:[
            ["Inter de Milão",92],["Juventus",88],["Milan",87],["Napoli",85],["Atalanta",83],
            ["Roma",82],["Lazio",81],["Fiorentina",78],["Bologna",77],["Torino",74],
            ["Genoa",72],["Udinese",71],["Como",70],["Parma",69],["Cagliari",68],
            ["Lecce",67],["Verona",66],["Sassuolo",65],["Empoli",64],["Monza",63]
        ],
        B:[
            ["Sampdoria",70],["Palermo",69],["Spezia",68],["Pisa",67],["Bari",66],
            ["Cremonese",65],["Modena",64],["Brescia",63],["Venezia",63],["Catanzaro",62],
            ["Salernitana",61],["Reggiana",60],["Südtirol",59],["Cesena",58],["Cittadella",58],
            ["Mantova",57],["Juve Stabia",56],["Carrarese",55],["Frosinone",55],["Cosenza",54]
        ]
    },
    Alemanha:{
        nome:"Bundesliga",
        A:[
            ["Bayern de Munique",94],["Bayer Leverkusen",90],["Borussia Dortmund",88],["RB Leipzig",84],["Eintracht Frankfurt",80],
            ["Stuttgart",79],["Wolfsburg",76],["Freiburg",74],["Mainz",73],["Borussia Mönchengladbach",72],
            ["Werder Bremen",72],["Union Berlin",71],["Augsburg",69],["Hoffenheim",68],["Heidenheim",66],
            ["St. Pauli",65],["Hamburgo",64],["Schalke 04",63],["Hertha Berlin",62],["Holstein Kiel",60]
        ],
        B:[
            ["Köln",68],["Fortuna Düsseldorf",67],["Paderborn",66],["Hannover 96",65],["Karlsruher",64],
            ["Hertha Berlin II",63],["Nürnberg",62],["Kaiserslautern",61],["Darmstadt",60],["Hansa Rostock",59],
            ["Hannover 96 II",58],["Elversberg",58],["Greuther Fürth",57],["Magdeburg",56],["Preußen Münster",55],
            ["Braunschweig",54],["Ulm",53],["Dynamo Dresden",53],["Arminia Bielefeld",52],["Schalke 04 II",50]
        ]
    },
    França:{
        nome:"Ligue 1",
        A:[
            ["Paris Saint-Germain",94],["Marseille",82],["Monaco",82],["Lille",80],["Lyon",79],
            ["Nice",77],["Rennes",75],["Lens",74],["Strasbourg",71],["Nantes",70],
            ["Toulouse",69],["Brest",68],["Montpellier",66],["Reims",65],["Saint-Étienne",64],
            ["Auxerre",63],["Le Havre",62],["Angers",61],["Metz",60],["Troyes",59]
        ],
        B:[
            ["Paris FC",67],["Lorient",66],["Caen",65],["Guingamp",64],["Grenoble",63],
            ["Bastia",62],["Laval",61],["Amiens",60],["Pau",59],["Annecy",58],
            ["Rodez",57],["Dunkerque",56],["Ajaccio",55],["Clermont",54],["Valenciennes",53],
            ["Nancy",52],["Le Mans",51],["Sochaux",51],["Red Star",50],["Martigues",49]
        ]
    },
    Portugal:{
        nome:"Primeira Liga",
        A:[
            ["Benfica",89],["Porto",88],["Sporting",88],["Braga",78],["Vitória de Guimarães",72],
            ["Boavista",68],["Famalicão",67],["Gil Vicente",66],["Rio Ave",65],["Vitória de Setúbal",64],
            ["Estoril",63],["Casa Pia",62],["Arouca",61],["Moreirense",60],["Nacional",59],
            ["Marítimo",58],["Farense",57],["Estrela da Amadora",56],["Tondela",55],["AVS",54]
        ],
        B:[
            ["Académico de Viseu",63],["Santa Clara",62],["Feirense",61],["Leixões",60],["Paços de Ferreira",59],
            ["Penafiel",58],["Mafra",57],["Torreense",56],["Portimonense",55],["Vizela",54],
            ["Marítimo B",53],["Oliveirense",52],["Felgueiras",51],["Alverca",51],["União de Leiria",50],
            ["Académica",49],["Belenenses",48],["Varzim",47],["Chaves",47],["Casa Pia B",45]
        ]
    }
};

function construirClubesDaLiga(def){
    return {
        A:def.A.map(([nome,forca],i)=>({id:nome.toLowerCase().normalize('NFD').replace(/[^a-z0-9]+/gi,'_'),nome,forca,divisao:'A'})),
        B:def.B.map(([nome,forca],i)=>({id:nome.toLowerCase().normalize('NFD').replace(/[^a-z0-9]+/gi,'_'),nome,forca,divisao:'B'}))
    };
}


function construirClubesDaLiga(def){
    return {
        A:def.A.map(([nome,forca],i)=>({id:nome.toLowerCase().normalize('NFD').replace(/[^a-z0-9]+/gi,'_'),nome,forca,divisao:'A'})),
        B:def.B.map(([nome,forca],i)=>({id:nome.toLowerCase().normalize('NFD').replace(/[^a-z0-9]+/gi,'_'),nome,forca,divisao:'B'}))
    };
}



