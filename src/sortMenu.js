var SortMenu = /** @class */ (function () {
    function SortMenu(_a) {
        var blockTwo = _a.blockTwo, arrowSorting = _a.arrowSorting, main = _a.main;
        this._blockTwo = blockTwo;
        this._arrowSorting = arrowSorting;
        this._main = main;
    }
    SortMenu.prototype.initSortMenu = function (_a) {
        var _this = this;
        var arrList = _a.arrList, menuSorting = _a.menuSorting, raitingBlock = _a.raitingBlock;
        menuSorting.textContent = arrList[0].text;
        arrList.forEach(function (element, index) {
            var listItem = " \n    <p class=\"rating-block__item n".concat(index, " ").concat(index === 0 ? "active-item" : "", " \" data-index=\"").concat(index, "\"\"><img src=\"./image/icons8-\u0433\u0430\u043B\u043E\u0447\u043A\u0430-96 1.svg\" class=\"rating-block__item-image image").concat(index, " ").concat(index === 0 ? "active" : "", " \" alt=\"").concat(index, "\">").concat(arrList[index].text, "</p>");
            raitingBlock.innerHTML += listItem;
        });
        raitingBlock.querySelectorAll(".rating-block__item").forEach(function (item) {
            item.addEventListener("click", function () {
                var _num = this.dataset.index;
                raitingBlock.querySelector(".active-item").classList.remove("active-item");
                raitingBlock.querySelector(".n" + _num).classList.add("active-item");
                raitingBlock.querySelector(".active").classList.remove("active");
                raitingBlock.querySelector(".image" + _num).classList.add("active");
                menuSorting.textContent = arrList[_num].text;
                raitingBlock.classList.toggle("active-menu");
            });
        });
        //стрелка переворот списка
        this._arrowSorting.addEventListener("click", function () {
            _this._main.localMemory();
            _this._arrowSorting.classList.toggle("rotate-arrow-sorting");
            if (_this._arrowSorting.classList.contains("rotate-arrow-sorting")) {
                console.log(_this._main._arrCom);
                _this._main._arrowFlag = false;
                if (document.querySelector(".n0").classList.contains('active-item')) {
                    _this._main.sortDate();
                }
                else if (document.querySelector(".n1").classList.contains('active-item')) {
                    _this._main.sortLikes();
                }
                else if (document.querySelector(".n2").classList.contains('active-item')) {
                }
                else if (document.querySelector(".n3").classList.contains('active-item')) {
                    _this._main.sortAmountAnser();
                }
            }
            else {
                console.log(_this._main._arrCom);
                _this._main._arrowFlag = true;
                if (document.querySelector(".n0").classList.contains('active-item')) {
                    _this._main.sortDate();
                }
                else if (document.querySelector(".n1").classList.contains('active-item')) {
                    _this._main.sortLikes();
                }
                else if (document.querySelector(".n2").classList.contains('active-item')) {
                }
                else if (document.querySelector(".n3").classList.contains('active-item')) {
                    _this._main.sortAmountAnser();
                }
            }
        });
    };
    SortMenu.prototype.positionRaitingBlock = function (_a) {
        var e = _a.e, arrList = _a.arrList, menuSorting = _a.menuSorting, raitingBlock = _a.raitingBlock;
        var coords = menuSorting.getBoundingClientRect();
        console.log(coords.top);
        console.log(e.clientY);
        raitingBlock.style.left = coords.left + 'px';
        raitingBlock.style.top = e.clientY + 25 + 'px';
        // console.log(raitingBlock.style.top);
    };
    return SortMenu;
}());
