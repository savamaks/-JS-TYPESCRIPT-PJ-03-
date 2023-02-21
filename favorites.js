class Favorites {
    constructor({ buttonFavorites, menuFavoritesButton, localMemory }) {
        this._buttonFavorites = buttonFavorites;
        this._menuFavoritesButton = menuFavoritesButton;
        this._localMemory = localMemory;
        this._favorites;
    }

    handlerButtonFavorites({ panelButtonFavorites, name,imageAccount, parentName, time, text,key }) {
        //если открыты избранные сообщения,
        // то новое сообщение не видно в списке пока не закрыть избраное
        if (this._menuFavoritesButton.classList.contains("flag-favorite")) {
            panelButtonFavorites.parentElement.parentElement.classList.add("not-favorite");
        }

        panelButtonFavorites.addEventListener("click", () => {
            this._comment = panelButtonFavorites.parentElement.parentElement;
            this._comment.classList.toggle("flag-favorite");

            this._imageComment = this._comment.querySelector(".comment__panel-favorites-img");
            this._imageComment.src = "./image/flag-favorite.svg";
            this._comment.setAttribute("favorites", "flag-favorite");
            this._favorites = "flag-favorite";
            // console.log(this._imageComment)
            // panelButtonFavorites.remove()
            // panelButtonFavorites.append(this._imageComment + 'В избраном')  
            // console.log(panelButtonFavorites)

            // console.log("button favor");

            if (!this._comment.classList.contains("flag-favorite")) {
                if (this._menuFavoritesButton.classList.contains("flag-favorite")) {
                    this._comment.classList.add("not-favorite");
                }
                this._imageComment.src = "./image/not-favorite.svg";

                this._comment.setAttribute("favorites", "not-favorite");
                this._favorites = "not-favorite";
                // console.log("del favor");
            }
        // console.log(this._comment.parentElement.firstChild);
            this._localMemory.writeCommentMemory({
                name: name,
                imageAccount:imageAccount,
                parentName: parentName,
                time: time,
                text: text,
                favorites: this._favorites,
                likes: `${this._comment.getAttribute("likes")}`,
                numberComment: `${this._comment.parentElement.firstChild.getAttribute("number-comment")}`,
                key:key,
            });
        });
    }

    initButton() {
        this._menuFavoritesButton.addEventListener("click", () => {
            this._menuFavoritesButton.classList.toggle("flag-favorite");

            this._favoritesComent = document.querySelectorAll(".comment");

            this._favoritesComent.forEach((element) => {
                if (!element.classList.contains("flag-favorite")) {
                    element.classList.toggle("not-favorite");
                }
                if (!this._menuFavoritesButton.classList.contains("flag-favorite")) {
                    element.classList.remove("not-favorite");
                }
            });
            this._favoritesAnswer = document.querySelectorAll(".answer");

            this._favoritesAnswer.forEach((element) => {
                if (!element.classList.contains("flag-favorite")) {
                    element.classList.toggle("not-favorite");
                }
                if (!this._menuFavoritesButton.classList.contains("flag-favorite")) {
                    element.classList.remove("not-favorite");
                }
            });
        });
    }
}









// handlerButtonFavorites(favorites, flag) {
//     favorites.addEventListener("click", () => {
//         console.log("main");
//         if (flag) {
//             console.log("app main");

//             flag = false;
//             this._comment = favorites.parentElement.parentElement;

//             this._imageComment = this._comment.querySelector(".comment__panel-favorites-img");
//             this._imageComment.src = "./image/полное сердце.svg";

//             this._copyCommet = this._comment.cloneNode(true);
//             this._blockFavorites.append(this._copyCommet);

//             this.deleteFavoritesComment(this._copyCommet, flag);
//         } else {
//             console.log("delete main");
//             this._imageComment.src = "./image/пустое сердце.svg";
//             this._copyCommet.remove();
//             flag = true;
//         }
//     });
// }

// deleteFavoritesComment(copyComment, flag) {
//     this._favoritesButton = copyComment.querySelector(".comment__panel-favorites");
//     console.log(this._favoritesButton);
//     console.log(copyComment);

//     this._favoritesButton.addEventListener("click", () => {
//         this._imageComment.src = "./image/пустое сердце.svg";

//         copyComment.remove();
//         flag = true;
//         console.log("del favor");
//     });
// }
