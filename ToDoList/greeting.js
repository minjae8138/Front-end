const form = document.querySelector(".js-form");
const nameInput = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const User = "currentUser";
const Showing_CN = "showing";

function saveName(text) {
    localStorage.setItem(User, text);
}

function handlesubmit(event) {
    const currentValue = nameInput.value;
    event.preventDefault();
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName() {
    form.classList.add(Showing_CN);
    form.addEventListener("submit", handlesubmit)
}

function paintGreeting(text) {
    console.log(form.classList)
    form.classList.remove(Showing_CN);
    console.log(form.classList)
    greeting.classList.add(Showing_CN);
    greeting.innerText = `${text}님의 하루를 응원합니다!!!`;

}

function loadName() {
    const currentUser = localStorage.getItem(User);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);

    }
}


function init() {
    loadName();
}

init();