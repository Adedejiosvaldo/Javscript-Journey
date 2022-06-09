const Hangman = function (words, NumberOfGuesses, ) {
    this.words = words.split('')
    this.NumberOfGuesses = NumberOfGuesses
    this.guessedLetters = ['c', 'A']
}

Hangman.prototype.Game = function () {
    puzzle = ''
    this.words.forEach(letters => {
        if (this.words === guessedLetters) {

        } else {

        }
    });
};

const firstGame = new Hangman('Enoyt', 3)
console.log(firstGame.Game())

const secondGame = new Hangman('qwdddvgvhdbvkydgwgefkhljpg9spdjsdhdhgakga', 12, 'cba')
console.log(secondGame)