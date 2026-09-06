// Banco de dados de jogadores do Career Mode.
// A roleta usa JOGADORES_BASE; os elencos completos são carregados da base FC26.

const JOGADORES_BASE = [
    {nome:"Jorginho",overall:64,finalizacao:54,passe:67,drible:58,velocidade:61,forca:63,resistencia:69,defesa:68,cabeceio:50,reflexos:20,visao:75},
    {nome:"Lucas Braga",overall:68,finalizacao:63,passe:61,drible:69,velocidade:74,forca:60,resistencia:72,defesa:35,cabeceio:55,reflexos:15,visao:58},
    {nome:"Wellington",overall:65,finalizacao:48,passe:64,drible:52,velocidade:67,forca:72,resistencia:76,defesa:62,cabeceio:58,reflexos:18,visao:50},
    {nome:"Davidson",overall:62,finalizacao:57,passe:55,drible:61,velocidade:68,forca:55,resistencia:66,defesa:50,cabeceio:48,reflexos:15,visao:55},
    {nome:"André Santos",overall:67,finalizacao:59,passe:62,drible:56,velocidade:63,forca:74,resistencia:71,defesa:66,cabeceio:63,reflexos:18,visao:52},
    {nome:"Gabigol",overall:76,finalizacao:85,passe:69,drible:77,velocidade:69,forca:67,resistencia:72,defesa:22,cabeceio:66,reflexos:10,visao:58},
    {nome:"Everton Ribeiro",overall:78,finalizacao:76,passe:87,drible:83,velocidade:71,forca:59,resistencia:78,defesa:38,cabeceio:52,reflexos:12,visao:85},
    {nome:"Lucas Paquetá",overall:79,finalizacao:79,passe:84,drible:85,velocidade:78,forca:78,resistencia:87,defesa:48,cabeceio:58,reflexos:14,visao:88},
    {nome:"Richarlison",overall:77,finalizacao:86,passe:64,drible:74,velocidade:82,forca:84,resistencia:82,defesa:33,cabeceio:82,reflexos:10,visao:60},
    {nome:"Fabinho",overall:75,finalizacao:49,passe:80,drible:69,velocidade:63,forca:86,resistencia:91,defesa:82,cabeceio:68,reflexos:16,visao:70},
    {nome:"Vinícius Júnior",overall:88,finalizacao:89,passe:84,drible:96,velocidade:98,forca:74,resistencia:88,defesa:28,cabeceio:55,reflexos:12,visao:78},
    {nome:"Rodrygo",overall:84,finalizacao:84,passe:83,drible:91,velocidade:92,forca:71,resistencia:84,defesa:30,cabeceio:58,reflexos:12,visao:80},
    {nome:"Bruno Fernandes",overall:87,finalizacao:86,passe:94,drible:85,velocidade:77,forca:73,resistencia:91,defesa:45,cabeceio:60,reflexos:15,visao:92},
    {nome:"Alisson",overall:89,finalizacao:15,passe:87,drible:48,velocidade:55,forca:89,resistencia:93,defesa:55,cabeceio:38,reflexos:91,visao:68},
    {nome:"Virgil van Dijk",overall:88,finalizacao:61,passe:84,drible:68,velocidade:81,forca:96,resistencia:92,defesa:93,cabeceio:90,reflexos:40,visao:75},
    {nome:"Pelé",overall:99,finalizacao:98,passe:94,drible:97,velocidade:95,forca:83,resistencia:91,defesa:55,cabeceio:88,reflexos:30,visao:90},
    {nome:"Lionel Messi",overall:98,finalizacao:95,passe:98,drible:99,velocidade:93,forca:70,resistencia:88,defesa:33,cabeceio:60,reflexos:15,visao:96},
    {nome:"Cristiano Ronaldo",overall:98,finalizacao:98,passe:90,drible:94,velocidade:95,forca:96,resistencia:97,defesa:38,cabeceio:92,reflexos:20,visao:82},
    {nome:"Ronaldo Fenômeno",overall:97,finalizacao:99,passe:85,drible:96,velocidade:97,forca:94,resistencia:85,defesa:28,cabeceio:78,reflexos:14,visao:80},
    {nome:"Ronaldinho",overall:96,finalizacao:91,passe:95,drible:99,velocidade:89,forca:75,resistencia:86,defesa:38,cabeceio:65,reflexos:18,visao:95},
    {nome:"Neymar",overall:93,finalizacao:88,passe:89,drible:97,velocidade:90,forca:62,resistencia:80,defesa:25,cabeceio:55,reflexos:10,visao:88},
    {nome:"Kylian Mbappé",overall:91,finalizacao:90,passe:75,drible:92,velocidade:99,forca:72,resistencia:85,defesa:20,cabeceio:50,reflexos:10,visao:75},
    {nome:"Erling Haaland",overall:90,finalizacao:94,passe:58,drible:70,velocidade:90,forca:92,resistencia:87,defesa:18,cabeceio:85,reflexos:15,visao:55},
    {nome:"Kevin De Bruyne",overall:91,finalizacao:80,passe:96,drible:85,velocidade:75,forca:72,resistencia:86,defesa:40,cabeceio:55,reflexos:12,visao:97},
    {nome:"Mohamed Salah",overall:89,finalizacao:87,passe:78,drible:88,velocidade:91,forca:68,resistencia:85,defesa:25,cabeceio:60,reflexos:10,visao:78},
    {nome:"Robert Lewandowski",overall:90,finalizacao:93,passe:72,drible:75,velocidade:76,forca:82,resistencia:83,defesa:25,cabeceio:88,reflexos:14,visao:70},
    {nome:"Luka Modrić",overall:87,finalizacao:68,passe:93,drible:85,velocidade:70,forca:55,resistencia:85,defesa:50,cabeceio:48,reflexos:12,visao:94},
    {nome:"Toni Kroos",overall:87,finalizacao:65,passe:95,drible:78,velocidade:58,forca:60,resistencia:80,defesa:45,cabeceio:50,reflexos:10,visao:93},
    {nome:"Sergio Ramos",overall:88,finalizacao:60,passe:72,drible:55,velocidade:68,forca:88,resistencia:85,defesa:90,cabeceio:89,reflexos:30,visao:65},
    {nome:"Manuel Neuer",overall:88,finalizacao:10,passe:75,drible:40,velocidade:55,forca:82,resistencia:85,defesa:58,cabeceio:35,reflexos:94,visao:70},
    {nome:"Gianluigi Buffon",overall:90,finalizacao:8,passe:60,drible:30,velocidade:50,forca:80,resistencia:88,defesa:55,cabeceio:30,reflexos:96,visao:65},
    {nome:"Zinédine Zidane",overall:94,finalizacao:82,passe:93,drible:95,velocidade:75,forca:76,resistencia:85,defesa:45,cabeceio:68,reflexos:15,visao:96},
    {nome:"Kaká",overall:90,finalizacao:82,passe:86,drible:88,velocidade:87,forca:70,resistencia:83,defesa:30,cabeceio:60,reflexos:12,visao:88},
    {nome:"Zico",overall:91,finalizacao:86,passe:89,drible:90,velocidade:78,forca:65,resistencia:80,defesa:35,cabeceio:65,reflexos:12,visao:90},
    {nome:"Garrincha",overall:90,finalizacao:75,passe:70,drible:99,velocidade:92,forca:60,resistencia:75,defesa:20,cabeceio:45,reflexos:10,visao:70},
    {nome:"Romário",overall:93,finalizacao:95,passe:70,drible:85,velocidade:80,forca:68,resistencia:78,defesa:18,cabeceio:60,reflexos:10,visao:72},
    {nome:"Thiago Silva",overall:87,finalizacao:40,passe:78,drible:60,velocidade:70,forca:85,resistencia:86,defesa:92,cabeceio:85,reflexos:28,visao:75},
    {nome:"Marcelo",overall:86,finalizacao:55,passe:80,drible:88,velocidade:85,forca:65,resistencia:83,defesa:58,cabeceio:45,reflexos:10,visao:75},
    {nome:"Casemiro",overall:86,finalizacao:55,passe:78,drible:65,velocidade:68,forca:88,resistencia:87,defesa:88,cabeceio:70,reflexos:18,visao:75},
    {nome:"Antoine Griezmann",overall:88,finalizacao:83,passe:83,drible:85,velocidade:80,forca:65,resistencia:83,defesa:35,cabeceio:55,reflexos:10,visao:85},
    {nome:"Iniesta",overall:89,finalizacao:70,passe:92,drible:96,velocidade:68,forca:55,resistencia:82,defesa:35,cabeceio:45,reflexos:10,visao:95},
    {nome:"Xavi",overall:88,finalizacao:62,passe:97,drible:85,velocidade:60,forca:52,resistencia:80,defesa:40,cabeceio:40,reflexos:10,visao:97},
    {nome:"Ronald Koeman",overall:82,finalizacao:75,passe:80,drible:60,velocidade:62,forca:78,resistencia:78,defesa:78,cabeceio:75,reflexos:20,visao:72},
    {nome:"Paolo Maldini",overall:90,finalizacao:35,passe:75,drible:58,velocidade:75,forca:82,resistencia:88,defesa:95,cabeceio:80,reflexos:25,visao:70},
    {nome:"Franco Baresi",overall:88,finalizacao:30,passe:72,drible:55,velocidade:68,forca:80,resistencia:85,defesa:93,cabeceio:78,reflexos:22,visao:75},
    {nome:"Roberto Carlos",overall:87,finalizacao:58,passe:75,drible:80,velocidade:88,forca:80,resistencia:85,defesa:65,cabeceio:50,reflexos:15,visao:68},
    {nome:"Cafu",overall:85,finalizacao:45,passe:73,drible:75,velocidade:85,forca:75,resistencia:90,defesa:68,cabeceio:48,reflexos:15,visao:65},
    {nome:"Diego Fontana",overall:70,finalizacao:55,passe:70,drible:72,velocidade:60,forca:50,resistencia:65,defesa:35,cabeceio:40,reflexos:10,visao:68},
    {nome:"Sadio Mané",overall:88,finalizacao:85,passe:74,drible:87,velocidade:90,forca:68,resistencia:85,defesa:25,cabeceio:62,reflexos:10,visao:75},
    {nome:"Harry Kane",overall:89,finalizacao:91,passe:82,drible:70,velocidade:68,forca:78,resistencia:82,defesa:22,cabeceio:80,reflexos:12,visao:80},
    {nome:"Karim Benzema",overall:90,finalizacao:90,passe:80,drible:86,velocidade:75,forca:76,resistencia:80,defesa:22,cabeceio:82,reflexos:10,visao:83},
    {nome:"Andrea Pirlo",overall:87,finalizacao:65,passe:96,drible:75,velocidade:52,forca:58,resistencia:78,defesa:40,cabeceio:42,reflexos:10,visao:96},
    {nome:"Didier Drogba",overall:88,finalizacao:88,passe:70,drible:75,velocidade:74,forca:92,resistencia:82,defesa:22,cabeceio:90,reflexos:10,visao:70},
    {nome:"Ruud van Nistelrooy",overall:86,finalizacao:92,passe:65,drible:68,velocidade:72,forca:75,resistencia:78,defesa:15,cabeceio:78,reflexos:8,visao:65},
    {nome:"Xabi Alonso",overall:86,finalizacao:60,passe:93,drible:72,velocidade:55,forca:70,resistencia:82,defesa:60,cabeceio:55,reflexos:14,visao:90},
    {nome:"Iker Casillas",overall:89,finalizacao:10,passe:70,drible:35,velocidade:52,forca:75,resistencia:83,defesa:52,cabeceio:32,reflexos:93,visao:68},
    {nome:"Petr Čech",overall:87,finalizacao:8,passe:68,drible:30,velocidade:48,forca:78,resistencia:82,defesa:50,cabeceio:35,reflexos:92,visao:65},
    {nome:"David Silva",overall:87,finalizacao:73,passe:91,drible:88,velocidade:65,forca:52,resistencia:78,defesa:38,cabeceio:42,reflexos:10,visao:92},
    {nome:"Riquelme",overall:86,finalizacao:75,passe:90,drible:88,velocidade:48,forca:55,resistencia:70,defesa:30,cabeceio:45,reflexos:10,visao:93},
        // ==================== LENDAS ====================

    {nome:"Diego Maradona",overall:97,finalizacao:94,passe:96,drible:99,velocidade:88,forca:72,resistencia:82,defesa:25,cabeceio:55,reflexos:10,visao:99},
    {nome:"Johan Cruyff",overall:96,finalizacao:91,passe:95,drible:96,velocidade:92,forca:70,resistencia:90,defesa:35,cabeceio:62,reflexos:10,visao:98},
    {nome:"Franz Beckenbauer",overall:94,finalizacao:55,passe:93,drible:78,velocidade:78,forca:82,resistencia:90,defesa:95,cabeceio:78,reflexos:25,visao:96},
    {nome:"Alfredo Di Stéfano",overall:95,finalizacao:94,passe:91,drible:91,velocidade:90,forca:80,resistencia:96,defesa:55,cabeceio:75,reflexos:10,visao:95},
    {nome:"Ferenc Puskás",overall:94,finalizacao:99,passe:88,drible:89,velocidade:82,forca:78,resistencia:85,defesa:20,cabeceio:70,reflexos:10,visao:88},
    {nome:"Gerd Müller",overall:93,finalizacao:99,passe:68,drible:82,velocidade:85,forca:75,resistencia:82,defesa:15,cabeceio:88,reflexos:10,visao:75},
    {nome:"Eusébio",overall:94,finalizacao:98,passe:80,drible:94,velocidade:96,forca:78,resistencia:90,defesa:20,cabeceio:75,reflexos:10,visao:85},
    {nome:"Marco van Basten",overall:94,finalizacao:97,passe:82,drible:88,velocidade:80,forca:80,resistencia:78,defesa:18,cabeceio:94,reflexos:10,visao:88},
    {nome:"George Best",overall:93,finalizacao:90,passe:82,drible:98,velocidade:94,forca:65,resistencia:82,defesa:20,cabeceio:48,reflexos:10,visao:85},
    {nome:"Michel Platini",overall:94,finalizacao:92,passe:96,drible:88,velocidade:72,forca:65,resistencia:82,defesa:25,cabeceio:55,reflexos:10,visao:99},
    {nome:"Bobby Charlton",overall:92,finalizacao:91,passe:90,drible:80,velocidade:78,forca:72,resistencia:88,defesa:35,cabeceio:62,reflexos:10,visao:90},
    {nome:"Lothar Matthäus",overall:93,finalizacao:85,passe:91,drible:83,velocidade:88,forca:88,resistencia:95,defesa:75,cabeceio:65,reflexos:10,visao:90},
    {nome:"Ruud Gullit",overall:92,finalizacao:86,passe:88,drible:85,velocidade:87,forca:92,resistencia:93,defesa:65,cabeceio:82,reflexos:10,visao:88},
    {nome:"Roberto Baggio",overall:93,finalizacao:91,passe:94,drible:95,velocidade:82,forca:58,resistencia:75,defesa:20,cabeceio:45,reflexos:10,visao:98},
    {nome:"George Weah",overall:92,finalizacao:93,passe:75,drible:92,velocidade:96,forca:90,resistencia:88,defesa:20,cabeceio:72,reflexos:10,visao:78},
    {nome:"Sócrates",overall:90,finalizacao:82,passe:94,drible:80,velocidade:55,forca:78,resistencia:75,defesa:35,cabeceio:72,reflexos:10,visao:96},
    {nome:"Falcão",overall:91,finalizacao:80,passe:95,drible:90,velocidade:72,forca:70,resistencia:85,defesa:48,cabeceio:55,reflexos:10,visao:97},
    {nome:"Jairzinho",overall:92,finalizacao:91,passe:80,drible:91,velocidade:94,forca:84,resistencia:88,defesa:22,cabeceio:78,reflexos:10,visao:82},
    {nome:"Tostão",overall:90,finalizacao:88,passe:90,drible:88,velocidade:78,forca:58,resistencia:75,defesa:18,cabeceio:55,reflexos:10,visao:92},
    {nome:"Bebeto",overall:89,finalizacao:91,passe:75,drible:87,velocidade:88,forca:68,resistencia:80,defesa:18,cabeceio:65,reflexos:10,visao:78},
    {nome:"Adriano Imperador",overall:91,finalizacao:94,passe:78,drible:85,velocidade:88,forca:96,resistencia:82,defesa:20,cabeceio:78,reflexos:10,visao:82},
    {nome:"Rivaldo",overall:93,finalizacao:92,passe:90,drible:91,velocidade:78,forca:75,resistencia:82,defesa:25,cabeceio:72,reflexos:10,visao:93},
    {nome:"Dida",overall:88,finalizacao:8,passe:65,drible:30,velocidade:48,forca:82,resistencia:85,defesa:55,cabeceio:30,reflexos:95,visao:65},
    {nome:"Lúcio",overall:88,finalizacao:45,passe:72,drible:62,velocidade:84,forca:95,resistencia:90,defesa:92,cabeceio:82,reflexos:25,visao:68},
    {nome:"Carlos Alberto",overall:88,finalizacao:55,passe:85,drible:82,velocidade:88,forca:80,resistencia:90,defesa:78,cabeceio:55,reflexos:15,visao:85},

    // ==================== BONS ====================

    {nome:"Pedro",overall:82,finalizacao:91,passe:68,drible:76,velocidade:68,forca:79,resistencia:80,defesa:20,cabeceio:87,reflexos:10,visao:72},
    {nome:"Arrascaeta",overall:87,finalizacao:82,passe:91,drible:91,velocidade:73,forca:62,resistencia:78,defesa:35,cabeceio:48,reflexos:10,visao:94},
    {nome:"Gerson",overall:82,finalizacao:70,passe:86,drible:82,velocidade:75,forca:83,resistencia:88,defesa:55,cabeceio:58,reflexos:12,visao:85},
    {nome:"Bruno Henrique",overall:81,finalizacao:84,passe:65,drible:82,velocidade:94,forca:72,resistencia:78,defesa:20,cabeceio:68,reflexos:10,visao:62},
    {nome:"Raphinha",overall:88,finalizacao:87,passe:82,drible:91,velocidade:93,forca:70,resistencia:88,defesa:32,cabeceio:45,reflexos:10,visao:83},
    {nome:"Lamine Yamal",overall:89,finalizacao:84,passe:90,drible:96,velocidade:91,forca:58,resistencia:82,defesa:25,cabeceio:42,reflexos:10,visao:94},
    {nome:"Eden Hazard",overall:91,finalizacao:88,passe:86,drible:96,velocidade:88,forca:68,resistencia:78,defesa:22,cabeceio:40,reflexos:10,visao:88},
    {nome:"Riyad Mahrez",overall:87,finalizacao:84,passe:86,drible:94,velocidade:82,forca:60,resistencia:78,defesa:25,cabeceio:42,reflexos:10,visao:88},
    {nome:"Luis Suárez",overall:94,finalizacao:97,passe:85,drible:89,velocidade:78,forca:85,resistencia:82,defesa:20,cabeceio:75,reflexos:10,visao:88},
    {nome:"Zlatan Ibrahimović",overall:91,finalizacao:94,passe:78,drible:82,velocidade:68,forca:96,resistencia:75,defesa:18,cabeceio:94,reflexos:10,visao:85},
    {nome:"Thierry Henry",overall:94,finalizacao:95,passe:87,drible:94,velocidade:96,forca:82,resistencia:88,defesa:18,cabeceio:70,reflexos:10,visao:86},
    {nome:"Wayne Rooney",overall:91,finalizacao:91,passe:85,drible:84,velocidade:80,forca:82,resistencia:88,defesa:28,cabeceio:72,reflexos:10,visao:88},
    {nome:"Sergio Agüero",overall:91,finalizacao:94,passe:78,drible:91,velocidade:88,forca:68,resistencia:78,defesa:18,cabeceio:50,reflexos:10,visao:82},
    {nome:"David Villa",overall:90,finalizacao:94,passe:78,drible:88,velocidade:85,forca:68,resistencia:82,defesa:20,cabeceio:55,reflexos:10,visao:82},
    {nome:"Fernando Torres",overall:89,finalizacao:91,passe:68,drible:82,velocidade:93,forca:80,resistencia:78,defesa:18,cabeceio:72,reflexos:10,visao:70},
    {nome:"Michael Owen",overall:88,finalizacao:91,passe:65,drible:82,velocidade:98,forca:62,resistencia:75,defesa:15,cabeceio:58,reflexos:10,visao:68},
    {nome:"Steven Gerrard",overall:89,finalizacao:82,passe:91,drible:80,velocidade:75,forca:82,resistencia:88,defesa:55,cabeceio:60,reflexos:12,visao:90},
    {nome:"Frank Lampard",overall:88,finalizacao:88,passe:86,drible:72,velocidade:68,forca:70,resistencia:90,defesa:42,cabeceio:58,reflexos:10,visao:85},
    {nome:"Paul Scholes",overall:88,finalizacao:80,passe:94,drible:70,velocidade:58,forca:65,resistencia:78,defesa:48,cabeceio:55,reflexos:10,visao:95},
    {nome:"Clarence Seedorf",overall:89,finalizacao:78,passe:91,drible:82,velocidade:70,forca:88,resistencia:90,defesa:45,cabeceio:55,reflexos:10,visao:90},
    {nome:"Patrick Vieira",overall:89,finalizacao:60,passe:82,drible:75,velocidade:78,forca:94,resistencia:92,defesa:88,cabeceio:72,reflexos:15,visao:82},
    {nome:"Yaya Touré",overall:89,finalizacao:82,passe:86,drible:82,velocidade:80,forca:95,resistencia:88,defesa:65,cabeceio:68,reflexos:10,visao:85},
    {nome:"Thiago Alcântara",overall:88,finalizacao:68,passe:96,drible:92,velocidade:65,forca:58,resistencia:75,defesa:35,cabeceio:42,reflexos:10,visao:98},
    {nome:"Javier Zanetti",overall:87,finalizacao:45,passe:82,drible:75,velocidade:82,forca:75,resistencia:96,defesa:82,cabeceio:45,reflexos:15,visao:78},
    {nome:"Oliver Kahn",overall:90,finalizacao:8,passe:65,drible:30,velocidade:48,forca:85,resistencia:88,defesa:55,cabeceio:30,reflexos:97,visao:65},

    // ==================== MEDIANOS ====================

    {nome:"João Pedro",overall:76,finalizacao:78,passe:65,drible:78,velocidade:78,forca:65,resistencia:78,defesa:18,cabeceio:55,reflexos:10,visao:70},
    {nome:"Matheus Cunha",overall:79,finalizacao:82,passe:72,drible:78,velocidade:82,forca:75,resistencia:80,defesa:25,cabeceio:65,reflexos:10,visao:75},
    {nome:"Gabriel Martinelli",overall:80,finalizacao:82,passe:62,drible:84,velocidade:94,forca:70,resistencia:85,defesa:28,cabeceio:45,reflexos:10,visao:60},
    {nome:"Antony",overall:78,finalizacao:72,passe:70,drible:85,velocidade:86,forca:58,resistencia:78,defesa:20,cabeceio:35,reflexos:10,visao:72},
    {nome:"Lucas Moura",overall:79,finalizacao:75,passe:65,drible:84,velocidade:90,forca:68,resistencia:82,defesa:25,cabeceio:45,reflexos:10,visao:65},
    {nome:"Willian",overall:78,finalizacao:72,passe:75,drible:84,velocidade:85,forca:60,resistencia:78,defesa:25,cabeceio:40,reflexos:10,visao:78},
    {nome:"Oscar",overall:80,finalizacao:70,passe:85,drible:82,velocidade:65,forca:60,resistencia:78,defesa:30,cabeceio:45,reflexos:10,visao:88},
    {nome:"Fred",overall:78,finalizacao:55,passe:75,drible:65,velocidade:68,forca:80,resistencia:88,defesa:72,cabeceio:55,reflexos:10,visao:72},
    {nome:"Paulinho",overall:80,finalizacao:72,passe:75,drible:68,velocidade:72,forca:82,resistencia:90,defesa:68,cabeceio:72,reflexos:10,visao:75},
    {nome:"Renato Augusto",overall:82,finalizacao:72,passe:88,drible:78,velocidade:58,forca:68,resistencia:70,defesa:35,cabeceio:45,reflexos:10,visao:90},
    {nome:"Lucas Leiva",overall:76,finalizacao:45,passe:78,drible:60,velocidade:58,forca:80,resistencia:85,defesa:78,cabeceio:55,reflexos:12,visao:75},
    {nome:"Fernandinho",overall:82,finalizacao:45,passe:85,drible:65,velocidade:62,forca:82,resistencia:88,defesa:88,cabeceio:55,reflexos:10,visao:82},
    {nome:"Alex Sandro",overall:78,finalizacao:35,passe:72,drible:72,velocidade:78,forca:78,resistencia:80,defesa:78,cabeceio:50,reflexos:15,visao:68},
    {nome:"Danilo",overall:80,finalizacao:40,passe:78,drible:70,velocidade:75,forca:78,resistencia:88,defesa:82,cabeceio:55,reflexos:15,visao:72},
    {nome:"Filipe Luís",overall:81,finalizacao:35,passe:82,drible:75,velocidade:72,forca:68,resistencia:82,defesa:85,cabeceio:45,reflexos:15,visao:80},
    {nome:"Miranda",overall:82,finalizacao:30,passe:72,drible:45,velocidade:65,forca:88,resistencia:82,defesa:90,cabeceio:82,reflexos:25,visao:68},
    {nome:"Juan",overall:81,finalizacao:25,passe:70,drible:42,velocidade:62,forca:82,resistencia:80,defesa:91,cabeceio:85,reflexos:20,visao:65},
    {nome:"Júlio César",overall:84,finalizacao:8,passe:65,drible:30,velocidade:48,forca:80,resistencia:85,defesa:55,cabeceio:30,reflexos:94,visao:65},
    {nome:"Maicon",overall:82,finalizacao:55,passe:78,drible:78,velocidade:85,forca:82,resistencia:88,defesa:72,cabeceio:50,reflexos:15,visao:75},
    {nome:"Taison",overall:77,finalizacao:72,passe:65,drible:80,velocidade:88,forca:60,resistencia:75,defesa:20,cabeceio:40,reflexos:10,visao:65},
    {nome:"Djalminha",overall:85,finalizacao:78,passe:88,drible:92,velocidade:68,forca:55,resistencia:72,defesa:20,cabeceio:40,reflexos:10,visao:94},
    {nome:"Juninho Pernambucano",overall:86,finalizacao:72,passe:92,drible:75,velocidade:55,forca:62,resistencia:78,defesa:35,cabeceio:42,reflexos:10,visao:94},
    {nome:"Zé Roberto",overall:84,finalizacao:60,passe:85,drible:82,velocidade:78,forca:75,resistencia:95,defesa:58,cabeceio:45,reflexos:10,visao:85},
    {nome:"Marlos",overall:74,finalizacao:65,passe:70,drible:80,velocidade:72,forca:55,resistencia:72,defesa:20,cabeceio:40,reflexos:10,visao:70},
    {nome:"Neilton",overall:68,finalizacao:60,passe:58,drible:78,velocidade:84,forca:50,resistencia:65,defesa:18,cabeceio:35,reflexos:10,visao:55},

    // ==================== NIVEL BAIXO ====================

    {nome:"Rômulo",overall:70,finalizacao:45,passe:62,drible:55,velocidade:58,forca:78,resistencia:80,defesa:65,cabeceio:50,reflexos:10,visao:60},
    {nome:"Alanzinho",overall:67,finalizacao:55,passe:65,drible:76,velocidade:72,forca:48,resistencia:65,defesa:20,cabeceio:35,reflexos:10,visao:70},
    {nome:"Vitinho",overall:69,finalizacao:60,passe:58,drible:75,velocidade:82,forca:50,resistencia:68,defesa:20,cabeceio:35,reflexos:10,visao:55},
    {nome:"Luan",overall:71,finalizacao:65,passe:68,drible:72,velocidade:60,forca:55,resistencia:62,defesa:20,cabeceio:40,reflexos:10,visao:72},
    {nome:"Matheus Sávio",overall:70,finalizacao:55,passe:65,drible:70,velocidade:72,forca:50,resistencia:65,defesa:20,cabeceio:35,reflexos:10,visao:68},
    {nome:"Nathan",overall:68,finalizacao:45,passe:62,drible:65,velocidade:58,forca:55,resistencia:70,defesa:25,cabeceio:40,reflexos:10,visao:60},
    {nome:"Lucas Piazon",overall:69,finalizacao:58,passe:68,drible:68,velocidade:62,forca:52,resistencia:65,defesa:18,cabeceio:35,reflexos:10,visao:72},
    {nome:"Gabriel Pirani",overall:67,finalizacao:48,passe:65,drible:70,velocidade:70,forca:48,resistencia:62,defesa:20,cabeceio:30,reflexos:10,visao:65},
    {nome:"Thonny Anderson",overall:66,finalizacao:52,passe:58,drible:68,velocidade:65,forca:55,resistencia:60,defesa:18,cabeceio:35,reflexos:10,visao:58},
    {nome:"Yago Pikachu",overall:73,finalizacao:55,passe:65,drible:70,velocidade:78,forca:55,resistencia:80,defesa:42,cabeceio:35,reflexos:10,visao:62},
    {nome:"Zeca",overall:70,finalizacao:30,passe:65,drible:65,velocidade:75,forca:58,resistencia:70,defesa:55,cabeceio:35,reflexos:15,visao:58},
    {nome:"Dodô",overall:71,finalizacao:35,passe:68,drible:72,velocidade:78,forca:55,resistencia:72,defesa:48,cabeceio:35,reflexos:15,visao:62},
    {nome:"Marcelo Hermes",overall:65,finalizacao:30,passe:58,drible:55,velocidade:65,forca:55,resistencia:65,defesa:45,cabeceio:35,reflexos:15,visao:50},
    {nome:"Léo Duarte",overall:72,finalizacao:25,passe:60,drible:35,velocidade:65,forca:75,resistencia:72,defesa:75,cabeceio:65,reflexos:20,visao:55},
    {nome:"Wallace",overall:70,finalizacao:25,passe:55,drible:30,velocidade:58,forca:78,resistencia:70,defesa:72,cabeceio:70,reflexos:20,visao:50},
    {nome:"Natan",overall:68,finalizacao:25,passe:55,drible:35,velocidade:68,forca:72,resistencia:68,defesa:70,cabeceio:58,reflexos:20,visao:52},
    {nome:"Bruno Viana",overall:67,finalizacao:20,passe:52,drible:30,velocidade:55,forca:75,resistencia:65,defesa:68,cabeceio:65,reflexos:20,visao:45},
    {nome:"Alan Empereur",overall:66,finalizacao:20,passe:50,drible:28,velocidade:52,forca:78,resistencia:68,defesa:70,cabeceio:62,reflexos:20,visao:42},
    {nome:"Caíque França",overall:70,finalizacao:5,passe:55,drible:20,velocidade:42,forca:65,resistencia:70,defesa:45,cabeceio:25,reflexos:78,visao:45},
    {nome:"Richard",overall:68,finalizacao:5,passe:50,drible:20,velocidade:40,forca:65,resistencia:68,defesa:42,cabeceio:25,reflexos:75,visao:42},
    {nome:"Matheus Cavichioli",overall:69,finalizacao:5,passe:52,drible:20,velocidade:40,forca:68,resistencia:70,defesa:45,cabeceio:25,reflexos:76,visao:45},
    {nome:"Jean",overall:67,finalizacao:5,passe:48,drible:20,velocidade:38,forca:65,resistencia:65,defesa:40,cabeceio:25,reflexos:73,visao:40},
    {nome:"Felipe Alves",overall:68,finalizacao:5,passe:50,drible:20,velocidade:40,forca:68,resistencia:68,defesa:42,cabeceio:25,reflexos:74,visao:42},
    {nome:"Rafael",overall:65,finalizacao:5,passe:45,drible:18,velocidade:38,forca:60,resistencia:62,defesa:38,cabeceio:25,reflexos:70,visao:35},
    {nome:"Matheus Teixeira",overall:64,finalizacao:5,passe:45,drible:18,velocidade:36,forca:58,resistencia:60,defesa:35,cabeceio:25,reflexos:68,visao:35},
];

const DATABASE_URL = "https://raw.githubusercontent.com/thompgt/fc26-player-analysis/refs/heads/master/data/processed/players_fc26_clean.csv";
let bancoJogadores = [];
let elencoPorClube = Object.create(null);
let bancoStatus = "carregando";

function normalizarTexto(s){
    return String(s||"")
        .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
        .toLowerCase().replace(/[^a-z0-9]/g,"");
}

// O banco externo usa nomes ligeiramente diferentes dos nomes exibidos no jogo.
const ALIAS_BANCO = {
    "flamengo":"flamengo",
    "palmeiras":"palmeiras",
    "atleticomg":"atletico mineiro",
    "atleticodemadrid":"atletico madrid",
    "barcelona":"fc barcelona",
    "realmadrid":"real madrid cf",
    "interdemilao":"inter",
    "milan":"ac milan",
    "juventus":"juventus",
    "napoli":"napoli",
    "rom a":"as roma",
    "roma":"as roma",
    "lazio":"lazio",
    "parissaintgermain":"paris saint-germain",
    "bayernmunique":"fc bayern munchen",
    "bayerleverkusen":"bayer 04 leverkusen",
    "borussiadortmund":"borussia dortmund",
    "manchestercity":"manchester city",
    "manchesterunited":"manchester united",
    "tottenham":"tottenham hotspur",
    "newcastle":"newcastle united",
    "astonvilla":"aston villa",
    "westham":"west ham united",
    "liverpool":"liverpool",
    "arsenal":"arsenal",
    "chelsea":"chelsea",
    "interdemilao":"inter",
    "braga":"sc braga",
    "benfica":"sl benfica",
    "porto":"fc porto",
    "monaco":"as monaco",
    "marseille":"olympique de marseille",
    "lyon":"olympique lyon",
    "lille":"losc lille",
    "nice":"ogc nice",
    "sporting":"sporting cp"
};

function chaveClubeBanco(nome){
    const n=normalizarTexto(nome);
    return normalizarTexto(ALIAS_BANCO[n] || nome);
}

function parseCSV(text){
    const rows=[]; let row=[]; let cell=""; let quoted=false;
    for(let i=0;i<text.length;i++){
        const ch=text[i];
        if(ch==='"'){
            if(quoted && text[i+1]==='"'){cell+='"';i++;}
            else quoted=!quoted;
        }else if(ch===',' && !quoted){row.push(cell);cell="";}
        else if((ch==='\n'||ch==='\r')&&!quoted){
            if(ch==='\r'&&text[i+1]==='\n')i++;
            row.push(cell);cell="";
            if(row.length){rows.push(row);row=[];}
        }else cell+=ch;
    }
    if(cell!==""||row.length){row.push(cell);rows.push(row);}
    if(!rows.length)return [];
    const headers=rows[0].map(h=>String(h||"").trim());
    return rows.slice(1).filter(r=>r.length===headers.length).map(r=>{
        const o={};headers.forEach((h,i)=>o[h]=r[i]);return o;
    });
}

function converterBanco(r){
    return {
        id:String(r.player_id||r.sofifa_id||""),
        nome:r.short_name||r.long_name||"Jogador",
        nomeCompleto:r.long_name||r.short_name||"Jogador",
        clube:r.club_name||"",
        clubeKey:chaveClubeBanco(r.club_name||""),
        posicao:String(r.player_positions||"").split(",")[0].trim().toUpperCase(),
        overall:Number(r.overall)||0,
        potencial:Number(r.potential)||Number(r.overall)||0,
        idade:Number(r.age)||0,
        nacionalidade:r.nationality_name||"",
        valor:Number(r.value_eur)||0,
        salario:Number(r.wage_eur)||0
    };
}

function reconstruirIndiceElencos(){
    elencoPorClube=Object.create(null);
    bancoJogadores.forEach(p=>{
        if(!p.clubeKey)return;
        if(!elencoPorClube[p.clubeKey])elencoPorClube[p.clubeKey]=[];
        elencoPorClube[p.clubeKey].push(p);
    });
    Object.values(elencoPorClube).forEach(arr=>arr.sort((a,b)=>b.overall-a.overall));
}

function tokensClube(nome){
    return normalizarTexto(nome).match(/[a-z0-9]{3,}/g)||[];
}

function encontrarChaveBancoFlexivel(nome){
    const direta=chaveClubeBanco(nome);
    if(elencoPorClube[normalizarTexto(direta)])return normalizarTexto(direta);
    if(elencoPorClube[direta])return direta;

    const alvo=tokensClube(nome);
    let melhor=null, melhorScore=0;
    for(const key of Object.keys(elencoPorClube)){
        const ks=tokensClube(key);
        let score=0;
        alvo.forEach(t=>{if(ks.some(k=>k.includes(t)||t.includes(k)))score++;});
        if(score>melhorScore){melhorScore=score;melhor=key;}
    }
    return melhorScore>=Math.min(2,alvo.length)?melhor:null;
}

function getElencoClube(nome){
    const k=encontrarChaveBancoFlexivel(nome);
    return k ? (elencoPorClube[k]||[]) : [];
}

function nomePosicaoBanco(pos){
    const p=String(pos||"").toUpperCase();
    if(p.includes("GK"))return "Goleiro";
    if(p.includes("CB"))return "Zagueiro";
    if(p.includes("LB")||p.includes("RB")||p.includes("WB"))return "Lateral";
    if(p.includes("CDM"))return "Volante";
    if(p.includes("CM")||p.includes("CAM"))return "Meia";
    if(p.includes("LW")||p.includes("RW")||p.includes("LM")||p.includes("RM"))return "Ponta";
    if(p.includes("ST")||p.includes("CF"))return "Atacante";
    return pos||"Jogador";
}

function posicoesCompativeis(sigla){
    return {
        GOL:["GK"],ZAG:["CB"],LAT:["LB","RB","LWB","RWB"],VOL:["CDM"],
        MEI:["CM","CAM"],PON:["LW","RW","LM","RM"],ATA:["ST","CF"]
    }[sigla]||[];
}

async function carregarBancoElencos(){
    try{
        const resp=await fetch(DATABASE_URL,{cache:"no-cache"});
        if(!resp.ok)throw new Error("HTTP "+resp.status);
        const csv=await resp.text();
        bancoJogadores=parseCSV(csv).map(converterBanco).filter(p=>p.clube);
        reconstruirIndiceElencos();
        bancoStatus="ok";
        console.log(`Career Mode: ${bancoJogadores.length} jogadores carregados.`);
        if(window.jogador&&jogador.clube)mostrarHub();
    }catch(e){
        console.warn("Falha ao carregar banco de elencos:",e);
        bancoStatus="erro";
        if(window.jogador&&jogador.clube)mostrarHub();
    }
}
