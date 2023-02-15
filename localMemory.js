class LocalMemory {
    constructor() {
        this._arr
        this._arrJson
    }

    writeCommentMemory({ name, parentName, time, text, likes, favorites,numberComment,key }) {
        // let parentJson = JSON.stringify(parent)
        // console.log(parentJson)
        this._arr = { 
            name:name,
            parentName: parentName,
            time: time,
            text: text,
            likes:likes,
            favorites:favorites,
            numberComment:numberComment,
            key:key
            };

            this._arrJson = JSON.stringify( this._arr)

        localStorage.setItem(key, this._arrJson);

        // let local = localStorage.getItem(time);

        // console.log(local);
    }
}
