// First I'm going to set all my variables to 0 \\
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var yourGuess = 0;

// Now I'm going to create an array of all the letters in the alphabet since this is a random guess \\
var possibleLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


// Now I'm setting the target variable IDs in HTML\\
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesLeft = document.getElementById("guessesLeft");

//computer select random letter
    //Math.random()
 
var randomLetter = possibleLetters[Math.floor(Math.random()*possibleLetters.length)];

console.log(randomLetter);
//listen to user input
    // onkeyup() <==== Most code goes in this function

//compare user input to computer letter
    // if (userGuess === computerGuess) <=== Needs to be in onkeyup function

//if same game won
    // add one to games won

//if diff minus one from guesses left

//if guesses left === 0 game lost
    //add one to games lost

// resest game
    //get computer to select another random letter
    //reset guesses left
    //KEEP games won and games lost
