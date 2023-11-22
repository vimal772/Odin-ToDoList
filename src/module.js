export function startModule() {
    
}

export class ToDoList {
    constructor() {
      this.projects = {};
    }
  
    addCategory(category) {
        if (!this.projects[category]) {
            this.projects[category] = [];
        }
    }
    
    addProject(category,title,priority,dueDate,isCompleted) {
      // Create the category array if it doesn't exist
      if (!this.projects[category]) {
        this.projects[category] = [];
      } 
      const newProject = {
        title,
        priority,
        dueDate,
        isCompleted,
      };
  
      this.projects[category].push(newProject);
    }

    returnProjects() {
        return this.projects;
    }
}
