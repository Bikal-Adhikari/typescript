interface Joke {
  setup: string;
  punchline: string;
}

const jokes: Joke[] = [
  {
    setup: "What do you call a bear with no teeth?",
    punchline: "A gummy bear.",
  },
  {
    setup: "Why don't scientists trust atoms?",
    punchline: "Because they make up everything!",
  },
  {
    setup: "Why don't eggs tell jokes?",
    punchline: "They'd crack each other up!",
  },
  {
    setup: "Why did the tomato turn red?",
    punchline: "Because it saw the salad dressing!",
  },
];

const getRandomJoke = (): Joke => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  return jokes[randomIndex];
};

console.log(getRandomJoke());
