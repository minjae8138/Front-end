const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const toDos_LS = "toDos";

const toDos = [] ;

function saveToDos(){
    localStorage.setItem(toDos_LS,JSON.stringify(toDos)) ;
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1
    delBtn.innerHTML = "👏";
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId ;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text ,
        id : newId
    };
    saveToDos();
    toDos.push(toDoObj) ;
}

function handlesubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(toDos_LS);
    if(loadedToDos !== null){
        const parsedTodos = JSON.parse(loadedToDos);
        parsedTodos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
        
    }
}


function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handlesubmit);
}

init();