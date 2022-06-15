const Hangman = function (words, NumberOfGuesses, guessedLetters) {
    this.words = words.split('')
    this.NumberOfGuesses = NumberOfGuesses
    this.guessedLetters = guessedLetters.split('')
}

Hangman.prototype.Game = function () {
    let puzzle = ''

    this.words.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === '') {
            puzzle += letter
        } else {
            puzzle += "*"
        }
    });
    return puzzle
};

const firstGame = new Hangman('enoydgzdtujzrjzErwqa35a54ua6rm4i6yrk6a6a4wehayarjhar6ujr6z tmzajt6agwr bheyyyt', 3, 'ey')
console.log(firstGame.Game())