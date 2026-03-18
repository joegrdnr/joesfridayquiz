// ============================================================
// JOE'S FRIDAY QUIZ — QUESTION DATABASE
// ============================================================
// The "image" field is a Wikipedia article title.
// The quiz fetches the article's thumbnail image automatically.
// Use the exact article title as it appears on Wikipedia.
//
// To find the right title: search Wikipedia, copy the page title
// from the URL (e.g. en.wikipedia.org/wiki/Eiffel_Tower → "Eiffel Tower")
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
      image: "Snooker"
    },
    {
      question: "How many dots are there in total on a standard pair of dice?",
      options: ["40", "42", "44", "46"],
      answer: 1,
      image: "Dice"
    },
    {
      question: "Which country has the most natural lakes in the world?",
      options: ["Russia", "Finland", "USA", "Canada"],
      answer: 3,
      image: "Canada"
    },
    {
      question: "What number does the Roman numeral 'D' represent?",
      options: ["100", "400", "500", "1000"],
      answer: 2,
      image: "Roman numerals"
    },
    {
      question: "How many teeth does an adult human have, including wisdom teeth?",
      options: ["28", "30", "32", "34"],
      answer: 2,
      image: "Human tooth"
    },
    {
      question: "What is the capital of New Zealand?",
      options: ["Auckland", "Christchurch", "Queenstown", "Wellington"],
      answer: 3,
      image: "Wellington"
    },
    {
      question: "Which planet spins on its side with an axial tilt of about 98 degrees?",
      options: ["Saturn", "Neptune", "Uranus", "Jupiter"],
      answer: 2,
      image: "Uranus"
    },
    {
      question: "How long is a standard Olympic swimming pool?",
      options: ["25 metres", "40 metres", "50 metres", "100 metres"],
      answer: 2,
      image: "Swimming pool"
    },
    {
      question: "On a standard keyboard, which letter sits between Z and C?",
      options: ["A", "X", "V", "B"],
      answer: 1,
      image: "QWERTY"
    },
    {
      question: "What is the most common street name in the UK?",
      options: ["Victoria Road", "Church Lane", "High Street", "Park Avenue"],
      answer: 2,
      image: "High Street"
    },
    {
      question: "Which language has the most words?",
      options: ["Mandarin", "Spanish", "French", "English"],
      answer: 3,
      image: "English language"
    },
    {
      question: "What shape is a standard stop sign?",
      options: ["Hexagon", "Pentagon", "Octagon", "Heptagon"],
      answer: 2,
      image: "Stop sign"
    },
    {
      question: "The World Wide Web was invented by Tim Berners-Lee while working in which country?",
      options: ["UK", "USA", "Germany", "Switzerland"],
      answer: 3,
      image: "Tim Berners-Lee"
    },
    {
      question: "What is the only mammal capable of true sustained flight?",
      options: ["Flying squirrel", "Sugar glider", "Bat", "Colugo"],
      answer: 2,
      image: "Bat"
    },
    {
      question: "How many sides does a British 50p coin have?",
      options: ["5", "6", "7", "8"],
      answer: 2,
      image: "50p coin"
    }
  ],

  // ──────────────────────────────────────────────────────────
  "Sport": [
    {
      question: "Which footballer has won the most Ballon d'Or awards?",
      options: ["Cristiano Ronaldo", "Lionel Messi", "Ronaldinho", "Zinedine Zidane"],
      answer: 1,
      image: "Lionel Messi"
    },
    {
      question: "In darts, what is the highest possible score with three darts?",
      options: ["150", "160", "170", "180"],
      answer: 3,
      image: "Darts"
    },
    {
      question: "Which club has won the most Premier League titles?",
      options: ["Arsenal", "Chelsea", "Liverpool", "Manchester United"],
      answer: 3,
      image: "Manchester United F.C."
    },
    {
      question: "Which golfer is nicknamed 'The Big Easy'?",
      options: ["Retief Goosen", "Ernie Els", "Trevor Immelman", "Louis Oosthuizen"],
      answer: 1,
      image: "Ernie Els"
    },
    {
      question: "England's all-time record men's goal scorer — who is it?",
      options: ["Wayne Rooney", "Michael Owen", "Bobby Charlton", "Harry Kane"],
      answer: 3,
      image: "Harry Kane"
    },
    {
      question: "Which country is Formula 1 driver Max Verstappen from?",
      options: ["Belgium", "Germany", "Austria", "Netherlands"],
      answer: 3,
      image: "Max Verstappen"
    },
    {
      question: "What colour jersey does the leader of the Tour de France wear?",
      options: ["Red", "White", "Green", "Yellow"],
      answer: 3,
      image: "Tour de France"
    },
    {
      question: "Which sport uses a shuttlecock?",
      options: ["Squash", "Badminton", "Racquetball", "Padel"],
      answer: 1,
      image: "Badminton"
    },
    {
      question: "At which ground do Yorkshire play their home cricket matches?",
      options: ["Edgbaston", "Old Trafford", "Headingley", "Trent Bridge"],
      answer: 2,
      image: "Headingley"
    },
    {
      question: "Which country won the 2023 Rugby World Cup?",
      options: ["Ireland", "Argentina", "New Zealand", "South Africa"],
      answer: 3,
      image: "2023 Rugby World Cup"
    },
    {
      question: "Norway topped the medal table at the 2026 Milan Cortina Winter Olympics — how many gold medals did they win?",
      options: ["11", "13", "15", "17"],
      answer: 2,
      image: "2026 Winter Olympics"
    },
    {
      question: "Which team won men's ice hockey gold at the 2026 Winter Olympics?",
      options: ["Canada", "Sweden", "Finland", "USA"],
      answer: 3,
      image: "Ice hockey"
    },
    {
      question: "How many Grand Slam tennis tournaments are played each year?",
      options: ["2", "3", "4", "5"],
      answer: 2,
      image: "Grand Slam (tennis)"
    },
    {
      question: "In which sport would you perform a slam dunk?",
      options: ["Volleyball", "Netball", "Basketball", "Handball"],
      answer: 2,
      image: "Basketball"
    },
    {
      question: "How many players are on the pitch at once in a rugby union match (both teams combined)?",
      options: ["26", "28", "30", "32"],
      answer: 2,
      image: "Rugby union"
    }
  ],

  // ──────────────────────────────────────────────────────────
  "Music": [
    {
      question: "Kendrick Lamar won Record of the Year at the 2026 Grammys for which song (with SZA)?",
      options: ["Not Like Us", "Luther", "Peekaboo", "tv off"],
      answer: 1,
      image: "Kendrick Lamar"
    },
    {
      question: "Lady Gaga won Best Pop Solo Performance at the 2026 Grammys for which track from 'Mayhem'?",
      options: ["Disease", "Abracadabra", "Vanish Into You", "Perfect Celebrity"],
      answer: 1,
      image: "Lady Gaga"
    },
    {
      question: "Who sang the Bond theme for Skyfall in 2012?",
      options: ["Shirley Bassey", "Sam Smith", "Adele", "Billie Eilish"],
      answer: 2,
      image: "Adele"
    },
    {
      question: "Which Irish rock band has members Bono, The Edge, Adam Clayton and Larry Mullen Jr.?",
      options: ["The Pogues", "Thin Lizzy", "U2", "Snow Patrol"],
      answer: 2,
      image: "U2"
    },
    {
      question: "Who was the lead singer of The Doors?",
      options: ["Mick Jagger", "Roger Waters", "Jim Morrison", "Iggy Pop"],
      answer: 2,
      image: "Jim Morrison"
    },
    {
      question: "What instrument does Dave Grohl primarily play in Foo Fighters?",
      options: ["Bass", "Drums", "Guitar", "Keyboard"],
      answer: 2,
      image: "Foo Fighters"
    },
    {
      question: "Which city is known as Motown — home of a legendary record label?",
      options: ["Chicago", "Atlanta", "Memphis", "Detroit"],
      answer: 3,
      image: "Motown"
    },
    {
      question: "How many strings does a standard violin have?",
      options: ["3", "4", "5", "6"],
      answer: 1,
      image: "Violin"
    },
    {
      question: "Glastonbury Festival is held in which English county?",
      options: ["Devon", "Dorset", "Wiltshire", "Somerset"],
      answer: 3,
      image: "Glastonbury Festival"
    },
    {
      question: "Which decade did hip-hop originate in?",
      options: ["1960s", "1970s", "1980s", "1990s"],
      answer: 1,
      image: "Hip hop music"
    },
    {
      question: "In music, how many semitones are there in an octave?",
      options: ["8", "10", "12", "14"],
      answer: 2,
      image: "Octave"
    },
    {
      question: "What was the UK's first number one single of the new millennium?",
      options: ["Pure Shores – All Saints", "Bag It Up – Geri Halliwell", "Can We Fix It? – Bob the Builder", "Stan – Eminem"],
      answer: 2,
      image: "Bob the Builder"
    },
    {
      question: "Billie Eilish won Song of the Year at the 2026 Grammys for which track?",
      options: ["Lunch", "Birds of a Feather", "Wildflower", "Chihiro"],
      answer: 1,
      image: "Billie Eilish"
    },
    {
      question: "Which artist holds the record for the most weeks at number one on the UK singles chart?",
      options: ["Ed Sheeran", "Elvis Presley", "Wet Wet Wet", "Bryan Adams"],
      answer: 3,
      image: "Bryan Adams"
    },
    {
      question: "What is the best-selling physical music format of all time?",
      options: ["Vinyl record", "Cassette tape", "CD", "8-track"],
      answer: 2,
      image: "Compact disc"
    }
  ],

  // ──────────────────────────────────────────────────────────
  "Film & TV": [
    {
      question: "Which Netflix show is set in the fictional town of Hawkins, Indiana?",
      options: ["Dark", "The OA", "Stranger Things", "Wayward Pines"],
      answer: 2,
      image: "Stranger Things"
    },
    {
      question: "Who plays Tyrion Lannister in Game of Thrones?",
      options: ["Conleth Hill", "Liam Cunningham", "Peter Dinklage", "Nikolaj Coster-Waldau"],
      answer: 2,
      image: "Peter Dinklage"
    },
    {
      question: "In the UK version of The Office, what is the name of David Brent's company?",
      options: ["Wernham Hogg", "Dunder Mifflin", "Initech", "Sabre"],
      answer: 0,
      image: "The Office (UK TV series)"
    },
    {
      question: "Which film became the first non-English language film to win Best Picture at the Oscars?",
      options: ["Roma", "Shoplifters", "Parasite", "The Farewell"],
      answer: 2,
      image: "Parasite (2019 film)"
    },
    {
      question: "Who plays Walter White in Breaking Bad?",
      options: ["Bob Odenkirk", "Jonathan Banks", "Aaron Paul", "Bryan Cranston"],
      answer: 3,
      image: "Breaking Bad"
    },
    {
      question: "What is the name of the pub in Peaky Blinders?",
      options: ["The Crown", "The Anchor", "The Garrison", "The Shelby Arms"],
      answer: 2,
      image: "Peaky Blinders (TV series)"
    },
    {
      question: "Who directed Oppenheimer (2023)?",
      options: ["Steven Spielberg", "Denis Villeneuve", "Christopher Nolan", "Ridley Scott"],
      answer: 2,
      image: "Oppenheimer (film)"
    },
    {
      question: "Which actor plays Logan Roy in Succession?",
      options: ["Jeff Daniels", "Anthony Hopkins", "Tom Wilkinson", "Brian Cox"],
      answer: 3,
      image: "Succession (TV series)"
    },
    {
      question: "Which streaming platform produces The Boys?",
      options: ["Netflix", "Disney+", "Apple TV+", "Amazon Prime Video"],
      answer: 3,
      image: "The Boys (TV series)"
    },
    {
      question: "Which British sitcom features Del Boy and Rodney Trotter?",
      options: ["Porridge", "Blackadder", "Only Fools and Horses", "Dad's Army"],
      answer: 2,
      image: "Only Fools and Horses"
    },
    {
      question: "Emma Stone won the 2024 Best Actress Oscar for which film?",
      options: ["La La Land", "The Favourite", "Cruella", "Poor Things"],
      answer: 3,
      image: "Poor Things (film)"
    },
    {
      question: "How many episodes are in the final season of Game of Thrones?",
      options: ["5", "6", "7", "8"],
      answer: 1,
      image: "Game of Thrones season 8"
    },
    {
      question: "What year was the first Fast and Furious film released?",
      options: ["1999", "2001", "2003", "2005"],
      answer: 1,
      image: "The Fast and the Furious"
    },
    {
      question: "Which fictional city does Batman protect?",
      options: ["Metropolis", "Star City", "Central City", "Gotham City"],
      answer: 3,
      image: "Batman"
    },
    {
      question: "What is the name of Tony Soprano's psychiatrist in The Sopranos?",
      options: ["Dr. Krakower", "Dr. Cusumano", "Dr. Melfi", "Dr. Kennedy"],
      answer: 2,
      image: "The Sopranos"
    }
  ],

  // ──────────────────────────────────────────────────────────
  "News & Current Affairs": [
    {
      question: "Which country topped the medal table at the 2026 Milan Cortina Winter Olympics?",
      options: ["USA", "Germany", "Italy", "Norway"],
      answer: 3,
      image: "2026 Winter Olympics"
    },
    {
      question: "Who won Album of the Year at the 2026 Grammys — the first Spanish-language album ever to do so?",
      options: ["Karol G", "Bad Bunny", "J Balvin", "Ozuna"],
      answer: 1,
      image: "Bad Bunny"
    },
    {
      question: "In February 2026, Israel and the US launched strikes targeting the leadership of which country?",
      options: ["Syria", "Lebanon", "Yemen", "Iran"],
      answer: 3,
      image: "Iran"
    },
    {
      question: "Which country sent troops to a disputed territory after the US threatened annexation in early 2026?",
      options: ["Norway to Svalbard", "Denmark to Greenland", "UK to Falklands", "Canada to Arctic"],
      answer: 1,
      image: "Greenland"
    },
    {
      question: "Kendrick Lamar broke whose record to become the most awarded rapper in Grammy history at the 2026 ceremony?",
      options: ["Eminem", "Drake", "Jay-Z", "Kanye West"],
      answer: 2,
      image: "Grammy Award"
    },
    {
      question: "The 2026 FIFA World Cup is being co-hosted by three countries — which trio?",
      options: ["UK, Ireland and France", "Canada, Mexico and USA", "Spain, Portugal and Morocco", "Brazil, Argentina and Chile"],
      answer: 1,
      image: "2026 FIFA World Cup"
    },
    {
      question: "Sir Keir Starmer became UK Prime Minister in which year?",
      options: ["2022", "2023", "2024", "2025"],
      answer: 2,
      image: "Keir Starmer"
    },
    {
      question: "Which Norwegian skier won six gold medals at the 2026 Winter Olympics — a single-Games record?",
      options: ["Sturla Holm Laegreid", "Petter Northug Jr", "Simen Hegstad Krüger", "Johannes Høsflot Klæbo"],
      answer: 3,
      image: "Johannes Høsflot Klæbo"
    },
    {
      question: "Billie Eilish won Song of the Year at the 2026 Grammys — what was the song?",
      options: ["Lunch", "Chihiro", "Birds of a Feather", "Wildflower"],
      answer: 2,
      image: "Billie Eilish"
    },
    {
      question: "Which country made history by winning their first ever Winter Olympic gold medal at Milan Cortina 2026?",
      options: ["Mexico", "Brazil", "Colombia", "Chile"],
      answer: 1,
      image: "Brazil at the Winter Olympics"
    },
    {
      question: "Which tech billionaire purchased Twitter in 2022 and rebranded it to X?",
      options: ["Mark Zuckerberg", "Jeff Bezos", "Larry Ellison", "Elon Musk"],
      answer: 3,
      image: "Elon Musk"
    },
    {
      question: "Which country won the 2022 FIFA World Cup?",
      options: ["Brazil", "France", "Croatia", "Argentina"],
      answer: 3,
      image: "2022 FIFA World Cup"
    },
    {
      question: "As of 2026, who is the CEO of Apple?",
      options: ["Jony Ive", "Craig Federighi", "Tim Cook", "Eddy Cue"],
      answer: 2,
      image: "Tim Cook"
    },
    {
      question: "Which AI chatbot was launched by OpenAI in late 2022 and took the world by storm?",
      options: ["Gemini", "Copilot", "Claude", "ChatGPT"],
      answer: 3,
      image: "ChatGPT"
    },
    {
      question: "Donald Trump was inaugurated as US President for the second time in which month and year?",
      options: ["November 2024", "December 2024", "January 2025", "February 2025"],
      answer: 2,
      image: "Donald Trump"
    }
  ],

  // ──────────────────────────────────────────────────────────
  "Food & Drink": [
    {
      question: "What is Scoville used to measure?",
      options: ["Acidity in wine", "Bitterness in beer", "Heat in chillies", "Sweetness in chocolate"],
      answer: 2,
      image: "Scoville scale"
    },
    {
      question: "What type of pastry is used to make a beef Wellington?",
      options: ["Filo", "Shortcrust", "Choux", "Puff pastry"],
      answer: 3,
      image: "Beef Wellington"
    },
    {
      question: "In which country did Chicken Tikka Masala most likely originate?",
      options: ["India", "Pakistan", "Bangladesh", "United Kingdom"],
      answer: 3,
      image: "Chicken tikka masala"
    },
    {
      question: "What nut is marzipan made from?",
      options: ["Walnut", "Hazelnut", "Pistachio", "Almond"],
      answer: 3,
      image: "Marzipan"
    },
    {
      question: "What does IPA stand for in craft beer?",
      options: ["International Premium Ale", "Indian Pale Ale", "Irish Pale Ale", "Imperial Pint Ale"],
      answer: 1,
      image: "India pale ale"
    },
    {
      question: "Which cheese is traditionally melted on top of a French Onion Soup?",
      options: ["Brie", "Comté", "Camembert", "Gruyère"],
      answer: 3,
      image: "French onion soup"
    },
    {
      question: "What is the traditional Scottish dish made from sheep offal?",
      options: ["Cullen Skink", "Cock-a-leekie soup", "Cranachan", "Haggis"],
      answer: 3,
      image: "Haggis"
    },
    {
      question: "Which country is the world's largest producer of olive oil?",
      options: ["Italy", "Greece", "Tunisia", "Spain"],
      answer: 3,
      image: "Olive oil"
    },
    {
      question: "What is the base spirit in a classic Mojito?",
      options: ["Vodka", "Gin", "Tequila", "Rum"],
      answer: 3,
      image: "Mojito"
    },
    {
      question: "In which Italian city was the Negroni cocktail invented?",
      options: ["Rome", "Milan", "Venice", "Florence"],
      answer: 3,
      image: "Negroni"
    },
    {
      question: "What type of wine is Prosecco?",
      options: ["Still white", "Rosé", "Fortified", "Sparkling wine"],
      answer: 3,
      image: "Prosecco"
    },
    {
      question: "What fruit is used to make the French brandy Calvados?",
      options: ["Grape", "Pear", "Plum", "Apple"],
      answer: 3,
      image: "Calvados"
    },
    {
      question: "Roughly how many calories are in a pint of Guinness?",
      options: ["125", "170", "210", "280"],
      answer: 2,
      image: "Guinness"
    },
    {
      question: "Which chef became famous for his 'Naked Chef' BBC show in the late 1990s?",
      options: ["Gordon Ramsay", "Heston Blumenthal", "Nigel Slater", "Jamie Oliver"],
      answer: 3,
      image: "Jamie Oliver"
    },
    {
      question: "What is the main grain used to make a traditional Japanese sake?",
      options: ["Wheat", "Barley", "Corn", "Rice"],
      answer: 3,
      image: "Sake"
    }
  ],

  // ──────────────────────────────────────────────────────────
  "Science & Nature": [
    {
      question: "How many bones does a shark have?",
      options: ["None — their skeleton is cartilage", "12", "48", "Over 200"],
      answer: 0,
      image: "Shark"
    },
    {
      question: "How many planets are in our solar system?",
      options: ["7", "8", "9", "10"],
      answer: 1,
      image: "Solar System"
    },
    {
      question: "What gas do plants absorb during photosynthesis?",
      options: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon dioxide"],
      answer: 3,
      image: "Photosynthesis"
    },
    {
      question: "What is the name of the boundary around a black hole beyond which nothing can escape?",
      options: ["Singularity", "Neutron shell", "Schwarzschild limit", "Event horizon"],
      answer: 3,
      image: "Black hole"
    },
    {
      question: "How long does it take light from the Sun to reach Earth?",
      options: ["2 minutes", "8 minutes", "22 minutes", "1 hour"],
      answer: 1,
      image: "Sun"
    },
    {
      question: "What is the process by which a caterpillar transforms into a butterfly?",
      options: ["Hibernation", "Symbiosis", "Mitosis", "Metamorphosis"],
      answer: 3,
      image: "Butterfly"
    },
    {
      question: "A diamond is made entirely of which element?",
      options: ["Silicon", "Quartz", "Graphene", "Carbon"],
      answer: 3,
      image: "Diamond"
    },
    {
      question: "What is the study of earthquakes called?",
      options: ["Volcanology", "Geology", "Tectonology", "Seismology"],
      answer: 3,
      image: "Seismology"
    },
    {
      question: "What percentage of the Earth's surface is covered by water?",
      options: ["51%", "61%", "71%", "81%"],
      answer: 2,
      image: "Ocean"
    },
    {
      question: "What is the most venomous animal in the world?",
      options: ["Inland taipan", "King cobra", "Cone snail", "Box jellyfish"],
      answer: 3,
      image: "Box jellyfish"
    },
    {
      question: "What is the chemical symbol for potassium?",
      options: ["Po", "Pt", "P", "K"],
      answer: 3,
      image: "Potassium"
    },
    {
      question: "Approximately how many neurons does the human brain contain?",
      options: ["86 thousand", "86 million", "86 billion", "86 trillion"],
      answer: 2,
      image: "Neuron"
    },
    {
      question: "What is the only element that is liquid at room temperature besides mercury?",
      options: ["Gallium", "Caesium", "Francium", "Bromine"],
      answer: 3,
      image: "Bromine"
    },
    {
      question: "What is the approximate surface temperature of the Sun?",
      options: ["1,500°C", "5,500°C", "15,000°C", "55,000°C"],
      answer: 1,
      image: "Sun"
    },
    {
      question: "What is the process by which plants lose water through their leaves?",
      options: ["Photosynthesis", "Osmosis", "Respiration", "Transpiration"],
      answer: 3,
      image: "Transpiration"
    }
  ],

  // ──────────────────────────────────────────────────────────
  "History": [
    {
      question: "In which year did Neil Armstrong walk on the Moon?",
      options: ["1965", "1967", "1969", "1971"],
      answer: 2,
      image: "Apollo 11"
    },
    {
      question: "The Magna Carta was signed in which year?",
      options: ["1066", "1154", "1215", "1348"],
      answer: 2,
      image: "Magna Carta"
    },
    {
      question: "The Battle of Hastings was fought in which year?",
      options: ["1040", "1066", "1087", "1100"],
      answer: 1,
      image: "Battle of Hastings"
    },
    {
      question: "The Chernobyl nuclear disaster happened in which year?",
      options: ["1979", "1983", "1986", "1989"],
      answer: 2,
      image: "Chernobyl disaster"
    },
    {
      question: "Which country was apartheid practised in?",
      options: ["Zimbabwe", "Kenya", "Nigeria", "South Africa"],
      answer: 3,
      image: "Apartheid"
    },
    {
      question: "In what year did the Soviet Union collapse?",
      options: ["1985", "1989", "1991", "1993"],
      answer: 2,
      image: "Dissolution of the Soviet Union"
    },
    {
      question: "Which explorer is credited with landing in the Americas in 1492?",
      options: ["Amerigo Vespucci", "John Cabot", "Hernán Cortés", "Christopher Columbus"],
      answer: 3,
      image: "Christopher Columbus"
    },
    {
      question: "Which ancient civilisation built Machu Picchu?",
      options: ["Aztec", "Maya", "Olmec", "Inca"],
      answer: 3,
      image: "Machu Picchu"
    },
    {
      question: "Who was Prime Minister of the UK when World War I broke out in 1914?",
      options: ["David Lloyd George", "Winston Churchill", "Andrew Bonar Law", "H. H. Asquith"],
      answer: 3,
      image: "H. H. Asquith"
    },
    {
      question: "What was the name of the ship on which Charles Darwin made his famous voyage?",
      options: ["HMS Endeavour", "HMS Victory", "HMS Discovery", "HMS Beagle"],
      answer: 3,
      image: "HMS Beagle"
    },
    {
      question: "Which Chinese dynasty built the majority of the Great Wall of China?",
      options: ["Han", "Tang", "Qin", "Ming"],
      answer: 3,
      image: "Great Wall of China"
    },
    {
      question: "In what year did World War II end?",
      options: ["1943", "1944", "1945", "1946"],
      answer: 2,
      image: "World War II"
    },
    {
      question: "Who was the first person to circumnavigate the globe?",
      options: ["Christopher Columbus", "Vasco da Gama", "Francis Drake", "Ferdinand Magellan"],
      answer: 3,
      image: "Ferdinand Magellan"
    },
    {
      question: "The French Revolution began in which year?",
      options: ["1776", "1783", "1789", "1799"],
      answer: 2,
      image: "French Revolution"
    },
    {
      question: "Which British monarch had the longest reign in history?",
      options: ["Queen Victoria", "King George III", "King Henry VIII", "Queen Elizabeth II"],
      answer: 3,
      image: "Elizabeth II"
    }
  ],

  // ──────────────────────────────────────────────────────────
  // PICTURE ROUND — image IS the question.
  // ──────────────────────────────────────────────────────────
  "Picture Round": [
    {
      question: "Name this world leader.",
      options: ["Emmanuel Macron", "Justin Trudeau", "Pedro Sánchez", "Volodymyr Zelensky"],
      answer: 3,
      image: "Volodymyr Zelensky"
    },
    {
      question: "Name this landmark.",
      options: ["Burj Al Arab", "CN Tower", "Empire State Building", "Petronas Towers"],
      answer: 3,
      image: "Petronas Towers"
    },
    {
      question: "What animal is this?",
      options: ["Tapir", "Nutria", "Wombat", "Capybara"],
      answer: 3,
      image: "Capybara"
    },
    {
      question: "Name this famous painting.",
      options: ["The Birth of Venus", "Girl with a Pearl Earring", "American Gothic", "The Scream"],
      answer: 3,
      image: "The Scream"
    },
    {
      question: "Name this sporting trophy.",
      options: ["Jules Rimet Trophy", "FA Cup", "FIFA World Cup Trophy", "UEFA Champions League"],
      answer: 3,
      image: "UEFA Champions League"
    },
    {
      question: "Which city's skyline is this?",
      options: ["Chicago", "Dubai", "Singapore", "Hong Kong"],
      answer: 3,
      image: "Hong Kong"
    },
    {
      question: "What sport is being played here?",
      options: ["Lacrosse", "Shinty", "Field hockey", "Hurling"],
      answer: 3,
      image: "Hurling"
    },
    {
      question: "Name this iconic car.",
      options: ["Jaguar E-Type", "Ferrari 250 GT", "Lamborghini Miura", "Aston Martin DB5"],
      answer: 3,
      image: "Aston Martin DB5"
    },
    {
      question: "Which mountain range is this?",
      options: ["The Andes", "The Himalayas", "The Rockies", "The Alps"],
      answer: 3,
      image: "Alps"
    },
    {
      question: "Which planet is this?",
      options: ["Jupiter", "Neptune", "Uranus", "Saturn"],
      answer: 3,
      image: "Saturn"
    },
    {
      question: "Name this dish.",
      options: ["Pad Thai", "Pho", "Laksa", "Ramen"],
      answer: 3,
      image: "Ramen"
    },
    {
      question: "Which city is this?",
      options: ["Budapest", "Vienna", "Krakow", "Prague"],
      answer: 3,
      image: "Prague"
    },
    {
      question: "Name this animal.",
      options: ["Clouded leopard", "Ocelot", "Serval", "Cheetah"],
      answer: 3,
      image: "Cheetah"
    },
    {
      question: "Name this famous bridge.",
      options: ["Brooklyn Bridge", "Golden Gate Bridge", "Sydney Harbour Bridge", "Tower Bridge"],
      answer: 3,
      image: "Tower Bridge"
    },
    {
      question: "What type of cloud is this?",
      options: ["Stratus", "Cirrus", "Nimbostratus", "Cumulonimbus"],
      answer: 3,
      image: "Cumulonimbus cloud"
    }
  ],

  // ──────────────────────────────────────────────────────────
  "Themed Round": [
    {
      question: "How many members are in the K-pop group BTS?",
      options: ["5", "6", "7", "8"],
      answer: 2,
      image: "BTS (band)"
    },
    {
      question: "What is the fastest animal on Earth?",
      options: ["Cheetah", "Sailfish", "Golden eagle", "Peregrine falcon"],
      answer: 3,
      image: "Peregrine falcon"
    },
    {
      question: "What does the S stand for in NASA?",
      options: ["Science", "Space", "Systems", "Studies"],
      answer: 1,
      image: "NASA"
    },
    {
      question: "In what year did Facebook launch publicly beyond Harvard?",
      options: ["2003", "2004", "2005", "2006"],
      answer: 2,
      image: "Facebook"
    },
    {
      question: "How many time zones does Russia span?",
      options: ["9", "10", "11", "12"],
      answer: 2,
      image: "Russia"
    },
    {
      question: "What is the world's best-selling video game of all time?",
      options: ["Tetris", "Grand Theft Auto V", "Wii Sports", "Minecraft"],
      answer: 3,
      image: "Minecraft"
    },
    {
      question: "What is the name of Thor's hammer in Norse mythology?",
      options: ["Gungnir", "Jarnbjorn", "Stormbreaker", "Mjolnir"],
      answer: 3,
      image: "Mjolnir"
    },
    {
      question: "Which animal appears on the Australian coat of arms alongside the kangaroo?",
      options: ["Wombat", "Platypus", "Koala", "Emu"],
      answer: 3,
      image: "Emu"
    },
    {
      question: "In which country is the majority of the Amazon rainforest located?",
      options: ["Colombia", "Peru", "Venezuela", "Brazil"],
      answer: 3,
      image: "Amazon rainforest"
    },
    {
      question: "How many keys are on a standard piano?",
      options: ["76", "80", "88", "92"],
      answer: 2,
      image: "Piano"
    },
    {
      question: "Which country is IKEA originally from?",
      options: ["Denmark", "Norway", "Finland", "Sweden"],
      answer: 3,
      image: "IKEA"
    },
    {
      question: "How many cards are in a standard deck, excluding jokers?",
      options: ["48", "50", "52", "54"],
      answer: 2,
      image: "Playing card"
    },
    {
      question: "Which country has the longest land border in the world?",
      options: ["Russia", "China", "USA", "Canada"],
      answer: 3,
      image: "Canada–United States border"
    },
    {
      question: "What is the name of the currency used in Japan?",
      options: ["Won", "Yuan", "Ringgit", "Japanese yen"],
      answer: 3,
      image: "Japanese yen"
    },
    {
      question: "Who wrote the Harry Potter series?",
      options: ["Stephenie Meyer", "Philip Pullman", "Roald Dahl", "J. K. Rowling"],
      answer: 3,
      image: "J. K. Rowling"
    }
  ]

};
