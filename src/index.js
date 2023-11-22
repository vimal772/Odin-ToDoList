import './style.css';
import { start } from './ui.design.js';
import { startModule,createObject,pushTodoObject } from "./module.js";

startModule();
start();

const first = createObject('Drink Water','daily','high',false);
const toDoArray = [];
pushTodoObject(toDoArray,first);
console.log(first);
console.log(toDoArray);