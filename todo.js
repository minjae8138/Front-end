const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const toDos_LS = "toDos";

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("");
    delBtn.innerHTML = "👏";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);


}

function handlesubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const toDos = localStorage.getItem(toDos_LS);
    if(toDos !== null){

    }
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handlesubmit);
}

init();