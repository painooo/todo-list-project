const foldersDom = document.querySelector("#folders");
class FolderDOM {
    constructor(name, id, Folder){
        this.name = name;
        this.id = id;
        this.Folder = Folder;
    }
    createFolderBtn(){
        const btn = document.createElement("button");
        foldersDom.appendChild(btn);
        this.#addBtnAttributes(btn);
        this.#activateFolderBtn(btn);
    }
    #addBtnAttributes(btn) {
        btn.dataset.id = this.id
        btn.classList.add("folder");
        btn.textContent = this.name;
    }
    #activateFolderBtn(btn){
        btn.addEventListener("click", () => {
            let id = btn.dataset.id;
            console.log(this.Folder.getFolder(id));
        });
    }
}

export { FolderDOM };