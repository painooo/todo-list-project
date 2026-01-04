// Todo list Project

import './styles.css'
import { Folder } from './folder.js'
import { Todo } from './items.js'
import { FolderDOM } from './DOM.js'

const folderNameInput = document.querySelector("#name");
const titleInput = document.querySelector("#title");
const descInput = document.querySelector("#desc");
const dateInput = document.querySelector("#date");
const priorityInput = document.querySelector("#priority");
const noteInput = document.querySelector("#note");
const addTodoBtn = document.querySelector("#addTodoBtn")
const createFolderBtn = document.querySelector("#createFolderBtn");

createFolderBtn.addEventListener("click", () => {
    const name = folderNameInput.value;
    setupFolder(name);
});
addTodoBtn.addEventListener("click", () => {
    let title = handleName(titleInput.value);
    let target = sessionStorage.getItem("prevClicked");
    setupTodo(title, descInput.value, dateInput.value, priorityInput.value, noteInput.value, target);
});


function setupTodo(title, desc, dueDate, priority, notes, target){
    const id = createId();
    const todo = new Todo(title, desc, dueDate, priority, notes, id);
    console.log(Folder.getFolder());
    Folder.add(target, todo);
}
function setupFolder(name){ 
    let id = createId();
    name = handleName(name);
    const folder = new Folder(name, id);
    const folderDOM = new FolderDOM(name, id, Folder);
    folder.storeFolder();
    folderDOM.createFolderBtn();
}

function handleName(name){
    if (name == "" || name == undefined){
        name = "default"
    }
    return name;
}
function createId(){
    return crypto.randomUUID();
}

function init(){
    let folders = Folder.getFolders();
    for (let item of Object.keys(folders)) {
        console.log(item);
        const folderDOM = new FolderDOM(JSON.parse(folders[item])[0], item, Folder);
        folderDOM.createFolderBtn();
    }
}
init();