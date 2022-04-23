const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

function paintToDo(newToDo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  li.appendChild(span);
  span.innerHTML = newToDo;
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newToDo = toDoInput.ariaValueMax;
  toDoInput.value = '';
  paintToDo(newToDo);
}

todoForm.addEventListener('submit', handleToDoSubmit);
