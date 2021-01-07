let taskItems = [];



function createNewItem() {
	const newItem = {
		date: new Date(),
		label: document.getElementById('new-task').value,
		isDone: false
	}

	taskItems.push(newItem)
	document.getElementById('new-task').value = "";
	console.log(taskItems)
}


function taskViewTemplate(task) {
	return `
		<div class="view-task-cont">
			<p>${task.label}</p>
			<p>${task.date.toDateString()}</p>
		</div>
	`
}



function renderTaskViewHTML() {
	let taskToView = taskItems.map(task => taskViewTemplate(task)).join('')

	mainCont.innerHTML = taskToView;
}