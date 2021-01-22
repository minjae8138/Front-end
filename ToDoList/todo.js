const toDoForm = document.querySelector(".js-toDoForm");
const input = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const listTable = document.querySelector(".list-table")

const deleteAll = document.querySelector("#deleteAll");
const deleteSel = document.querySelector("#deleteSel")

const listBody = document.getElementById("list-body");

const TODOS_LS = "todos";
let toDos = [];
// 추가
function paintAdd(text) {
    if (!text) {
        alert('내용을 입력해주세요.');
        return false;
    }

    const tr = document.createElement('tr');
    const input = document.createElement('input');
    const newId = toDos.length + 1;

    input.setAttribute('type', 'checkbox');
    input.setAttribute('class', 'btn-chk')
    const td01 = document.createElement('td');
    td01.appendChild(input);
    tr.appendChild(td01);
    const td02 = document.createElement('td');
    td02.innerText = text;
    tr.appendChild(td02);
    listBody.appendChild(tr);
    tr.id = newId
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

// 전체삭제
function paintDeleteAll() {
    while (listBody.firstChild) {
        listBody.removeChild(listBody.firstChild);
    }
    toDos = []
    saveToDos();
}

// 선택삭제


function paintDeleteSel(event) {
    var body = document.getElementById('list-body');
    var chkbox = document.querySelectorAll('#list-body .btn-chk');
    console.log(chkbox)
    console.log(chkbox[1].checked)

    for (var i in chkbox) {
        if (chkbox[i].checked == true) {
            body.removeChild(chkbox[i].parentNode.parentNode);
            toDos.splice(i, 1)
        }
    }
    saveToDos();
}

// 저장
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function (toDo) {
            paintAdd(toDo.text);
        });
    }
}

// 제출
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintAdd(currentValue);
    input.value = "";
}

loadToDos();
deleteAll.addEventListener("click", paintDeleteAll);
deleteSel.addEventListener("click", paintDeleteSel);
toDoForm.addEventListener("submit", handleSubmit);

