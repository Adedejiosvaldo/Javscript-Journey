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

const sortArray = function (todo) {
    todo.sort(function(a,b){
        if ( !a.completed  && b.completed) {
            return -1          
        } else if (a.completed && !b.completed) { 
            return 1
        } else {
         return 0
        }
    })
    
}

sortArray(toDoList)
console.log(toDoList)