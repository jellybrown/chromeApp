const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const todoForm = document.querySelector(".js-toDoForm");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";
const HIDE = "hide";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  todoForm.classList.add(HIDE);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN); //텍스트를 색칠할거라면 폼을 숨겨
  greeting.classList.add(SHOWING_CN);
  todoForm.classList.remove("hide");
  greeting.innerText = `반가워! ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    todoForm.classList.remove("hide");
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}
init();
