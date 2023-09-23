const loginForm =document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting =document.getElementById('greeting');
const sayHello =document.querySelector('.hello-section');
const showClock=document.querySelector('.clock-section');
const showQuotes =document.querySelector('.quotes-section');
const showMainfocus = document.querySelector('#main-focus');
const showTodoform = document.querySelector('#todo-form');

const HIDDEN_CLASSNAME='hidden';
const USERNAME_KEY = 'username';

function paintGreetings(username){
	greeting.innerText =`Hello, ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
	sayHello.classList.add(HIDDEN_CLASSNAME);
	showClock.classList.remove(HIDDEN_CLASSNAME);
	showQuotes.classList.remove(HIDDEN_CLASSNAME);
	showMainfocus.classList.remove(HIDDEN_CLASSNAME);
	showTodoform.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event){
	event.preventDefault(); // 정확이 어떤 정보가 saved 되는지 
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY,username);
	paintGreetings(username);
} 

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername==null){
	loginForm.classList.remove(HIDDEN_CLASSNAME);//show login form in screen
	loginForm.addEventListener('submit',onLoginSubmit);
} else {
	paintGreetings(savedUsername);
}
// getintervar 로 시간을 최신화 시킬때
//만약 계속 홈페이지가 refresh 되지 않으면 
// 시간 적용이 안 되지 않나?