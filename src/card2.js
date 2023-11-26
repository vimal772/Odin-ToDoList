import { toDoList } from "./index.js";


export function getTitle(title) {
    const card2 = document.querySelector('.card-2');
    const heading = document.createElement('h1');
    heading.textContent = `${title} To-Do List`;
    card2.appendChild(heading);
    // console.log(title);
    console.log(toDoList.projects[title][0].title);
    getProperty(title)
}

function getProperty(currentObj) {
    //need to add condition and loop for extra object
    const title = toDoList.projects[currentObj][0].title;
    const priority = toDoList.projects[currentObj][0].priority;
    const dueDate = toDoList.projects[currentObj][0].dueDate;    
    const iscompleted = toDoList.projects[currentObj][0].isCompleted;
    showProperty(title,priority,dueDate,iscompleted);
    console.log(title,priority,dueDate,iscompleted);
}

function showProperty(title,priority,dueDate,isCompleted) {
    const card2 = document.querySelector('.card-2');

    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.textContent = title;
    const para = document.createElement('p');
    para.textContent = priority;
    const date = document.createElement('p');
    date.textContent = dueDate;
    const hasCompleted = document.createElement('p');
    hasCompleted.textContent = isCompleted;
    
    div.appendChild(h2);
    div.appendChild(para);
    div.appendChild(date);
    div.appendChild(hasCompleted);

    card2.appendChild(div)
}