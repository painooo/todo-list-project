class Todo {
    constructor(title, desc, dueDate, priority, notes, id){
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.id = id;
    }
    printTodo(){
        console.log({title: this.title, desc: this.desc, dueDate: this.dueDate, priority: this.priority, notes: this.notes})
    }
}
export {Todo};