let el = document.getElementById('todo');
let elSubmit = document.getElementById('submit');
let elResult = document.getElementById('result');

function addList() {

    if (el.value == false) {
        alert('내용을 입력하세요!');
    } else {
        let list = document.createElement("li");
        list.innerHTML = '✏️ ' + el.value;
        elResult.appendChild(list);
    }
}

elSubmit.addEventListener('click', addList);