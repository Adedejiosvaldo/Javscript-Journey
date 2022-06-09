const objArrays = [{
    name: "Ade",
    Age: 30
}, {
    name: 'joseph',
    age: 20,
}, {
    name: 'adewunmi',
    age: 14
}]

const checkAge = objArrays.filter((persons) => {
    return persons.age < 30
})

console.log(checkAge)