const P = document.querySelector('.click').addEventListener('click', function (e) {
    e.target.textContent = " Dont Click ME!"
})

const Ara = document.querySelector('#submit').addEventListener('click', function (e) {
    e.target.textContent = "Submitted Successfully"
})

const uncompleteTodo = toDoList.filter(function (todo) {
    return !todo.completed
})

toDoList.forEach(pz => {
    const addParagraph4 = document.createElement('p')
    addParagraph4.textContent = pz.title
    document.querySelector('body').appendChild(addParagraph4)
})

const addParagraph1 = document.createElement('h2')
addParagraph1.textContent = `You have ${uncompleteTodo.length} uncompleted todo`
document.querySelector('body').appendChild(addParagraph1)