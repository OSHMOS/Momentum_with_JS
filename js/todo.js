const toDoForm = document.getElementById('todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

const toDos = [];

function saveToDos() {
  localStorage.setItem('toDos', JSON.stringify(toDos));
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();
}

function paintToDo(newToDo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerHTML = newToDo;
  const btn = document.createElement('button');
  btn.innerHTML = 'X';
  btn.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(btn);
  toDoList.appendChild(li);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  toDos.push(newToDo);
  paintToDo(newToDo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);
