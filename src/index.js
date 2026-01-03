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
import { Folder } from './folder.js'
import { Todo } from './items.js'
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
const dummyTodo = createDummyTodo();
dummyTodo.printTodo();

const dummyFolder = createFolder("test");
dummyFolder.add(dummyTodo);
const dummyFolder2 = createFolder();
Folder.printFolder()