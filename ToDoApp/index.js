const toDoList = [{
		title: 'Code',
		completed: true
	}, {

		title: 'Be familair with DSA',
		completed: false
	}, {

		title: 'Attend Several Interviews',
		completed: false
	}, {

		title: 'Already have a job',
		completed: true
	},

	{
		title: 'Three years Goadl',
		completed: true
	}
]

const filterNote = {
	searchNote: '',
	hideFilter: false,
}

const renderFilter = (filters, notes) => {
	let filteredNotes = notes.filter(function (note) {
		return note.title.includes(filters.searchNote)
	})

	filteredNotes = filteredNotes.filter(function (note) {
		if (filters.hideFilter) {
			return !note.completed
		} else {
			return true
		}
	})

	const showFilteredNotes = filteredNotes.filter(note) =>
		return !filterNote.completed

	//console.log(filteredNotes)

	document.querySelector('#refactor').innerHTML = ''

	filteredNotes.forEach(note => {
		const renderEle = document.createElement('p')
		renderEle.textContent = note.title
		//addParagraph4.textContent = `${toDoList.title}`
		document.querySelector('#refactor').appendChild(renderEle)
	})
}
renderFilter(filterNote, toDoList)



const Arab = document.querySelector('#Add-New').addEventListener('input', function (e) {
	filterNote.searchNote = e.target.value;
	renderFilter(filterNote, toDoList)
})




document.querySelector('#formBody').addEventListener('submit', function (e) {
	e.preventDefault()
	toDoList.push({
		title: e.target.firstName.value,
		completed: false
	})
	renderFilter(filterNote, toDoList)
})

document.querySelector('#submission').addEventListener('change', function (e) {
	filterNote.hideFilter = e.target.checked
	renderFilter(filterNote, toDoList)

})