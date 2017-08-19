/*
Object of Psychic Game:
Computer will randomly choose letter (from the alphabet)
User will guess which letter the computer chose
Wins = # of times the user guessed the computer's letter correctly; increments by 1
Losses = # of times the user guessed the computer's letter incorrectly; increments by 1
Guesses so far = incorrect letters guessed
User has five chances to guess letter chosen by computer before the game resets.
*/

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterToGuess = " ";
var lettersGuessed;
var wins = 0;
var losses = 0;
var guesses = 0;
var guessesLeft = 5;
var guessesSoFar = [];

function gameReset() {
	guessesLeft = 5;
	guessesSoFar = [];
	var letterIndex = Math.floor(Math.random() * letters.length); letterToGuess = letters[letterIndex];
	letterToGuess = letters[letterIndex];
	console.log("letter to guess:" + letterToGuess);
}

var letterIndex = Math.floor(Math.random() * letters.length); letterToGuess = letters[letterIndex];

document.onkeyup = function() {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	if (letterToGuess === userGuess) {
		console.log("correct guess!"); 
		wins ++;
		document.querySelector("#wins").innerHTML="Wins: " + wins;
		gameReset();

		} else if (letterToGuess !== userGuess) { 
			console.log("incorrect guess");	
			guessesLeft --;
			document.querySelector("#guessesLeft").innerHTML="Guesses Left: " + guessesLeft;
			guessesSoFar [guessesSoFar.length] = userGuess;
			document.querySelector("#guessesSoFar").innerHTML="Guesses So Far: " + guessesSoFar;
			}

	if (guessesLeft == 0) {
		losses ++;
		document.querySelector("#losses").innerHTML="Losses: " + losses;
		gameReset();
		document.querySelector("#wins").innerHTML="Wins: " + wins;
		document.querySelector("#guessesLeft").innerHTML="Guesses Left: " + guessesLeft;
		document.querySelector("#guessesSoFar").innerHTML="Guesses So Far: " + guessesSoFar;
		console.log("sorry, try again");
	}
}


		