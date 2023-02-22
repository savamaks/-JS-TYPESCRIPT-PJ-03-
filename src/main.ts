class Main {
    private _textInput: HTMLElement;
    private _buttonInput: HTMLElement;
    private _amount: HTMLElement;
    private _raitingBlock: HTMLElement;
    private _menuSorting: HTMLElement;
    private _arrowSorting: HTMLElement;
    private _newComment: HTMLElement;
    private _menuFavoritesButton: HTMLElement;
    private _blockFavorites: HTMLElement;
    private _blockTwo: HTMLElement;
    private _buttonsAnswer: NodeList;
    private _buttonFavorites: NodeList;
    private _countCommentText: HTMLElement;
    private _textError: HTMLElement;
    private _date: any;
   
    private _checkButtonFlag: boolean;
    private _favoritesFlag: string;
    private _reverseFlag: boolean;
    private _arrCom: Array<object>;
    private _arrAnswer: Array<object>;
    private _arrowFlag: boolean;
    private _arrList: Array<object>;
    private _dateNow: Date | undefined;
    private _year: number | undefined;
    private _month: number | undefined;
    private _dateS: number | undefined;
    private _hour: number | undefined;
    private _minutes: number | undefined;
    private _seconds: number | undefined;

    private _users: Users;
    private _localMemory: LocalMemory;
    private _sortMenu: SortMenu;
    private _favorites: Favorites;
    private _arrKey: Array<number>;
    private _commentCreate: CommentCreate;
    private _likes: Likes;

    answerFlag: boolean;
    parent: any;
    parentName: any;
    constructor() {
        this._users = new Users();
        this._textInput = <HTMLElement>document.querySelector(".new-comments__form-input");
        this._buttonInput = <HTMLElement>document.querySelector(".new-comments__form-button");
        this._amount = <HTMLElement>document.querySelector(".new-comments__amount");
        this._raitingBlock = <HTMLElement>document.querySelector(".rating-block");
        this._menuSorting = <HTMLElement>document.querySelector(".menu__sorting");
        this._arrowSorting = <HTMLElement>document.querySelector(".menu__arrow-sorting");
        this._newComment = <HTMLElement>document.querySelector(".new-comments");
        this._menuFavoritesButton = <HTMLElement>document.querySelector(".menu__favorites");
        this._blockFavorites = <HTMLElement>document.querySelector(".block-favorites");
        this._blockTwo = <HTMLElement>document.querySelector(".block-two");
        this._buttonsAnswer = document.querySelectorAll(".comment__panel-answer");
        this._buttonFavorites = document.querySelectorAll(".comment__panel-favorites");
        this._countCommentText = <HTMLElement>document.querySelector(".menu__box-comment-count");
        this._textError = <HTMLElement>document.querySelector(".new-comments__amount-error");
        this._date;
        this.parent;
        this.parentName;
        this._arrKey = []
        this.answerFlag = false;
        this._checkButtonFlag = false;
        this._favoritesFlag = "deactive";
        this._reverseFlag = false;
        this._arrCom = [];
        this._arrAnswer = [];
        this._arrowFlag = true;

        this._arrList = [{ text: "По дате" }, { text: "По количеству оценок" }, { text: "По актуальности" }, { text: "По количеству ответов" }];
        this._localMemory = new LocalMemory({
            countCommentText: this._countCommentText,
        });

        this._sortMenu = new SortMenu({
            blockTwo: this._blockTwo,
            arrowSorting: this._arrowSorting,
            main: this,
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
        this._commentCreate = new CommentCreate({
            blockTwo: this._blockTwo,
            favorites: this._favorites,
            likes: this._likes,
            localMemory: this._localMemory,
            main: this,
        });

    }
    //получение актуального времени
    nowTime() {
        this._dateNow = new Date();
        this._year = this._dateNow.getFullYear();
        this._month = this._dateNow.getMonth() + 1 > 9 ? this._dateNow.getMonth() + 1 : 0 + (this._dateNow.getMonth() + 1);
        this._dateS = this._dateNow.getDate();
        this._hour = this._dateNow.getHours();
        this._minutes = this._dateNow.getMinutes() > 9 ? this._dateNow.getMinutes() : 0 + this._dateNow.getMinutes();
        this._seconds = this._dateNow.getSeconds() > 9 ? this._dateNow.getSeconds() : 0 + this._dateNow.getSeconds();
        return {
            time: `${this._dateS}.${this._month} ${this._hour}:${this._minutes}`,
            key: this._year + this._month + this._date + this._hour + this._minutes + this._seconds,
        };
    }
    initButton() {
        // количество комментариев
        this._countCommentText.textContent = `(${0})`;

        // this.r = localStorage.getItem(1)
        this._sortMenu.initSortMenu({
            arrList: this._arrList,
            menuSorting: this._menuSorting,
            raitingBlock: this._raitingBlock,
        });

        this._menuSorting.addEventListener("click", (e) => {
            this._sortMenu.positionRaitingBlock({
                e: e,
                arrList: this._arrList,
                menuSorting: this._menuSorting,
                raitingBlock: this._raitingBlock,
            });
            this._raitingBlock.classList.toggle("active-menu");
        });

        this._raitingBlock.addEventListener("mouseleave", (e) => {
            this._raitingBlock.classList.toggle("active-menu");
        });
        let buttonDate: HTMLElement = <HTMLElement>document.querySelector(".n0");
        let buttonLikes: HTMLElement = <HTMLElement>document.querySelector(".n1")
        let buttonAnswer: HTMLElement = <HTMLElement>document.querySelector(".n3")
        buttonDate.addEventListener("click", () => {
            this.localMemory();
            this.sortDate();
        });
        buttonLikes.addEventListener("click", () => {
            this.localMemory();
            this.sortLikes();
        });
        buttonAnswer.addEventListener("click", () => {
            this.localMemory();
            this.sortAmountAnser();
        });

        // кнопка избраное
        this._favorites.initButton();

        this._textInput.addEventListener("keyup", () => {
            this.checkTextInput();
        });

        this._buttonInput.addEventListener("click", () => {
            this.createComment();
        });
        if (localStorage.length === 0) {
            this._users.comment?.forEach((element) => {
                // console.log(element);
                this._commentCreate.writeNewComment({
                    name: element.name,
                    imageAccount: element.imageAccount,
                    time: element.time,
                    text: element.text,
                    likes: element.likes,
                    favorites: element.favorites,
                    numberComment: element.numberComment,
                    key: +element.key,
                    amountChild: element.amountChild,
                });
            });
            this._users.answer?.forEach((element) => {
                this._commentCreate.writeAnswer({
                    name: element.name,
                    imageAccount: element.imageAccount,
                    parentName: element.parentName,
                    time: element.time,
                    text: element.text,
                    likes: element.likes,
                    favorites: element.favorites,
                    numberComment: element.numberComment,
                    key: +element.key,
                });
            });
        }

        this.localMemory();
        this.sortDate();

        // this._blockTwo.insertAdjacentHTML('afterbegin',this._menuSorting)
    }
    // запись коменнтов из памяти если они есть, сортировка по дате
    localMemory() {
        // перебор и запись в массив по ключу
        if (localStorage.length > 0) {
            this._arrKey = [];

            for (let index = 0; index < localStorage.length; index++) {
                const element = localStorage.key(index);
                let commentJson = localStorage.getItem(element);

                this._arrKey[index] = element;
            }

            let com = 0;
            let ans = 0;

            for (let index = 0; index < this._arrKey.length; index++) {
                let commentJson = localStorage.getItem(this._arrKey[index]);
                let commentParse = JSON.parse(commentJson);

                if (commentParse.parentName === undefined) {
                    this._arrCom[com] = commentParse;

                    com++;
                } else {
                    this._arrAnswer[ans] = commentParse;
                    ans++;
                }
            }
        }
    }
    sortDate() {
        this._arrCom.sort((a, b) => (+a.key > +b.key ? 1 : -1));
        this._arrAnswer.sort((a, b) => (+a.key > +b.key ? 1 : -1));
        if (!this._arrowFlag) {
            this._arrCom.reverse();
            this._arrAnswer.reverse();
        }
        this.overwriting(this._arrCom, this._arrAnswer);
    }

    // сортировка по лайкам
    sortLikes() {
        this._arrCom.sort((a, b) => (+a.likes > +b.likes ? 1 : -1));
        this._arrAnswer.sort((a, b) => (+a.likes > +b.likes ? 1 : -1));
        if (!this._arrowFlag) {
            this._arrCom.reverse();
            this._arrAnswer.reverse();
        }
        this.overwriting(this._arrCom, this._arrAnswer);
    }

    //
    sortAmountAnser() {
        this._arrCom.sort((a, b) => (+a.amountChild > +b.amountChild ? 1 : -1));
        if (!this._arrowFlag) {
            this._arrCom.reverse();
        }
        console.log(this._arrCom);
        this.overwriting(this._arrCom, this._arrAnswer);
    }
    //перезапись если в меню выбрать другой пункт
    overwriting(arrCom, arrAnswer) {
        //удаление всех коментарие чтоб перезаписать с памяти
        if (document.querySelector(".main-div") !== null) {
            document.querySelectorAll(".main-div").forEach((element) => {
                element.remove();
            });
        }
        if (document.querySelector(".answer") !== null) {
            document.querySelectorAll(".answer").forEach((element) => {
                element.remove();
            });
        }
        arrCom?.forEach((element) => {
            this._commentCreate.writeNewComment({
                name: element.name,
                imageAccount: element.imageAccount,
                time: element.time,
                text: element.text,
                likes: +element.likes,
                favorites: element.favorites,
                numberComment: element.numberComment,
                key: element.key,
                amountChild: element.amountChild,
            });
        });
        arrAnswer?.forEach((element) => {
            this._commentCreate.writeAnswer({
                name: element.name,
                imageAccount: element.imageAccount,
                parentName: element.parentName,
                time: element.time,
                text: element.text,
                likes: element.likes,
                favorites: element.favorites,
                numberComment: element.numberComment,
                key: element.key,
            });
        });
    }

    buttonAnswer() {
        this.createComment();
        this.answerFlag = true;
    }

    checkTextInput() {
        this._textInput.style.removeProperty("height");

        this._amount.textContent = this._textInput.value.length + "/1000";

        this._textInput.style.height = this._textInput.scrollHeight + 6 + "px";

        if (this._textInput.value.length !== 0 && this._textInput.value.length < 1000) {
            this._amount.style.color = "black";
            this._checkButtonFlag = true;
            this._textError.classList.remove("active-error");
            this._buttonInput.style.background = "#ABD873";
        } else if (this._textInput.value.length === 0 || this._textInput.value.length > 1000) {
            this._amount.style.color = "red";
            this._textError.classList.add("active-error");
            this._checkButtonFlag = false;
            this._buttonInput.style.background = "#a2a2a2";
        }
    }
    createComment() {
        // this._likes.likes()

        if (this._checkButtonFlag) {
            this._date = this.nowTime();
            // console.log(this._date);
            if (!this.answerFlag) {
                this._commentCreate.writeNewComment({
                    time: this._date.time,
                    text: this._textInput.value,
                    key: this._date.key,
                    reverse: this._reverse,
                });
            } else {
                // console.log(this._parent,this._parentName);
                this._commentCreate.writeAnswer({
                    time: this._date.time,
                    text: this._textInput.value,
                    parent: this.parent,
                    parentName: this.parentName,
                    key: this._date.key,
                    reverse: this._reverse,
                });
                this.answerFlag = false;
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