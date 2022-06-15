const person = function () {

}

const me = new person()
console.log(me)

class Person {
    constructor(names, age, likes = []) {
        this.name = names
        this.age = age
        this.likes = likes
    }
    getBio() {
        return `My name is ${this.name},I am ${this.age}Years Old, I like ${this.likes}`
    }

}

const Ade = new Person('joseph', 24, ['sweeping', 'smiling'])
console.log(Ade.getBio())

class Employee extends Person {
    //All the args we need to run the constructor Function

    constructor(name, work, position, age, likes = []) {
        //Super(All we need to inherit)
        super(name, age, likes)
        this.work = work
        this.position = position
    }

    getTitle() {
        return `My name is ${this.name},I work at ${this.work},My Position is ${this.position}`
    }

    getBio() {
        return `My name is ${this.name},I am ${this.age}Years Old, I like ${this.likes}`
    }
}

const Adew = new Employee('Ade', 'Apple', 'CEO')
console.log(Adew.getTitle())
console.log(Adew.getBio())