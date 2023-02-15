class Likes {
    constructor({ blockTwo, localMemory }) {
        this._blockTwo = blockTwo;
        this._localMemory = localMemory;
        this._localCount;
        this._result;
    }

    likesComment({ buttonMinus, panelLikesDivText, likes, buttonPlus,key}) {
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
            this.writeLocalMemory(buttonMinus, this._localCount,key);
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
            this.writeLocalMemory(buttonPlus, this._localCount,key);
        });
    }
    writeLocalMemory(child, localCount,key) {
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
            parentName: this._commentNameAnswer.textContent,
            time: this._commentDate.textContent,
            text: this._commentText.textContent,
            likes: localCount,
            favorites:this._comment.getAttribute("favorites"),
            numberComment:this._comment.parentElement.firstChild.getAttribute("number-comment"),
            key:key,
        });
    }

    // likes(){
    //     this._likesPanel = document.querySelectorAll('.comment__likes-button')

    //     this._likesPanel.forEach(panel => {
    //         let count = 0
    //         let this._result
    //         let buttonMinus = panel.querySelector('.comment__likes-button-minus')
    //         buttonMinus.addEventListener('click',()=>{
    //             let panelText = panel.querySelector('.comment__likes-button-number')
    //             count--

    //             if(count<0){
    //                 panelText.style.color = '#FF0000'
    //                 this._result = count * (-1)
    //             }else {
    //                 this._result = count
    //                 panelText.style.color = '#8ac540'

    //             }
    //             panelText.textContent = this._result
    //         })
    //         let buttonPlus = panel.querySelector('.comment__likes-button-plus')

    //         buttonPlus.addEventListener('click',()=>{
    //             let panelText = panel.querySelector('.comment__likes-button-number')
    //             count++

    //             if(count<0){
    //                 panelText.style.color = '#FF0000'
    //                 this._result = count * (-1)
    //             } else {
    //                 this._result = count

    //                 panelText.style.color = '#8ac540'

    //             }
    //             panelText.textContent = this._result
    //         })
    //     });

    // }
}
