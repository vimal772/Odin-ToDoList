import { toDoList } from "./index.js";
import { getProperty } from "./card2.js";
import { pushData } from './localeStorage.js'

export function createCard3() {
    const card3 = document.querySelector('.card-3');
    
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');

    div1.classList.add('form-hidden');
    div1.classList.add('todo-form');
    div2.classList.add('show-form');

    const heading = document.createElement('h2');
    heading.textContent = 'Add New Task to the ToDo List';
    div1.appendChild(heading);

    const form = document.createElement('form');
    form.id = 'taskForm';

    // Create label and input for Title
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    form.appendChild(titleLabel);

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'title';
    titleInput.name = 'title';
    titleInput.required = true;
    form.appendChild(titleInput);

    form.appendChild(document.createElement('br'));

    // Create label and select for Priority
    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority:';
    form.appendChild(priorityLabel);

    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'priority';
    prioritySelect.name = 'priority';

    const priorityOptions = ['Low', 'Medium', 'High'];

    for (let i = 0; i < priorityOptions.length; i++) {
      const option = document.createElement('option');
      option.value = priorityOptions[i].toLowerCase();
      option.textContent = priorityOptions[i];

      if (priorityOptions[i] === 'Medium') {
        option.selected = true; // Set "Medium" as the default selected option
      }

      prioritySelect.appendChild(option);
    }

    form.appendChild(prioritySelect);

    form.appendChild(document.createElement('br'));

    // Create label and select for Status
    const statusLabel = document.createElement('label');
    statusLabel.textContent = 'Status:';
    form.appendChild(statusLabel);

    const statusSelect = document.createElement('select');
    statusSelect.id = 'status';
    statusSelect.name = 'status';

    const statusOptions = ['Completed', 'Not Completed'];

    for (let j = 0; j < statusOptions.length; j++) {
      const option = document.createElement('option');
      option.value = statusOptions[j].toLowerCase();
      option.textContent = statusOptions[j];

      if (statusOptions[j] === 'Not Completed') {
        option.selected = true; // Set "Not Completed" as the default selected option
      }

      statusSelect.appendChild(option);
    }

    form.appendChild(statusSelect);

    form.appendChild(document.createElement('br'));

    // Create label and input for Due Date
    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date:';
    form.appendChild(dueDateLabel);

    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.id = 'dueDate';
    dueDateInput.name = 'dueDate';
    form.appendChild(dueDateInput);

    form.appendChild(document.createElement('br'));

    // Create submit button
    const submitButton = document.createElement('input');
    submitButton.classList.add('task-submitBtn')
    submitButton.type = 'button';
    submitButton.value = 'Submit';
    form.appendChild(submitButton);

    // Append the form to the body of the document
    div1.appendChild(form);


    const btn = document.createElement('button');
    btn.classList.add('card3-btn')
    btn.textContent = 'Add New ToDo';
    div2.appendChild(btn);

    card3.appendChild(div1);
    card3.appendChild(div2);

    showForm()
    addTask()
}

function showForm() {
    const btn = document.querySelector('.card3-btn')
    btn.addEventListener('click',()=> {
        const div1 = document.querySelector('.todo-form');
        div1.classList.remove('form-hidden');
    })
}

function addTask() {
    const submitButton = document.querySelector('.task-submitBtn');
    submitButton.addEventListener('click',(event)=> {
        event.preventDefault();
        getTaskValues();
    })
}

function getTaskValues() {
    const title = document.querySelector('#title').value;
    const priority = document.querySelector('#priority').value;
    const status = document.querySelector('#status').value;
    const dueDate = document.querySelector('#dueDate').value;
    validateForm(title,priority,status,dueDate);
}

function validateForm(title,priority,status,dueDate) {
    // const validateArr = [title, priority, status, dueDate].every(arg => arg !== ''
    // console.log(title,priority,status,dueDate);
    if(title.trim() === ''){
        alert('enter the title');
        return;
    }

    const category = document.querySelector('.active').textContent;
    console.log(category,title,priority,dueDate,status);
    toDoList.addProject(category,title,priority,dueDate,status);
    getProperty(category);

    pushData(category);
}