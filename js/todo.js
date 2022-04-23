const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

function handleToDoSubmit(e) {
  e.preventDefault();
  const newToDo = toDoInput.ariaValueMax;
  toDoInput.value = '';
}

todoForm.addEventListener('submit', handleToDoSubmit);
