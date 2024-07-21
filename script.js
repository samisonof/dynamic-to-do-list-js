document.addEventListener('DOMContentLoaded', () => {
    //Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    //Create the addTask function
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert('Please enter a task');
            return;
        } else {
            //Create new li element and set its contact to taskText
            const taskItem = document.createElement('li');
            taskItem.textContent = taskText;

            //Create button to remove task
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');

            //Assign onclick to remove button to remove li element from taskList
            removeButton.onclick = function() {
                taskList.removeChild(taskItem);
            }

            //append button
            taskItem.append(removeButton);
            //append task item
            taskList.appendChild(taskItem);

            //clear the task input
            taskInput.value = "";
        }
    }

    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});




function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}

// Adjust `addTask` to optionally save tasks to avoid duplication when loading from Local Storage
function addTask(taskText, save = true) {
    // Task creation logic remains the same

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}


document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    // Other initialization code
});
