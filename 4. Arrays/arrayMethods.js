let toDoList = ['1. Code','2. Be familair with DSA', '3. Attend Several Interviews','4. Already have a job','5. Three years Goadl']
console.log('You have ' + toDoList.length + ' To Dos')

toDoList.splice(2,1)
console.log(toDoList)

toDoList.push("6. Front End Dev")

console.log(toDoList)

toDoList.shift()

console.log(toDoList)
