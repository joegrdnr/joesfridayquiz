// ============================================================
// JOE'S FRIDAY QUIZ — QUESTION DATABASE
// ============================================================
// Each question can have an optional "image" field.
// For Picture Round questions, the image IS the question.
//
// Image URLs should be direct links to freely licensed images
// (Wikimedia Commons is ideal: commons.wikimedia.org)
//
// FORMAT:
// {
//   question: "Question text here?",
//   options: ["A", "B", "C", "D"],
//   answer: 0,  // index of correct answer (0=A, 1=B, 2=C, 3=D)
//   image: "https://upload.wikimedia.org/..." // optional
// }
//
// Keep 15+ questions per category for good rotation variety.
// ============================================================

const QUESTIONS = {

  // ──────────────────────────────────────────────────────────
  "General Knowledge": [
    {
      question: "What colour is the 'Silence Please' sign at Wimbledon?",
      options: ["Red", "Green", "White", "Yellow"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Wimbledon_2011_-_Aorangi_Terrace_%285900714490%29.jpg/960px-Wimbledon_2011_-_Aorangi_Terrace_%285900714490%29.jpg"
    },
    {
      question: "How many pockets does a standard snooker table have?",
      options: ["4", "5", "6", "8"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Snooker_table_drawing_2.svg/960px-Snooker_table_drawing_2.svg.png"
    },
    {
      question: "How many dots are there in total on a standard pair of dice?",
      options: ["36", "40", "42", "44"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/6sided_dice.jpg/960px-6sided_dice.jpg"
    },
    {
      question: "Which country has the most natural lakes in the world?",
      options: ["Russia", "USA", "Finland", "Canada"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Map_of_Canada.png/800px-Map_of_Canada.png"
    },
    {
      question: "What is the only mammal capable of true flight?",
      options: ["Flying squirrel", "Sugar glider", "Bat", "Colugo"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Common_pipistrelle_bat_%28Pipistrellus_pipistrellus%29.jpg/960px-Common_pipistrelle_bat_%28Pipistrellus_pipistrellus%29.jpg"
    },
    {
      question: "What number does the Roman numeral 'D' represent?",
      options: ["50", "100", "500", "1000"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Roman_Numerals.svg/640px-Roman_Numerals.svg.png"
    },
    {
      question: "How many teeth does an adult human have (including wisdom teeth)?",
      options: ["28", "30", "32", "34"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Adult_teeth_numbering.svg/800px-Adult_teeth_numbering.svg.png"
    },
    {
      question: "What is the capital of New Zealand?",
      options: ["Auckland", "Christchurch", "Wellington", "Dunedin"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Wellington_from_Mount_Victoria_-_Nov_2008.jpg/960px-Wellington_from_Mount_Victoria_-_Nov_2008.jpg"
    },
    {
      question: "Which planet spins on its side with an axial tilt of 98 degrees?",
      options: ["Saturn", "Neptune", "Uranus", "Jupiter"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/800px-Uranus2.jpg"
    },
    {
      question: "How long is a standard Olympic swimming pool?",
      options: ["25 metres", "50 metres", "75 metres", "100 metres"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Olympic_swimming_pool.jpg/960px-Olympic_swimming_pool.jpg"
    },
    {
      question: "Which country invented the World Wide Web?",
      options: ["USA", "Germany", "UK", "Switzerland"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/WWW_logo_by_Robert_Cailliau.svg/800px-WWW_logo_by_Robert_Cailliau.svg.png"
    },
    {
      question: "On a standard keyboard, which letter is between Z and C?",
      options: ["A", "V", "X", "B"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/QWERTY.svg/960px-QWERTY.svg.png"
    },
    {
      question: "What is the most common street name in the UK?",
      options: ["Victoria Road", "High Street", "Church Lane", "Park Avenue"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/London_-_geograph.org.uk_-_1388293.jpg/960px-London_-_geograph.org.uk_-_1388293.jpg"
    },
    {
      question: "Which language has the most words?",
      options: ["Mandarin", "Spanish", "French", "English"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/World_languages.png/960px-World_languages.png"
    },
    {
      question: "What shape is a standard stop sign?",
      options: ["Hexagon", "Circle", "Octagon", "Pentagon"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/STOP_sign.jpg/800px-STOP_sign.jpg"
    }
  ],

  // ──────────────────────────────────────────────────────────
  "Sport": [
    {
      question: "Which footballer has won the most Ballon d'Or awards?",
      options: ["Cristiano Ronaldo", "Lionel Messi", "Ronaldinho", "Zinedine Zidane"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Messi_Argentina_2022_%28cropped%29.jpg/640px-Messi_Argentina_2022_%28cropped%29.jpg"
    },
    {
      question: "Which country won the most gold medals at the 2026 Milan Cortina Winter Olympics?",
      options: ["USA", "Italy", "Norway", "Germany"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/800px-Flag_of_Norway.svg.png"
    },
    {
      question: "Jack Hughes scored the winning goal in overtime to give which team men's ice hockey gold at the 2026 Winter Olympics?",
      options: ["Canada", "Sweden", "Russia", "USA"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png"
    },
    {
      question: "In darts, what is the highest possible score with three darts?",
      options: ["100", "150", "170", "180"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Darts_in_a_dartboard.jpg/800px-Darts_in_a_dartboard.jpg"
    },
    {
      question: "Which club has won the most Premier League titles?",
      options: ["Arsenal", "Chelsea", "Liverpool", "Manchester United"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sunderland_vs_Man_Utd.jpg/960px-Sunderland_vs_Man_Utd.jpg"
    },
    {
      question: "Which golfer is nicknamed 'The Big Easy'?",
      options: ["Tiger Woods", "Ernie Els", "Phil Mickelson", "Rory McIlroy"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Els_at_2009_Presidents_Cup.jpg/640px-Els_at_2009_Presidents_Cup.jpg"
    },
    {
      question: "England's all-time record goal scorer — who is it?",
      options: ["Gary Lineker", "Wayne Rooney", "Bobby Charlton", "Harry Kane"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Harry_Kane_2018.jpg/640px-Harry_Kane_2018.jpg"
    },
    {
      question: "Which country is Formula 1 driver Max Verstappen from?",
      options: ["Belgium", "Germany", "Austria", "Netherlands"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Max_Verstappen_2023_Bahrain_%28cropped%29.jpg/640px-Max_Verstappen_2023_Bahrain_%28cropped%29.jpg"
    },
    {
      question: "What colour jersey does the leader of the Tour de France wear?",
      options: ["Red", "White", "Green", "Yellow"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/2017_Tour_de_France%2C_Stage_1_%2835526537466%29.jpg/960px-2017_Tour_de_France%2C_Stage_1_%2835526537466%29.jpg"
    },
    {
      question: "Which sport uses a 'shuttlecock'?",
      options: ["Squash", "Badminton", "Table Tennis", "Racquetball"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Shuttlecock_Yonex_Mavis_350.jpg/800px-Shuttlecock_Yonex_Mavis_350.jpg"
    },
    {
      question: "At which ground do Yorkshire cricket play their home matches?",
      options: ["Old Trafford", "Edgbaston", "Headingley", "The Oval"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Headingley_cricket_ground.jpg/960px-Headingley_cricket_ground.jpg"
    },
    {
      question: "How many Grand Slam tennis tournaments are played each year?",
      options: ["2", "3", "4", "5"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Roland_Garros_0322.jpg/960px-Roland_Garros_0322.jpg"
    },
    {
      question: "How many holes are played in a standard round of golf?",
      options: ["9", "12", "18", "24"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Golf_ball_on_tee.jpg/800px-Golf_ball_on_tee.jpg"
    },
    {
      question: "In which sport would you perform a 'slam dunk'?",
      options: ["Volleyball", "Netball", "Basketball", "Handball"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/NBA_dunk.jpg/640px-NBA_dunk.jpg"
    },
    {
      question: "How many players are on the pitch at once in a rugby union match (both teams combined)?",
      options: ["26", "28", "30", "32"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Rugby_union_scrummage.jpg/960px-Rugby_union_scrummage.jpg"
    },
    {
      question: "Which country won the 2023 Rugby World Cup?",
      options: ["Ireland", "South Africa", "New Zealand", "France"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/800px-Flag_of_South_Africa.svg.png"
    }
  ],

  // ──────────────────────────────────────────────────────────
  "Music": [
    {
      question: "Kendrick Lamar won Record of the Year at the 2026 Grammys for which song?",
      options: ["Not Like Us", "Luther (with SZA)", "GNX", "Chains & Whips"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kendrick_Lamar_2023_%28cropped%29.jpg/640px-Kendrick_Lamar_2023_%28cropped%29.jpg"
    },
    {
      question: "Lady Gaga's 2025 album 'Mayhem' featured which massive hit that won Best Dance Pop Recording at the 2026 Grammys?",
      options: ["Poker Face", "Bad Romance", "Abracadabra", "Shallow"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Lady_Gaga_2_at_the_2019_Met_Gala_%28cropped%29.jpg/640px-Lady_Gaga_2_at_the_2019_Met_Gala_%28cropped%29.jpg"
    },
    {
      question: "Who sang the Bond theme for 'Skyfall' (2012)?",
      options: ["Shirley Bassey", "Sam Smith", "Adele", "Billie Eilish"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Adele_2016.jpg/640px-Adele_2016.jpg"
    },
    {
      question: "Which Irish rock band has members Bono, The Edge, Adam Clayton and Larry Mullen Jr.?",
      options: ["The Pogues", "Thin Lizzy", "U2", "Snow Patrol"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/U2_The_Edge_and_Bono_%282009%29.jpg/800px-U2_The_Edge_and_Bono_%282009%29.jpg"
    },
    {
      question: "Kendrick Lamar headlined the 2025 Super Bowl halftime show — in which city?",
      options: ["Las Vegas", "New Orleans", "Los Angeles", "Miami"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kendrick_Lamar_2023_%28cropped%29.jpg/640px-Kendrick_Lamar_2023_%28cropped%29.jpg"
    },
    {
      question: "Who was the lead singer of The Doors?",
      options: ["Mick Jagger", "Jim Morrison", "Janis Joplin", "Roger Waters"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Jim_Morrison_1969.jpg/640px-Jim_Morrison_1969.jpg"
    },
    {
      question: "What instrument does Dave Grohl primarily play in Foo Fighters?",
      options: ["Bass", "Drums", "Guitar", "Keyboard"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Dave_Grohl_2024.jpg/640px-Dave_Grohl_2024.jpg"
    },
    {
      question: "Which city is known as 'Motown' — home of a legendary record label?",
      options: ["Chicago", "Atlanta", "Detroit", "Memphis"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Detroit_Windsor_Tunnel.jpg/800px-Detroit_Windsor_Tunnel.jpg"
    },
    {
      question: "What was the UK's first number one single of the new millennium?",
      options: ["Pure Shores – All Saints", "Can We Fix It? – Bob the Builder", "Stan – Eminem", "Independent Women – Destiny's Child"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bricksand_mortar.jpg/640px-Bricksand_mortar.jpg"
    },
    {
      question: "How many strings does a standard violin have?",
      options: ["4", "5", "6", "7"],
      answer: 0,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Violin_VL100.png/400px-Violin_VL100.png"
    },
    {
      question: "Glastonbury Festival is held in which English county?",
      options: ["Devon", "Dorset", "Somerset", "Wiltshire"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Glastonbury2005.jpg/960px-Glastonbury2005.jpg"
    },
    {
      question: "In music, how many semitones are in an octave?",
      options: ["8", "10", "12", "14"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Pitch_class_space.svg/800px-Pitch_class_space.svg.png"
    },
    {
      question: "Which decade did hip-hop originate in?",
      options: ["1960s", "1970s", "1980s", "1990s"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Hip_hop_1.jpg/800px-Hip_hop_1.jpg"
    },
    {
      question: "Which British singer released 'Someone Like You' in 2011?",
      options: ["Duffy", "Paloma Faith", "Adele", "Ellie Goulding"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Adele_2016.jpg/640px-Adele_2016.jpg"
    },
    {
      question: "What is the best-selling physical music format of all time?",
      options: ["Vinyl record", "Cassette tape", "CD", "8-track"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Compact_disc.svg/640px-Compact_disc.svg.png"
    }
  ],

  // ──────────────────────────────────────────────────────────
  "Film & TV": [
    {
      question: "Which Netflix show features a group of kids in Hawkins, Indiana, fighting supernatural forces?",
      options: ["Dark", "The OA", "Stranger Things", "Wayward Pines"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Stranger_things_logo.png/800px-Stranger_things_logo.png"
    },
    {
      question: "Who plays Tyrion Lannister in Game of Thrones?",
      options: ["Kit Harington", "Peter Dinklage", "Nikolaj Coster-Waldau", "Liam Cunningham"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Peter_Dinklage_2014_%28cropped%29.jpg/640px-Peter_Dinklage_2014_%28cropped%29.jpg"
    },
    {
      question: "In The Office (UK), what company does David Brent manage?",
      options: ["Wernham Hogg", "Dunder Mifflin", "Initech", "Reynholm Industries"],
      answer: 0,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Ricky_Gervais_2012.jpg/640px-Ricky_Gervais_2012.jpg"
    },
    {
      question: "Which film won Best Picture at the 2020 Oscars, becoming the first non-English language film to do so?",
      options: ["Roma", "The Farewell", "Parasite", "Shoplifters"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Parasite_%282019_film%29_logo.png/800px-Parasite_%282019_film%29_logo.png"
    },
    {
      question: "Who plays Walter White in Breaking Bad?",
      options: ["Bob Odenkirk", "Jonathan Banks", "Aaron Paul", "Bryan Cranston"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bryan_Cranston_by_Gage_Skidmore_2.jpg/640px-Bryan_Cranston_by_Gage_Skidmore_2.jpg"
    },
    {
      question: "What is the name of the pub in Peaky Blinders?",
      options: ["The Garrison", "The Anchor", "The Shelby Arms", "The Crown"],
      answer: 0,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Peaky_Blinders_%28TV_series%29_logo.png/800px-Peaky_Blinders_%28TV_series%29_logo.png"
    },
    {
      question: "Who directed the 2023 film Oppenheimer?",
      options: ["Steven Spielberg", "Denis Villeneuve", "Christopher Nolan", "Ridley Scott"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Christopher_Nolan_Cannes_2018.jpg/640px-Christopher_Nolan_Cannes_2018.jpg"
    },
    {
      question: "Which actor plays Succession's patriarch Logan Roy?",
      options: ["Jeff Daniels", "Brian Cox", "Anthony Hopkins", "Tom Wilkinson"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Brian_Cox_2013.jpg/640px-Brian_Cox_2013.jpg"
    },
    {
      question: "Which streaming platform produces The Boys?",
      options: ["Netflix", "Disney+", "Apple TV+", "Amazon Prime Video"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Amazon_Prime_Video_logo.svg/800px-Amazon_Prime_Video_logo.svg.png"
    },
    {
      question: "Which British sitcom features the characters Del Boy and Rodney Trotter?",
      options: ["Blackadder", "Only Fools and Horses", "Dad's Army", "Porridge"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Only_Fools_and_Horses_title_card.jpg/800px-Only_Fools_and_Horses_title_card.jpg"
    },
    {
      question: "In which fictional city does Batman protect the streets?",
      options: ["Metropolis", "Gotham", "Midway City", "Central City"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Chicago_from_North_Avenue_Beach_June_2015_panorama_2.jpg/960px-Chicago_from_North_Avenue_Beach_June_2015_panorama_2.jpg"
    },
    {
      question: "What year was the first 'The Fast and the Furious' film released?",
      options: ["1999", "2001", "2003", "2005"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Vin_Diesel_2_2017.jpg/640px-Vin_Diesel_2_2017.jpg"
    },
    {
      question: "Emma Stone won the 2024 Oscar for Best Actress for which film?",
      options: ["La La Land", "The Favourite", "Poor Things", "Cruella"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Emma_Stone_2023_%28cropped%29.jpg/640px-Emma_Stone_2023_%28cropped%29.jpg"
    },
    {
      question: "How many episodes are in the final season of Game of Thrones?",
      options: ["6", "7", "8", "10"],
      answer: 0,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Game_of_Thrones_title_card.jpg/800px-Game_of_Thrones_title_card.jpg"
    },
    {
      question: "Which show features a bald chemistry teacher turned drug kingpin?",
      options: ["Ozark", "Narcos", "Weeds", "Breaking Bad"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bryan_Cranston_by_Gage_Skidmore_2.jpg/640px-Bryan_Cranston_by_Gage_Skidmore_2.jpg"
    }
  ],

  // ──────────────────────────────────────────────────────────
  "News & Current Affairs": [
    {
      question: "Which country topped the medal table at the 2026 Milan Cortina Winter Olympics?",
      options: ["USA", "Italy", "Norway", "Germany"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/800px-Flag_of_Norway.svg.png"
    },
    {
      question: "Who won Album of the Year at the 2026 Grammy Awards, making history as the first Spanish-language album to do so?",
      options: ["Kendrick Lamar", "Bad Bunny", "Lady Gaga", "Sabrina Carpenter"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bad_Bunny_2019_05.jpg/640px-Bad_Bunny_2019_79.jpg"
    },
    {
      question: "In February 2026, Israel and the US launched strikes on which country, killing its Supreme Leader?",
      options: ["Syria", "Lebanon", "Yemen", "Iran"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/800px-Flag_of_Iran.svg.png"
    },
    {
      question: "Who won Record of the Year at the 2026 Grammys for the song 'Luther' with SZA?",
      options: ["Drake", "Tyler, the Creator", "Kendrick Lamar", "Doechii"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kendrick_Lamar_2023_%28cropped%29.jpg/640px-Kendrick_Lamar_2023_%28cropped%29.jpg"
    },
    {
      question: "Which Norwegian cross-country skier won six gold medals at the 2026 Winter Olympics — a single-Games record?",
      options: ["Sturla Holm Laegreid", "Johannes Hoesflat Klaebo", "Jens Luras Oftebro", "Petter Northug"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Johannes_H%C3%B8sflot_Kl%C3%A6bo_2022_%28cropped%29.jpg/640px-Johannes_H%C3%B8sflot_Kl%C3%A6bo_2022_%28cropped%29.jpg"
    },
    {
      question: "The 2026 Winter Olympics were held in which country?",
      options: ["Austria", "France", "Switzerland", "Italy"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/800px-Flag_of_Italy.svg.png"
    },
    {
      question: "Which rapper won Best New Artist at the 2026 Grammys?",
      options: ["Doechii", "Chappell Roan", "Olivia Dean", "Leon Thomas"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/800px-OpenAI_Logo.svg.png"
    },
    {
      question: "In January 2026, Denmark sent troops to which territory in response to US threats of annexation?",
      options: ["Iceland", "Faroe Islands", "Svalbard", "Greenland"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_Greenland.svg/800px-Flag_of_Greenland.svg.png"
    },
    {
      question: "Which team won men's ice hockey gold at the 2026 Winter Olympics, their first since 1980?",
      options: ["Canada", "Sweden", "Russia", "USA"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png"
    },
    {
      question: "Which country is set to host the 2026 FIFA World Cup alongside Canada and Mexico?",
      options: ["Brazil", "UK", "USA", "Australia"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png"
    },
    {
      question: "Billie Eilish won Song of the Year at the 2026 Grammys for which track?",
      options: ["Lunch", "Birds of a Feather", "Wildflower", "Chihiro"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29.jpg/640px-Billie_Eilish_2019_by_Glenn_Francis_%28cropped%29.jpg"
    },
    {
      question: "Which country made history by winning their first ever Winter Olympic gold medal at Milan Cortina 2026?",
      options: ["Mexico", "Brazil", "Argentina", "Colombia"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png"
    },
    {
      question: "Sir Keir Starmer became UK Prime Minister in which year?",
      options: ["2022", "2023", "2024", "2025"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Keir_Starmer_official_portrait_%28cropped%29.jpg/640px-Keir_Starmer_official_portrait_%28cropped%29.jpg"
    },
    {
      question: "The 2026 Artemis II mission aims to send astronauts on a journey around which celestial body?",
      options: ["Mars", "Venus", "The Moon", "The International Space Station"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/800px-NASA_logo.svg.png"
    },
    {
      question: "At the 2026 Grammys, Kendrick Lamar broke whose record to become the most awarded rapper in Grammy history?",
      options: ["Eminem", "Drake", "Jay-Z", "Kanye West"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kendrick_Lamar_2023_%28cropped%29.jpg/640px-Kendrick_Lamar_2023_%28cropped%29.jpg"
    }
  ],

  // ──────────────────────────────────────────────────────────
  "Food & Drink": [
    {
      question: "What is the main ingredient in a traditional Japanese miso soup?",
      options: ["Soy sauce", "Rice wine", "Fermented soybean paste", "Dashi broth"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Miso_soup.jpg/800px-Miso_soup.jpg"
    },
    {
      question: "What type of wine is Prosecco?",
      options: ["Still white", "Rosé", "Sparkling", "Fortified"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Prosecco.jpg/640px-Prosecco.jpg"
    },
    {
      question: "What is Scoville used to measure?",
      options: ["Acidity in wine", "Bitterness in beer", "Heat in chillies", "Sweetness in chocolate"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Chili_peppers.jpg/800px-Chili_peppers.jpg"
    },
    {
      question: "Which chef is known for his 'Naked Chef' persona?",
      options: ["Gordon Ramsay", "Heston Blumenthal", "Jamie Oliver", "Nigel Slater"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Jamie_Oliver_2014.jpg/640px-Jamie_Oliver_2014.jpg"
    },
    {
      question: "What is the base spirit in a classic Mojito?",
      options: ["Vodka", "Gin", "Rum", "Tequila"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Cocktail_Mojito.jpg/640px-Cocktail_Mojito.jpg"
    },
    {
      question: "What type of pastry is used to make a beef Wellington?",
      options: ["Filo", "Shortcrust", "Choux", "Puff"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Beef_Wellington.jpg/800px-Beef_Wellington.jpg"
    },
    {
      question: "In which country did Chicken Tikka Masala most likely originate?",
      options: ["India", "Pakistan", "Bangladesh", "UK"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Chicken_tikka_masala.jpg/800px-Chicken_tikka_masala.jpg"
    },
    {
      question: "What nut is used to make marzipan?",
      options: ["Walnut", "Hazelnut", "Almond", "Pistachio"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Marzipan_1.jpg/800px-Marzipan_1.jpg"
    },
    {
      question: "What does IPA stand for in craft beer?",
      options: ["Indian Pale Ale", "International Premium Ale", "Irish Pale Ale", "Imperial Pint Ale"],
      answer: 0,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Beer_in_glass.jpg/640px-Beer_in_glass.jpg"
    },
    {
      question: "Which cheese is traditionally melted on top of a French Onion Soup?",
      options: ["Brie", "Camembert", "Comté", "Gruyère"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/French_onion_soup.jpg/800px-French_onion_soup.jpg"
    },
    {
      question: "What is the traditional Scottish dish made from sheep offal?",
      options: ["Cullen Skink", "Cock-a-Leekie", "Haggis", "Cranachan"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Haggis_on_a_plate.jpg/800px-Haggis_on_a_plate.jpg"
    },
    {
      question: "Which country is the world's largest producer of olive oil?",
      options: ["Italy", "Greece", "Morocco", "Spain"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Olive_oil_from_Oneglia.jpg/800px-Olive_oil_from_Oneglia.jpg"
    },
    {
      question: "How many calories are roughly in a pint of Guinness?",
      options: ["125", "175", "210", "280"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Glass_of_Guinness.jpg/640px-Glass_of_Guinness.jpg"
    },
    {
      question: "In which city was the Negroni cocktail invented?",
      options: ["Rome", "Milan", "Florence", "Venice"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Negroni.jpg/640px-Negroni.jpg"
    },
    {
      question: "What fruit is used to make the French spirit Calvados?",
      options: ["Grape", "Pear", "Plum", "Apple"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/640px-Red_Apple.jpg"
    }
  ],

  // ──────────────────────────────────────────────────────────
  "Science & Nature": [
    {
      question: "How many bones does a shark have?",
      options: ["None — their skeleton is cartilage", "12", "48", "200+"],
      answer: 0,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/White_shark.jpg/800px-White_shark.jpg"
    },
    {
      question: "What is the name of the process by which plants lose water through their leaves?",
      options: ["Photosynthesis", "Osmosis", "Transpiration", "Respiration"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Transpiration_diagram.svg/640px-Transpiration_diagram.svg.png"
    },
    {
      question: "How many planets are in our solar system?",
      options: ["7", "8", "9", "10"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Solar_System_size_to_scale.svg/960px-Solar_System_size_to_scale.svg.png"
    },
    {
      question: "What is the most venomous animal in the world?",
      options: ["Box jellyfish", "King cobra", "Inland taipan", "Cone snail"],
      answer: 0,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Chironex_fleckeri_2.jpg/640px-Chironex_fleckeri_2.jpg"
    },
    {
      question: "What gas do plants absorb during photosynthesis?",
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Photosynthesis_en.svg/800px-Photosynthesis_en.svg.png"
    },
    {
      question: "What is the name of the theoretical boundary around a black hole beyond which nothing can escape?",
      options: ["Singularity", "Neutron shell", "Event horizon", "Schwarzschild limit"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Black_hole_-_Messier_87_crop_max_res.jpg/800px-Black_hole_-_Messier_87_crop_max_res.jpg"
    },
    {
      question: "How long does it take for light from the Sun to reach Earth?",
      options: ["2 minutes", "8 minutes", "22 minutes", "1 hour"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/800px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg"
    },
    {
      question: "What is the name of the process by which caterpillars transform into butterflies?",
      options: ["Hibernation", "Metamorphosis", "Mitosis", "Symbiosis"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Monarch_butterfly_showy.jpg/800px-Monarch_butterfly_showy.jpg"
    },
    {
      question: "Which element is a diamond made of?",
      options: ["Silicon", "Carbon", "Quartz", "Graphene"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Rough_diamond.jpg/640px-Rough_diamond.jpg"
    },
    {
      question: "What is the study of earthquakes called?",
      options: ["Volcanology", "Geology", "Seismology", "Tectonology"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Seismograph_record.jpg/800px-Seismograph_record.jpg"
    },
    {
      question: "What percentage of the Earth's surface is covered by water?",
      options: ["51%", "61%", "71%", "81%"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/800px-The_Earth_seen_from_Apollo_17.jpg"
    },
    {
      question: "What is the approximate surface temperature of the Sun?",
      options: ["1,500°C", "5,500°C", "15,000°C", "100,000°C"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/800px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg"
    },
    {
      question: "What is the chemical symbol for potassium?",
      options: ["Po", "Pt", "Pm", "K"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Potassium.jpg/640px-Potassium.jpg"
    },
    {
      question: "What is the only element that is liquid at room temperature besides mercury?",
      options: ["Bromine", "Gallium", "Caesium", "Francium"],
      answer: 0,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Bromine_vial.jpg/640px-Bromine_vial.jpg"
    },
    {
      question: "Approximately how many neurons does the human brain contain?",
      options: ["86 thousand", "86 million", "86 billion", "86 trillion"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gray739-emphasizing-hippocampus.png/640px-Gray739-emphasizing-hippocampus.png"
    }
  ],

  // ──────────────────────────────────────────────────────────
  "History": [
    {
      question: "In which year did Neil Armstrong walk on the Moon?",
      options: ["1965", "1967", "1969", "1971"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Aldrin_Apollo_11_original.jpg/640px-Aldrin_Apollo_11_original.jpg"
    },
    {
      question: "The Magna Carta was signed in which year?",
      options: ["1066", "1215", "1348", "1492"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Magna_Carta_%28British_Library_Cotton_MS_Augustus_II.106%29.jpg/800px-Magna_Carta_%28British_Library_Cotton_MS_Augustus_II.106%29.jpg"
    },
    {
      question: "Which British monarch had the longest reign in history?",
      options: ["Queen Victoria", "King George III", "Queen Elizabeth II", "King Henry VIII"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Queen_Elizabeth_II_March_2015.jpg/640px-Queen_Elizabeth_II_March_2015.jpg"
    },
    {
      question: "The Battle of Hastings was fought in which year?",
      options: ["1040", "1066", "1087", "1100"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Bayeux_Tapestry_scene51_battle_of_hastings_with_harold_rex_interfectus_est.jpg/960px-Bayeux_Tapestry_scene51_battle_of_hastings_with_harold_rex_interfectus_est.jpg"
    },
    {
      question: "The Chernobyl nuclear disaster happened in which year?",
      options: ["1979", "1983", "1986", "1989"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chernobyl_2019_G03.jpg/800px-Chernobyl_2019_G03.jpg"
    },
    {
      question: "Which country was apartheid practised in?",
      options: ["Zimbabwe", "Kenya", "South Africa", "Nigeria"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Nelson_Mandela_Annual_Lecture_2013_%28cropped%29.jpg/640px-Nelson_Mandela_Annual_Lecture_2013_%28cropped%29.jpg"
    },
    {
      question: "In what year did the Soviet Union collapse?",
      options: ["1985", "1989", "1991", "1993"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Reagan_and_Gorbachev_smile.jpg/800px-Reagan_and_Gorbachev_smile.jpg"
    },
    {
      question: "Which explorer landed in the Americas in 1492?",
      options: ["Amerigo Vespucci", "Christopher Columbus", "John Cabot", "Hernán Cortés"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Christopher_Columbus_%281451-1506%29_portrait.jpg/640px-Christopher_Columbus_%281451-1506%29_portrait.jpg"
    },
    {
      question: "Which ancient civilisation built the Machu Picchu citadel?",
      options: ["Aztec", "Maya", "Olmec", "Inca"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/960px-Machu_Picchu%2C_Peru.jpg"
    },
    {
      question: "Who was Prime Minister of the UK when World War I broke out in 1914?",
      options: ["David Lloyd George", "H.H. Asquith", "Winston Churchill", "Andrew Bonar Law"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/H_H_Asquith.jpg/640px-H_H_Asquith.jpg"
    },
    {
      question: "What was the name of the ship on which Charles Darwin made his famous voyage?",
      options: ["HMS Endeavour", "HMS Victory", "HMS Beagle", "HMS Discovery"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/HMS_Beagle_by_Conrad_Martens.jpg/800px-HMS_Beagle_by_Conrad_Martens.jpg"
    },
    {
      question: "Which Chinese dynasty built the majority of the Great Wall of China?",
      options: ["Han", "Tang", "Ming", "Qin"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/20090529_great_wall_8218.jpg/960px-20090529_great_wall_8218.jpg"
    },
    {
      question: "In what year did World War II end?",
      options: ["1943", "1944", "1945", "1946"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/V-J_Day_in_Times_Square_Alfred_Eisenstaedt.jpg/640px-V-J_Day_in_Times_Square_Alfred_Eisenstaedt.jpg"
    },
    {
      question: "Who was the first person to circumnavigate the globe?",
      options: ["Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan", "Francis Drake"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Ferdinand_Magellan.jpg/640px-Ferdinand_Magellan.jpg"
    },
    {
      question: "The French Revolution began in which year?",
      options: ["1776", "1783", "1789", "1799"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Prise_de_la_Bastille.jpg/960px-Prise_de_la_Bastille.jpg"
    }
  ],

  // ──────────────────────────────────────────────────────────
  // PICTURE ROUND — the image IS the question.
  // Keep question text as a short prompt only.
  // ──────────────────────────────────────────────────────────
  "Picture Round": [
    {
      question: "Who is this world leader?",
      options: ["Emmanuel Macron", "Justin Trudeau", "Volodymyr Zelensky", "Pedro Sánchez"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Volodymyr_Zelensky_2024_%28cropped%29.jpg/640px-Volodymyr_Zelensky_2024_%28cropped%29.jpg"
    },
    {
      question: "Name this iconic landmark.",
      options: ["Burj Al Arab", "CN Tower", "Petronas Towers", "Empire State Building"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Kuala_Lumpur_%28Malaysia%29%2C_Petronas_Towers_--_2019_--_1497.jpg/640px-Kuala_Lumpur_%28Malaysia%29%2C_Petronas_Towers_--_2019_--_1497.jpg"
    },
    {
      question: "What animal is this?",
      options: ["Capybara", "Tapir", "Nutria", "Wombat"],
      answer: 0,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Capybara_%28Hydrochoerus_hydrochaeris%29.JPG/960px-Capybara_%28Hydrochoerus_hydrochaeris%29.JPG"
    },
    {
      question: "Name this famous painting.",
      options: ["The Birth of Venus", "Girl with a Pearl Earring", "American Gothic", "The Scream"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Scream.jpg/640px-The_Scream.jpg"
    },
    {
      question: "Which country does this flag belong to?",
      options: ["Netherlands", "Luxembourg", "France", "Russia"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Luxembourg.svg/800px-Flag_of_Luxembourg.svg.png"
    },
    {
      question: "Name this sporting trophy.",
      options: ["The Jules Rimet Trophy", "The FA Cup", "The FIFA World Cup Trophy", "The UEFA Champions League Trophy"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/UEFA_Champions_League_trophy_%28UCL%29.jpg/640px-UEFA_Champions_League_trophy_%28UCL%29.jpg"
    },
    {
      question: "Which city's skyline is this?",
      options: ["Chicago", "Hong Kong", "Dubai", "Singapore"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Hong_Kong_Night_Skyline2.jpg/960px-Hong_Kong_Night_Skyline2.jpg"
    },
    {
      question: "Name this famous scientist.",
      options: ["Albert Einstein", "Stephen Hawking", "Richard Feynman", "Niels Bohr"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Stephen_Hawking.StarChild.jpg/640px-Stephen_Hawking.StarChild.jpg"
    },
    {
      question: "What sport is being played here?",
      options: ["Hurling", "Lacrosse", "Shinty", "Field hockey"],
      answer: 0,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Laois_vs_Kilkenny_Hurling_2010.jpg/960px-Laois_vs_Kilkenny_Hurling_2010.jpg"
    },
    {
      question: "Name this iconic car.",
      options: ["Jaguar E-Type", "Aston Martin DB5", "Ferrari 250 GT", "Lamborghini Miura"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Aston_Martin_DB5_%28cropped%29.jpg/800px-Aston_Martin_DB5_%28cropped%29.jpg"
    },
    {
      question: "Which mountain range is this?",
      options: ["The Andes", "The Himalayas", "The Alps", "The Rockies"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/20100726_Zermatt_5217.jpg/960px-20100726_Zermatt_5217.jpg"
    },
    {
      question: "Name this famous logo.",
      options: ["Pepsi", "Adidas", "Nike", "Puma"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/800px-Logo_NIKE.svg.png"
    },
    {
      question: "Which planet is this?",
      options: ["Jupiter", "Neptune", "Uranus", "Saturn"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/800px-Saturn_during_Equinox.jpg"
    },
    {
      question: "Name this dish.",
      options: ["Pad Thai", "Pho", "Ramen", "Laksa"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Ramen-Hakata_style.jpg/800px-Ramen-Hakata_style.jpg"
    },
    {
      question: "Who is this comedian?",
      options: ["Lee Evans", "Peter Kay", "Michael McIntyre", "Lee Mack"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Peter_Kay_2011.jpg/640px-Peter_Kay_2011.jpg"
    }
  ],

  // ──────────────────────────────────────────────────────────
  "Themed Round": [
    {
      question: "How many members are in the K-pop group BTS?",
      options: ["5", "6", "7", "8"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/BTS_at_the_National_Assembly_of_South_Korea.jpg/800px-BTS_at_the_National_Assembly_of_South_Korea.jpg"
    },
    {
      question: "What is the fastest animal on Earth?",
      options: ["Peregrine falcon", "Cheetah", "Sailfish", "Golden eagle"],
      answer: 0,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Peregrine_falcon_%28Falco_peregrinus%29-3.jpg/800px-Peregrine_falcon_%28Falco_peregrinus%29-3.jpg"
    },
    {
      question: "What does the 'S' stand for in NASA?",
      options: ["Science", "Space", "Studies", "Systems"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/800px-NASA_logo.svg.png"
    },
    {
      question: "In what year did Facebook launch publicly beyond Harvard?",
      options: ["2003", "2004", "2005", "2006"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/640px-Facebook_f_logo_%282019%29.svg.png"
    },
    {
      question: "How many time zones does Russia span?",
      options: ["9", "10", "11", "12"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png"
    },
    {
      question: "What is the world's best-selling video game of all time?",
      options: ["Tetris", "Minecraft", "Grand Theft Auto V", "Wii Sports"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Minecraft_cover.png/640px-Minecraft_cover.png"
    },
    {
      question: "What is the name of Thor's hammer in Norse mythology and Marvel?",
      options: ["Gungnir", "Mjolnir", "Jarnbjorn", "Stormbreaker"],
      answer: 1,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Thor_Mjolnir.jpg/640px-Thor_Mjolnir.jpg"
    },
    {
      question: "Which animal appears on the Australian coat of arms alongside the kangaroo?",
      options: ["Wombat", "Platypus", "Emu", "Koala"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Coat_of_Arms_of_Australia.svg/640px-Coat_of_Arms_of_Australia.svg.png"
    },
    {
      question: "In what country is the Amazon rainforest mostly located?",
      options: ["Colombia", "Peru", "Venezuela", "Brazil"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Amazon_rainforest_-_Brazil.jpg/960px-Amazon_rainforest_-_Brazil.jpg"
    },
    {
      question: "How many keys are on a standard piano?",
      options: ["76", "80", "88", "92"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Steinway_piano.jpg/800px-Steinway_piano.jpg"
    },
    {
      question: "Which country is IKEA originally from?",
      options: ["Denmark", "Norway", "Finland", "Sweden"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ikea_logo.svg/800px-Ikea_logo.svg.png"
    },
    {
      question: "How many cards are in a standard deck (excluding jokers)?",
      options: ["48", "50", "52", "54"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/English_pattern_playing_cards_deck.svg/800px-English_pattern_playing_cards_deck.svg.png"
    },
    {
      question: "Which country has the longest land border in the world?",
      options: ["Russia", "China", "USA", "Canada"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Map_of_Canada.png/800px-Map_of_Canada.png"
    },
    {
      question: "Who wrote the Harry Potter series?",
      options: ["Stephenie Meyer", "Philip Pullman", "J.K. Rowling", "Roald Dahl"],
      answer: 2,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Harry_Potter_wordmark.svg/800px-Harry_Potter_wordmark.svg.png"
    },
    {
      question: "What is the name of the currency used in Japan?",
      options: ["Won", "Yuan", "Ringgit", "Yen"],
      answer: 3,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png"
    }
  ]

};
