class Main {
    constructor() {
        this._user = new Users();
        this._textInput = document.querySelector(".new-comments__form-input");
        this._buttonInput = document.querySelector(".new-comments__form-button");
        this._amount = document.querySelector(".new-comments__amount");
        this._raitingBlock = document.querySelector(".rating-block");
        this._menuSorting = document.querySelector(".menu__sorting");
        this._arrowSorting = document.querySelector(".menu__arrow-sorting");
        this._newComment = document.querySelector(".new-comments");
        this._menuFavoritesButton = document.querySelector(".menu__favorites");
        this._blockFavorites = document.querySelector(".block-favorites");
        this._blockTwo = document.querySelector(".block-two");
        this._buttonsAnswer = document.querySelectorAll(".comment__panel-answer");
        this._buttonFavorites = document.querySelectorAll(".comment__panel-favorites");
        this._countCommentText = document.querySelector(".menu__box-comment-count");
        this._date;
        this._parent;
        this._parentName;

        this._answerFlag = false;
        this._checkButtonFlag = false;
        this._favoritesFlag = "deactive";
        this._reverseFlag = false

        this._countComment = 0;

        this._arrList = [{ text: "По дате" }, { text: "По количеству оценок" }, { text: "По актуальности" }, { text: "По количеству ответов" }];
        this._localMemory = new LocalMemory({});

        this._sortMenu = new SortMenu({
            blockTwo: this._blockTwo,
            arrowSorting: this._arrowSorting,
            main:this
        });

        this._likes = new Likes({
            blockTwo: this._blockTwo,
            localMemory: this._localMemory,
        });

        this._favorites = new Favorites({
            buttonFavorites: this._buttonFavorites,
            menuFavoritesButton: this._menuFavoritesButton,
            localMemory: this._localMemory,
        });

        this._comment = new Comment({
            user: this._user,
            textInput: this._textInput,
            blockTwo: this._blockTwo,
            favorites: this._favorites,
            likes: this._likes,
            countComment: this._countComment,
            countCommentText: this._countCommentText,
            localMemory: this._localMemory,
            main: this,
        });
    }

    //получение актуального времени
    nowTime() {
        this._dateNow = new Date();
        this._month = this._dateNow.getMonth() + 1 > 9 ? this._dateNow.getMonth() + 1 : "0" + (this._dateNow.getMonth() + 1);
        this._date = this._dateNow.getDate();
        this._hour = this._dateNow.getHours();
        this._minutes = this._dateNow.getMinutes() > 9 ? this._dateNow.getMinutes() : "0" + this._dateNow.getMinutes();
        this._seconds = this._dateNow.getSeconds() > 9 ? this._dateNow.getSeconds() : "0" + this._dateNow.getSeconds();
        return {
            time: `${this._date}.${this._month} ${this._hour}:${this._minutes}`,
            key: this._month + this._date + this._hour + this._minutes + this._seconds,
        };
    }

    initButton() {
        // количество комментариев
        this._countCommentText.textContent = `(${this._countComment})`;

        // this.r = localStorage.getItem(1)
        this._sortMenu.initSortMenu(this._arrList, this._menuSorting, this._raitingBlock);

        this._menuSorting.addEventListener("click", () => {
            this._raitingBlock.classList.toggle("active-menu");
        });

        // кнопка избраное

        this._favorites.initButton();

        this._textInput.addEventListener("keyup", () => {
            this.checkTextInput();
        });

        this._buttonInput.addEventListener("click", () => {
            this.createComment();
        });

        this.localMemory()
    }
    localMemory(arrowFlag) {

        // console.log(document.querySelector('.comment') !== null)
        if(document.querySelector('.comment') !== null){
            console.log('rem')
            
            document.querySelectorAll('.comment').forEach((element)=>{
                element.remove()
            })
        }
        // console.log(localStorage.length);
        let arr = [];
        if (localStorage.length > 0) {
            for (let index = 0; index < localStorage.length; index++) {
                const element = localStorage.key(index);
                let commentJson = localStorage.getItem(element);

                arr[index] = element;
            }
            // console.log(arr);
            arr.sort(function (a, b) {
                return a - b;
            });
            
            // console.log(arrowFlag);
            // if(!arrowFlag){
                // arr.reverse()
            // }
            


            for (let index = 0; index < arr.length; index++) {
                // console.log(arr[index]);
                let commentJson = localStorage.getItem(arr[index]);
                let commentParse = JSON.parse(commentJson);

                // arr[index] = +element
                // console.log(commentParse.parentName === undefined );

                if (commentParse.parentName === undefined) {
                this._comment.writeNewComment({
                    name: commentParse.name,
                    time: commentParse.time,
                    text: commentParse.text,
                    likes: +commentParse.likes,
                    favorites: commentParse.favorites,
                    numberComment: +commentParse.numberComment,
                    key: commentParse.key,
                });
                console.log();

                }
                else {
                this._comment.writeAnswer({
                    name: commentParse.name,
                    parentName:commentParse.parentName,
                    time: commentParse.time,
                    text: commentParse.text,
                    likes: commentParse.likes,
                    favorites: commentParse.favorites,
                    numberComment:+commentParse.numberComment,
                    key: commentParse.key,

                });
                }
            }
        }
    }
    buttonAnswer() {
        this.createComment();
        this._answerFlag = true;
    }

    checkTextInput() {
        this._textInput.style.removeProperty("height");

        this._amount.textContent = this._textInput.value.length + "/1000";

        this._textInput.style.height = this._textInput.scrollHeight + 6 + "px";

        if (this._textInput.value.length !== 0 && this._textInput.value.length < 1000) {
            this._amount.style.color = "black";
            this._checkButtonFlag = true;
            this._buttonInput.style.background = "#ABD873";
        } else if (this._textInput.value.length === 0 || this._textInput.value.length > 1000) {
            this._amount.style.color = "red";
            this._checkButtonFlag = false;
            this._buttonInput.style.background = "#a2a2a2";
        }
    }
    createComment() {
        // this._likes.likes()
        if (this._checkButtonFlag) {
            this._date = this.nowTime();
            // console.log(this._date);
            if (!this._answerFlag) {
                this._comment.writeNewComment({
                    time: this._date.time,
                    text: this._textInput.value,
                    key: this._date.key,
                });
            } else {
                // console.log(this._parent,this._parentName);
                this._comment.writeAnswer({
                    time: this._date.time,
                    text: this._textInput.value,
                    parent: this._parent,
                    parentName: this._parentName,
                    key: this._date.key,
                });
                this._answerFlag = false;
            }

            this._textInput.value = "";
            this._buttonInput.style.background = "#a2a2a2";
            this._amount.textContent = "";
            this._checkButtonFlag = false;
            this._textInput.style.removeProperty("height");
            this._amount.textContent = "Макс. 1000 символов";
        }
    }
}
// textInput.addEventListener("keydown", textarea);

// function textarea() {
//     this.style.removeProperty("height");
//     amount.textContent = textInput.value.length + 1 + "/1000";

//     this.style.height = this.scrollHeight + 6 + "px";
//     if (textInput.value !== "" && textInput.value.length < 1000) {
//         buttonInput.style.background = "#ABD873";
//     } else if (textInput.value.length > 1000) {
//         buttonInput.style.background = "#a2a2a2";
//     }
// }
