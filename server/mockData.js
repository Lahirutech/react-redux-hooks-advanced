const books = [
  {
    id: 1,
    title: "Don't Close Your Eyes",
    summary: "Twin sisters Robin and Sarah haven’t spoken in years. Robin can’t leave her house. A complete shut-in, she spends her days spying on her neighbors, subtly meddling in their lives. But she can’t keep her demons out forever. Someone from her past has returned, and is desperate to get inside.",
    author: "Holly Seddon",
    language: "English",
    slug: "dont-close-your-eyes",
    genreId: 2,
    url: "https://www.goodreads.com/book/show/32768286-don-t-close-your-eyes"
  },
  {
    id: 2,
    title: "The Shadow of the Wind",
    summary: "Barcelona, 1945: A city slowly heals from its war wounds, and Daniel, an antiquarian book dealer's son who mourns the loss of his mother, finds solace in a mysterious book entitled The Shadow of the Wind, by one Julian Carax. But when he sets out to find the author's other works, he makes a shocking discovery: someone has been systematically destroying every copy of every book Carax has written. In fact, Daniel may have the last of Carax's books in existence. Soon Daniel's seemingly innocent quest opens a door into one of Barcelona's darkest secrets--an epic story of murder, madness, and doomed love.",
    author: " Carlos Ruiz",
    language: "Spanish",
    slug: "the-shadow-of-the-wind",
    genreId: 9,
    url: "https://www.goodreads.com/book/show/1232.The_Shadow_of_the_Wind"
  },
  {
    id: 3,
    title: "Orope - The White Snake",
    summary: "he Bronze Age saw the beginning of empires, as well as their mysterious and catastrophic end. In a world not unlike our own, the nomadic Whisperers of the Gods have been given a grave vision of the gods destroying the world in a great flood, and they send three messengers to the great empires in hopes of appeasing the gods. Finding themselves in strange new lands with even stranger customs, the Whisperers soon discover the hardest thing is not only convincing the kings and queens to listen, but reaching their destinations without falling prey to the dangers and resisting the temptations of these new lands. In this first novel, readers experience a lost age where the gods live in the wind and waves, and beasts lurk in the dark.",
    author: "Guenevere Lee",
    language: "English",
    slug: "orope-the-white-snake",
    genreId: 19,
    url: "https://www.goodreads.com/book/show/37907938-orope---the-white-snake"
  },
  {
    id: 4,
    title: "The Great Gatsby",
    summary: "The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story is of the fabulously wealthy Jay Gatsby and his new love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted 'gin was the national drink and sex the national obsession,' it is an exquisitely crafted tale of America in the 1920s.",
    author: "F. Scott Fitzgerald",
    language: "English",
    slug: "the-great-gatsby",
    genreId: 19,
    url: "https://www.goodreads.com/book/show/4671.The_Great_Gatsby"
  },
  {
    id: 5,
    title: "Boulevard Dreams",
    summary: "In the smoky noir world of 1958 San Francisco, a down and out private detective experiences a series of surrealistic yet frightening dreams, in which his once best friend pleads for his help, before turning a gun to his head and committing suicide. To ease the lingering doubts regarding his friend's well-being, he sets out to locate him, only to learn he in fact committed suicide, a month before the dreams began. As his investigation deepens, the detective becomes alternately convinced of his friend's suicide, survival and murder, before confronting the shocking reality of his friend’s actual fate, as well as facing the final desperation of his own.",
    author: "E. Ryan Janz",
    language: "English",
    slug: "boulevard-dreams",
    genreId: 15,
    url: "https://www.goodreads.com/book/show/328299.The_Boulevard_of_Broken_Dreams"
  },
  {
    id: 6,
    title: "The Killer Angels",
    summary: "In the four most bloody and courageous days of our nation's history, two armies fought for two dreams. One dreamed of freedom, the other of a way of life. Far more than rifles and bullets were carried into battle. There were memories. There were promises. There was love. And far more than men fell on those Pennsylvania fields. Shattered futures, forgotten innocence, and crippled beauty were also the casualties of war.",
    author: "Michael Shaara",
    language: "English",
    slug: "the-killer-angels",
    genreId: 18,
    url: "https://www.goodreads.com/book/show/682804.The_Killer_Angels"
  },
  {
    id: 7,
    title: "Dead by Morning",
    summary: "With the Experiment in Terror show finding some success, amateur ghost hunters Perry Palomino and Dex Foray embark on their most terrifying investigation yet. A tiny, fog-shrouded island in the rough strait between British Columbia and Washington State has held a dark secret for decades: It was a former leper colony where over forty souls were left to rot, die and bury each other. Now a functioning campground, Perry and Dex spend an isolated weekend there to investigate potential hauntings but as the duo quickly find out, there is more to fear on D’Arcy Island than just ghosts. The island quickly pits partner against partner, spiraling the pair into madness that serves to destroy their sanity, their relationship and their very lives. ",
    author: "Beverly Barton",
    language: "English",
    slug: "dead-by-morning",
    genreId: 2,
    url: "https://www.goodreads.com/book/show/9935280-dead-by-morning"
  },
  {
    id: 8,
    title: "A Dance with Dragons",
    summary: "In the aftermath of a colossal battle, the future of the Seven Kingdoms hangs in the balance—beset by newly emerging threats from every direction. In the east, Daenerys Targaryen, the last scion of House Targaryen, rules with her three dragons as queen of a city built on dust and death. But Daenerys has thousands of enemies, and many have set out to find her. As they gather, one young man embarks upon his own quest for the queen, with an entirely different goal in mind.",
    author: "George R.R. Martin",
    language: "English",
    slug: "a-dance-with-dragons",
    genreId: 4,
    url: "https://www.goodreads.com/book/show/10664113-a-dance-with-dragons"
  },
  {
    id: 9,
    title: "The Hound of the Baskervilles",
    summary: "We owe The Hound of the Baskervilles (1902) to Arthur Conan Doyle's good friend Fletcher 'Bobbles' Robinson, who took him to visit some scary English moors and prehistoric ruins, and told him marvelous local legends about escaped prisoners and a 17th-century aristocrat who fell afoul of the family dog. Doyle transmogrified the legend: generations ago, a hound of hell tore out the throat of devilish Hugo Baskerville on the moonlit moor. Poor, accursed Baskerville Hall now has another mysterious death: that of Sir Charles Baskerville. Could the culprit somehow be mixed up with secretive servant Barrymore, history-obsessed Dr. Frankland, butterfly-chasing Stapleton, or Selden, the Notting Hill murderer at large? Someone's been signaling with candles from the mansion's windows. Nor can supernatural forces be ruled out. Can Dr. Watson--left alone by Sherlock Holmes to sleuth in fear for much of the novel--save the next Baskerville, Sir Henry, from the hound's fangs?",
    author: "Arthur Conan Doyle",
    language: "English",
    slug: "the-hound-of-the-baskervilles",
    genreId: 9,
    url: "https://www.goodreads.com/book/show/8921.The_Hound_of_the_Baskervilles"
  },
  {
    id: 10,
    title: "The Remains of the Day",
    summary: "In the summer of 1956, Stevens, a long-serving butler at Darlington Hall, decides to take a motoring trip through the West Country. The six-day excursion becomes a journey into the past of Stevens and England, a past that takes in fascism, two world wars, and an unrealised love between the butler and his housekeeper.",
    author: "Kazuo Ishiguro",
    language: "English",
    slug: "the-remains-of-the-day",
    genreId: 1,
    url: "https://www.goodreads.com/book/show/28921.The_Remains_of_the_Day"
  }
];

const genres = [
  { id: 1, name: "romance" },
  { id: 2, name: "fiction" },
  { id: 3, name: "young-adult" },
  { id: 4, name: "fantasy" },
  { id: 5, name: "science-fiction" },
  { id: 6, name: "non-fiction" },
  { id: 7, name: "children" },
  { id: 8, name: "history" },
  { id: 9, name: "mystery" },
  { id: 10, name: "horror" },
  { id: 11, name: "paranormal" },
  { id: 12, name: "love" },
  { id: 13, name: "biography" },
  { id: 14, name: "thriller" },
  { id: 15, name: "classics" },
  { id: 16, name: "memoir" },
  { id: 17, name: "suspense" },
  { id: 18, name: "historical-fiction" },
  { id: 19, name: "biographical-fiction" }
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  books,
  genres
};
