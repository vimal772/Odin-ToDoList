import { toDoList } from "./index.js";

const heading = document.createElement('h1');
const wrap = document.createElement('div');
wrap.classList.add('card2-wrap');

export function getTitle(title) {
    const card2 = document.querySelector('.card-2');
    heading.textContent = `${title} To-Do List`;
    card2.appendChild(heading);
    
    getProperty(title)
}

export function getProperty(currentObj) {
    // console.log(currentObj);
    //need to add condition and loop for extra object
    let length = toDoList.projects[currentObj].length;
    while(wrap.hasChildNodes()){
        wrap.removeChild(wrap.firstChild);
    }

    for(let i=0;i<length;i++){

        const title = toDoList.projects[currentObj][i].title;
        const priority = toDoList.projects[currentObj][i].priority;
        const dueDate = toDoList.projects[currentObj][i].dueDate;    
        const iscompleted = toDoList.projects[currentObj][i].isCompleted;
        showProperty(title,priority,dueDate,iscompleted);
        // console.log(title,priority,dueDate,iscompleted);
    }

}

function showProperty(title,priority,dueDate,isCompleted) {
    const card2 = document.querySelector('.card-2');

    const div = document.createElement('div');
    div.classList.add('wrap-div');
    const h2 = document.createElement('h2');
    h2.textContent = title;
    const para = document.createElement('p');
    para.textContent = priority;

    if(priority === 'low'){
        para.style.color = '#FFD700';
    }else if(priority === 'medium'){
        para.style.color = '#FFA500';
    }else {
        para.style.color = '#FF4500';
    }

    const date = document.createElement('p');
    date.textContent = dueDate;
    const hasCompleted = document.createElement('p');
    hasCompleted.textContent = isCompleted;
    
    div.appendChild(h2);
    div.appendChild(para);
    div.appendChild(date);
    div.appendChild(hasCompleted);

    wrap.appendChild(div);
    card2.appendChild(wrap);

}