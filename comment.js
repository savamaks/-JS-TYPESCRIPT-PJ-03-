class Comment {
    constructor({ user, textInput, blockTwo, favorites, likes,countComment,countCommentText, main }) {
        this._user = user;
        this._textInput = textInput;
        this._blockTwo = blockTwo;
        this._favorites = favorites;
        this._likes = likes
        this._main = main;
        this._countComment = countComment
        this._countCommentText = countCommentText 
    }
    handlerButtonAnswer(answer) {
        answer.addEventListener("click", () => {
            this._main._parent = answer.parentElement.parentElement.parentElement;
            this._main._parentName = this._main._parent.querySelector(".comment__name").textContent;
            this._main._answerFlag = true;
        });
    }

    writeNewComment({ time, text,favoritesFlag }) {
        this._countComment++
        this._countCommentText.textContent = `(${this._countComment})`



        this.mainDiv = document.createElement("div");
        this.mainDiv.classList.add("main-div");

        this.commentDiv = document.createElement("div");
        this.commentDiv.classList.add("comment");

        this.imageAccount = document.createElement("img");
        this.imageAccount.classList.add("comment__image");
        this.imageAccount.src = "./image/samsung-memory-hjRC0i0oJxg-unsplash 1.jpg";
        this.imageAccount.alt = "foto account";

        this.signatureName = document.createElement("h2");
        this.signatureName.classList.add("comment__name");
        this.signatureName.textContent = "Максим Авдеенко";
        this.signatureDate = document.createElement("p");
        this.signatureDate.classList.add("comment__date");
        this.signatureDate.textContent = time;
        this.commentText = document.createElement("p");
        this.commentText.classList.add("comment__text");
        this.commentText.textContent = text;

        // нижняя панель сообщения

        this.commentPanelDiv = document.createElement("div");
        this.commentPanelDiv.classList.add("comment__panel");

        this.panelButtonAnswer = document.createElement("button");
        this.panelButtonAnswer.classList.add("comment__panel-answer");
        this.panelButtonAnswerImage = document.createElement("img");
        this.panelButtonAnswerImage.src = "./image/стрелка ответа.svg";
        this.panelButtonAnswerImage.alt = "button answer";

        this.panelButtonFavorites = document.createElement("button");
        this.panelButtonFavorites.classList.add("comment__panel-favorites");
        this.panelButtonFavoritesImage = document.createElement("img");
        this.panelButtonFavoritesImage.classList.add("comment__panel-favorites-img");
        this.panelButtonFavoritesImage.src = "./image/пустое сердце.svg";
        this.panelButtonFavoritesImage.alt = "button favorites";

        this.panelFavoritesDiv = document.createElement("div");
        this.panelFavoritesDiv.classList.add("comment__likes-button");

        this.ButtonMinus = document.createElement("button");
        this.ButtonMinus.classList.add("comment__likes-button-minus");
        this.ButtonMinusImage = document.createElement("img");
        this.ButtonMinusImage.src = "./image/minus.svg";
        this.ButtonMinusImage.alt = "minus";

        this.panelFavoritesDivText = document.createElement("p");
        this.panelFavoritesDivText.classList.add("comment__likes-button-number");
        this.panelFavoritesDivText.textContent = 0;

        this.ButtonPlus = document.createElement("button");
        this.ButtonPlus.classList.add("comment__likes-button-plus");
        this.ButtonPlusImage = document.createElement("img");
        this.ButtonPlusImage.src = "./image/plus.svg";
        this.ButtonPlusImage.alt = "minus";

        // создание структуры коментария
        this.commentDiv.append(this.imageAccount, this.signatureName, this.signatureDate, this.commentText, this.commentPanelDiv);
        this.commentPanelDiv.append(this.panelButtonAnswer, this.panelButtonFavorites, this.panelFavoritesDiv);
        this.panelButtonAnswer.append(this.panelButtonAnswerImage, "Ответить");
        this.panelButtonFavorites.append(this.panelButtonFavoritesImage, "В избранное");
        this.ButtonMinus.append(this.ButtonMinusImage);
        this.ButtonPlus.append(this.ButtonPlusImage);
        this.panelFavoritesDiv.append(this.ButtonMinus, this.panelFavoritesDivText, this.ButtonPlus);
       
        this.mainDiv.append(this.commentDiv)

        this._blockTwo.append(this.mainDiv);
        // this.f = JSON.stringify(this.commentDiv)
        // console.log(JSON.parse(this.f))

        this.handlerButtonAnswer(this.panelButtonAnswer);

        this._favorites.handlerButtonFavorites(this.panelButtonFavorites,favoritesFlag);

        this._likes.likesComment(this.ButtonMinus,this.panelFavoritesDivText, this.ButtonPlus)
    }

    writeAnswer({ time, text, parent, parentName,favoritesFlag }) {
        this._countComment++
        this._countCommentText.textContent = `(${this._countComment})`

        this.commentDiv = document.createElement("div");
        this.commentDiv.classList.add("answer");

        this.imageAccount = document.createElement("img");
        this.imageAccount.classList.add("answer__image");
        this.imageAccount.src = "./image/samsung-memory-hjRC0i0oJxg-unsplash 1.jpg";
        this.imageAccount.alt = "foto account";

        this.signatureName = document.createElement("h2");
        this.signatureName.classList.add("answer__name");
        this.signatureName.textContent = "Максим Авдеенко";

        this.signatureNameAnswer = document.createElement("p");
        this.signatureNameAnswer.classList.add("answer__name-comment");
        this.signatureNameAnswer.textContent = parentName;

        this.imageAnswer = document.createElement("img");
        this.imageAnswer.src = "./image/стрелка ответа.svg";
        this.imageAnswer.alt = "arrow answer";

        this.signatureDate = document.createElement("p");
        this.signatureDate.classList.add("answer__date");
        this.signatureDate.textContent = time;

        this.commentText = document.createElement("p");
        this.commentText.classList.add("answer__text");
        this.commentText.textContent = text;

        // нижняя панель сообщения

        this.commentPanelDiv = document.createElement("div");
        this.commentPanelDiv.classList.add("answer__panel");

        this.panelButtonFavorites = document.createElement("button");
        this.panelButtonFavorites.classList.add("comment__panel-favorites");
        this.panelButtonFavoritesImage = document.createElement("img");
        this.panelButtonFavoritesImage.classList.add("comment__panel-favorites-img");

        this.panelButtonFavoritesImage.src = "./image/пустое сердце.svg";
        this.panelButtonFavoritesImage.alt = "button favorites";

        this.panelFavoritesDiv = document.createElement("div");
        this.panelFavoritesDiv.classList.add("answer__likes-button");

        this.ButtonMinus = document.createElement("button");
        this.ButtonMinus.classList.add("answer__likes-button-minus");
        this.ButtonMinusImage = document.createElement("img");
        this.ButtonMinusImage.src = "./image/minus.svg";
        this.ButtonMinusImage.alt = "minus";

        this.panelFavoritesDivText = document.createElement("p");
        this.panelFavoritesDivText.classList.add("answer__likes-button-number");
        this.panelFavoritesDivText.textContent = 0;

        this.ButtonPlus = document.createElement("button");
        this.ButtonPlus.classList.add("answer__likes-button-plus");
        this.ButtonPlusImage = document.createElement("img");
        this.ButtonPlusImage.src = "./image/plus.svg";
        this.ButtonPlusImage.alt = "minus";

        // создание структуры коментария
        this.signatureNameAnswer.prepend(this.imageAnswer);
        this.commentDiv.append(
            this.imageAccount,
            this.signatureName,
            this.signatureDate,
            this.signatureNameAnswer,
            this.signatureDate,
            this.commentText,
            this.commentPanelDiv
        );

        this.commentPanelDiv.append(this.panelButtonFavorites, this.panelFavoritesDiv);

        this.panelButtonFavorites.append(this.panelButtonFavoritesImage, "В избранное");

        this.ButtonMinus.append(this.ButtonMinusImage);
        this.ButtonPlus.append(this.ButtonPlusImage);
        this.panelFavoritesDiv.append(this.ButtonMinus, this.panelFavoritesDivText, this.ButtonPlus);

        parent.append(this.commentDiv);

        this._favorites.handlerButtonFavorites(this.panelButtonFavorites,favoritesFlag);

        this._likes.likesComment(this.ButtonMinus,this.panelFavoritesDivText, this.ButtonPlus)

    }
}
