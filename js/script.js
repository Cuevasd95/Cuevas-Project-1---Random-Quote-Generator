var printTimer;                 //Timer that change the quote every 30s
var tempArray = [];             //Temporary Array to store used quotes

//Objects array starts here
var quotes = [
  {
    quote : 'You miss 100% of the shots you dont take',
    source : 'Wayne Gretzky',
    citation : '',
    year : '1983',
    tag : 'Inspirational',
    top : '#1'
  },
  {
    quote : 'Life is what happens to you while you’re busy making other plans.',
    source : 'John Lennon',
    citation : 'Beautifull Boy',
    year : '1980',
    tag : 'Inspirational',
    top : '#2'
  },
  {
    quote : 'Eighty percent of success is showing up.',
    source : 'Woody Allen',
    citation : '',
    year : '1977',
    tag : 'Inspirational',
    top : '#3'
  },
  {
    quote : 'Whether you think you can or you think you can’t, you’re right.',
    source : 'Henry Ford',
    citation :'',
    year : '1947',
    tag : 'Inspirational',
    top : '#4'
  },
  {
    quote : 'Never interrupt your enemy when he is making a mistake.',
    source : 'Napoleon Bonaparte',
    citation :'',
    year : '',
    tag : 'Estrategy',
    top : '#6'
  },
  {
    quote : 'In war, events of importance are the result of trivial causes.',
    source : 'Julius Caesar',
    citation :'',
    year : '',
    tag : 'Estrategy',
    top : '#7'
  },
  {
    quote : 'If everyone is thinking alike, then somebody isnt thinking',
    source : 'George S. Patton',
    citation :'',
    year : '',
    tag : 'Thinking',
    top : '#8'
  },
  {
    quote : 'I attribute my success to this: I never gave or took any excuse.',
    source : 'Florence Nightingale',
    citation : '',
    year : '1861',
    tag : 'Inspirational',
    top : '#5'
  }
];

//Function used to get a different quote each time
function getRandomQuote() {
  var randomNum = Math.floor ( Math.random() * quotes.length);      //Random number generator
  var randomQuote = quotes[randomNum];                              //Random quote generator
  var usedQuotes = tempArray.push(quotes[randomNum]);               //Used to transfer quotes from the original array to the temporary array
  quotes.splice(randomNum, 1);                                      //Re-arrengin the original array
  if (quotes.length === 0) {                       //Checking for the array to be zero to restart the countdown
    quotes = tempArray;
    tempArray = [];
  };                                               //Countdown restarted
  return randomQuote;
};

//Function used to change the background color
function changeBackground () {
  var color = 'rgb(';
  color += Math.floor( Math.random() * 256) + ',';
  color += Math.floor( Math.random() * 256) + ',';
  color += Math.floor( Math.random() * 256) + ')';
  document.body.style.backgroundColor = color;
  document.getElementById('loadQuote').style.backgroundColor = color;
}

//Function used to print the Quote
function printQuote () {
  var randomQuote = getRandomQuote();
  var message = '<p class= "quote">' + randomQuote.quote + '</p>';       //Creating the message that is going to be printed
  message += '<p class = "source">' + randomQuote.source;
  if (randomQuote.citation != '') {                                      //Used to ignore the citation spacing if theres no citation
    message += '<span class = "citation">' + randomQuote.citation;
  }
  if (randomQuote.year != '') {                                          //Used to ignore the year spacing if theres no year
    message += '<span class = "year">' + randomQuote.year;
  }
  message += '<span class = "tag">' + randomQuote.tag;
  message += '<span class = "top">' + randomQuote.top + '</p>';
  document.getElementById('quote-box').innerHTML = message;              //Getting the message to use it in the index
  console.log(randomQuote);                                              //Logging the used quotes to avoid repeatability
  changeBackground();                                                    //Calling the function to change the background color after hitting "next quote" button
};

printTimer = window.setInterval(printQuote, 30000)                       //Setting the interval and fuction thats going to re-run after 30s

document.getElementById('loadQuote').addEventListener("click", printQuote, false);   //Printing the final message to the page
