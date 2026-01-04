class FolderDOM {
    constructor(name, id, Folder){
        this.name = name;
        this.id = id;
        this.Folder = Folder;
    }
    createFolderBtn(){
        const foldersDom = document.querySelector("#folders");
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
    #activateFolderBtn(btn){ // When clicked should show the items in of it
        btn.addEventListener("click", () => {
            let id = btn.dataset.id;
            sessionStorage.setItem("prevClicked", id);
        });
    }
}

export { FolderDOM };