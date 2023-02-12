class Favorites {
    constructor({ buttonFavorites, blockFavorites }) {
        this._buttonFavorites = buttonFavorites;
        this._blockFavorites = blockFavorites;
    }
    button() {
        // this._buttonFavorites.forEach((element) => {
        //     element.addEventListener("click", () => {
        //         this.g = element.parentNode.parentNode;
        //         console.log(this.g);
        //         console.log(this.g.childNodes[3].textContent);
        //         console.log(this.g.childNodes[5].textContent);
        //         console.log(this.g.childNodes[7].textContent);
        //         console.log(this.g.childNodes[9].textContent);
        //         console.log(this.g);
        //     });
        // });
    }
    handlerButtonFavorites(favorites, favoritesFlag) {

        //если открыты избранные сообщения,
        // то новое сообщение не видно в списке пока не закрыть избраное
        
        if (!favoritesFlag) {

            favorites.parentElement.parentElement.classList.add("not-favorite");
        }

        favorites.addEventListener("click", () => {
            this._comment = favorites.parentElement.parentElement;
            this._comment.classList.toggle("flag-favorite");

            this._imageComment = this._comment.querySelector(".comment__panel-favorites-img");
            this._imageComment.src = "./image/полное сердце.svg";

            if (!this._comment.classList.contains("flag-favorite") && !favoritesFlag) {
                this._comment.classList.toggle("not-favorite");
                this._imageComment.src = "./image/пустое сердце.svg";
            }
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
