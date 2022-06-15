class Hangman {

    constructor(words, NumberOfGuesses) {
        this.words = words.split('');
        this.NumberOfGuesses = NumberOfGuesses;
        this.guessedLetters = [];
    }

    Game() {
        let puzzle = '';

        this.words.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === '') {
                puzzle += letter;
            } else {
                puzzle += "*";
            }
        });
        return puzzle;
    }

    Guess(guess) {
        guess = guess.toLowerCase()
        const uniqueGuess = !this.guessedLetters.includes(guess);

        if (uniqueGuess) {
            this.guessedLetters.push(guess);
        }
        if (uniqueGuess || !this.words.includes(guess)) {
            this.NumberOfGuesses = this.NumberOfGuesses - 1;
        }

    }
}



const firstGame = new Hangman('enoydgwyyyt', 3)

firstGame.Guess('t')
firstGame.Guess('e')

console.log(firstGame.Game())
console.log(firstGame.NumberOfGuesses)