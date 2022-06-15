//Array Spread
let arrayTest = ['ade', 'wunmi', 'joe']
let addArrayTest = [...arrayTest, 'deji']

console.log(addArrayTest)
console.log(arrayTest)

//object spread
const objectTest = {
    name: 'ade',
    age: 34
}

const addObjectTest = {
    ...objectTest,
    stateOfOrigin: 'Ogun',
    crush: 'Jesus'
}

console.log(objectTest)
console.log(addObjectTest)

//Function Rest

const addI = (...args) => {
    args.forEach(function (arg) {
        console.log('i')
    })
}

addI(1, 2, 3, 4, 5, 6, )