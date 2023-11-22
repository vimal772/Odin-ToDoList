export function startModule() {
    
}

export function createObject(title,due,priority,checkBox) {
    return {
        title,
        dueDate : due,
        priority,
        checkBox
    }
}

export function pushTodoObject(arr,myObj) {
    arr.push(myObj);
}