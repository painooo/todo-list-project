// When folder button is clicked it should open the list up
// In inside the folder there'd be an option to add a todo item
// 

let folders = localStorage;
class Folder {
    #id;
    constructor(name, id){
        this.name = name;
        this.#id = id;
    }
    static getFolders(){
        return folders;
    }
    static add(folderId, item){
        let content = JSON.parse(folders.getItem(folderId));
        content.push(item);
        folders.setItem(folderId, JSON.stringify(content))
    }
    static getFolder(id){
        return folders.getItem(id);
    }
    storeFolder (){
        folders.setItem(this.#id, JSON.stringify([this.name]))
    }
    removeFolder (){
        folders.removeItem(this.#id);
    }
}
export {Folder};