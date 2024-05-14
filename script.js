const taskList = document.getElementById('task-list');
const newTaskInput = document.getElementById('new-task');
const newNotesInput = document.getElementById('new-notes')
const addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', addTask);

function addTask() {
	const taskDescription = newTaskInput.value;
    const notes = newNotesInput.value;
	if (taskDescription) {
		const taskHTML = `
			<tr>
				<td>${taskDescription}</td>
                <td>${notes}</td>
                <td><input type="date"></td>
				<td><input type="checkbox"></td>
				<td><button>Delete</button></td>
			</tr>
		`;
		taskList.insertAdjacentHTML('beforeend', taskHTML);
		newTaskInput.value = '';
        newNotesInput.value = '';
	}
}

taskList.addEventListener('change', (e) => {
	if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
		const taskRow = e.target.parentNode.parentNode;
		taskRow.classList.toggle('completed');
	}
});

taskList.addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON') {
		const taskRow = e.target.parentNode.parentNode;
		taskRow.remove();
	}
});
