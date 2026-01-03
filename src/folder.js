// When folder button is clicked it should open the list up
// In inside the folder there'd be an option to add a todo item
// 

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
    static add(folderId, item){
        folders[folderId].push(item);
    }
    static getFolder(id){
        return folders[id];
    }
    setupFolder() {
        folders[this.#id] = [this.name];
        createFolderBtn(this.name, this.#id);
    }
    getId(){ // Testing function - remove later;
        return this.#id;
    }
}

function createFolderBtn(name,id){
        const btn = document.createElement("button");
        btn.dataset.id = id
        btn.classList.add("folder");
        btn.textContent = name;
        document.body.appendChild(btn);
        activateFolderBtn(btn);
    }
function activateFolderBtn(btn){
        btn.addEventListener("click", () => {
            let id = btn.dataset.id //e.target.attributes[0].value;
            //console.log(this.getFolder(id));
            logFolder(Folder.getFolder(id))
        });
    }
function logFolder(id){
    console.log(id)
}
export {Folder};