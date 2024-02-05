document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
  
    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        addTaskFromInput();
      }
    });
  
    // Add task when the button is clicked
    addTaskBtn.addEventListener('click', function () {
      addTaskFromInput();
    });
  
    function addTaskFromInput() {
      const taskText = taskInput.value.trim();
  
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
      }
    }
  
    function addTask(taskText) {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.textContent = taskText;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn btn-danger btn-sm float-end';
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', function () {
        taskList.removeChild(li);
      });
  
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    }
  });
  