// <script type="text/javascript">

// These are the words for the Hangman game.
var words = ["CITIZEN", "CHARLOTTE CORDAY", "REVOLUTION", "FRENCH", "NATION", "PRIVILEGE", "NOBILITY", "CLERGY", "THIRD ESTATE", "VOTE", "NATIONAL ASSEMBLY", "KING", "CONSTITUTION", "THE BASTILLE", "PARIS", "TYRANNY", "THE TERROR", "ABSOLUTISM", "LET THEM EAT CAKE", "BEHEADING", "EXECUTIONER", "MARIE-ANTOINETTE", "LOUIS XVI", "MIRABEAU", "DANTON", "MARAT", "NAPOLEON BONAPARTE", "BREAD", "ANARCHY", "THE COMMUNE", "LIBERTE EGALITE FRATERNITE", "LA MARSEILLAISE", "TUILERIES", "VERSAILLES", "REPUBLIC", "ARISTOCRATS", "GIRONDINS", "CONDORCET", "MONTAGNARDS", "LA FAYETTE", "CAMILLE DESMOULINS", "ROBESPIERRE", "GUILLOTINE", "COMMITTEE OF PUBLIC SAFETY", "THERMIDORIAN REACTION", "JACOBIN CLUB", "SANS-CULOTTES"];


// Keep track of wins and losses
var wins = 0;
var losses = 0;


// Number of guesses the user can make
var totalGuesses = 10;

// How many guesses so far?
var guesscount = 0;

// window.onload = function () {
//     var wordsIndex = Math.floor((Math.random() * (words.length - 1) + 0));
//     var thisWord = words.splice( wordsIndex, 1 )[0]; 

//     document.getElementById("myP").innerHTML = "Hello Dolly.";
// }

function setGame() {
    var wordsIndex = Math.floor((Math.random() * (words.length - 1) + 0));
    var thisWord = words.splice( wordsIndex, 1 )[0]; 

    document.getElementById("blanks").innerHTML = ("This word is " + thisWord);
}


document.onkeyup = function() {

  // Get key input from the user
  var userguess = String.fromCharCode(event.keyCode).toUpperCase();

  console.log(userguess);
  console.log(words[1][2]);


  var wordsIndex = Math.floor((Math.random() * (words.length - 1) + 0));

  var thisWord = words.splice( wordsIndex, 1 )[0]; 

}


// Here is something from stackoverflow to accept only characters. You will have to attach an "keyup" event to the textbox and inside the event check for the keycodes you want:

// $("#hi").bind("keyup", function(e) {
//        //on letter number
//        if (e.which <= 90 && e.which >= 48)
//        {
//           alert('hello');
//        }
// });

  // CREATE THE MISSING CODE HERE. Your code should add content to the random-number div.
  // ...
  // $("#random-button").on("click", function() {


  //   var wordsIndex = Math.floor((Math.random() * (words.length - 1) + 0));

  //   var thisWord = words.splice( wordsIndex, 1 )[0]; 


  //   $("#random-number").prepend("<div>" + wordsIndex + " " + thisWord + "</div>");

// </scipt>