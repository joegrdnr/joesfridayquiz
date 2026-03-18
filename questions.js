// ============================================================
// JOE'S FRIDAY QUIZ — QUESTION DATABASE
// ============================================================
// Images use Wikimedia Commons Special:FilePath URLs.
// These are permanent CDN-served links that always load.
// Format: https://commons.wikimedia.org/wiki/Special:FilePath/Filename.jpg
//
// Non-picture-round images show the TOPIC of the question
// but are chosen carefully to not give away the answer.
//
// Picture Round images ARE the question — make them specific.
//
// answer: index of correct option (0=A, 1=B, 2=C, 3=D)
// ============================================================

const IMG = (filename, width=600) =>
  `https://commons.wikimedia.org/w/index.php?title=Special:FilePath&file=${encodeURIComponent(filename)}&width=${width}`;

const QUESTIONS = {

  // ──────────────────────────────────────────────────────────
  "General Knowledge": [
    {
      question: "How many pockets does a standard snooker table have?",
      options: ["4", "5", "6", "8"],
      answer: 2,
      image: IMG("Snooker_table_drawing_2.svg")
    },
    {
      question: "How many dots are there in total on a standard pair of dice?",
      options: ["40", "42", "44", "46"],
      answer: 1,
      image: IMG("2-Dice-Icon.svg")
    },
    {
      question: "Which country has the most natural lakes in the world?",
      options: ["Russia", "Finland", "USA", "Canada"],
      answer: 3,
      image: IMG("Canada_blank_map.svg")
    },
    {
      question: "What number does the Roman numeral 'D' represent?",
      options: ["100", "400", "500", "1000"],
      answer: 2,
      image: IMG("Colosseum_in_Rome,_Italy_-_April_2007.jpg")
    },
    {
      question: "How many teeth does an adult human have, including wisdom teeth?",
      options: ["28", "30", "32", "34"],
      answer: 2,
      image: IMG("Human_tooth_diagram-en.svg")
    },
    {
      question: "What is the capital of New Zealand?",
      options: ["Auckland", "Christchurch", "Queenstown", "Wellington"],
      answer: 3,
      image: IMG("New_Zealand_on_the_globe_(white_red)_(Oceania_centered).svg")
    },
    {
      question: "Which planet spins on its side with an axial tilt of about 98 degrees?",
      options: ["Saturn", "Neptune", "Uranus", "Jupiter"],
      answer: 2,
      image: IMG("Solar_system.jpg")
    },
    {
      question: "How long is a standard Olympic swimming pool?",
      options: ["25 metres", "40 metres", "50 metres", "100 metres"],
      answer: 2,
      image: IMG("World_Aquatics_Championships_-_Flickr_-_Al_Bello,_Getty_Images_for_FINA_(20).jpg")
    },
    {
      question: "On a standard keyboard, which letter sits between Z and C?",
      options: ["A", "X", "V", "B"],
      answer: 1,
      image: IMG("KB_United_States.svg")
    },
    {
      question: "What is the most common street name in the UK?",
      options: ["Victoria Road", "Church Lane", "High Street", "Park Avenue"],
      answer: 2,
      image: IMG("London_Oxford_Street.jpg")
    },
    {
      question: "Which language has the most words?",
      options: ["Mandarin", "Spanish", "French", "English"],
      answer: 3,
      image: IMG("Languages_of_the_World_-_map.png")
    },
    {
      question: "What shape is a standard stop sign?",
      options: ["Hexagon", "Pentagon", "Octagon", "Heptagon"],
      answer: 2,
      image: IMG("Stop_sign_MUTCD.svg")
    },
    {
      question: "The World Wide Web was invented by Tim Berners-Lee while working in which country?",
      options: ["UK", "USA", "Germany", "Switzerland"],
      answer: 3,
      image: IMG("Tim_Berners-Lee_2012.jpg")
    },
    {
      question: "What is the only mammal capable of true sustained flight?",
      options: ["Flying squirrel", "Sugar glider", "Bat", "Colugo"],
      answer: 2,
      image: IMG("Bat_flying_at_night.jpg")
    },
    {
      question: "How many sides does a British 50p coin have?",
      options: ["5", "6", "7", "8"],
      answer: 2,
      image: IMG("50p_coin.png")
    }
  ],

  // ──────────────────────────────────────────────────────────
  "Sport": [
    {
      question: "Which footballer has won the most Ballon d'Or awards?",
      options: ["Cristiano Ronaldo", "Lionel Messi", "Ronaldinho", "Zinedine Zidane"],
      answer: 1,
      image: IMG("Ballon_dor.jpg")
    },
    {
      question: "In darts, what is the highest possible score with three darts?",
      options: ["150", "160", "170", "180"],
      answer: 3,
      image: IMG("Darts_in_a_dartboard.jpg")
    },
    {
      question: "Which club has won the most Premier League titles?",
      options: ["Arsenal", "Chelsea", "Liverpool", "Manchester United"],
      answer: 3,
      image: IMG("Premier_League_Logo.svg")
    },
    {
      question: "Which golfer is nicknamed 'The Big Easy'?",
      options: ["Retief Goosen", "Ernie Els", "Trevor Immelman", "Louis Oosthuizen"],
      answer: 1,
      image: IMG("Golf_swing.jpg")
    },
    {
      question: "England's all-time record men's goal scorer — who is it?",
      options: ["Wayne Rooney", "Michael Owen", "Bobby Charlton", "Harry Kane"],
      answer: 3,
      image: IMG("England_national_football_team_crest.svg")
    },
    {
      question: "Which country is Formula 1 driver Max Verstappen from?",
      options: ["Belgium", "Germany", "Austria", "Netherlands"],
      answer: 3,
      image: IMG("Max_Verstappen_2022_Bahrain_GP_-_Lluka_Karajici.jpg")
    },
    {
      question: "What colour jersey does the leader of the Tour de France wear?",
      options: ["Red", "White", "Green", "Yellow"],
      answer: 3,
      image: IMG("Tour_de_France_2012_Prologue_Liège_-_Firmin_Lambert.jpg")
    },
    {
      question: "Which sport uses a shuttlecock?",
      options: ["Squash", "Badminton", "Racquetball", "Padel"],
      answer: 1,
      image: IMG("Shuttlecock_Yonex_Mavis_350.jpg")
    },
    {
      question: "At which ground do Yorkshire play their home cricket matches?",
      options: ["Edgbaston", "Old Trafford", "Headingley", "Trent Bridge"],
      answer: 2,
      image: IMG("Headingley_Cricket_Ground_-_geograph.org.uk_-_1302107.jpg")
    },
    {
      question: "Which country won the 2023 Rugby World Cup?",
      options: ["Ireland", "Argentina", "New Zealand", "South Africa"],
      answer: 3,
      image: IMG("Rugby_World_Cup_trophy_(2023).jpg")
    },
    {
      question: "Which team won men's ice hockey gold at the 2026 Winter Olympics?",
      options: ["Canada", "Sweden", "Finland", "USA"],
      answer: 3,
      image: IMG("2026_Winter_Olympics_logo.svg")
    },
    {
      question: "How many Grand Slam tennis tournaments are played each year?",
      options: ["2", "3", "4", "5"],
      answer: 2,
      image: IMG("Tennis_Racket_and_Balls.jpg")
    },
    {
      question: "In which sport would you perform a slam dunk?",
      options: ["Volleyball", "Netball", "Basketball", "Handball"],
      answer: 2,
      image: IMG("Basketball_goal.jpg")
    },
    {
      question: "How many players are on the pitch in a rugby union match (both teams combined)?",
      options: ["26", "28", "30", "32"],
      answer: 2,
      image: IMG("Rugby_scrummage.jpg")
    },
    {
      question: "Norway topped the 2026 Winter Olympics medal table — in which city were they held?",
      options: ["Turin", "Innsbruck", "Milan", "Grenoble"],
      answer: 2,
      image: IMG("Milan_Cathedral_from_Piazza_del_Duomo.jpg")
    }
  ],

  // ──────────────────────────────────────────────────────────
  "Music": [
    {
      question: "Kendrick Lamar won Record of the Year at the 2026 Grammys for which song (with SZA)?",
      options: ["Not Like Us", "Luther", "Peekaboo", "tv off"],
      answer: 1,
      image: IMG("Grammy_Award.jpg")
    },
    {
      question: "Lady Gaga won Best Pop Solo Performance at the 2026 Grammys for which track from 'Mayhem'?",
      options: ["Disease", "Abracadabra", "Vanish Into You", "Perfect Celebrity"],
      answer: 1,
      image: IMG("Grammy_Award.jpg")
    },
    {
      question: "Who sang the Bond theme for Skyfall in 2012?",
      options: ["Shirley Bassey", "Sam Smith", "Adele", "Billie Eilish"],
      answer: 2,
      image: IMG("James_Bond_series_logo.svg")
    },
    {
      question: "Which Irish rock band has members Bono, The Edge, Adam Clayton and Larry Mullen Jr.?",
      options: ["The Pogues", "Thin Lizzy", "U2", "Snow Patrol"],
      answer: 2,
      image: IMG("Dublin_-_Ha'Penny_Bridge_at_night.jpg")
    },
    {
      question: "Who was the lead singer of The Doors?",
      options: ["Mick Jagger", "Roger Waters", "Jim Morrison", "Iggy Pop"],
      answer: 2,
      image: IMG("The_Doors_logo.svg")
    },
    {
      question: "What instrument does Dave Grohl primarily play in Foo Fighters?",
      options: ["Bass", "Drums", "Guitar", "Keyboard"],
      answer: 2,
      image: IMG("Foo_Fighters_logo.svg")
    },
    {
      question: "Which city is known as Motown — home of a legendary record label?",
      options: ["Chicago", "Atlanta", "Memphis", "Detroit"],
      answer: 3,
      image: IMG("Motown_Records_logo.svg")
    },
    {
      question: "How many strings does a standard violin have?",
      options: ["3", "4", "5", "6"],
      answer: 1,
      image: IMG("Violin_VL100.png")
    },
    {
      question: "Glastonbury Festival is held in which English county?",
      options: ["Devon", "Dorset", "Wiltshire", "Somerset"],
      answer: 3,
      image: IMG("Glastonbury_Festival_2000.jpg")
    },
    {
      question: "Which decade did hip-hop originate in?",
      options: ["1960s", "1970s", "1980s", "1990s"],
      answer: 1,
      image: IMG("Boombox2.jpg")
    },
    {
      question: "In music, how many semitones are there in an octave?",
      options: ["8", "10", "12", "14"],
      answer: 2,
      image: IMG("Piano_keyboard.svg")
    },
    {
      question: "What was the UK's first number one single of the new millennium?",
      options: ["Pure Shores – All Saints", "Bag It Up – Geri Halliwell", "Can We Fix It? – Bob the Builder", "Stan – Eminem"],
      answer: 2,
      image: IMG("UK_Singles_Chart_logo.svg")
    },
    {
      question: "Billie Eilish won Song of the Year at the 2026 Grammys — what was the song?",
      options: ["Lunch", "Birds of a Feather", "Wildflower", "Chihiro"],
      answer: 1,
      image: IMG("Grammy_Award.jpg")
    },
    {
      question: "Which artist holds the record for the most weeks at number one on the UK singles chart?",
      options: ["Ed Sheeran", "Elvis Presley", "Wet Wet Wet", "Bryan Adams"],
      answer: 3,
      image: IMG("UK_Singles_Chart_logo.svg")
    },
    {
      question: "What is the best-selling physical music format of all time?",
      options: ["Vinyl record", "Cassette tape", "CD", "8-track"],
      answer: 2,
      image: IMG("Cd-rom.jpg")
    }
  ],

  // ──────────────────────────────────────────────────────────
  "Film & TV": [
    {
      question: "Which Netflix show is set in the fictional town of Hawkins, Indiana?",
      options: ["Dark", "The OA", "Stranger Things", "Wayward Pines"],
      answer: 2,
      image: IMG("Netflix_logo.svg")
    },
    {
      question: "Who plays Tyrion Lannister in Game of Thrones?",
      options: ["Conleth Hill", "Liam Cunningham", "Peter Dinklage", "Nikolaj Coster-Waldau"],
      answer: 2,
      image: IMG("Game_of_Thrones_2011_logo.svg")
    },
    {
      question: "In the UK version of The Office, what is David Brent's company called?",
      options: ["Wernham Hogg", "Dunder Mifflin", "Initech", "Sabre"],
      answer: 0,
      image: IMG("Slough_-_geograph.org.uk_-_1008587.jpg")
    },
    {
      question: "Which film became the first non-English language film to win Best Picture at the Oscars?",
      options: ["Roma", "Shoplifters", "Parasite", "The Farewell"],
      answer: 2,
      image: IMG("Academy_Award_trophy.jpg")
    },
    {
      question: "Who plays Walter White in Breaking Bad?",
      options: ["Bob Odenkirk", "Jonathan Banks", "Aaron Paul", "Bryan Cranston"],
      answer: 3,
      image: IMG("Breaking_Bad_logo.svg")
    },
    {
      question: "What is the name of the pub in Peaky Blinders?",
      options: ["The Crown", "The Anchor", "The Garrison", "The Shelby Arms"],
      answer: 2,
      image: IMG("Birmingham_Back_to_Backs_(1).jpg")
    },
    {
      question: "Who directed Oppenheimer (2023)?",
      options: ["Steven Spielberg", "Denis Villeneuve", "Christopher Nolan", "Ridley Scott"],
      answer: 2,
      image: IMG("Trinity_shot_color.jpg")
    },
    {
      question: "Which actor plays Logan Roy in Succession?",
      options: ["Jeff Daniels", "Anthony Hopkins", "Tom Wilkinson", "Brian Cox"],
      answer: 3,
      image: IMG("New_York_City_skyline_from_the_East_River.jpg")
    },
    {
      question: "Which streaming platform produces The Boys?",
      options: ["Netflix", "Disney+", "Apple TV+", "Amazon Prime Video"],
      answer: 3,
      image: IMG("Amazon_Prime_Video_logo.svg")
    },
    {
      question: "Which British sitcom features Del Boy and Rodney Trotter?",
      options: ["Porridge", "Blackadder", "Only Fools and Horses", "Dad's Army"],
      answer: 2,
      image: IMG("Peckham_High_Street.jpg")
    },
    {
      question: "Emma Stone won the 2024 Best Actress Oscar for which film?",
      options: ["La La Land", "The Favourite", "Cruella", "Poor Things"],
      answer: 3,
      image: IMG("Academy_Award_trophy.jpg")
    },
    {
      question: "How many episodes are in the final season of Game of Thrones?",
      options: ["5", "6", "7", "8"],
      answer: 1,
      image: IMG("Game_of_Thrones_2011_logo.svg")
    },
    {
      question: "What year was the first Fast and Furious film released?",
      options: ["1999", "2001", "2003", "2005"],
      answer: 1,
      image: IMG("Street_racing.jpg")
    },
    {
      question: "Which fictional city does Batman protect?",
      options: ["Metropolis", "Star City", "Central City", "Gotham City"],
      answer: 3,
      image: IMG("Batman_logo.svg")
    },
    {
      question: "What is the name of Tony Soprano's psychiatrist in The Sopranos?",
      options: ["Dr. Krakower", "Dr. Cusumano", "Dr. Melfi", "Dr. Kennedy"],
      answer: 2,
      image: IMG("New_Jersey_Turnpike.jpg")
    }
  ],

  // ──────────────────────────────────────────────────────────
  "News & Current Affairs": [
    {
      question: "Which country topped the medal table at the 2026 Milan Cortina Winter Olympics?",
      options: ["USA", "Germany", "Italy", "Norway"],
      answer: 3,
      image: IMG("2026_Winter_Olympics_logo.svg")
    },
    {
      question: "Who won Album of the Year at the 2026 Grammys — the first Spanish-language album to do so?",
      options: ["Karol G", "Bad Bunny", "J Balvin", "Ozuna"],
      answer: 1,
      image: IMG("Grammy_Award.jpg")
    },
    {
      question: "In February 2026, Israel and the US launched strikes targeting the leadership of which country?",
      options: ["Syria", "Lebanon", "Yemen", "Iran"],
      answer: 3,
      image: IMG("Middle_East_map_blank.svg")
    },
    {
      question: "Which country sent troops to a disputed territory after the US threatened annexation in early 2026?",
      options: ["Norway to Svalbard", "Denmark to Greenland", "UK to Falklands", "Canada to Arctic"],
      answer: 1,
      image: IMG("Greenland_topography.jpg")
    },
    {
      question: "Kendrick Lamar broke whose record to become the most awarded rapper in Grammy history at the 2026 ceremony?",
      options: ["Eminem", "Drake", "Jay-Z", "Kanye West"],
      answer: 2,
      image: IMG("Grammy_Award.jpg")
    },
    {
      question: "The 2026 FIFA World Cup is being co-hosted by which three countries?",
      options: ["UK, Ireland and France", "Canada, Mexico and USA", "Spain, Portugal and Morocco", "Brazil, Argentina and Chile"],
      answer: 1,
      image: IMG("FIFA_World_Cup_Trophy_2010.jpg")
    },
    {
      question: "Sir Keir Starmer became UK Prime Minister in which year?",
      options: ["2022", "2023", "2024", "2025"],
      answer: 2,
      image: IMG("10_Downing_Street,_London.jpg")
    },
    {
      question: "Which Norwegian skier won six gold medals at the 2026 Winter Olympics?",
      options: ["Sturla Holm Laegreid", "Petter Northug Jr", "Simen Hegstad Krüger", "Johannes Høsflot Klæbo"],
      answer: 3,
      image: IMG("Cross-country_skiing_Davos.jpg")
    },
    {
      question: "Billie Eilish won Song of the Year at the 2026 Grammys — what was the song?",
      options: ["Lunch", "Chihiro", "Birds of a Feather", "Wildflower"],
      answer: 2,
      image: IMG("Grammy_Award.jpg")
    },
    {
      question: "Which tech billionaire purchased Twitter in 2022 and rebranded it to X?",
      options: ["Mark Zuckerberg", "Jeff Bezos", "Larry Ellison", "Elon Musk"],
      answer: 3,
      image: IMG("Twitter_bird_logo_2012.svg")
    },
    {
      question: "Which country won the 2022 FIFA World Cup?",
      options: ["Brazil", "France", "Croatia", "Argentina"],
      answer: 3,
      image: IMG("FIFA_World_Cup_Qatar_2022.svg")
    },
    {
      question: "As of 2026, who is the CEO of Apple?",
      options: ["Jony Ive", "Craig Federighi", "Tim Cook", "Eddy Cue"],
      answer: 2,
      image: IMG("Apple_logo_black.svg")
    },
    {
      question: "Which AI chatbot was launched by OpenAI in late 2022?",
      options: ["Gemini", "Copilot", "Claude", "ChatGPT"],
      answer: 3,
      image: IMG("OpenAI_Logo.svg")
    },
    {
      question: "Donald Trump was inaugurated as US President for the second time in which month and year?",
      options: ["November 2024", "December 2024", "January 2025", "February 2025"],
      answer: 2,
      image: IMG("White_House_Washington.jpg")
    },
    {
      question: "Which country made history winning their first ever Winter Olympic gold at Milan Cortina 2026?",
      options: ["Mexico", "Brazil", "Colombia", "Chile"],
      answer: 1,
      image: IMG("2026_Winter_Olympics_logo.svg")
    }
  ],

  // ──────────────────────────────────────────────────────────
  "Food & Drink": [
    {
      question: "What is Scoville used to measure?",
      options: ["Acidity in wine", "Bitterness in beer", "Heat in chillies", "Sweetness in chocolate"],
      answer: 2,
      image: IMG("Chili_peppers.jpg")
    },
    {
      question: "What type of pastry is used to make a beef Wellington?",
      options: ["Filo", "Shortcrust", "Choux", "Puff pastry"],
      answer: 3,
      image: IMG("Beef-wellington-1.jpg")
    },
    {
      question: "In which country did Chicken Tikka Masala most likely originate?",
      options: ["India", "Pakistan", "Bangladesh", "United Kingdom"],
      answer: 3,
      image: IMG("Chicken_tikka_masala.jpg")
    },
    {
      question: "What nut is marzipan made from?",
      options: ["Walnut", "Hazelnut", "Pistachio", "Almond"],
      answer: 3,
      image: IMG("Marzipan_figures.jpg")
    },
    {
      question: "What does IPA stand for in craft beer?",
      options: ["International Premium Ale", "Indian Pale Ale", "Irish Pale Ale", "Imperial Pint Ale"],
      answer: 1,
      image: IMG("Craft_beer_brewery.jpg")
    },
    {
      question: "Which cheese is traditionally melted on top of a French Onion Soup?",
      options: ["Brie", "Comté", "Camembert", "Gruyère"],
      answer: 3,
      image: IMG("Onion_soup.jpg")
    },
    {
      question: "What is the traditional Scottish dish made from sheep offal?",
      options: ["Cullen Skink", "Cock-a-leekie soup", "Cranachan", "Haggis"],
      answer: 3,
      image: IMG("Haggis_with_neeps_and_tatties.jpg")
    },
    {
      question: "Which country is the world's largest producer of olive oil?",
      options: ["Italy", "Greece", "Tunisia", "Spain"],
      answer: 3,
      image: IMG("Olive_oil_from_Oneglia.jpg")
    },
    {
      question: "What is the base spirit in a classic Mojito?",
      options: ["Vodka", "Gin", "Tequila", "Rum"],
      answer: 3,
      image: IMG("Mojito_with_straw.jpg")
    },
    {
      question: "In which Italian city was the Negroni cocktail invented?",
      options: ["Rome", "Milan", "Venice", "Florence"],
      answer: 3,
      image: IMG("Negroni_cocktail.jpg")
    },
    {
      question: "What type of wine is Prosecco?",
      options: ["Still white", "Rosé", "Fortified", "Sparkling wine"],
      answer: 3,
      image: IMG("Prosecco_glass.jpg")
    },
    {
      question: "What fruit is used to make the French brandy Calvados?",
      options: ["Grape", "Pear", "Plum", "Apple"],
      answer: 3,
      image: IMG("Calvados_bottle.jpg")
    },
    {
      question: "Roughly how many calories are in a pint of Guinness?",
      options: ["125", "170", "210", "280"],
      answer: 2,
      image: IMG("Glass_of_Guinness.jpg")
    },
    {
      question: "Which chef became famous for his 'Naked Chef' BBC show in the late 1990s?",
      options: ["Gordon Ramsay", "Heston Blumenthal", "Nigel Slater", "Jamie Oliver"],
      answer: 3,
      image: IMG("Chef_cooking.jpg")
    },
    {
      question: "What is the main grain used to make traditional Japanese sake?",
      options: ["Wheat", "Barley", "Corn", "Rice"],
      answer: 3,
      image: IMG("Sake_bottle_and_ochoko.jpg")
    }
  ],

  // ──────────────────────────────────────────────────────────
  "Science & Nature": [
    {
      question: "How many bones does a shark have?",
      options: ["None — their skeleton is cartilage", "12", "48", "Over 200"],
      answer: 0,
      image: IMG("White_shark.jpg")
    },
    {
      question: "How many planets are in our solar system?",
      options: ["7", "8", "9", "10"],
      answer: 1,
      image: IMG("Solar_sys8.jpg")
    },
    {
      question: "What gas do plants absorb during photosynthesis?",
      options: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon dioxide"],
      answer: 3,
      image: IMG("Photosynthesis_en.svg")
    },
    {
      question: "What is the boundary around a black hole beyond which nothing can escape?",
      options: ["Singularity", "Neutron shell", "Schwarzschild limit", "Event horizon"],
      answer: 3,
      image: IMG("Black_hole_-_Messier_87_crop_max_res.jpg")
    },
    {
      question: "How long does it take light from the Sun to reach Earth?",
      options: ["2 minutes", "8 minutes", "22 minutes", "1 hour"],
      answer: 1,
      image: IMG("The_Sun_by_the_Atmospheric_Imaging_Assembly.jpg")
    },
    {
      question: "What is the process by which a caterpillar transforms into a butterfly?",
      options: ["Hibernation", "Symbiosis", "Mitosis", "Metamorphosis"],
      answer: 3,
      image: IMG("Monarch_Butterfly_Danaus_plexippus.jpg")
    },
    {
      question: "A diamond is made entirely of which element?",
      options: ["Silicon", "Quartz", "Graphene", "Carbon"],
      answer: 3,
      image: IMG("Diamond_polished.jpg")
    },
    {
      question: "What is the study of earthquakes called?",
      options: ["Volcanology", "Geology", "Tectonology", "Seismology"],
      answer: 3,
      image: IMG("Seismogram.jpg")
    },
    {
      question: "What percentage of the Earth's surface is covered by water?",
      options: ["51%", "61%", "71%", "81%"],
      answer: 2,
      image: IMG("Earth_Eastern_Hemisphere.jpg")
    },
    {
      question: "What is the most venomous animal in the world?",
      options: ["Inland taipan", "King cobra", "Cone snail", "Box jellyfish"],
      answer: 3,
      image: IMG("Chironex_fleckeri_2.jpg")
    },
    {
      question: "What is the chemical symbol for potassium?",
      options: ["Po", "Pt", "P", "K"],
      answer: 3,
      image: IMG("Periodic_table.svg")
    },
    {
      question: "Approximately how many neurons does the human brain contain?",
      options: ["86 thousand", "86 million", "86 billion", "86 trillion"],
      answer: 2,
      image: IMG("Human_brain.jpg")
    },
    {
      question: "What is the only element that is liquid at room temperature besides mercury?",
      options: ["Gallium", "Caesium", "Francium", "Bromine"],
      answer: 3,
      image: IMG("Periodic_table.svg")
    },
    {
      question: "What is the approximate surface temperature of the Sun?",
      options: ["1,500°C", "5,500°C", "15,000°C", "55,000°C"],
      answer: 1,
      image: IMG("The_Sun_by_the_Atmospheric_Imaging_Assembly.jpg")
    },
    {
      question: "What is the process by which plants lose water through their leaves?",
      options: ["Photosynthesis", "Osmosis", "Respiration", "Transpiration"],
      answer: 3,
      image: IMG("Photosynthesis_en.svg")
    }
  ],

  // ──────────────────────────────────────────────────────────
  "History": [
    {
      question: "In which year did Neil Armstrong walk on the Moon?",
      options: ["1965", "1967", "1969", "1971"],
      answer: 2,
      image: IMG("Apollo_11_mission_profile.jpg")
    },
    {
      question: "The Magna Carta was signed in which year?",
      options: ["1066", "1154", "1215", "1348"],
      answer: 2,
      image: IMG("Magna_Carta_(British_Library_Cotton_MS_Augustus_II.106).jpg")
    },
    {
      question: "The Battle of Hastings was fought in which year?",
      options: ["1040", "1066", "1087", "1100"],
      answer: 1,
      image: IMG("Bayeux_Tapestry_WillelmDux.jpg")
    },
    {
      question: "The Chernobyl nuclear disaster happened in which year?",
      options: ["1979", "1983", "1986", "1989"],
      answer: 2,
      image: IMG("Chernobyl_Disaster.jpg")
    },
    {
      question: "Which country was apartheid practised in?",
      options: ["Zimbabwe", "Kenya", "Nigeria", "South Africa"],
      answer: 3,
      image: IMG("Apartheid_sign.jpg")
    },
    {
      question: "In what year did the Soviet Union collapse?",
      options: ["1985", "1989", "1991", "1993"],
      answer: 2,
      image: IMG("Berlin_Wall.jpg")
    },
    {
      question: "Which explorer is credited with landing in the Americas in 1492?",
      options: ["Amerigo Vespucci", "John Cabot", "Hernán Cortés", "Christopher Columbus"],
      answer: 3,
      image: IMG("Caravela_portuguesa.jpg")
    },
    {
      question: "Which ancient civilisation built Machu Picchu?",
      options: ["Aztec", "Maya", "Olmec", "Inca"],
      answer: 3,
      image: IMG("MachuPicchu_AgustinFotografo.jpg")
    },
    {
      question: "Who was UK Prime Minister when World War I broke out in 1914?",
      options: ["David Lloyd George", "Winston Churchill", "Andrew Bonar Law", "H. H. Asquith"],
      answer: 3,
      image: IMG("First_World_War_poster.jpg")
    },
    {
      question: "What was the name of the ship on which Charles Darwin made his famous voyage?",
      options: ["HMS Endeavour", "HMS Victory", "HMS Discovery", "HMS Beagle"],
      answer: 3,
      image: IMG("PSM_V57_D097_Hms_beagle_in_the_straits_of_magellan.jpg")
    },
    {
      question: "Which Chinese dynasty built the majority of the Great Wall of China?",
      options: ["Han", "Tang", "Qin", "Ming"],
      answer: 3,
      image: IMG("The_Great_Wall_of_China_at_Jinshanling-edit.jpg")
    },
    {
      question: "In what year did World War II end?",
      options: ["1943", "1944", "1945", "1946"],
      answer: 2,
      image: IMG("World_War_II_Casualties.svg")
    },
    {
      question: "Who was the first person to circumnavigate the globe?",
      options: ["Christopher Columbus", "Vasco da Gama", "Francis Drake", "Ferdinand Magellan"],
      answer: 3,
      image: IMG("Magellan_Elcano_Circumnavigation-en.svg")
    },
    {
      question: "The French Revolution began in which year?",
      options: ["1776", "1783", "1789", "1799"],
      answer: 2,
      image: IMG("Prise_de_la_Bastille.jpg")
    },
    {
      question: "Which British monarch had the longest reign in history?",
      options: ["Queen Victoria", "King George III", "King Henry VIII", "Queen Elizabeth II"],
      answer: 3,
      image: IMG("Buckingham_Palace,_London_-_April_2009.jpg")
    }
  ],

  // ──────────────────────────────────────────────────────────
  // PICTURE ROUND — image IS the question. Be specific.
  // ──────────────────────────────────────────────────────────
  "Picture Round": [
    {
      question: "Name this world leader.",
      options: ["Emmanuel Macron", "Justin Trudeau", "Pedro Sánchez", "Volodymyr Zelensky"],
      answer: 3,
      image: IMG("Volodymyr_Zelensky_2019.jpg")
    },
    {
      question: "Name this landmark.",
      options: ["Burj Al Arab", "CN Tower", "Empire State Building", "Petronas Towers"],
      answer: 3,
      image: IMG("Petronas_Towers,_Kuala_Lumpur.jpg")
    },
    {
      question: "What animal is this?",
      options: ["Tapir", "Nutria", "Wombat", "Capybara"],
      answer: 3,
      image: IMG("Capybara_Hydrochoerus_hydrochaeris.jpg")
    },
    {
      question: "Name this famous painting.",
      options: ["The Birth of Venus", "Girl with a Pearl Earring", "American Gothic", "The Scream"],
      answer: 3,
      image: IMG("The_Scream_by_Edvard_Munch,_1893_-_Nasjonalgalleriet.png")
    },
    {
      question: "Name this sporting trophy.",
      options: ["Jules Rimet Trophy", "FA Cup", "FIFA World Cup Trophy", "UEFA Champions League"],
      answer: 3,
      image: IMG("UEFA_Champions_League_trophy_2013.jpg")
    },
    {
      question: "Which city's skyline is this?",
      options: ["Chicago", "Dubai", "Singapore", "Hong Kong"],
      answer: 3,
      image: IMG("Hong_Kong_Night_Skyline.jpg")
    },
    {
      question: "What sport is being played here?",
      options: ["Lacrosse", "Shinty", "Field hockey", "Hurling"],
      answer: 3,
      image: IMG("Kilkenny_vs_Tipperary_hurling.jpg")
    },
    {
      question: "Name this iconic car.",
      options: ["Jaguar E-Type", "Ferrari 250 GT", "Lamborghini Miura", "Aston Martin DB5"],
      answer: 3,
      image: IMG("Aston_Martin_DB5_(silver).jpg")
    },
    {
      question: "Which planet is this?",
      options: ["Jupiter", "Neptune", "Uranus", "Saturn"],
      answer: 3,
      image: IMG("Saturn_during_Equinox.jpg")
    },
    {
      question: "Name this dish.",
      options: ["Pad Thai", "Pho", "Laksa", "Ramen"],
      answer: 3,
      image: IMG("Shoyu_ramen,_at_Kasukabe_Station_(2014-03-20).jpg")
    },
    {
      question: "Which city is this?",
      options: ["Budapest", "Vienna", "Krakow", "Prague"],
      answer: 3,
      image: IMG("Prague_-_Hradčany_and_Vltava_2.jpg")
    },
    {
      question: "Name this animal.",
      options: ["Clouded leopard", "Ocelot", "Serval", "Cheetah"],
      answer: 3,
      image: IMG("Cheetah_(Acinonyx_jubilatus)_female.jpg")
    },
    {
      question: "Name this famous bridge.",
      options: ["Brooklyn Bridge", "Golden Gate Bridge", "Sydney Harbour Bridge", "Tower Bridge"],
      answer: 3,
      image: IMG("Tower_Bridge_from_Shad_Thames.jpg")
    },
    {
      question: "Who is this musician?",
      options: ["Phoebe Bridgers", "Taylor Swift", "Olivia Rodrigo", "Billie Eilish"],
      answer: 3,
      image: IMG("Billie_Eilish_2019.jpg")
    },
    {
      question: "Name this famous landmark.",
      options: ["Sagrada Família", "St Peter's Basilica", "Notre-Dame de Paris", "Westminster Abbey"],
      answer: 2,
      image: IMG("Notre-Dame_de_Paris,_West_View_140312_1.jpg")
    }
  ],

  // ──────────────────────────────────────────────────────────
  "Themed Round": [
    {
      question: "How many members are in the K-pop group BTS?",
      options: ["5", "6", "7", "8"],
      answer: 2,
      image: IMG("BTS_logo.svg")
    },
    {
      question: "What is the fastest animal on Earth?",
      options: ["Cheetah", "Sailfish", "Golden eagle", "Peregrine falcon"],
      answer: 3,
      image: IMG("Falco_peregrinus_-_01.jpg")
    },
    {
      question: "What does the S stand for in NASA?",
      options: ["Science", "Space", "Systems", "Studies"],
      answer: 1,
      image: IMG("NASA_logo.svg")
    },
    {
      question: "In what year did Facebook launch publicly beyond Harvard?",
      options: ["2003", "2004", "2005", "2006"],
      answer: 2,
      image: IMG("Facebook_f_logo_(2021).svg")
    },
    {
      question: "How many time zones does Russia span?",
      options: ["9", "10", "11", "12"],
      answer: 2,
      image: IMG("Russia_on_the_globe_(red).svg")
    },
    {
      question: "What is the world's best-selling video game of all time?",
      options: ["Tetris", "Grand Theft Auto V", "Wii Sports", "Minecraft"],
      answer: 3,
      image: IMG("Minecraft_logo.svg")
    },
    {
      question: "What is the name of Thor's hammer in Norse mythology?",
      options: ["Gungnir", "Jarnbjorn", "Stormbreaker", "Mjolnir"],
      answer: 3,
      image: IMG("Thor-Hammer-Mjolnir.jpg")
    },
    {
      question: "Which animal appears on the Australian coat of arms alongside the kangaroo?",
      options: ["Wombat", "Platypus", "Koala", "Emu"],
      answer: 3,
      image: IMG("Coat_of_Arms_of_Australia.svg")
    },
    {
      question: "In which country is the majority of the Amazon rainforest located?",
      options: ["Colombia", "Peru", "Venezuela", "Brazil"],
      answer: 3,
      image: IMG("Amazon_rainforest.jpg")
    },
    {
      question: "How many keys are on a standard piano?",
      options: ["76", "80", "88", "92"],
      answer: 2,
      image: IMG("Piano_keyboard_88_keys.png")
    },
    {
      question: "Which country is IKEA originally from?",
      options: ["Denmark", "Norway", "Finland", "Sweden"],
      answer: 3,
      image: IMG("IKEA_logo.svg")
    },
    {
      question: "How many cards are in a standard deck, excluding jokers?",
      options: ["48", "50", "52", "54"],
      answer: 2,
      image: IMG("English_pattern_playing_cards_deck.svg")
    },
    {
      question: "Which country has the longest land border in the world?",
      options: ["Russia", "China", "USA", "Canada"],
      answer: 3,
      image: IMG("Canada_blank_map.svg")
    },
    {
      question: "What is the currency used in Japan?",
      options: ["Won", "Yuan", "Ringgit", "Yen"],
      answer: 3,
      image: IMG("Flag_of_Japan.svg")
    },
    {
      question: "Who wrote the Harry Potter series?",
      options: ["Stephenie Meyer", "Philip Pullman", "Roald Dahl", "J. K. Rowling"],
      answer: 3,
      image: IMG("Harry_Potter_wordmark.svg")
    }
  ]

};
