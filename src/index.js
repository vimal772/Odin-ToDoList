import './style.css';
import { start } from './ui.design.js';
import { ToDoList } from "./module.js";


export const toDoList = new ToDoList();
toDoList.addProject('new','learn','low','now','false');
toDoList.addProject('daily','learn','low','now','false');
toDoList.addProject('weekly','learn','low','now','false');
toDoList.addProject('monthly','learn','low','now','false');

export const projectsList = Object.keys(toDoList.projects) 
console.log(projectsList);
// console.log(toDoList.projects);

start();