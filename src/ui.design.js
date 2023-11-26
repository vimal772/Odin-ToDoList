import { toDoList,projectsList } from "./index.js";
import { getTitle } from "./card2.js";

function start() {
    const content = document.querySelector('#content');
    content.classList.add('content');

    for(let i=0;i<3;i++) {
        const div = document.createElement('div');
        div.setAttribute('class',`card-${i+1} content-card`)
        content.appendChild(div);
    }

    const title = document.createElement('h2');
    title.textContent = "TO DO TRACKER";
    const wrap = document.createElement('div');
    wrap.classList.add('wrap-flex');

    title.classList.add('project-title');
    const createProject = document.createElement('button');
    createProject.classList.add('add-project');
    createProject.textContent = 'ADD PROJECTS';

    const inputBox = document.createElement('input');
    inputBox.setAttribute('type','text');
    inputBox.classList.add('project-input');
    const inputBtn = document.createElement('button');
    inputBtn.textContent = 'Submit';
    inputBtn.classList.add('project-btn');
    
    
    createProject.addEventListener('click',() => {
        inputBox.classList.toggle('opacity');
        inputBtn.classList.toggle('opacity');
    });
    
    const card1 = document.querySelector('.card-1');
    card1.appendChild(title);
    wrap.appendChild(createProject);
    wrap.appendChild(inputBox);
    wrap.appendChild(inputBtn);
    card1.appendChild(wrap);
    
    
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    const para = document.createElement('p');
    para.textContent = 'Projects';
    createProjectList();
    
    inputBtn.addEventListener('click',() => {
        const category = inputBox.value;
        toDoList.addCategory(category);
        projectsList.push(category)
        createProjectList();
        inputBox.value = '';
        
    })
    
    
    function createProjectList() {
        while(wrapper.hasChildNodes()){
            wrapper.removeChild(wrapper.firstChild);
        }
        const unOrderedList = document.createElement('ul');
        unOrderedList.classList.add('project-list')
        for(let i=0;i<projectsList.length;i++) {
            const listItem = document.createElement('li');
            listItem.textContent = projectsList[i];
            listItem.classList.add('project-items')
            unOrderedList.appendChild(listItem);
        }

        wrapper.appendChild(para)
        wrapper.appendChild(unOrderedList);
        card1.appendChild(wrapper);
        
        acticeClass();
    }
}

export let card2Title;
function acticeClass() {
    const lists = document.querySelectorAll('.project-items');
        lists.forEach((list)=> {
            list.addEventListener('click',()=> {
                lists.forEach((item)=> {
                    item.classList.remove('active');
                })
                card2Title = list.textContent;
                getTitle(card2Title);
                list.classList.add('active');
            })
        })
}


export {start};