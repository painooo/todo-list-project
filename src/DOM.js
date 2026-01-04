const folderContent = document.querySelector("#folderContent");
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
            console.log(this.Folder.getFolder(id));
            sessionStorage.setItem("prevClicked", id);
            this.#displayContent(sessionStorage.getItem("prevClicked"));

        });
    }
    #displayContent(folderId){
        let folder = JSON.parse(this.Folder.getFolder(folderId));
        this.#clearContentArea();
        for (let i = 1; i < folder.length; i++){
            this.#createListItem(folder[i])
        }
    }
    #createListItem(items){
        const list = document.createElement("ul");
        list.dataset.id = items['id'];

        const title = document.createElement("li");
        title.textContent = items['title'];
        title.classList.add("title");

        const desc = document.createElement("li");
        desc.textContent = items['desc'];
        desc.classList.add("desc");
        
        const date = document.createElement("li");
        date.textContent = items['dueDate'];
        date.classList.add("date");

        const priority = document.createElement("li");
        priority.textContent = items['priority'];
        priority.classList.add("priority");

        const notes = document.createElement("li");
        notes.textContent = items['notes'];
        notes.classList.add("notes");
        
        
        folderContent.appendChild(list);
        folderContent.appendChild(title);
        folderContent.appendChild(date);
        folderContent.appendChild(priority);
        folderContent.appendChild(desc);
        folderContent.appendChild(notes);
    }
    #clearContentArea(){
        folderContent.textContent="";
    }
}
export { FolderDOM };