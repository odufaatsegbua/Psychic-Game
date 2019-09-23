// First I'm going to set my variables to zero \\
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuessesSoFar = null;
var randomLetter;

// Now creating an array of all the letters user can guess \\
var possibleLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


// Now I'm setting the target variable IDs in HTML\\
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessesLeft");

// Reset game to start \\
function gameStart() {
winsText.innerText = "Wins: " + wins;
lossesText.innerText = "Losses: "+ losses;
guessesLeft = 9;
//Now I'm setting the function for user to select random letter \\
//Math.random()
randomLetter = possibleLetters[Math.floor(Math.random()*possibleLetters.length)];
console.log(randomLetter);
guessesLeftText.innerText = "Guesses Left: "+guessesLeft;
}
// This code will reload the page so the game can start \\
document.addEventListener("DOMContentLoaded", function() {
gameStart();
});

// //listen to user input
//  // onkeyup() <==== Most code goes in this function
document.onkeyup = function(event) {
var userGuess = event.key;

// //compare user input to computer letter
//     // if (userGuess === computerGuess) <=== Needs to be in onkeyup function
//     if (letter === letterToGuess) {

if (userGuess !== randomLetter && guessesLeft > 0) {
    guessesLeft--;
    guessesLeftText.innerText = "Guesses Left: "+guessesLeft;1
    }

//if same game won
    // add one to games won

else if (userGuess === randomLetter && guessesLeft > 0) {
     wins++;
    alert("WINNER!!");
    gameStart();
    }

//if diff minus one from guesses left

//if guesses left === 0 game lost
    //add one to games lost
    else if (guessesLeft === 0) {
        losses++;
        alert("TRY AGAIN!!");
        gameStart();
      }

// resest game
    //get computer to select another random letter
    //reset guesses left
    //KEEP games won and games lost

  }
