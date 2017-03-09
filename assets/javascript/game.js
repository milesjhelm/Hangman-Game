// <script type="text/javascript">

// These are the words for the Hangman game.
var words = ["CITIZEN", "CHARLOTTE CORDAY", "REVOLUTION", "FRENCH", "NATION", "PRIVILEGE", "NOBILITY", "CLERGY", "THIRD ESTATE", "VOTE", "NATIONAL ASSEMBLY", "KING", "CONSTITUTION", "THE BASTILLE", "PARIS", "TYRANNY", "THE TERROR", "ABSOLUTISM", "LET THEM EAT CAKE", "BEHEADING", "EXECUTIONER", "MARIE-ANTOINETTE", "LOUIS XVI", "MIRABEAU", "DANTON", "MARAT", "NAPOLEON BONAPARTE", "BREAD", "ANARCHY", "THE COMMUNE", "LIBERTE EGALITE FRATERNITE", "LA MARSEILLAISE", "TUILERIES", "VERSAILLES", "REPUBLIC", "ARISTOCRATS", "GIRONDINS", "CONDORCET", "MONTAGNARDS", "LA FAYETTE", "CAMILLE DESMOULINS", "ROBESPIERRE", "GUILLOTINE", "COMMITTEE OF PUBLIC SAFETY", "THERMIDORIAN REACTION", "JACOBIN CLUB", "SANS-CULOTTES"];
var thisWord = "";
var blankWord = "";
var newGame = true;

// Keep track of wins and losses
var wins = 0;
var losses = 0;


// Number of guesses the user can make
var guessCount = 15;

// How many guesses so far?

// window.onload = function () {
//     var wordsIndex = Math.floor((Math.random() * (words.length - 1) + 0));
//     var thisWord = words.splice( wordsIndex, 1 )[0]; 

//     document.getElementById("myP").innerHTML = "Hello Dolly.";
// }

function setGame() {
    var wordsIndex = Math.floor((Math.random() * (words.length - 1) + 0));
    thisWord = words.splice( wordsIndex, 1 )[0]; 
    blankWord = thisWord;
    guessCount = 15;

    // document.getElementById("blanks").innerHTML = ("This word is " + thisWord);
    blankWord = setToBlanks(blankWord);
    writeBlanks(blankWord);
}

// When the user presses a key, put that letter into blankWord (the underscores section of the game)
//
// finally, check to see if the game is complete by checking to see if any blanks are left!
blankWord = document.onkeyup = function() {

  // Get key input from the user
  var userguess = String.fromCharCode(event.keyCode).toUpperCase();

  console.log(userguess);
  console.log(words[1][2]);

  for (var i = 0; i < thisWord.length; i++) {
    if (thisWord[i] === userguess) {
      blankWord = blankWord.replaceAt(i, userguess);
    }
  }

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

  // var wordsIndex = Math.floor((Math.random() * (words.length - 1) + 0));

  // var thisWord = words.splice( wordsIndex, 1 )[0]; 

  document.getElementById("blanks").innerHTML = (blankWord);

  // If no blanks are left, the reset the game!
  if (blankWord.indexOf("_") === -1) {
    alert("Solved! The answer is " + thisWord);
    setGame();
  }
  else if (guessCount === 0) {
    document.getElementById("guesses").innerHTML = ("Off with your head!");
    alert("You have run out of guesses! The answer was " + thisWord);
    setGame();    
  }


  guessCount--;
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




// Here is something from stackoverflow to accept only characters. You will have to attach an "keyup" event to the textbox and inside the event check for the keycodes you want:

// $("#hi").bind("keyup", function(e) {
//        //on letter number
//        if (e.which <= 90 && e.which >= 48)
//        {
//           alert('hello');
//        }
// });

// function allLetter(inputtxt)  
//   {  
//    var letters = /^[A-Za-z]+$/;  
//    if(inputtxt.value.match(letters))  
//      {  
//       return true;  
//      }  
//    else  
//      {  
//      alert("message");  
//      return false;  
//      }  
//   }  

  // CREATE THE MISSING CODE HERE. Your code should add content to the random-number div.
  // ...
  // $("#random-button").on("click", function() {


  //   var wordsIndex = Math.floor((Math.random() * (words.length - 1) + 0));

  //   var thisWord = words.splice( wordsIndex, 1 )[0]; 


  //   $("#random-number").prepend("<div>" + wordsIndex + " " + thisWord + "</div>");

// </scipt>