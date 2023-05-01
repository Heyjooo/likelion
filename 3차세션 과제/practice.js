let el = document.getElementById('todo');
let elSubmit = document.getElementById('submit');
let elResult = document.getElementById('result');

function addList() {

    let listText = el.value; 

    elResult.innerText = listText;
    return listText;
}

elSubmit.addEventListener('click', addList);