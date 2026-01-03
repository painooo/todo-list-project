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
    setupFolder() {
        folders[this.#id] = [this.name];
        this.#createFolderBtn();
    }
    #createFolderBtn(){
        const btn = document.createElement("button");
        btn.setAttribute("data-id", this.#id);
        btn.classList.add("folder");
        btn.textContent = this.name;
        document.body.appendChild(btn);
        this.#activateFolderBtn(btn);
    }
    #activateFolderBtn(btn){
        btn.addEventListener("click", (e) => {
        let id = e.target.attributes[0].value;
        console.log(this.getFolder(id));
        });
    }
    add(item){
        folders[this.#id].push(item);
    }
    getFolder(id){
        return folders[id];
    }
}
export {Folder};