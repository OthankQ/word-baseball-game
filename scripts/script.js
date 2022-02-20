// Computer randomly chooses a word from an array of assortment of words.
// Inform the user how many letters the word contains and prompts for a guess.
// User inputs a guess word
// When a word is entered, compare the entered word and the word chosen by the computer
// Do the following:
    // When any letter and the placement of that letter in a guess word matches a letter and the placement of a word chosen by the computer, strike counter ++
    // If any letter matches, but the placement is off, ball counter ++
    // If none of the letters in the guess word is in the computer chosen word, return 'out'
    // Reset the strikeCounter and ballCounter every loop to 0, and loop until the user guesses the right word.
// If the user guesses the right word, return 'true'

const arrayOfWords = ['car', 'dog', 'cat', 'house', 'game', 'gym'];

function chooseWord(array) {
    const randomlyChosenWord = array[Math.floor(Math.random() * array.length)]
    console.log(randomlyChosenWord)
    const chosenWordLength = randomlyChosenWord.length
    console.log(chosenWordLength)
}

function playGame() {
    chooseWord(arrayOfWords);

}
