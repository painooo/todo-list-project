// When folder button is clicked it should open the list up
// In inside the folder there'd be an option to add a todo item
// 

let folders = localStorage;
const foldersDom = document.querySelector("#folders");
const folderContent = document.querySelector("#folderContent")
class Folder {
    #id;
    constructor(name, id){
        this.name = name;
        this.#id = id;
    }
    static printFolder(){
        console.log(folders);
    }
    static add(folderId, item){
        let content = JSON.parse(folders.getItem(folderId));
        content.push(item);
        folders.setItem(folderId, JSON.stringify(content))
    }
    static getFolder(id){
        return folders.getItem(id);
    }
    #storeFolder (){
        folders.setItem(this.#id, JSON.stringify([this.name]))
    }
    setupFolder() {
        this.#storeFolder();
        createFolderBtn(this.name, this.#id);
    }
}

for (let item of Object.keys(folders)) {
    console.log(item);
    createFolderBtn(JSON.parse(folders[item])[0], item);
}
function createFolderBtn(name, id){
        const btn = document.createElement("button");
        btn.dataset.id = id
        btn.classList.add("folder");
        btn.textContent = name;
        foldersDom.appendChild(btn);
        activateFolderBtn(btn);
    }
function activateFolderBtn(btn){
        btn.addEventListener("click", () => {
            let id = btn.dataset.id //e.target.attributes[0].value;
            console.log(Folder.getFolder(id));
            iterateFolderContent(Folder.getFolder(id))
        });
    }
function iterateFolderContent(folder){
    for (let i = 1; i < folder.length; i++) {
        for (let item in folder[i]) {
            // Iterate through each item
        }
    }
}
function displayFolderContent(){
    // display in DOM
}
export {Folder};