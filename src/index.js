// Todo list Project:
// ***Should be able to work in CLI first
// (TODO: Brainstorm different parts and how they'll function)
// Todo class should take in stuff which make up a todo item
//      - Has the responsibility of all things "Todo"
//      - Like printing out the list
// Needs to be able to support duplicates of folders or todo. Meaning id
// Handle id:
//  - Be able to correspond each id returned to their object
// Buttons:
//  - Use the data-id to store id per button
// Todos:
//  - Each todo item's ul will have data-id with id
// folders (object) --> (folder id --> folder name, folder items) --> item --> item id
// setup: priority & dueDate
import './styles.css'

let folders = {};

class Folder {
    #id;
    constructor(name, id){
        this.name = name;
        this.#id = id;
    }
    static printFolder(){
        console.log(folders);
    }
    createFolder() {
        folders[this.#id] = [this.name];
    }
    add(item){
        folders[this.#id].push(item);
    }
    getId(){
        return this.#id;
    }

}

class Todo {
    #id;
    constructor(title, desc, dueDate, priority, notes, id){
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.#id = id;
    }
    printTodo(){
        console.log({title: this.title, desc: this.desc, dueDate: this.dueDate, priority: this.priority, notes: this.notes})
    }
}

function createDummyTodo(){
    const id = createId();
    return new Todo("dummyTitle", "dummyDesc", "dummyDueDate", "dummyPriority", "dummyNotes", id);
}
// // // // // // // // // // // Refactor this into Folder class
function setupFolder(name){
    const id = createId();
    name = handleName(name);
    const folder = createFolder(name, id);
    createFolderBtn(name, id);
    return folder;
}

function createFolder(name, id){
    const folder = new Folder(name, id);
    folder.createFolder();
    return folder;
}

function createFolderBtn(name, id){
    const btn = document.createElement("button");
    btn.setAttribute("data-id", id);
    btn.classList.add("folder");
    btn.textContent = name;
    activateBtn(btn);
    document.body.appendChild(btn);
}

function activateBtn(btn){
    btn.addEventListener("click", (e) => {
        let id = e.target.attributes[0].value;
        console.log(getFolder(id));
    })
}
function handleName(name){
    if (name == "" || name == undefined){
        name = "default"
    }
    return name;
}

function getFolder(id){
    return folders[id];
}
// // // // // // // // // // //
function createId(){
    return crypto.randomUUID();
}
const dummyTodo = createDummyTodo();
dummyTodo.printTodo();

const dummyFolder = setupFolder("test");
dummyFolder.add(dummyTodo);
const dummyFolder2 = setupFolder();
Folder.printFolder()