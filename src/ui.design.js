function start() {
    const content = document.querySelector('#content');
    content.classList.add('content');

    for(let i=0;i<3;i++) {
        const div = document.createElement('div');
        div.setAttribute('class',`card-${i+1} content-card`)
        content.appendChild(div);
    }

    
}

const title = document.createElement('h2');
title.classList.add('project-title');

const unOrderedList = document.createElement('ul');
const listItem = document.createElement('li');

const createProject = document.createElement('button');
createProject.classList.add('add-project');

export {start};