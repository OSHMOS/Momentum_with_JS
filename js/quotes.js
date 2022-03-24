const quotes = [
    {
        quote: "Happiness depends upon ourselves.",
        author: "Aristotle"
    },
    {
        quote: "Love does not dominate, it cultivates.",
        author: "Johann Wolfgang von Goethe"
    },
    {
        quote: "If I know what love is, it is because of you.",
        author: "Herman Hesse"
    },
    {
        quote: "The best proof of love is trust.",
        author: "Joyce Brothers"
    },
    {
        quote: "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.",
        author: "Samuel Beckett"
    },
    {
        quote: "Action is the foundational key to all success.",
        author: "Pablo Picasso"
    },
    {
        quote: "Victory is sweetest when you've known defeat.",
        author: "Malcolm S. Forbes"
    },
    {
        quote: "Don't let what you cannot do interfere with what you can do.",
        author: "John R.Wooden"
    },
    {
        quote: "Do not be embarrassed by your failures, learn from them and start again.",
        author: "Richard Branson"
    },
    {
        quote: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;