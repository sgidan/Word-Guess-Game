
var answers = [];
var wrongLetter = [];
var rightWord = [];
var words = ["special", "excellent", "necessary", "female", "beautiful",
    "happy", "important", "hashtag", "independent", "complex", "queen",
    "realistic", "javascript", "coding", "bootcamp", "study", "extra", "random",
    "guess", "hangman", "crypt"];
var randoWord;
var maxGuesses;
var lettersRemaining;
// pick rando word from array -words

function start() {
    rightWord = [];
    wrongLetter = [];
    underscore = [];
    answers = [];
    maxGuesses = 9;
    
    document.getElementById('rightGuess').textContent = maxGuesses;

    randoWord = words[Math.floor(Math.random() * words.length)].split('');
    lettersRemaining = randoWord.length;
    console.log(randoWord)

    for (var i = 0; i < randoWord.length; i++) {
        //counts number of letters in random word & pushes that # of underscores
        answers.push("_");
    }

    document.getElementById('underscores').textContent = answers.join(' ');

}

start();

document.onkeyup = function (event) {

    var userGuess = event.key;
    console.log(userGuess);


    var index;
    var foundOne = false;

        console.log('lettersRemaing ' + lettersRemaining);
    while ((index = randoWord.indexOf(userGuess)) > -1) {
        rightWord.push(userGuess);
        answers[index] = userGuess;
        randoWord[index] = '';
        document.getElementById('underscores').textContent = answers.join(' ');
        index = randoWord.indexOf(userGuess);
        lettersRemaining--;
        foundOne = true;
        console.log(rightWord)

    }

    if (foundOne === false) {
        wrongLetter.push(userGuess);
        document.getElementById("wrongGuess").textContent = wrongLetter.join(' ');
        document.getElementById('rightGuess').textContent = maxGuesses;
        console.log(wrongLetter);

        if (--maxGuesses === 0) {
            alert('loser');
            start();
        }
        return;
    }

    if (lettersRemaining === 0) {
        setTimeout(function () {
            alert('you win');
            start();
        }, 100);
        
    
    }

}
