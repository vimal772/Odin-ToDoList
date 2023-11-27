export function createCard3() {
    const card3 = document.querySelector('.card-3');
    
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');

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
    submitButton.type = 'button';
    submitButton.value = 'Submit';
    submitButton.onclick = function() {
      submitForm();
    };
    form.appendChild(submitButton);

    // Append the form to the body of the document
    div1.appendChild(form);


    const btn = document.createElement('button');
    btn.textContent = 'Add New ToDo';
    div2.appendChild(btn);

    card3.appendChild(div1);
    card3.appendChild(div2);
}