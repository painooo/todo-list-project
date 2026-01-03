// Todo list Project

import './styles.css'
import { Folder } from './folder.js'
import { Todo } from './items.js'

const createFolderBtn = document.querySelector("#createFolderBtn");
const folderNameInput = document.querySelector("#name");
createFolderBtn.addEventListener("click", () => {
    const name = folderNameInput.value;
    createFolder(name);
});


function createDummyTodo(){
    const id = createId();
    return new Todo("dummyTitle", "dummyDesc", "dummyDueDate", "dummyPriority", "dummyNotes", id);
}
function createFolder(name){
    let id = createId();
    name = handleName(name);
    const folder = new Folder(name, id)
    folder.setupFolder();
    return folder;
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
