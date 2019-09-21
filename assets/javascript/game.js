// First I'm going to set my variables to zero \\
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var userGuessesSoFar = null;

// Now creating an array of all the letters user can guess \\
var possibleLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


// Now I'm setting the target variable IDs in HTML\\
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesLeft = document.getElementById("guessesLeft");

// Reset game to start \\
function gameStart() {
winsText.innerText = wins;
lossesText.innerText = losses;

//Now I'm setting the function for user to select random letter \\
//Math.random()
var randomLetter = possibleLetters[Math.floor(Math.random()*possibleLetters.length)];
console.log(randomLetter);
guessesLeftText.innerText = guessesLeft;
}
// once page loads, the game starts
document.addEventListener("DOMContentLoaded", function() {
gameStart();
});

// // Now I'm creating the functions that will update each variable after user guesses 
// // updateGuesses, updateGuessesLeft, updateUserGuessesSoFar \\ 
// var updateGuessesLeft = function() {
//     document.querySelector("#guesses-left").innerHTML = guessesLeft;
//   };

// var updateGuessesSoFar = function() {
//     // Here we take the guesses the user has tried -- then display it as letters separated by commas.
//     document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
//   };





// //listen to user input
//  // onkeyup() <==== Most code goes in this function
document.onkeyup = function(event) {
var userGuess = event.key;

// //compare user input to computer letter
//     // if (userGuess === computerGuess) <=== Needs to be in onkeyup function
//     if (letter === letterToGuess) {

if (userGuess !== computerGuess && guessesLeft > 0) {
    guessesLeft--;
    guessesLeftText.innerText = guessesLeft;
    }

//if same game won
    // add one to games won

else if (userGuess === computerGuess && guessesLeft > 0) {
     wins++;
    alert("WINNER!!");
    gameStart();
    }

//if diff minus one from guesses left

//if guesses left === 0 game lost
    //add one to games lost

// resest game
    //get computer to select another random letter
    //reset guesses left
    //KEEP games won and games lost

    var reset = function() {
        guessesLeft = 9;
        guessedLetters = [];
        updateLetterToGuess();
        updateGuessesLeft();
        updateGuessesSoFar();
      };

    updateLetterToGuess();
    updateGuessesLeft();






//     var updateGuessesSoFar = function() {
//         // Here we take the guesses the user has tried -- then display it as letters separated by commas.
//         document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
//       };
      

