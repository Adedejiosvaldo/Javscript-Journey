const toDoList = [{
	title : 'Code',
	completed: true
	}, {

	title : 'Be familair with DSA',
	completed : false
	}, {

	title: 'Attend Several Interviews',
	completed : false
	},{
		
	title: 'Already have a job',
	completed : true
	},

	{
	title: 'Three years Goadl',
	completed : true
	}]

const searchThrough = function (todo){
	return todo.filter(function(todos){
		return !todos.completed
	})
}

const searchThroughTitle = function (todo,query){
	return todo.filter(function(todos){
		return isTaskComplete = todos.title.includes(query)
	})
}

const outPut = searchThrough(toDoList)
console.log(outPut)