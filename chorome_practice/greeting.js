const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const User_LS = "currentUser";
const Showing_CN = "showing";

function saveName(text){
    localStorage.setItem(User_LS,text);
}

function paintGreeting(text){
    form.classList.remove(Showing_CN);
    greeting.classList.add(Showing_CN);
    greeting.innerText = `Hello ${text}`;
}

function handlesubmit(event){
    const currentValue = input.value;
    event.preventDefault();
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName(){
    form.classList.add(Showing_CN);
    form.addEventListener("submit",handlesubmit)
}

function loadName(){
    const currentUser = localStorage.getItem("User_LS");
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser) ;
    }
}


function init(){
    loadName();
}

init();