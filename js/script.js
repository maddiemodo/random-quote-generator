// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Quote Array
var quotes = [
  {
    quote: "Ovaries before brovaries.",
    source: "Leslie Knope",
    citation: "Parks and Recreation",
    year: 2013,
    tags: "friendship"
  },
  {
    quote: "One person's annoying is another's inspiring and heroic.",
    source: "Leslie Knope",
    tags: "inspiration"
  },
  {
    quote: "I think Comic Sans always scream FUN.",
    source: "Jerry Gergich",
    tags: "whocareslarry"
  },
  {
    quote: "TREAT YO SELF",
    source: "Donna Meagle",
    citation: "Parks and Recreation",
    year:2011,
    tags: "tuesdays"
  },
  {
    quote: "There has never been a sadness that can't be cured by breakfast food.",
    source: "Ron Swanson",
    tags: "breakfast"
  }
];

//Gets a Random Quote from the Array
function getRandomQuote() {
  //Picks an index to retrieve random quote
  var randomNum= Math.floor(Math.random()* quotes.length);
  return quotes[randomNum];


};

//Set a timer for 30 seconds if no action
var timer;

function myTimer() {
  timer = setInterval(printQuote,30000);
}

function clearTimer(){
  clearInterval(timer);
}

//Takes the random quote and displays it
function printQuote(){
  var randomQuote, message;
  randomQuote = getRandomQuote();
  //construct a string containing the different properties of the quote object
  message = '<p class="quote">' + randomQuote.quote + '</p>';
  message += '<p class="source">' + randomQuote.source ;
  if (randomQuote.citation !== undefined) {
    message += '<span class="citation"> '+ randomQuote.citation +'</span>';
  }
  if (randomQuote.year !== undefined) {
    message += '<span class="citation"> '+ randomQuote.year +'</span>';
  } else {
    message += '';
  }
  message += '<h3>#' +  randomQuote.tags +'</h3>';
  message +='</p>';

  //display the final html string to the page
  document.getElementById('quote-box').innerHTML = message;

  //Random Background color
  randomBackgroundColor();
  //Update randomColor
  document.body.style.backgroundColor = randomBackgroundColor();

  clearTimer();
  myTimer();

};

function randomBackgroundColor() {
  var randomColor;
  red = Math.floor(Math.random()*256);
  green = Math.floor(Math.random()*256);
  blue = Math.floor(Math.random()*256);
  randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  return randomColor;
};
