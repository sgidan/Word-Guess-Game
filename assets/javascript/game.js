
var answers = [];
var wrongLetter = [];
var guessLeft = 9;
var rightWord = [];
var words = ["special", "excellent", "necessary", "female", "beautiful",
    "happy", "important", "hashtag", "independent", "complex", "queen",
    "realistic", "javascript", "coding", "bootcamp", "study", "extra", "random",
    "guess", "hangman", "crypt"];
var randoWord;

// pick rando word from array -words

function start() {
    randoWord = words[Math.floor(Math.random() * words.length)];

    for (var i = 0; i < randoWord.length; i++) {
        //counts number of letters in random word & pushes that # of underscores
        answers.push("_");
    }
    console.log(randoWord)
    document.getElementById('underscores').textContent = answers.join(' ');
 
}

start();
//answer array to set up how many letters in answer
document.onkeyup = function (event) {

    var userGuess = event.key; 
    console.log(userGuess)


    //something happens when keys are pressed

var index = randoWord.indexOf(userGuess);
    if (index > -1) {
        rightWord.push(userGuess);
        answers[index] = userGuess;
        document.getElementById('underscores').textContent = answers.join(' ');
        

    }
    //variable - remaininng letter/guesses
    //var remainingLetters = randoWord.length;

    //while (remainingLetters > 0) {
    //how to enter this in text??*********
}


// var guess =

//to input guess 
// for (var j= 0; j< words.length; j++){
//     if (word[j]===guess) {
//         answer[j] = guess;
//         remainingLetters--;
//     }
// }
