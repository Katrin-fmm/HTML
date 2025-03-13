import './style.css';

const tasks = [];

function addTask() {
  const newTask = $('#new-task').val();
  if (newTask.trim() !== '') {
    tasks.push({ text: newTask, completed: false });
    const listItem = $('<li class="todo-item"></li>');
    const taskText = $('<span></span>').text(newTask);
    const deleteButton = $('<button class = "delete-btn">❌</button>' );
    const renameButton = $('<button class = "rename-btn">✏️</button>');
    $(listItem).append(taskText, renameButton, deleteButton);

    $(listItem).on('click', function () {
      const index = $(this).index();
      tasks[index].completed = !tasks[index].completed;
      $(this).toggleClass('completed');
    });

    $(deleteButton).on('click', function (event) {
      event.stopPropagation();
      const index = $(this).index();
      tasks.splice(index, 1); 
      $(this).parent().remove(); 
    });


$(renameButton).on('click', function(event){
  event.stopPropagation();
  const index = $(this).parent().index();
  const newname = prompt('Введите новое название задачи:', tasks[index].text);
  if (newname !== null && newname.trim() !== '') { 
    tasks[index].text = newname; 
    $(this).siblings('span').text(newname);
  }
});

    $('#todo-list').append(listItem);
    $('#new-task').val('');
  }
}

$('form').on('submit', function (e) {
  e.preventDefault();
  addTask();
});
