const toDoForm = document.querySelector(".js-toDoForm");
const input = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const listTable = document.querySelector(".list-table")
const tableToDoList = listTable.querySelector("#table-toDoList")
const tableCheck = listTable.querySelector("#table-checkbox");

function paintToDo(text) {
    const tableText = document.createElement("div");
    const span = document.createElement("span");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    tableCheck.appendChild(checkbox);

    span.innerText = text
    tableToDoList.appendChild(span);
    tableToDoList.appendChild(tableText);


    // tableToDoList.innerText = text;
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintToDo(currentValue);
    input.value = "";
}



function init() {
    toDoForm.addEventListener("submit", handleSubmit);
};

init();