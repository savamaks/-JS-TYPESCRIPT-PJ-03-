class SortMenu {
    constructor({ blockTwo, arrowSorting,main }) {
        this._blockTwo = blockTwo;
        this._arrowSorting = arrowSorting;
        this._main = main
        this._arrowFlag = true;
    }

    initSortMenu(arrList, menuSorting, raitingBlock) {
        menuSorting.textContent = arrList[0].text;

        arrList.forEach((element, index) => {
            let listItem = ` 
    <p class="rating-block__item n${index} ${
                index === 0 ? "active-item" : ""
            } " data-index="${index}""><img src="./image/icons8-галочка-96 1.svg" class="rating-block__item-image image${index} ${
                index === 0 ? "active" : ""
            } " alt="${index}">${arrList[index].text}</p>`;

            raitingBlock.innerHTML += listItem;
        });
        raitingBlock.querySelectorAll(".rating-block__item").forEach((item) => {
            item.addEventListener("click", function () {
                this._num = this.dataset.index;
                raitingBlock.querySelector(".active-item").classList.remove("active-item");
                raitingBlock.querySelector(".n" + this._num).classList.add("active-item");
                raitingBlock.querySelector(".active").classList.remove("active");
                raitingBlock.querySelector(".image" + this._num).classList.add("active");
                menuSorting.textContent = arrList[this._num].text;
                raitingBlock.classList.toggle("active-menu");
            });
        });

        //стрелка переворот списка
        this._arrowSorting.addEventListener("click", () => {
            this._arrowSorting.classList.toggle("rotate-arrow-sorting");
            if (this._arrowFlag) {
                console.log('1');
                this._arrowFlag = false;
            } else {
                this._arrowFlag = true;
            }
            this._main.localMemory(this._arrowFlag)
            this.dateSort(this._arrowFlag)
        });
    }
    dateSort(arrowFlag) {
        
    }
}
