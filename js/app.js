const TodoContainer = document.querySelectorAll('.todo_item_container')[0];
const TodoAdd = document.querySelectorAll('.todo_plus')[0];

TodoAdd.addEventListener('click', () => {
  TodoContainer.appendChild(genTodoItem());
});

function genTodoItem() {
  let cont = document.createElement("div");
  cont.className = "todo_item";
  let text = document.createElement("span");
  text.className = "todo_item_text";
  text.textContent = "Don't forget about ...";
  let controls = document.createElement('span');
  controls.className = 'todo_controls';
  let edit = document.createElement('img');
  edit.src = '../images/changes.svg';
  edit.onclick = () => (text.textContent = prompt('Write what you need...', text.textContent));
  let remove = document.createElement('img');
  remove.src = '../images/minus.svg';
  remove.onclick = () => TodoContainer.removeChild(cont);
  controls.appendChild(edit);
  controls.appendChild(remove);
  cont.appendChild(text);
  cont.appendChild(controls);
  return cont;
}