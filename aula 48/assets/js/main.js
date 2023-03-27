const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const tasks = document.querySelector('.tasks');

function createLi() {
    const li = document.createElement('li');
    return li;
}

inputTask.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value);
    }
});

function clearInput() {
    inputTask.value = '';
    inputTask.focus();
}

function createDelButton(li) {
    li.innerText += ' '
    const delButton = document.createElement('button');
    delButton.innerText = 'Delete';
    delButton.setAttribute('class', 'Delete');
    li.appendChild(delButton);
}

function createTask(TextInput) {
    const li = createLi();
    li.innerText = TextInput;
    tasks.appendChild(li);
    clearInput();
    createDelButton(li)
    saveTask();
}

btnTask.addEventListener('click', function () {
    if (!inputTask.value) return;
    createTask(inputTask.value);
})

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('Delete')) {
        el.parentElement.remove(); // Deleta o li
        saveTask();
    }
});

function saveTask() {
    const liTasks = tasks.querySelectorAll('li');
    const listOfTaks = [];

    for (let tasks of liTasks) {
        let textTask = tasks.innerText;
        textTask = textTask.replace('Delete', '').trim();
        listOfTaks.push(textTask);
    }
    
    const JSONTasks = JSON.stringify(listOfTaks);
    localStorage.setItem('Tasks', JSONTasks);
}

function addSavedTasks() {
    const tasks = localStorage.getItem('Tasks');
    const listOfTaks = JSON.parse(tasks);
    
    for (let task of listOfTaks) {
        createTask(task);
    }
}

addSavedTasks();