class Folder {
    #id;
    constructor(name, id){
        this.name = name;
        this.#id = id;
    }
    static printFolder(){
        console.log(folders);
    }
    createFolder() {
        folders[this.#id] = [this.name];
    }
    add(item){
        folders[this.#id].push(item);
    }
}

export {Folder};