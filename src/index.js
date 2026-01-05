// Todo list Project

import './styles.css';
import { Folder } from './folder.js';
import { Todo } from './items.js';
import { FolderDOM } from './DOM.js';
import { format } from "date-fns";

const folderNameInput = document.querySelector("#name");
const titleInput = document.querySelector("#title");
const descInput = document.querySelector("#desc");
const dateInput = document.querySelector("#date");
const priorityInput = document.querySelector("#priority");
const noteInput = document.querySelector("#note");
const addTodoBtn = document.querySelector("#addTodoBtn");
const createFolderBtn = document.querySelector("#createFolderBtn");

createFolderBtn.addEventListener("click", () => {
    const name = folderNameInput.value;
    setupFolder(name);
});
addTodoBtn.addEventListener("click", () => {
    let title = handleName(titleInput.value);
    let target = sessionStorage.getItem("prevClicked");
    let date = formatDate(dateInput.value);
    setupTodo(title, descInput.value, date, priorityInput.value, noteInput.value, target);
    if (Folder.getFolder(target) != undefined) {
        const folderDOM = new FolderDOM(Folder);
        folderDOM.displayContent(target);
    }
});

function formatDate(date) {
    if (date == ""){
        alert("Add a date! (default: Dec 12 2020)");
        date = '2020-12-20'
    }
    console.log(date);
    date = date.split('-')
    let year = parseInt(date[0]);
    let month = parseInt(date[1])-1;
    let day = parseInt(date[2]);
    return format(new Date(year, month, day), "MMM/dd/yyyy");
}


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
    const folderDOM = new FolderDOM(Folder);
    folder.storeFolder();
    folderDOM.createFolderBtn(name, id);
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
        const folderDOM = new FolderDOM(Folder);
        folderDOM.createFolderBtn(JSON.parse(folders[item])[0], item);
    }
}
init();