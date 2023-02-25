"use strict";
class Favorites {
    constructor({ buttonFavorites, menuFavoritesButton, localMemory }) {
        this._buttonFavorites = buttonFavorites;
        this._menuFavoritesButton = menuFavoritesButton;
        this._localMemory = localMemory;
        this._favorites;
    }
    handlerButtonFavorites({ panelButtonFavorites, name, imageAccount, parentName, time, text, key }) {
        //если открыты избранные сообщения,
        // то новое сообщение не видно в списке пока не закрыть избраное
        if (this._menuFavoritesButton.classList.contains("flag-favorite")) {
            panelButtonFavorites.parentElement.parentElement.classList.add("not-favorite");
        }
        panelButtonFavorites.addEventListener("click", () => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
            this._comment = panelButtonFavorites.parentElement.parentElement;
            (_a = this._comment) === null || _a === void 0 ? void 0 : _a.classList.toggle("flag-favorite");
            this._imageComment = (_b = this._comment) === null || _b === void 0 ? void 0 : _b.querySelector(".comment__panel-favorites-img");
            this._imageComment.src = "./image/flag-favorite.svg";
            (_c = this._comment) === null || _c === void 0 ? void 0 : _c.setAttribute("favorites", "flag-favorite");
            this._favorites = "flag-favorite";
            if (!((_d = this._comment) === null || _d === void 0 ? void 0 : _d.classList.contains("flag-favorite"))) {
                if (this._menuFavoritesButton.classList.contains("flag-favorite")) {
                    (_e = this._comment) === null || _e === void 0 ? void 0 : _e.classList.add("not-favorite");
                }
                this._imageComment.src = "./image/not-favorite.svg";
                (_f = this._comment) === null || _f === void 0 ? void 0 : _f.setAttribute("favorites", "not-favorite");
                this._favorites = "not-favorite";
            }
            this._localMemory.writeCommentMemory({
                name: name,
                imageAccount: imageAccount,
                parentName: parentName,
                time: time,
                text: text,
                favorites: this._favorites,
                likes: `${(_g = this._comment) === null || _g === void 0 ? void 0 : _g.getAttribute("likes")}`,
                numberComment: `+${(_k = (_j = (_h = this._comment) === null || _h === void 0 ? void 0 : _h.parentElement) === null || _j === void 0 ? void 0 : _j.firstChild) === null || _k === void 0 ? void 0 : _k.getAttribute("number-comment")}`,
                key: key,
                amountChild: `${(_o = (_m = (_l = this._comment) === null || _l === void 0 ? void 0 : _l.parentElement) === null || _m === void 0 ? void 0 : _m.firstChild) === null || _o === void 0 ? void 0 : _o.getAttribute("amount-child")}`,
                timeLastAnswer: `${(_r = (_q = (_p = this._comment) === null || _p === void 0 ? void 0 : _p.parentElement) === null || _q === void 0 ? void 0 : _q.firstChild) === null || _r === void 0 ? void 0 : _r.getAttribute("last-write-answer")}`
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
