// Todo list Project

import './styles.css'
import { Folder } from './folder.js'
import { Todo } from './items.js'
import { FolderDOM } from './DOM.js'



const createFolderBtn = document.querySelector("#createFolderBtn");
const folderNameInput = document.querySelector("#name");
createFolderBtn.addEventListener("click", () => {
    const name = folderNameInput.value;
    setupFolder(name);
});

function setupTodo(title, desc, dueDate, priority, notes){
    const id = createId();
    title = handleName(title);
    const todo = new Todo(title, desc, dueDate, priority, notes, id);
    createTodoDOM(todo);
    return todo;
}
function setupFolder(name){
    let id = createId();
    name = handleName(name);
    const folder = new Folder(name, id);
    const folderDOM = new FolderDOM(name, id, Folder);
    folder.storeFolder();
    folderDOM.createFolderBtn();
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
function createTodoDOM(list) {

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