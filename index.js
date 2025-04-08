const addTaskButton = document.getElementById('addTaskBtn');

addTaskButton.addEventListener('click', function () {
  let input = document.getElementById('textInput');
  let task = input.value;
  if (task !== "") {
  	var ul = document.getElementById('taskList');
    var newTask = document.createElement('li');
    newTask.textContent = task;
    ul.appendChild(newTask);
    input.value = '';
  } else {
  	alert('Please enter task');
  }
});
