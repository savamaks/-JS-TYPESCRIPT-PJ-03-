var Favorites = /** @class */ (function () {
    function Favorites(_a) {
        var buttonFavorites = _a.buttonFavorites, menuFavoritesButton = _a.menuFavoritesButton, localMemory = _a.localMemory;
        this._buttonFavorites = buttonFavorites;
        this._menuFavoritesButton = menuFavoritesButton;
        this._localMemory = localMemory;
        this._favorites;
    }
    Favorites.prototype.handlerButtonFavorites = function (_a) {
        var _this = this;
        var panelButtonFavorites = _a.panelButtonFavorites, name = _a.name, imageAccount = _a.imageAccount, parentName = _a.parentName, time = _a.time, text = _a.text, key = _a.key;
        //если открыты избранные сообщения,
        // то новое сообщение не видно в списке пока не закрыть избраное
        if (this._menuFavoritesButton.classList.contains("flag-favorite")) {
            panelButtonFavorites.parentElement.parentElement.classList.add("not-favorite");
        }
        panelButtonFavorites.addEventListener("click", function () {
            _this._comment = panelButtonFavorites.parentElement.parentElement;
            _this._comment.classList.toggle("flag-favorite");
            _this._imageComment = _this._comment.querySelector(".comment__panel-favorites-img");
            _this._imageComment.src = "./image/flag-favorite.svg";
            _this._comment.setAttribute("favorites", "flag-favorite");
            _this._favorites = "flag-favorite";
            // console.log(this._imageComment)
            // panelButtonFavorites.remove()
            // panelButtonFavorites.append(this._imageComment + 'В избраном')  
            // console.log(panelButtonFavorites)
            // console.log("button favor");
            if (!_this._comment.classList.contains("flag-favorite")) {
                if (_this._menuFavoritesButton.classList.contains("flag-favorite")) {
                    _this._comment.classList.add("not-favorite");
                }
                _this._imageComment.src = "./image/not-favorite.svg";
                _this._comment.setAttribute("favorites", "not-favorite");
                _this._favorites = "not-favorite";
                // console.log("del favor");
            }
            // console.log(this._comment.parentElement.firstChild);
            _this._localMemory.writeCommentMemory({
                name: name,
                imageAccount: imageAccount,
                parentName: parentName,
                time: time,
                text: text,
                favorites: _this._favorites,
                likes: "".concat(_this._comment.getAttribute("likes")),
                numberComment: "".concat(_this._comment.parentElement.firstChild.getAttribute("number-comment")),
                key: key
            });
        });
    };
    Favorites.prototype.initButton = function () {
        var _this = this;
        this._menuFavoritesButton.addEventListener("click", function () {
            _this._menuFavoritesButton.classList.toggle("flag-favorite");
            _this._favoritesComent = document.querySelectorAll(".comment");
            _this._favoritesComent.forEach(function (element) {
                if (!element.classList.contains("flag-favorite")) {
                    element.classList.toggle("not-favorite");
                }
                if (!_this._menuFavoritesButton.classList.contains("flag-favorite")) {
                    element.classList.remove("not-favorite");
                }
            });
            _this._favoritesAnswer = document.querySelectorAll(".answer");
            _this._favoritesAnswer.forEach(function (element) {
                if (!element.classList.contains("flag-favorite")) {
                    element.classList.toggle("not-favorite");
                }
                if (!_this._menuFavoritesButton.classList.contains("flag-favorite")) {
                    element.classList.remove("not-favorite");
                }
            });
        });
    };
    return Favorites;
}());
