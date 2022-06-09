const team = ['ade', 'joe', 'simbi']

const display = team.length <= 4 ? 'Okay' : "Too much people"

console.log(display)

const okayFunction = (no) => {
    console.log('Okay')
}

const notOkayFunction = (nos) => {
    console.log('Not Okay')
}

team.length <= 4 ? okayFunction() : notOkayFunction