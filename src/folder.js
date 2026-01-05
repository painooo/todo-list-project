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
        if (content != undefined) {
            content.push(item);
            folders.setItem(folderId, JSON.stringify(content))
        } else {alert('Create/Select a folder')}
    }
    static remove(folderId, itemId) {
        let content = JSON.parse(folders.getItem(folderId))
        let contentUpdated = content.filter((item) => {
            return item.id != itemId;
        })
        console.log(contentUpdated)
        folders.setItem(folderId, JSON.stringify(contentUpdated));
    }
    static getFolder(id){
        return folders.getItem(id);
    }
    storeFolder (){
        folders.setItem(this.#id, JSON.stringify([this.name]))
    }
    static removeFolder (id){
        folders.removeItem(id);
    }
}
export {Folder};