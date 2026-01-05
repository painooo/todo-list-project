const folderContent = document.querySelector("#folderContent");
class FolderDOM {
    constructor(Folder){
        this.Folder = Folder;
    }
    createFolderBtn(name, id){
        const foldersDom = document.querySelector("#folders");
        const btn = document.createElement("button");
        foldersDom.appendChild(btn);
        this.#addBtnAttributes(btn, name, id);
        this.#activateFolderBtn(btn);
    }
    #addBtnAttributes(btn, name, id) {
        btn.dataset.id = id
        btn.classList.add("folder");
        btn.textContent = name;
    }
    #activateFolderBtn(btn){ // When clicked should show the items in of it
        btn.addEventListener("click", () => {
            let id = btn.dataset.id;
            console.log(this.Folder.getFolder(id));
            sessionStorage.setItem("prevClicked", id);
            this.displayContent(sessionStorage.getItem("prevClicked"));
        });
    }
    displayContent(folderId){
        const folder = JSON.parse(this.Folder.getFolder(folderId));
        this.#clearContentArea();
        const box = this.#createTitleBox(folderId, folder);
        folderContent.appendChild(box);
        for (let i = 1; i < folder.length; i++){
            this.#createListItem(folder[i], folderId)
        }
    }
    #createListItem(items, folderId){
        const list = document.createElement("ul");
        list.dataset.id = items['id'];
        list.classList.add("list")

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
        priority.textContent = `Priority: ${items['priority']}`;
        priority.classList.add("priority");
        priority.classList.add(idPriorityClass(items['priority']));

        const notes = document.createElement("li");
        notes.textContent = `Note: ${items['notes']}`;
        notes.classList.add("notes");
        
        const del = document.createElement("button");
        del.textContent="DELETE";
        del.classList.add("del");
        del.addEventListener("click", () => {
            this.Folder.remove(folderId, list.dataset.id);
            this.displayContent(folderId);
        })
        
        folderContent.appendChild(list);
        list.appendChild(title);
        list.appendChild(date);
        list.appendChild(priority);
        list.appendChild(desc);
        list.appendChild(notes);
        list.appendChild(del);
    }
    #clearContentArea(){
        folderContent.textContent="";
    }
    #createTitleBox(folderId, folder){
        const box = document.createElement("div");
        box.classList.add("titleBox");

        const title = document.createElement('h1');
        title.textContent = folder[0];
        folderContent.appendChild(title);

        const del = document.createElement("button");
        del.textContent = "DELETE Folder"
        del.classList.add("del");
        del.addEventListener("click", () => {
            this.#clearContentArea();
            this.Folder.removeFolder(folderId);
            location.reload();
        })

        box.appendChild(title);
        box.appendChild(del);
        return box;
    }
}
function idPriorityClass(priority){
        let id = 'usual';
        switch (parseInt(priority)) {
            case 2: id = "important"; break;
            case 3: id = "veryImportant"; break;
        }
        return id;
    }
export { FolderDOM };
