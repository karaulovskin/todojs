function createTodoItem(title) {
    const checkbox = document.createElement('input');
    checkbox.className = 'todo_item__checkbox';
    checkbox.type = 'checkbox';

    const label = document.createElement('label');
    label.className = 'todo_item__title';
    label.innerText = title;

    const editInput = document.createElement('input');
    editInput.className = 'todo_item__textfield';
    editInput.type = 'text';

    const editButton = document.createElement('button');
    editButton.className = 'todo_item__edit';
    editButton.innerText = 'Изменить';

    const deleteButton = document.createElement('button');
    deleteButton.className = 'todo_item__delete';
    deleteButton.innerText = 'Удалить';

    const listItem = document.createElement('li');
    listItem.className = 'todo_item';

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    console.log(listItem);

    return listItem;
}

function addTodoItem(e) {
    e.preventDefault();

    if(addInput.value === '') {
        return alert('Необходимо ввести название задачи.');
    } else {
        const listItem = createTodoItem(addInput.value);
    }
}

const todoForm = document.getElementById('todo_form');
const addInput = document.getElementById('add_input');
const todoList = document.getElementById('todo_list');
const todoItems = document.querySelectorAll('.todo_item');

todoForm.addEventListener('submit', addTodoItem);