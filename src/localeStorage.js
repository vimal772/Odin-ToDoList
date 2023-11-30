import { getProperty } from "./card2.js";
import { toDoList } from "./index.js";

let globalCategory;

export function retriveData(parsedTodo) {

}

export function pushData(category) {
    console.log(1, category);
    globalCategory = category;
    const toDoList_serialized = JSON.stringify(toDoList);
    localStorage.setItem(category, toDoList_serialized);
}

export function getData() {
    // const toDoList_deSerialized = JSON.parse(localStorage.getItem());
    let keyArr = [];
    let toDoList_deSerialized;

    for (let i = 0, len = localStorage.length; i < len; i++) {
        console.log(i);
        keyArr.push(localStorage.key(i));
        toDoList_deSerialized = JSON.parse(localStorage.getItem(localStorage.key(i)));
    }
    
    createProjectList(globalCategory, keyArr,toDoList_deSerialized);
}



function createProjectList(category, keyArr,toDoList_deSerialized) {

    const para = document.createElement('p');
    para.textContent = 'Projects';


    const wrapper = document.querySelector("#content > div.card-1.content-card > div.wrapper")
    const card1 = document.querySelector('.card-1');

    while (wrapper.hasChildNodes()) {
        wrapper.removeChild(wrapper.firstChild);
    }
    const unOrderedList = document.createElement('ul');
    unOrderedList.classList.add('project-list')
    for (let i = 0; i < keyArr.length; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = keyArr[i];
        if (keyArr[i] === category) {
            listItem.classList.add('active');
            getTitle(category)
        }
        listItem.classList.add('project-items')
        unOrderedList.appendChild(listItem);
    }

    wrapper.appendChild(para)
    wrapper.appendChild(unOrderedList);
    card1.appendChild(wrapper);

    showActiceClass(toDoList_deSerialized,keyArr);

}

function showActiceClass(toDoList,keyArr) {
    const lists = document.querySelectorAll('.project-items');
    lists.forEach((list) => {
        list.addEventListener('click', () => {
            lists.forEach((item) => {
                item.classList.remove('active');
            })
            let card2Title = list.textContent;
            getCard2Title(card2Title,toDoList,keyArr);
            list.classList.add('active');
        })
    })
}


const heading = document.createElement('h1');
function getCard2Title(title,toDoList,keyArr) {
    const card2 = document.querySelector('.card-2');
    heading.textContent = `${title} To-Do List`;
    card2.appendChild(heading);

    console.log(keyArr.length);
    for(let i=0;i<keyArr.length;i++){
        console.log(keyArr[i]);
        getProperty(keyArr[i]);
    }
}
