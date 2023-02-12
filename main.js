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
        this._time;
        this._parent;
        this._parentName;

        this._answerFlag = false;
        this._checkButtonFlag = false;
        this._favoritesFlag = true;

        this._countComment = 0

        this._arrList = [{ text: "По дате" }, { text: "По количеству оценок" }, { text: "По актуальности" }, { text: "По количеству ответов" }];

        this._sortMenu = new SortMenu();

        this._likes = new Likes({
            blockTwo: this._blockTwo,
        });

        this._favorites = new Favorites({
            buttonFavorites: this._buttonFavorites,
            blockFavorites: this._blockFavorites,
        });

        this._comment = new Comment({
            user: this._user,
            textInput: this._textInput,
            blockTwo: this._blockTwo,
            favorites: this._favorites,
            likes: this._likes,
            countComment:this._countComment,
            countCommentText: this._countCommentText,
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

        return (this._time = `${this._date}.${this._month} ${this._hour}:${this._minutes}`);
    }

    initButton() {
        this._countCommentText.textContent = `(${this._countComment})`

        // this.r = localStorage.getItem(1)
        this._sortMenu.initSortMenu(this._arrList, this._menuSorting, this._raitingBlock);

        this._menuSorting.addEventListener("click", () => {
            this._raitingBlock.classList.toggle("active-menu");
        });
        this._arrowSorting.addEventListener("click", () => {
            this._arrowSorting.classList.toggle("rotate-arrow-sorting");
        });




        this._menuFavoritesButton.addEventListener("click", () => {

            // this._menuFavoritesButton.classList.toggle("active-favorite")
            if (!this._menuFavoritesButton.classList.contains("flag-favorite")) {
                this._menuFavoritesButton.classList.toggle("flag-favorite");
                this._favoritesFlag = false;
            } else {
                this._menuFavoritesButton.classList.toggle("flag-favorite");
                this._favoritesFlag = true;
            }

            this._favoritesComent = document.querySelectorAll(".comment");

            this._favoritesComent.forEach((element) => {
                if (!element.classList.contains("flag-favorite")) {
                    element.classList.toggle("not-favorite");
                }
            });
            this._favoritesAnswer = document.querySelectorAll(".answer");

            this._favoritesAnswer.forEach((element) => {
                if (!element.classList.contains("flag-favorite")) {
                    element.classList.toggle("not-favorite");
                }
            });
        });
        // this._likes.likes()

        this._textInput.addEventListener("keyup", () => {
            this.checkTextInput();
        });

        this._buttonInput.addEventListener("click", () => {
            this.createComment();
        });

        this._favorites.button();

        // this._buttonsAnswer.forEach((element) => {
        //     this._comment.handlerButtonAnswer(element);
        // });

        // this._buttonFavorites.forEach((element) => {
        //     this._favorites.handlerButtonFavorites(element, this._favoritesFlag);
        // });
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
            this._time = this.nowTime();

            if (!this._answerFlag) {
                this._comment.writeNewComment({
                    time: this._time,
                    text: this._textInput.value,
                    favoritesFlag: this._favoritesFlag,
                });
            } else {
                this._comment.writeAnswer({
                    time: this._time,
                    text: this._textInput.value,
                    parent: this._parent,
                    parentName: this._parentName,
                    favoritesFlag: this._favoritesFlag,
                });
                this._answerFlag = false;
            }

            this._textInput.value = "";
            this._buttonInput.style.background = "#a2a2a2";
            this._amount.textContent = "";
            this._checkButtonFlag = false;
            this._textInput.style.removeProperty("height");
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
