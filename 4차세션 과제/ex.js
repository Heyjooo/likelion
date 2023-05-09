let el = document.getElementById('todo');
let elSubmit = document.getElementById('submit');
let elResult = document.getElementById('result');
let elDelete = document.getElementById('delete');

function addList() {

    if (el.value == false) {
        alert('내용을 입력하세요!');
    } else {
        let list = document.createElement("div");
        let del = document.createElement("button");
        
        list.innerText = '✏️ ' + el.value;

        del.innerText = "[X]";         
        del.style.fontSize = "15px";
        del.style.border = "none";
        del.style.float = "right";
        del.style.marginTop = "0px";

        del.addEventListener('click', deleteList);

        list.appendChild(del);
        elResult.appendChild(list);

        localStorage.setItem("data", JSON.stringify(elResult.innerHTML));
        
    }
}

function deleteList(e) {
    let removeOne = e.target.parentElement;
    JSON.stringify(localStorage.removeItem("data"));
    removeOne.remove()
    localStorage.setItem("data", JSON.stringify(elResult.innerHTML));

}

function deleteAllList() {
    localStorage.clear();
    elResult.innerText = "";
}

elSubmit.addEventListener('click', addList);
elResult.innerHTML = JSON.parse(localStorage.getItem("data"));
elResult.addEventListener('click', deleteList);
elDelete.addEventListener('click', deleteAllList);

