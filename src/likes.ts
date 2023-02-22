class Likes {
    _blockTwo: any;
    _localMemory: any;
    _localCount: any;
    _result: any;
    _comment: any;
    _commentName: any;
    _commentNameAnswer: any;
    _commentDate: any;
    _commentText: any;
    constructor({ blockTwo, localMemory }:any) {
        this._blockTwo = blockTwo;
        this._localMemory = localMemory;
        this._localCount;
        this._result;
    }

    likesComment({ buttonMinus, panelLikesDivText, imageAccount, likes, buttonPlus,key}:any) {
        let count = likes === undefined ? 0 : likes;

        buttonMinus.addEventListener("click", () => {
            count--; 

            if (count < 0) {
                panelLikesDivText.style.color = "#FF0000";
                this._result = count * -1;
            } else {
                this._result = count;
                panelLikesDivText.style.color = "#8ac540";
            }
            panelLikesDivText.textContent = this._result;
            if (count >= 0) {
                this._localCount = this._result;
            } else {
                this._localCount = this._result * -1;
            }
            // при изменинии лайков, коммент перезаписывается в память
            this.writeLocalMemory(buttonMinus, this._localCount,key,imageAccount);
        });

        buttonPlus.addEventListener("click", () => {
            count++;

            if (count < 0) {
                panelLikesDivText.style.color = "#FF0000";
                this._result = count * -1;
            } else {
                this._result = count;

                panelLikesDivText.style.color = "#8ac540";
            }
            panelLikesDivText.textContent = this._result;
            if (count >= 0) {
                this._localCount = this._result;
            } else {
                this._localCount = this._result * -1;
            }
            // при изменинии лайков, коммент перезаписывается в память
            this.writeLocalMemory(buttonPlus, this._localCount,key,imageAccount);
        });
    }
    writeLocalMemory(child, localCount,key) {
        console.log('ok')
        this._comment = child.parentElement.parentElement.parentElement;
        // console.log(this._comment.getAttribute("attribute"));

        this._commentName = this._comment.querySelector('[attribute="name"]');
        this._commentNameAnswer =
            this._comment.querySelector('[attribute="nameAnswer"]') === null ? "" : this._comment.querySelector('[attribute="nameAnswer"]');
        this._commentDate = this._comment.querySelector('[attribute="date"]');
        this._commentText = this._comment.querySelector('[attribute="text"]');
        this._comment.setAttribute("likes",`${localCount}`)
        
        // console.log(this._comment.parentElement.firstChild);

        this._localMemory.writeCommentMemory({
            name: this._commentName.textContent,
            imageAccount:imageAccount,
            parentName: this._commentNameAnswer.textContent,
            time: this._commentDate.textContent,
            text: this._commentText.textContent,
            likes: localCount,
            favorites:this._comment.getAttribute("favorites"),
            numberComment:this._comment.parentElement.firstChild.getAttribute("number-comment"),
            key:key,
        });
    }
}
