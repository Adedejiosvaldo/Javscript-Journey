let toDoList = [{
	title : 'Code',
	completed: true
	}, 

	{
	title : 'Be familair with DSA',
	completed : false
	},

	{
	title: 'Attend Several Interviews',
	completed : true
	},

	{
	title: 'Already have a job',
	completed : true
	},

	{
	title: 'Three years Goadl',
	completed : true
	}]


// const deleteFunction = function (todos,title){

// 	return todos.title === title
// 	}

// const deleteFunction = toDoList.findIndex(function(todos, titles){
// 	return todos.title  ===  "Already have a job"
// 	if (index > -1) {}
// 	//return todos.splice(todos.titles,1)
// 	todos.splice(index,1)
// })

const deleteFunctionn = function(todos, titles){
	return toDoList.findIndex(function(todo){
	return (todo.title.toLowerCase() ===  titles.toLowerCase())

	})
	
	if (index > -1) {}
	//return todos.splice(todos.titles,1)
	todos.splice(index,1)
	

}

//toDoList.splice(deleteFunction,1)

// const deleteFunctionn = function(todos, titles,index){
// 	return toDoList.find(function(todo){
// 	return (todo.title.toLowerCase() ===  titles.toLowerCase())
// 	return todos.splice(todo.title[index],1)
// 	})


// }

//console.log(toDoList)
//const resultOutput = deleteFunctionn(toDoList,"Already have a job")
console.log(deleteFunctionn)
//console.log(resultOutput)

console.log(toDoList)
