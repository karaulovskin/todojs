function createTodoItem(title) {
    const checkbox = document.createElement('input');
    checkbox.className = 'todo_item__checkbox';
    checkbox.type = 'checkbox';

    const label = document.createElement('label');
    label.className = 'todo_item__title';
    label.innerText = title;

    const editInput = document.createElement('input');
    editInput.className = 'todo_item__text';
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

    bindEvent(listItem);

    return listItem;
}

function bindEvent(todoItem) {
    const checkbox = todoItem.querySelector('.todo_item__checkbox');
    const editButton = todoItem.querySelector('.todo_item__edit');
    const deleteButton = todoItem.querySelector('.todo_item__delete');

    checkbox.addEventListener('change', toggleTodoItem);
    editButton.addEventListener('click', editTodoItem);
    deleteButton.addEventListener('click', deleteTodoItem);
}

function addTodoItem(e) {
    e.preventDefault();

    if(addInput.value === '') {
        return alert('Необходимо ввести название задачи.');
    } else {
        const todoItem = createTodoItem(addInput.value);
        todoList.appendChild(todoItem);
        addInput.value = '';
    }
}

function toggleTodoItem() {
    const listItem = this.parentNode;
    listItem.classList.toggle('completed');
}

function editTodoItem() {
    const listItem = this.parentNode;
    const title = listItem.querySelector('.todo_item__title');
    const editInput = listItem.querySelector('.todo_item__text');
    const isEditing = listItem.classList.contains('editing');

    if (isEditing) {
        title.innerText = editInput.value;
        this.innerText = 'Изменить';
    } else {
        editInput.value = title.innerText;
        this.innerText = 'Сохранить';
    }

    listItem.classList.toggle('editing');
}

function deleteTodoItem() {
    const listItem = this.parentNode;
    todoList.removeChild(listItem);
}

const todoForm = document.getElementById('todo_form');
const addInput = document.getElementById('add_input');
const todoList = document.getElementById('todo_list');
const todoItems = document.querySelectorAll('.todo_item');

todoForm.addEventListener('submit', addTodoItem);