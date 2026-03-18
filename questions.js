// ============================================================
// JOE'S FRIDAY QUIZ — QUESTION DATABASE
// ============================================================
// HOW TO ADD QUESTIONS:
//   1. Find the correct category array below
//   2. Add a new object in this format:
//      {
//        question: "Your question here?",
//        options: ["Option A", "Option B", "Option C", "Option D"],
//        answer: 0   // index of correct option (0=A, 1=B, 2=C, 3=D)
//      }
//   3. Save the file — that's it!
//
// KEEP AT LEAST 10 QUESTIONS PER CATEGORY so the weekly
// rotation always has fresh picks.
// ============================================================

const QUESTIONS = {

  "General Knowledge": [
    {
      question: "What is the only country in the world whose name begins with the letter 'Q'?",
      options: ["Qatar", "Queensland", "Quito", "There isn't one"],
      answer: 0
    },
    {
      question: "How many bones are in the adult human body?",
      options: ["196", "206", "216", "226"],
      answer: 1
    },
    {
      question: "What is the smallest country in the world by area?",
      options: ["Monaco", "Liechtenstein", "Vatican City", "San Marino"],
      answer: 2
    },
    {
      question: "Which planet in our solar system has the most moons?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      answer: 1
    },
    {
      question: "What is the world's most spoken language by total speakers?",
      options: ["Spanish", "Mandarin Chinese", "English", "Hindi"],
      answer: 2
    },
    {
      question: "In what year did the Berlin Wall fall?",
      options: ["1987", "1988", "1989", "1990"],
      answer: 2
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      answer: 2
    },
    {
      question: "Which ocean is the largest by area?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      answer: 3
    },
    {
      question: "How many sides does a heptagon have?",
      options: ["5", "6", "7", "8"],
      answer: 2
    },
    {
      question: "Which country has the longest coastline in the world?",
      options: ["Russia", "Australia", "Norway", "Canada"],
      answer: 3
    }
  ],

  "Sport": [
    {
      question: "Which country has won the most FIFA World Cups?",
      options: ["Germany", "Brazil", "Argentina", "Italy"],
      answer: 1
    },
    {
      question: "At which Olympic Games did Usain Bolt first win 100m gold?",
      options: ["Athens 2004", "Beijing 2008", "London 2012", "Rio 2016"],
      answer: 1
    },
    {
      question: "How many players are there in a rugby union team?",
      options: ["13", "14", "15", "16"],
      answer: 2
    },
    {
      question: "Which tennis player has won the most Grand Slam singles titles in history (men's)?",
      options: ["Rafael Nadal", "Roger Federer", "Novak Djokovic", "Pete Sampras"],
      answer: 2
    },
    {
      question: "In cricket, what is the term for a batsman scoring zero runs?",
      options: ["Blob", "Egg", "Duck", "Nil"],
      answer: 2
    },
    {
      question: "Which Formula 1 team has won the most Constructors' Championships?",
      options: ["McLaren", "Williams", "Ferrari", "Mercedes"],
      answer: 2
    },
    {
      question: "How long is a standard marathon in kilometres (approximate)?",
      options: ["40km", "41km", "42km", "43km"],
      answer: 2
    },
    {
      question: "Which country won the 2023 Rugby World Cup?",
      options: ["Ireland", "South Africa", "New Zealand", "France"],
      answer: 1
    },
    {
      question: "In which sport would you perform a 'Fosbury Flop'?",
      options: ["Pole vault", "High jump", "Long jump", "Triple jump"],
      answer: 1
    },
    {
      question: "What is the maximum score in a single frame of ten-pin bowling?",
      options: ["10", "20", "30", "50"],
      answer: 2
    }
  ],

  "Music": [
    {
      question: "Which band released the album 'Dark Side of the Moon' in 1973?",
      options: ["Led Zeppelin", "Pink Floyd", "The Rolling Stones", "Deep Purple"],
      answer: 1
    },
    {
      question: "What is the best-selling album of all time?",
      options: ["Thriller – Michael Jackson", "Back in Black – AC/DC", "The Dark Side of the Moon – Pink Floyd", "Eagles: Their Greatest Hits"],
      answer: 0
    },
    {
      question: "Which artist has the most Grammy Awards ever?",
      options: ["Beyoncé", "Jay-Z", "Georg Solti", "Taylor Swift"],
      answer: 0
    },
    {
      question: "How many strings does a standard guitar have?",
      options: ["4", "5", "6", "7"],
      answer: 2
    },
    {
      question: "Which city is considered the birthplace of jazz?",
      options: ["Chicago", "New York", "Memphis", "New Orleans"],
      answer: 3
    },
    {
      question: "Freddie Mercury was the lead singer of which band?",
      options: ["Aerosmith", "Queen", "Kiss", "The Who"],
      answer: 1
    },
    {
      question: "What does 'BPM' stand for in music?",
      options: ["Beats Per Measure", "Beats Per Minute", "Bass Per Mix", "Bar Per Movement"],
      answer: 1
    },
    {
      question: "Which UK act won the Eurovision Song Contest in 1997?",
      options: ["Bucks Fizz", "Brotherhood of Man", "Katrina and the Waves", "Sandie Shaw"],
      answer: 2
    },
    {
      question: "What is the name of Taylor Swift's 2023 album?",
      options: ["Midnights", "The Tortured Poets Department", "Folklore", "Reputation"],
      answer: 1
    },
    {
      question: "Which instrument does Elton John famously play?",
      options: ["Guitar", "Drums", "Piano", "Violin"],
      answer: 2
    }
  ],

  "Film & TV": [
    {
      question: "Which film won the first ever Academy Award for Best Picture?",
      options: ["Wings", "Sunrise", "The Jazz Singer", "Seventh Heaven"],
      answer: 0
    },
    {
      question: "Who directed Inception (2010)?",
      options: ["Steven Spielberg", "James Cameron", "Christopher Nolan", "Ridley Scott"],
      answer: 2
    },
    {
      question: "Which TV series features the fictional Dunder Mifflin Paper Company?",
      options: ["Parks and Recreation", "The Office", "30 Rock", "Brooklyn Nine-Nine"],
      answer: 1
    },
    {
      question: "How many episodes are in the final season of Game of Thrones?",
      options: ["6", "7", "8", "10"],
      answer: 0
    },
    {
      question: "In which year was the first Star Wars film released?",
      options: ["1975", "1976", "1977", "1978"],
      answer: 2
    },
    {
      question: "Who plays Iron Man / Tony Stark in the Marvel Cinematic Universe?",
      options: ["Chris Evans", "Robert Downey Jr.", "Mark Ruffalo", "Chris Hemsworth"],
      answer: 1
    },
    {
      question: "Which streaming service produced The Crown?",
      options: ["Amazon Prime", "Disney+", "Netflix", "Apple TV+"],
      answer: 2
    },
    {
      question: "What is the highest-grossing film of all time (unadjusted for inflation)?",
      options: ["Avengers: Endgame", "Titanic", "Avatar", "Star Wars: The Force Awakens"],
      answer: 2
    },
    {
      question: "Which actor has appeared in the most MCU films?",
      options: ["Samuel L. Jackson", "Robert Downey Jr.", "Scarlett Johansson", "Chris Evans"],
      answer: 0
    },
    {
      question: "In Breaking Bad, what is the name of Walter White's alter ego?",
      options: ["The Cook", "Heisenberg", "Ozymandias", "Mr. White"],
      answer: 1
    }
  ],

  "News & Current Affairs": [
    {
      question: "Who became UK Prime Minister in October 2022?",
      options: ["Liz Truss", "Boris Johnson", "Rishi Sunak", "Jeremy Hunt"],
      answer: 2
    },
    {
      question: "Which country hosted the 2024 Summer Olympics?",
      options: ["Japan", "Australia", "France", "USA"],
      answer: 2
    },
    {
      question: "What is the name of Elon Musk's rocket company?",
      options: ["Blue Origin", "SpaceX", "Virgin Galactic", "Rocket Lab"],
      answer: 1
    },
    {
      question: "In 2024, which country became the world's most populous, overtaking China?",
      options: ["Nigeria", "Indonesia", "Brazil", "India"],
      answer: 3
    },
    {
      question: "Who is the current Secretary-General of the United Nations (as of 2025)?",
      options: ["Ban Ki-moon", "Kofi Annan", "António Guterres", "Dag Hammarskjöld"],
      answer: 2
    },
    {
      question: "Which AI company released ChatGPT?",
      options: ["Google", "Meta", "OpenAI", "Microsoft"],
      answer: 2
    },
    {
      question: "What was the name of the UK's exit from the European Union?",
      options: ["Grexit", "Brexit", "Ukexit", "Brexodus"],
      answer: 1
    },
    {
      question: "Which city hosted COP28 in 2023?",
      options: ["Glasgow", "Sharm el-Sheikh", "Dubai", "Baku"],
      answer: 2
    },
    {
      question: "Who won the 2024 US Presidential election?",
      options: ["Joe Biden", "Kamala Harris", "Donald Trump", "Ron DeSantis"],
      answer: 2
    },
    {
      question: "Which tech company's headquarters is known as 'The Spaceship' campus in California?",
      options: ["Google", "Meta", "Apple", "Tesla"],
      answer: 2
    }
  ],

  "Food & Drink": [
    {
      question: "Which country is the origin of sushi?",
      options: ["China", "South Korea", "Vietnam", "Japan"],
      answer: 3
    },
    {
      question: "What is the main ingredient in guacamole?",
      options: ["Tomato", "Avocado", "Lime", "Jalapeño"],
      answer: 1
    },
    {
      question: "Which grape variety is Chianti wine primarily made from?",
      options: ["Pinot Noir", "Cabernet Sauvignon", "Sangiovese", "Nebbiolo"],
      answer: 2
    },
    {
      question: "What type of pastry is a croissant made from?",
      options: ["Shortcrust", "Choux", "Filo", "Laminated/puff"],
      answer: 3
    },
    {
      question: "From which country does Gouda cheese originate?",
      options: ["France", "Switzerland", "Netherlands", "Denmark"],
      answer: 2
    },
    {
      question: "What is the Japanese term for cooking on an iron griddle at the table?",
      options: ["Teppanyaki", "Tempura", "Yakitori", "Shabu-shabu"],
      answer: 0
    },
    {
      question: "Which spirit is the base of a traditional Margarita?",
      options: ["Rum", "Vodka", "Gin", "Tequila"],
      answer: 3
    },
    {
      question: "How many calories (approximately) are in a standard glass (175ml) of red wine?",
      options: ["80", "120", "160", "220"],
      answer: 1
    },
    {
      question: "Which country produces the most coffee in the world?",
      options: ["Colombia", "Vietnam", "Ethiopia", "Brazil"],
      answer: 3
    },
    {
      question: "What is 'Bombay Sapphire' a brand of?",
      options: ["Vodka", "Rum", "Gin", "Whisky"],
      answer: 2
    }
  ],

  "Science & Nature": [
    {
      question: "What is the chemical formula for water?",
      options: ["HO", "H2O", "H3O", "OH2"],
      answer: 1
    },
    {
      question: "How many chromosomes do humans typically have?",
      options: ["23", "44", "46", "48"],
      answer: 2
    },
    {
      question: "What is the speed of light (approximate, km/s)?",
      options: ["150,000 km/s", "200,000 km/s", "300,000 km/s", "400,000 km/s"],
      answer: 2
    },
    {
      question: "Which gas makes up the majority of Earth's atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Argon", "Nitrogen"],
      answer: 3
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Ruby", "Quartz", "Diamond", "Topaz"],
      answer: 2
    },
    {
      question: "How many hearts does an octopus have?",
      options: ["1", "2", "3", "4"],
      answer: 2
    },
    {
      question: "What planet is closest in size to Earth?",
      options: ["Mercury", "Mars", "Venus", "Neptune"],
      answer: 2
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
      answer: 2
    },
    {
      question: "Approximately how old is the Universe?",
      options: ["8.6 billion years", "10.4 billion years", "13.8 billion years", "16.2 billion years"],
      answer: 2
    },
    {
      question: "What is the most abundant element in the universe?",
      options: ["Helium", "Carbon", "Oxygen", "Hydrogen"],
      answer: 3
    }
  ],

  "History": [
    {
      question: "In which year did World War II end?",
      options: ["1943", "1944", "1945", "1946"],
      answer: 2
    },
    {
      question: "Who was the first President of the United States?",
      options: ["John Adams", "Thomas Jefferson", "Benjamin Franklin", "George Washington"],
      answer: 3
    },
    {
      question: "Which empire was ruled by Genghis Khan?",
      options: ["Ottoman", "Mongol", "Roman", "Byzantine"],
      answer: 1
    },
    {
      question: "In what year did the Titanic sink?",
      options: ["1910", "1911", "1912", "1913"],
      answer: 2
    },
    {
      question: "Which ancient wonder was located in Alexandria, Egypt?",
      options: ["The Colossus of Rhodes", "The Lighthouse of Alexandria", "The Hanging Gardens", "The Statue of Zeus"],
      answer: 1
    },
    {
      question: "Who was the British Prime Minister at the start of World War II?",
      options: ["Winston Churchill", "Anthony Eden", "Neville Chamberlain", "Clement Attlee"],
      answer: 2
    },
    {
      question: "The French Revolution began in which year?",
      options: ["1776", "1783", "1789", "1799"],
      answer: 2
    },
    {
      question: "Which country was the first to give women the right to vote nationally?",
      options: ["UK", "USA", "Finland", "New Zealand"],
      answer: 3
    },
    {
      question: "How long did the Hundred Years' War between England and France last?",
      options: ["100 years", "112 years", "116 years", "99 years"],
      answer: 2
    },
    {
      question: "Which Roman emperor famously 'fiddled while Rome burned'?",
      options: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
      answer: 2
    }
  ],

  "Picture Round": [
    {
      question: "🏛️ This iconic building is located in which country? (Hint: it's the Colosseum)",
      options: ["Greece", "Italy", "Spain", "Turkey"],
      answer: 1
    },
    {
      question: "🐾 This animal is a marsupial native to Australia. Which one is it? (Hint: it's known for boxing)",
      options: ["Wombat", "Quokka", "Kangaroo", "Wallaby"],
      answer: 2
    },
    {
      question: "🎨 The painting 'Starry Night' was painted by which artist?",
      options: ["Claude Monet", "Pablo Picasso", "Vincent van Gogh", "Salvador Dalí"],
      answer: 2
    },
    {
      question: "🏔️ The world's highest mountain, Mount Everest, lies on the border of Nepal and which other country?",
      options: ["India", "Bhutan", "China", "Pakistan"],
      answer: 2
    },
    {
      question: "🚀 The NASA space shuttle programme's final mission was aboard which shuttle?",
      options: ["Discovery", "Challenger", "Atlantis", "Endeavour"],
      answer: 2
    },
    {
      question: "🎭 Who painted the Sistine Chapel ceiling?",
      options: ["Leonardo da Vinci", "Raphael", "Michelangelo", "Donatello"],
      answer: 2
    },
    {
      question: "🌉 The Golden Gate Bridge is located in which US city?",
      options: ["Los Angeles", "Seattle", "San Francisco", "Portland"],
      answer: 2
    },
    {
      question: "🦁 What is a group of lions called?",
      options: ["Pack", "Herd", "Pride", "Colony"],
      answer: 2
    },
    {
      question: "🗼 The Eiffel Tower was originally built for which event?",
      options: ["A World's Fair", "The 1900 Olympics", "Napoleon's coronation", "The French Revolution centenary"],
      answer: 0
    },
    {
      question: "🎬 The Hollywood sign is located in which US city?",
      options: ["San Francisco", "Las Vegas", "Los Angeles", "San Diego"],
      answer: 2
    }
  ],

  "Themed Round": [
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Jupiter", "Venus", "Mars", "Saturn"],
      answer: 2
    },
    {
      question: "What is the capital city of Australia?",
      options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
      answer: 3
    },
    {
      question: "Which chemical element has the symbol 'Fe'?",
      options: ["Fluorine", "Iron", "Francium", "Fermium"],
      answer: 1
    },
    {
      question: "In what decade was the internet made publicly available?",
      options: ["1970s", "1980s", "1990s", "2000s"],
      answer: 2
    },
    {
      question: "How many bones are in a human hand (including the wrist)?",
      options: ["19", "23", "27", "31"],
      answer: 2
    },
    {
      question: "Which Shakespeare play features the characters Rosencrantz and Guildenstern?",
      options: ["Macbeth", "Othello", "Hamlet", "King Lear"],
      answer: 2
    },
    {
      question: "Which country gifted the Statue of Liberty to the United States?",
      options: ["Britain", "France", "Spain", "Germany"],
      answer: 1
    },
    {
      question: "What does 'www' stand for in a web address?",
      options: ["World Wide Web", "Wide World Web", "World Web Wide", "Web World Wide"],
      answer: 0
    },
    {
      question: "Who wrote the novel '1984'?",
      options: ["Aldous Huxley", "Ray Bradbury", "George Orwell", "H.G. Wells"],
      answer: 2
    },
    {
      question: "Which country has won the most Nobel Prizes?",
      options: ["UK", "Germany", "France", "United States"],
      answer: 3
    }
  ]

};
