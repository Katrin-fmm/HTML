import './style.css';

const tasks = [];

function addTask() {
  const newTaskInput = document.getElementById('new-task');
  const newTask = newTaskInput.value;
  if (newTask.trim() !== '') {
    tasks.push({ task: newTask, completed: false });
    const taskIndex = tasks.length - 1;

    const listItem = document.createElement('li');
    listItem.className = 'todo-item';
    const taskNameElement = document.createElement('span');
    taskNameElement.innerText = newTask;
    listItem.appendChild(taskNameElement);


    const renameButton = document.createElement('button');
    renameButton.innerText = '✏️';
    renameButton.className ='rename-btn';
    listItem.appendChild(renameButton);
    

    const deleteButton = document.createElement('button');
    deleteButton.innerText = '❌';
    deleteButton.className ='delete-btn';
    listItem.appendChild(deleteButton);

    

    listItem.addEventListener('click', function () {
      tasks[taskIndex].completed = !tasks[taskIndex].completed;
      listItem.classList.toggle('completed');
    });

    deleteButton.addEventListener('click', function (event) {
      event.stopPropagation();
      tasks.splice(taskIndex, 1);
      listItem.remove();
    });



    renameButton.addEventListener('click', function(eve) {
      eve.stopPropagation();
      const newname = prompt('Введите новое название задачи:', tasks[taskIndex].task);
      if (newname !== null && newname.trim() !== '') {
        tasks[taskIndex].task = newname;
        taskNameElement.innerText = newname;
      }
    });

    document.getElementById('todo-list').appendChild(listItem);
    newTaskInput.value = '';
  }
}

document.querySelector('form').onsubmit = (e) => {
  e.preventDefault();
  addTask();
};
