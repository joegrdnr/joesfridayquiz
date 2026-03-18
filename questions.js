// ============================================================
// JOE'S FRIDAY QUIZ — QUESTION DATABASE
// ============================================================
// Images use Unsplash Source API — freely hotlinkable, no CORS issues.
// Format: https://source.unsplash.com/featured/?keyword,keyword
//
// To add questions, copy the format below and add to the array.
// Keep 15+ questions per category for good weekly rotation.
//
// answer: index of correct option (0=A, 1=B, 2=C, 3=D)
// ============================================================

const QUESTIONS = {

  // ──────────────────────────────────────────────────────────
  "General Knowledge": [
    {
      question: "How many pockets does a standard snooker table have?",
      options: ["4", "5", "6", "8"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?snooker,pool,table"
    },
    {
      question: "How many dots are there in total on a standard pair of dice?",
      options: ["40", "42", "44", "46"],
      answer: 1,
      image: "https://source.unsplash.com/featured/?dice,game"
    },
    {
      question: "Which country has the most natural lakes in the world?",
      options: ["Russia", "Finland", "USA", "Canada"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?lake,canada,nature"
    },
    {
      question: "What number does the Roman numeral 'D' represent?",
      options: ["100", "400", "500", "1000"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?roman,ancient,history"
    },
    {
      question: "How many teeth does an adult human have, including wisdom teeth?",
      options: ["28", "30", "32", "34"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?dentist,teeth,smile"
    },
    {
      question: "What is the capital of New Zealand?",
      options: ["Auckland", "Christchurch", "Queenstown", "Wellington"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?wellington,new,zealand"
    },
    {
      question: "Which planet spins on its side with an axial tilt of about 98 degrees?",
      options: ["Saturn", "Neptune", "Uranus", "Jupiter"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?planet,space,solar"
    },
    {
      question: "How long is a standard Olympic swimming pool?",
      options: ["25 metres", "40 metres", "50 metres", "100 metres"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?swimming,pool,olympic"
    },
    {
      question: "On a standard keyboard, which letter sits between Z and C?",
      options: ["A", "X", "V", "B"],
      answer: 1,
      image: "https://source.unsplash.com/featured/?keyboard,typing,computer"
    },
    {
      question: "What is the most common street name in the UK?",
      options: ["Victoria Road", "Church Lane", "High Street", "Park Avenue"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?uk,street,britain"
    },
    {
      question: "Which language has the most words?",
      options: ["Mandarin", "Spanish", "French", "English"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?language,books,words"
    },
    {
      question: "What shape is a standard stop sign?",
      options: ["Hexagon", "Pentagon", "Octagon", "Heptagon"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?stop,sign,road"
    },
    {
      question: "The World Wide Web was invented by Sir Tim Berners-Lee while working in which country?",
      options: ["UK", "USA", "Germany", "Switzerland"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?internet,computer,technology"
    },
    {
      question: "What is the only mammal capable of true sustained flight?",
      options: ["Flying squirrel", "Sugar glider", "Bat", "Colugo"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?bat,mammal,night"
    },
    {
      question: "How many sides does a standard 50p coin have?",
      options: ["5", "6", "7", "8"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?coin,money,british"
    }
  ],

  // ──────────────────────────────────────────────────────────
  "Sport": [
    {
      question: "Which footballer has won the most Ballon d'Or awards?",
      options: ["Cristiano Ronaldo", "Lionel Messi", "Ronaldinho", "Zinedine Zidane"],
      answer: 1,
      image: "https://source.unsplash.com/featured/?football,soccer,trophy"
    },
    {
      question: "In darts, what is the highest possible score with three darts?",
      options: ["150", "160", "170", "180"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?darts,dartboard,game"
    },
    {
      question: "Which club has won the most Premier League titles?",
      options: ["Arsenal", "Chelsea", "Liverpool", "Manchester United"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?premier,league,football"
    },
    {
      question: "Which golfer is nicknamed 'The Big Easy'?",
      options: ["Retief Goosen", "Ernie Els", "Trevor Immelman", "Louis Oosthuizen"],
      answer: 1,
      image: "https://source.unsplash.com/featured/?golf,course,green"
    },
    {
      question: "England's all-time record men's goal scorer — who is it?",
      options: ["Wayne Rooney", "Michael Owen", "Bobby Charlton", "Harry Kane"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?england,football,goal"
    },
    {
      question: "Which country is Formula 1 driver Max Verstappen from?",
      options: ["Belgium", "Germany", "Austria", "Netherlands"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?formula,racing,car"
    },
    {
      question: "What colour jersey does the leader of the Tour de France wear?",
      options: ["Red", "White", "Green", "Yellow"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?tour,france,cycling"
    },
    {
      question: "Which sport uses a shuttlecock?",
      options: ["Squash", "Badminton", "Racquetball", "Padel"],
      answer: 1,
      image: "https://source.unsplash.com/featured/?badminton,shuttlecock,sport"
    },
    {
      question: "At which ground do Yorkshire play their home cricket matches?",
      options: ["Edgbaston", "Old Trafford", "Headingley", "Trent Bridge"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?cricket,ground,stadium"
    },
    {
      question: "Which country won the 2023 Rugby World Cup?",
      options: ["Ireland", "Argentina", "New Zealand", "South Africa"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?rugby,world,cup"
    },
    {
      question: "Norway topped the medal table at the 2026 Milan Cortina Winter Olympics — how many gold medals did they win?",
      options: ["11", "13", "15", "17"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?winter,olympics,skiing"
    },
    {
      question: "Which team won men's ice hockey gold at the 2026 Winter Olympics?",
      options: ["Canada", "Sweden", "Finland", "USA"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?ice,hockey,winter"
    },
    {
      question: "How many Grand Slam tennis tournaments are played each year?",
      options: ["2", "3", "4", "5"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?tennis,grand,slam"
    },
    {
      question: "In which sport would you perform a slam dunk?",
      options: ["Volleyball", "Netball", "Basketball", "Handball"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?basketball,dunk,hoop"
    },
    {
      question: "How many players are on the pitch at once in a rugby union match (both teams combined)?",
      options: ["26", "28", "30", "32"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?rugby,union,pitch"
    }
  ],

  // ──────────────────────────────────────────────────────────
  "Music": [
    {
      question: "Kendrick Lamar won Record of the Year at the 2026 Grammys for which song (with SZA)?",
      options: ["Not Like Us", "Luther", "Peekaboo", "tv off"],
      answer: 1,
      image: "https://source.unsplash.com/featured/?grammy,music,award"
    },
    {
      question: "Lady Gaga won Best Pop Solo Performance at the 2026 Grammys for which track from 'Mayhem'?",
      options: ["Disease", "Abracadabra", "Vanish Into You", "Perfect Celebrity"],
      answer: 1,
      image: "https://source.unsplash.com/featured/?pop,music,concert"
    },
    {
      question: "Who sang the Bond theme for Skyfall in 2012?",
      options: ["Shirley Bassey", "Sam Smith", "Adele", "Billie Eilish"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?james,bond,cinema"
    },
    {
      question: "Which Irish rock band has members Bono, The Edge, Adam Clayton and Larry Mullen Jr.?",
      options: ["The Pogues", "Thin Lizzy", "U2", "Snow Patrol"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?rock,band,concert"
    },
    {
      question: "Who was the lead singer of The Doors?",
      options: ["Mick Jagger", "Roger Waters", "Jim Morrison", "Iggy Pop"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?rock,music,60s"
    },
    {
      question: "What instrument does Dave Grohl primarily play in Foo Fighters?",
      options: ["Bass", "Drums", "Guitar", "Keyboard"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?guitar,rock,band"
    },
    {
      question: "Which city is known as Motown — home of a legendary record label?",
      options: ["Chicago", "Atlanta", "Memphis", "Detroit"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?detroit,city,music"
    },
    {
      question: "How many strings does a standard violin have?",
      options: ["3", "4", "5", "6"],
      answer: 1,
      image: "https://source.unsplash.com/featured/?violin,strings,classical"
    },
    {
      question: "Glastonbury Festival is held in which English county?",
      options: ["Devon", "Dorset", "Wiltshire", "Somerset"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?glastonbury,festival,music"
    },
    {
      question: "Which decade did hip-hop originate in?",
      options: ["1960s", "1970s", "1980s", "1990s"],
      answer: 1,
      image: "https://source.unsplash.com/featured/?hiphop,rap,music"
    },
    {
      question: "In music, how many semitones are there in an octave?",
      options: ["8", "10", "12", "14"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?piano,keys,music"
    },
    {
      question: "What was the UK's first number one single of the new millennium?",
      options: ["Pure Shores – All Saints", "Bag It Up – Geri Halliwell", "Can We Fix It? – Bob the Builder", "Stan – Eminem"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?millennium,music,2000"
    },
    {
      question: "Billie Eilish won Song of the Year at the 2026 Grammys for which track?",
      options: ["Lunch", "Birds of a Feather", "Wildflower", "Chihiro"],
      answer: 1,
      image: "https://source.unsplash.com/featured/?singer,songwriter,award"
    },
    {
      question: "Which artist holds the record for the most weeks at number one on the UK singles chart?",
      options: ["Ed Sheeran", "Elvis Presley", "Wet Wet Wet", "Bryan Adams"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?chart,record,music"
    },
    {
      question: "What is the best-selling physical music format of all time?",
      options: ["Vinyl record", "Cassette tape", "CD", "8-track"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?cd,music,album"
    }
  ],

  // ──────────────────────────────────────────────────────────
  "Film & TV": [
    {
      question: "Which Netflix show is set in the fictional town of Hawkins, Indiana?",
      options: ["Dark", "The OA", "Stranger Things", "Wayward Pines"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?netflix,tv,show"
    },
    {
      question: "Who plays Tyrion Lannister in Game of Thrones?",
      options: ["Conleth Hill", "Liam Cunningham", "Peter Dinklage", "Nikolaj Coster-Waldau"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?medieval,castle,fantasy"
    },
    {
      question: "In the UK version of The Office, what is the name of David Brent's company?",
      options: ["Wernham Hogg", "Dunder Mifflin", "Initech", "Sabre"],
      answer: 0,
      image: "https://source.unsplash.com/featured/?office,workplace,desk"
    },
    {
      question: "Which film became the first non-English language film to win Best Picture at the Oscars?",
      options: ["Roma", "Shoplifters", "Parasite", "The Farewell"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?oscar,award,cinema"
    },
    {
      question: "Who plays Walter White in Breaking Bad?",
      options: ["Bob Odenkirk", "Jonathan Banks", "Aaron Paul", "Bryan Cranston"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?chemistry,lab,science"
    },
    {
      question: "What is the name of the pub in Peaky Blinders?",
      options: ["The Crown", "The Anchor", "The Garrison", "The Shelby Arms"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?birmingham,pub,vintage"
    },
    {
      question: "Who directed Oppenheimer (2023)?",
      options: ["Steven Spielberg", "Denis Villeneuve", "Christopher Nolan", "Ridley Scott"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?nuclear,explosion,history"
    },
    {
      question: "Which actor plays Logan Roy in Succession?",
      options: ["Jeff Daniels", "Anthony Hopkins", "Tom Wilkinson", "Brian Cox"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?business,corporate,power"
    },
    {
      question: "Which streaming platform produces The Boys?",
      options: ["Netflix", "Disney+", "Apple TV+", "Amazon Prime Video"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?superhero,city,dark"
    },
    {
      question: "Which British sitcom features Del Boy and Rodney Trotter?",
      options: ["Porridge", "Blackadder", "Only Fools and Horses", "Dad's Army"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?london,market,comedy"
    },
    {
      question: "Emma Stone won the 2024 Best Actress Oscar for which film?",
      options: ["La La Land", "The Favourite", "Cruella", "Poor Things"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?oscar,actress,film"
    },
    {
      question: "How many episodes are in the final season of Game of Thrones?",
      options: ["5", "6", "7", "8"],
      answer: 1,
      image: "https://source.unsplash.com/featured/?dragon,fantasy,throne"
    },
    {
      question: "What year was the first Fast and Furious film released?",
      options: ["1999", "2001", "2003", "2005"],
      answer: 1,
      image: "https://source.unsplash.com/featured/?cars,racing,street"
    },
    {
      question: "Which fictional city does Batman protect?",
      options: ["Metropolis", "Star City", "Central City", "Gotham"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?dark,city,night"
    },
    {
      question: "What is the name of Tony Soprano's psychiatrist in The Sopranos?",
      options: ["Dr. Krakower", "Dr. Cusumano", "Dr. Melfi", "Dr. Kennedy"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?therapy,psychology,office"
    }
  ],

  // ──────────────────────────────────────────────────────────
  "News & Current Affairs": [
    {
      question: "Which country topped the medal table at the 2026 Milan Cortina Winter Olympics?",
      options: ["USA", "Germany", "Italy", "Norway"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?winter,olympics,snow"
    },
    {
      question: "Who won Album of the Year at the 2026 Grammys — the first Spanish-language album ever to do so?",
      options: ["Karol G", "Bad Bunny", "J Balvin", "Ozuna"],
      answer: 1,
      image: "https://source.unsplash.com/featured/?grammy,award,music"
    },
    {
      question: "In February 2026, Israel and the US launched strikes targeting the leadership of which country?",
      options: ["Syria", "Lebanon", "Yemen", "Iran"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?middle,east,news"
    },
    {
      question: "Which country sent troops to a disputed territory after the US threatened annexation in early 2026?",
      options: ["Norway to Svalbard", "Denmark to Greenland", "UK to Falklands", "Canada to Arctic"],
      answer: 1,
      image: "https://source.unsplash.com/featured/?greenland,arctic,ice"
    },
    {
      question: "Kendrick Lamar won Record of the Year at the 2026 Grammys — breaking whose record to become the most awarded rapper in Grammy history?",
      options: ["Eminem", "Drake", "Jay-Z", "Kanye West"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?grammy,record,history"
    },
    {
      question: "The 2026 FIFA World Cup is being co-hosted by three countries — which trio?",
      options: ["UK, Ireland and France", "Canada, Mexico and USA", "Spain, Portugal and Morocco", "Brazil, Argentina and Chile"],
      answer: 1,
      image: "https://source.unsplash.com/featured/?world,cup,football,2026"
    },
    {
      question: "Sir Keir Starmer became UK Prime Minister in which year?",
      options: ["2022", "2023", "2024", "2025"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?downing,street,politics"
    },
    {
      question: "Which Norwegian skier won six gold medals at the 2026 Winter Olympics — a single-Games record?",
      options: ["Sturla Holm Laegreid", "Petter Northug Jr", "Simen Hegstad Krüger", "Johannes Høsflot Klæbo"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?cross,country,skiing"
    },
    {
      question: "Billie Eilish won Song of the Year at the 2026 Grammys — what was the song?",
      options: ["Lunch", "Chihiro", "Birds of a Feather", "Wildflower"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?songwriter,music,award"
    },
    {
      question: "Which country made history by winning their first ever Winter Olympic gold medal at Milan Cortina 2026?",
      options: ["Mexico", "Brazil", "Colombia", "Chile"],
      answer: 1,
      image: "https://source.unsplash.com/featured/?first,gold,medal,olympics"
    },
    {
      question: "The 2026 Winter Olympics were held in which country?",
      options: ["Austria", "France", "Switzerland", "Italy"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?milan,italy,alps"
    },
    {
      question: "Which tech billionaire purchased Twitter in 2022 and rebranded it to X?",
      options: ["Mark Zuckerberg", "Jeff Bezos", "Larry Ellison", "Elon Musk"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?social,media,technology"
    },
    {
      question: "Which country won the 2022 FIFA World Cup?",
      options: ["Brazil", "France", "Croatia", "Argentina"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?world,cup,final"
    },
    {
      question: "As of 2026, who is the CEO of Apple?",
      options: ["Jony Ive", "Craig Federighi", "Tim Cook", "Eddy Cue"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?apple,technology,silicon"
    },
    {
      question: "Which AI chatbot was launched by OpenAI in November 2022 and took the world by storm?",
      options: ["Gemini", "Copilot", "Claude", "ChatGPT"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?artificial,intelligence,robot"
    }
  ],

  // ──────────────────────────────────────────────────────────
  "Food & Drink": [
    {
      question: "What is Scoville used to measure?",
      options: ["Acidity in wine", "Bitterness in beer", "Heat in chillies", "Sweetness in chocolate"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?chilli,pepper,spicy"
    },
    {
      question: "What type of pastry is used to make a beef Wellington?",
      options: ["Filo", "Shortcrust", "Choux", "Puff"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?beef,wellington,food"
    },
    {
      question: "In which country did Chicken Tikka Masala most likely originate?",
      options: ["India", "Pakistan", "Bangladesh", "UK"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?curry,indian,food"
    },
    {
      question: "What nut is marzipan made from?",
      options: ["Walnut", "Hazelnut", "Pistachio", "Almond"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?almond,nut,baking"
    },
    {
      question: "What does IPA stand for in craft beer?",
      options: ["International Premium Ale", "Indian Pale Ale", "Irish Pale Ale", "Imperial Pint Ale"],
      answer: 1,
      image: "https://source.unsplash.com/featured/?beer,craft,pint"
    },
    {
      question: "Which cheese is traditionally melted on top of a French Onion Soup?",
      options: ["Brie", "Comté", "Camembert", "Gruyère"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?french,soup,onion"
    },
    {
      question: "What is the traditional Scottish dish made from sheep offal?",
      options: ["Cullen Skink", "Cock-a-Leekie", "Cranachan", "Haggis"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?scotland,food,traditional"
    },
    {
      question: "Which country is the world's largest producer of olive oil?",
      options: ["Italy", "Greece", "Tunisia", "Spain"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?olive,oil,mediterranean"
    },
    {
      question: "What is the base spirit in a classic Mojito?",
      options: ["Vodka", "Gin", "Tequila", "Rum"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?mojito,cocktail,mint"
    },
    {
      question: "In which Italian city was the Negroni cocktail invented?",
      options: ["Rome", "Milan", "Venice", "Florence"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?negroni,cocktail,italy"
    },
    {
      question: "What type of wine is Prosecco?",
      options: ["Still white", "Rosé", "Fortified", "Sparkling"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?prosecco,wine,sparkling"
    },
    {
      question: "What fruit is used to make the French brandy Calvados?",
      options: ["Grape", "Pear", "Plum", "Apple"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?apple,orchard,france"
    },
    {
      question: "Roughly how many calories are in a pint of Guinness?",
      options: ["125", "170", "210", "280"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?guinness,pint,irish"
    },
    {
      question: "Which chef became famous for his 'Naked Chef' BBC show in the late 1990s?",
      options: ["Gordon Ramsay", "Heston Blumenthal", "Nigel Slater", "Jamie Oliver"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?chef,cooking,kitchen"
    },
    {
      question: "What is the main flavouring in a traditional Mojito besides rum?",
      options: ["Basil and lime", "Cucumber and mint", "Mint and lime", "Lemon and ginger"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?mint,lime,cocktail"
    }
  ],

  // ──────────────────────────────────────────────────────────
  "Science & Nature": [
    {
      question: "How many bones does a shark have?",
      options: ["None — their skeleton is cartilage", "12", "48", "Over 200"],
      answer: 0,
      image: "https://source.unsplash.com/featured/?shark,ocean,underwater"
    },
    {
      question: "How many planets are in our solar system?",
      options: ["7", "8", "9", "10"],
      answer: 1,
      image: "https://source.unsplash.com/featured/?solar,system,planets"
    },
    {
      question: "What gas do plants absorb during photosynthesis?",
      options: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon dioxide"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?plant,leaf,green"
    },
    {
      question: "What is the name of the boundary around a black hole beyond which nothing can escape?",
      options: ["Singularity", "Neutron shell", "Schwarzschild limit", "Event horizon"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?black,hole,space"
    },
    {
      question: "How long does it take light from the Sun to reach Earth?",
      options: ["2 minutes", "8 minutes", "22 minutes", "1 hour"],
      answer: 1,
      image: "https://source.unsplash.com/featured/?sun,light,solar"
    },
    {
      question: "What is the process by which a caterpillar transforms into a butterfly?",
      options: ["Hibernation", "Symbiosis", "Mitosis", "Metamorphosis"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?butterfly,cocoon,nature"
    },
    {
      question: "A diamond is made entirely of which element?",
      options: ["Silicon", "Quartz", "Graphene", "Carbon"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?diamond,gem,crystal"
    },
    {
      question: "What is the study of earthquakes called?",
      options: ["Volcanology", "Geology", "Tectonology", "Seismology"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?earthquake,seismic,ground"
    },
    {
      question: "What percentage of the Earth's surface is covered by water?",
      options: ["51%", "61%", "71%", "81%"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?earth,ocean,globe"
    },
    {
      question: "What is the most venomous animal in the world?",
      options: ["Inland taipan", "King cobra", "Cone snail", "Box jellyfish"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?jellyfish,ocean,venom"
    },
    {
      question: "What is the chemical symbol for potassium?",
      options: ["Po", "Pt", "P", "K"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?chemistry,element,periodic"
    },
    {
      question: "Approximately how many neurons does the human brain contain?",
      options: ["86 thousand", "86 million", "86 billion", "86 trillion"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?brain,neuron,mind"
    },
    {
      question: "What is the only element that is liquid at room temperature besides mercury?",
      options: ["Gallium", "Caesium", "Francium", "Bromine"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?chemistry,liquid,laboratory"
    },
    {
      question: "What is the approximate surface temperature of the Sun?",
      options: ["1,500°C", "5,500°C", "15,000°C", "55,000°C"],
      answer: 1,
      image: "https://source.unsplash.com/featured/?sun,solar,star"
    },
    {
      question: "What is the process by which plants lose water through their leaves?",
      options: ["Photosynthesis", "Osmosis", "Respiration", "Transpiration"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?leaf,water,plant"
    }
  ],

  // ──────────────────────────────────────────────────────────
  "History": [
    {
      question: "In which year did Neil Armstrong walk on the Moon?",
      options: ["1965", "1967", "1969", "1971"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?moon,astronaut,nasa"
    },
    {
      question: "The Magna Carta was signed in which year?",
      options: ["1066", "1154", "1215", "1348"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?magna,carta,medieval"
    },
    {
      question: "The Battle of Hastings was fought in which year?",
      options: ["1040", "1066", "1087", "1100"],
      answer: 1,
      image: "https://source.unsplash.com/featured/?battle,medieval,history"
    },
    {
      question: "The Chernobyl nuclear disaster happened in which year?",
      options: ["1979", "1983", "1986", "1989"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?chernobyl,nuclear,disaster"
    },
    {
      question: "Which country was apartheid practised in?",
      options: ["Zimbabwe", "Kenya", "Nigeria", "South Africa"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?south,africa,history"
    },
    {
      question: "In what year did the Soviet Union collapse?",
      options: ["1985", "1989", "1991", "1993"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?berlin,wall,cold,war"
    },
    {
      question: "Which explorer is credited with landing in the Americas in 1492?",
      options: ["Amerigo Vespucci", "John Cabot", "Hernán Cortés", "Christopher Columbus"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?explorer,ship,ocean"
    },
    {
      question: "Which ancient civilisation built Machu Picchu?",
      options: ["Aztec", "Maya", "Olmec", "Inca"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?machu,picchu,peru"
    },
    {
      question: "Who was Prime Minister of the UK when World War I broke out in 1914?",
      options: ["David Lloyd George", "Winston Churchill", "Andrew Bonar Law", "H.H. Asquith"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?world,war,history"
    },
    {
      question: "What was the name of the ship on which Charles Darwin made his famous voyage?",
      options: ["HMS Endeavour", "HMS Victory", "HMS Discovery", "HMS Beagle"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?darwin,ship,voyage"
    },
    {
      question: "Which Chinese dynasty built the majority of the Great Wall of China?",
      options: ["Han", "Tang", "Qin", "Ming"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?great,wall,china"
    },
    {
      question: "In what year did World War II end?",
      options: ["1943", "1944", "1945", "1946"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?world,war,two"
    },
    {
      question: "Who was the first person to circumnavigate the globe?",
      options: ["Christopher Columbus", "Vasco da Gama", "Francis Drake", "Ferdinand Magellan"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?ship,explorer,globe"
    },
    {
      question: "The French Revolution began in which year?",
      options: ["1776", "1783", "1789", "1799"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?paris,france,revolution"
    },
    {
      question: "Which British monarch had the longest reign in history?",
      options: ["Queen Victoria", "King George III", "King Henry VIII", "Queen Elizabeth II"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?queen,crown,british"
    }
  ],

  // ──────────────────────────────────────────────────────────
  // PICTURE ROUND — image IS the question. Keep text as short prompt.
  // ──────────────────────────────────────────────────────────
  "Picture Round": [
    {
      question: "Name this world leader.",
      options: ["Emmanuel Macron", "Justin Trudeau", "Pedro Sánchez", "Volodymyr Zelensky"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?ukraine,president,leader"
    },
    {
      question: "Name this iconic landmark.",
      options: ["Burj Al Arab", "CN Tower", "Empire State Building", "Petronas Towers"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?petronas,towers,kuala,lumpur"
    },
    {
      question: "What animal is this?",
      options: ["Tapir", "Nutria", "Wombat", "Capybara"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?capybara,animal,wildlife"
    },
    {
      question: "Name this famous painting.",
      options: ["The Birth of Venus", "Girl with a Pearl Earring", "American Gothic", "The Scream"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?edvard,munch,scream,art"
    },
    {
      question: "Which country does this flag belong to?",
      options: ["Netherlands", "France", "Russia", "Luxembourg"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?luxembourg,flag,europe"
    },
    {
      question: "Name this sporting trophy.",
      options: ["Jules Rimet Trophy", "FA Cup", "FIFA World Cup Trophy", "UEFA Champions League Trophy"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?champions,league,trophy"
    },
    {
      question: "Which city's skyline is this?",
      options: ["Chicago", "Dubai", "Singapore", "Hong Kong"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?hong,kong,skyline,night"
    },
    {
      question: "What sport is being played here?",
      options: ["Lacrosse", "Shinty", "Field hockey", "Hurling"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?hurling,ireland,sport"
    },
    {
      question: "Name this iconic car.",
      options: ["Jaguar E-Type", "Ferrari 250 GT", "Lamborghini Miura", "Aston Martin DB5"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?aston,martin,classic,car"
    },
    {
      question: "Which mountain range is this?",
      options: ["The Andes", "The Himalayas", "The Rockies", "The Alps"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?alps,mountain,snow,europe"
    },
    {
      question: "Name this famous logo.",
      options: ["Pepsi", "Adidas", "Puma", "Nike"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?nike,swoosh,brand"
    },
    {
      question: "Which planet is this?",
      options: ["Jupiter", "Neptune", "Uranus", "Saturn"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?saturn,planet,rings,space"
    },
    {
      question: "Name this dish.",
      options: ["Pad Thai", "Pho", "Laksa", "Ramen"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?ramen,japanese,noodles"
    },
    {
      question: "Which city is this?",
      options: ["Budapest", "Prague", "Vienna", "Krakow"],
      answer: 1,
      image: "https://source.unsplash.com/featured/?prague,city,europe,bridge"
    },
    {
      question: "What type of cloud is this?",
      options: ["Stratus", "Cirrus", "Nimbostratus", "Cumulonimbus"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?storm,thunder,cloud,dramatic"
    }
  ],

  // ──────────────────────────────────────────────────────────
  "Themed Round": [
    {
      question: "How many members are in the K-pop group BTS?",
      options: ["5", "6", "7", "8"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?kpop,music,korea"
    },
    {
      question: "What is the fastest animal on Earth?",
      options: ["Cheetah", "Sailfish", "Golden eagle", "Peregrine falcon"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?peregrine,falcon,bird"
    },
    {
      question: "What does the S stand for in NASA?",
      options: ["Science", "Space", "Systems", "Studies"],
      answer: 1,
      image: "https://source.unsplash.com/featured/?nasa,space,rocket"
    },
    {
      question: "In what year did Facebook launch publicly beyond Harvard?",
      options: ["2003", "2004", "2005", "2006"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?social,media,facebook"
    },
    {
      question: "How many time zones does Russia span?",
      options: ["9", "10", "11", "12"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?russia,map,vast"
    },
    {
      question: "What is the world's best-selling video game of all time?",
      options: ["Tetris", "Grand Theft Auto V", "Wii Sports", "Minecraft"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?minecraft,game,gaming"
    },
    {
      question: "What is the name of Thor's hammer in Norse mythology?",
      options: ["Gungnir", "Jarnbjorn", "Stormbreaker", "Mjolnir"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?norse,viking,mythology"
    },
    {
      question: "Which animal appears on the Australian coat of arms alongside the kangaroo?",
      options: ["Wombat", "Platypus", "Koala", "Emu"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?emu,australia,bird"
    },
    {
      question: "In which country is the majority of the Amazon rainforest located?",
      options: ["Colombia", "Peru", "Venezuela", "Brazil"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?amazon,rainforest,brazil"
    },
    {
      question: "How many keys are on a standard piano?",
      options: ["76", "80", "88", "92"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?piano,keys,music"
    },
    {
      question: "Which country is IKEA originally from?",
      options: ["Denmark", "Norway", "Finland", "Sweden"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?ikea,furniture,scandinavian"
    },
    {
      question: "How many cards are in a standard deck, excluding jokers?",
      options: ["48", "50", "52", "54"],
      answer: 2,
      image: "https://source.unsplash.com/featured/?cards,deck,playing"
    },
    {
      question: "Which country has the longest land border in the world?",
      options: ["Russia", "China", "USA", "Canada"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?canada,border,landscape"
    },
    {
      question: "What is the name of the currency used in Japan?",
      options: ["Won", "Yuan", "Ringgit", "Yen"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?japan,tokyo,currency"
    },
    {
      question: "Who wrote the Harry Potter series?",
      options: ["Stephenie Meyer", "Philip Pullman", "Roald Dahl", "J.K. Rowling"],
      answer: 3,
      image: "https://source.unsplash.com/featured/?harry,potter,book,magic"
    }
  ]

};
