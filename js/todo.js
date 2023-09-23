const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");

const toDos = [];

function saveToDos(){
	localStorage.setItem('TodoList',JSON.stringify(toDos));
}
/*
 todo form 에 어떠한 값이 입력되면 ->submit event가 발생하면 그 값을 가진 list
 tag를 하나 만듬 
*/
function deleteTodo(event){
	const li =event.target.parentElement;
	li.remove();
}
function paintToDo(newTodo){
	const li = document.createElement('li');
	const span = document.createElement('span');
	span.innerText = newTodo;
	const button = document.createElement('button');
	button.innerText = '❌';
	button.addEventListener('click',deleteTodo);
	li.appendChild(span);
	li.appendChild(button);
	toDoList.appendChild(li);
}

function handleToDoSubmit(event){
	event.preventDefault();
	const newTodo = toDoInput.value;
	toDoInput.value='';
	toDos.push(newTodo);
	paintToDo(newTodo);
	saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);