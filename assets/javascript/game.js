// <script type="text/javascript">

// These are the words for the Hangman game.
var words = ["CITIZEN", "CHARLOTTE CORDAY", "REVOLUTION", "FRENCH", "NATION", "PRIVILEGE", "NOBILITY", "CLERGY", "THIRD ESTATE", "VOTE", "NATIONAL ASSEMBLY", "KING", "CONSTITUTION", "THE BASTILLE", "PARIS", "TYRANNY", "THE TERROR", "ABSOLUTISM", "LET THEM EAT CAKE", "BEHEADING", "EXECUTIONER", "MARIE-ANTOINETTE", "LOUIS XVI", "MIRABEAU", "DANTON", "MARAT", "NAPOLEON BONAPARTE", "BREAD", "ANARCHY", "THE COMMUNE", "LIBERTE EGALITE FRATERNITE", "LA MARSEILLAISE", "TUILERIES", "VERSAILLES", "REPUBLIC", "ARISTOCRATS", "GIRONDINS", "CONDORCET", "MONTAGNARDS", "LA FAYETTE", "CAMILLE DESMOULINS", "ROBESPIERRE", "GUILLOTINE", "COMMITTEE OF PUBLIC SAFETY", "THERMIDORIAN REACTION", "JACOBIN CLUB", "SANS-CULOTTES"];

// The current word in play
var thisWord = "";

//used to hold blanks
var blankWord = "";

//holds the letters the user has guessed
var guessedLetters = "";

//Indicate if this is the first word the user is guessing. This isn't used in v1.0
var newGame = true;

// Keep track of wins and losses
var wins = 0;
var losses = 0;

// Number of guesses the user can make
var guessCount = 15;


function setGame() {

  // If this isn't the first round, pause to show the answer before overwriting.
   // if (newGame === false) {
   //   document.getElementById("playAgain").innerHTML = ("PRESS ANY KEY TO PLAY AGAIN");
   //   newGame = true;
   // }

  // Randomly pick a word and take it out of the array so it won't be used again
  var wordsIndex = Math.floor((Math.random() * (words.length - 1) + 0));
  thisWord = words.splice( wordsIndex, 1 )[0]; 
  blankWord = thisWord;

  // Set the guesses back to starting values
  guessCount = 15;
  guessedLetters = "";


  // document.getElementById("blanks").innerHTML = ("This word is " + thisWord);
  blankWord = setToBlanks(blankWord);
  document.getElementById("theAnswer").innerHTML = "";
  // document.getElementById("playAgain").innerHTML = ("");
  writeBlanks(blankWord);
}


// When the user presses a key, put that letter into blankWord (the underscores section of the game)
//
// finally, check to see if the game is complete by checking to see if any blanks are left!
blankWord = document.onkeyup = function() {

  // Get key input from the user
  var userguess = String.fromCharCode(event.keyCode).toUpperCase();
  // if (newGame === false) {
  //   document.getElementById("playAgain").innerHTML = ("PRESS ANY KEY TO PLAY AGAIN");
  //   newGame = true;
  // }
  // Test if the character is valid and if it was entered previously
  if ((guessedLetters.indexOf(userguess) === -1) && (userguess.match(/^[A-Za-z]+$/))) {
    guessedLetters += userguess;

    // If the letter guessed isn't in the word, the user gets one less guess.
    if(thisWord.indexOf(userguess) === -1){
      guessCount--;
    }
    
    // newGame = true;
  }
  
  // Show the user the guesses so far
  document.getElementById("characterGuesses").innerHTML = (guessedLetters);


  // console.log(userguess);
  // console.log(words[1][2]);

  for (var i = 0; i < thisWord.length; i++) {
    if (thisWord[i] === userguess) {
      blankWord = blankWord.replaceAt(i, userguess);
    }
  }


// This function from stackoverflow to replace a character in a string based on its index.
// I intend to replace this with different logic, because I don't think it is ideal.
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

  // var wordsIndex = Math.floor((Math.random() * (words.length - 1) + 0));

  // var thisWord = words.splice( wordsIndex, 1 )[0]; 

  //document.getElementById("blanks").innerHTML = (blankWord);



  // If no blanks are left, the reset the game!
  if (blankWord.indexOf("_") === -1) {
    
    document.getElementById("blanks").innerHTML = (thisWord);

    document.getElementById("theAnswer").innerHTML = ("Solved! The answer is " + thisWord);

    alert("Solved! The answer is " + thisWord);
    wins++;
    document.getElementById("wins").innerHTML = ("Wins: " + wins);
    // blankWord = setToBlanks(blankWord);
    document.getElementById("characterGuesses").innerHTML = "";
    // newGame = false;
    setGame();
  }
  else if (guessCount === 0) {
    document.getElementById("guesses").innerHTML = ("Off with your head!");
    document.getElementById("blanks").innerHTML = (thisWord);
    document.getElementById("theAnswer").innerHTML =("You have run out of guesses! The answer was " + thisWord);
    // newGame = false;
    alert("No guesses left! The answer was " + thisWord);
    losses++;
    document.getElementById("losses").innerHTML = ("Losses: " + losses);
    // blankWord = setToBlanks(blankWord);
    document.getElementById("characterGuesses").innerHTML = "";
    setGame();    
  }
  else {
    document.getElementById("blanks").innerHTML = (blankWord);
  }



  
  if (guessCount === 1 ) {
    document.getElementById("guesses").innerHTML = ("You only have 1 guess left!");
  }
  else {
    document.getElementById("guesses").innerHTML = ("You have " + guessCount + " guesses remaining.");
  }

  
  // alert(guessCount);
  return blankWord;

}

function writeBlanks(word) {
  document.getElementById("blanks").innerHTML = (word);
}

// This function takes a string as a parameter and returns a string made up of an underscore for each character in 
// the string. It returns a space for a space or a dash for a dash.
function setToBlanks(word) {
  var blanks = "_";
  for (var i = 1; i < word.length; i++) {
    if (word[i] === " ") {
      blanks += " ";
    }
    else if (word[i] === "-") {
      blanks += "-";
    }
    else {
      blanks += "_";
    }

  }
  return blanks;

}
