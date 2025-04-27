const body = document.querySelector("body");
const text = document.querySelector("h2");
const btn = document.querySelector("#btn");

const darkColorsArr = [
  "#393E46",
  "#948979",
  "#BB3E00",
  "#A86523",
  "#85193C",
  "#7C4585",
  "#273F4F",
  "#644A07",
  "#213448",
  "#03A791",
  "#CF0F47",
  "#3A59D1",
  "102E50",
];

const quoteArr = [
  "The secret of getting ahead is getting started.",
  "Don’t limit yourself.",
  "All men are created equal.",
  "No road is long with good company.",
  "Love conquers all.",
  "Everything you can imagine is real",
  "What we think, we become.",
  "To love is to burn, to be on fire.",
  "We are what we repeatedly do.",
  "Whatever you are, be a good one.",
  "Love is the poetry of the senses.",
  "Happiness depends upon ourselves.",
];

btn.onclick = runQuote;

function runQuote() {
  changeQuote();
  changeBackgroundColor();
}

function changeQuote() {
    const quote = quoteArr[getRandomIndexQuote()];
    text.innerText = "** " + quote + " **";
  }
  
  function getRandomIndexQuote() {
    const randomIndex = Math.floor(quoteArr.length * Math.random());
    return randomIndex;
  }

function getRandomIndex() {
  const randomIndex = Math.floor(darkColorsArr.length * Math.random());
  return randomIndex;
}

function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()];
  body.style.backgroundColor = color;
}




