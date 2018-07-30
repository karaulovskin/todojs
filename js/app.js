function createElement(tag, props, ...children) {
    const element = document.createElement(tag);
    Object.keys(props).forEach(key => element[key] = props[key]);

    if (children.length > 0) {
        children.forEach(child => {
           if (typeof child === 'string') {
               child = document.createTextNode(child);
           }
           element.appendChild(child);
        });
    }

    return element;
}

function createTodoItem(title) {
    const checkbox = createElement('input', { type: 'checkbox', className: 'todo_item__checkbox' });
    const label = createElement('label', { className: 'todo_item__title'}, title );
    const editInput = createElement('input', { type: 'text', className: 'todo_item__text' });
    const editButton = createElement('button', { className: 'todo_item__edit' }, 'Изменить' );
    const deleteButton = createElement('button', { className: 'todo_item__delete' }, 'Удалить' );
    const listItem = createElement('li', { className: 'todo_item' }, checkbox, label, editInput, editButton, deleteButton);

    bindEvents(listItem);

    return listItem;
}

function bindEvents(todoItem) {
    const checkbox = todoItem.querySelector('.todo_item__checkbox');
    const editButton = todoItem.querySelector('.todo_item__edit');
    const deleteButton = todoItem.querySelector('.todo_item__delete');

    checkbox.addEventListener('change', toggleTodoItem);
    editButton.addEventListener('click', editTodoItem);
    deleteButton.addEventListener('click', deleteTodoItem);
}

function addTodoItem(e) {
    e.preventDefault();

    if (addInput.value === '') {
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

function main() {
    todoForm.addEventListener('submit', addTodoItem);
    todoItems.forEach(item => bindEvents(item));
}
main();