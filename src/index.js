import './style.css';
import { start } from './ui.design.js';
import { ToDoList } from "./module.js";


export const toDoList = new ToDoList();
toDoList.addProject('new','learn','low','now','true');
toDoList.addProject('daily','sex','low','now','false');
toDoList.addProject('weekly','porn','low','now','false');
toDoList.addProject('monthly','fap','low','now','false');
toDoList.addProject('Drink Water','hydrate','high','now','completed');
toDoList.addProject('Drink Water','head water','medium','today','not completed');

export const projectsList = Object.keys(toDoList.projects) 
console.log(projectsList);
// console.log(toDoList.projects);

start();
// createCard();

console.log(toDoList.projects.daily[0].title);