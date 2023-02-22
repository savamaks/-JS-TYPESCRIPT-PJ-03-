class SortMenu {
    private _blockTwo: any;
    private _arrowSorting: any;
    private _main: any;
    constructor({ blockTwo, arrowSorting,main }:any) {
        this._blockTwo = blockTwo;
        this._arrowSorting = arrowSorting;
        this._main = main
        
    }

    initSortMenu({arrList, menuSorting, raitingBlock}:any) {
        menuSorting.textContent = arrList[0].text;

        arrList.forEach((element:any, index:number) => {
            let listItem = ` 
    <p class="rating-block__item n${index} ${
                index === 0 ? "active-item" : ""
            } " data-index="${index}""><img src="./image/icons8-галочка-96 1.svg" class="rating-block__item-image image${index} ${
                index === 0 ? "active" : ""
            } " alt="${index}">${arrList[index].text}</p>`;

            raitingBlock.innerHTML += listItem;
        });
        raitingBlock.querySelectorAll(".rating-block__item").forEach((item: { addEventListener: (arg0: string, arg1: () => void) => void; }) => {
            item.addEventListener("click", function () {
                let _num:number = this.dataset.index;
                raitingBlock.querySelector(".active-item").classList.remove("active-item");
                raitingBlock.querySelector(".n" + _num).classList.add("active-item");
                raitingBlock.querySelector(".active").classList.remove("active");
                raitingBlock.querySelector(".image" + _num).classList.add("active");
                menuSorting.textContent = arrList[_num].text;
                raitingBlock.classList.toggle("active-menu");
            });
        });

        //стрелка переворот списка
        this._arrowSorting.addEventListener("click", () => {
            this._main.localMemory()
            this._arrowSorting.classList.toggle("rotate-arrow-sorting");
            if (this._arrowSorting.classList.contains("rotate-arrow-sorting")) {
                console.log(this._main._arrCom);
                this._main._arrowFlag = false;
                if(document.querySelector(".n0").classList.contains('active-item')){
                    this._main.sortDate()
                } else if(document.querySelector(".n1").classList.contains('active-item')){
                    this._main.sortLikes()
                }else if(document.querySelector(".n2").classList.contains('active-item')){
                }else if(document.querySelector(".n3").classList.contains('active-item')){
                    this._main.sortAmountAnser()

                }
            } else {
                console.log(this._main._arrCom);
                this._main._arrowFlag = true;
                if(document.querySelector(".n0").classList.contains('active-item')){
                    this._main.sortDate()
                } else if(document.querySelector(".n1").classList.contains('active-item')){
                    this._main.sortLikes()
                }else if(document.querySelector(".n2").classList.contains('active-item')){
                }else if(document.querySelector(".n3").classList.contains('active-item')){
                    this._main.sortAmountAnser()

                }
            }
        });
    }
    positionRaitingBlock({e,arrList, menuSorting, raitingBlock}:any) {
        let coords = menuSorting.getBoundingClientRect(); 
        console.log(coords.top);
        console.log(e.clientY);
        raitingBlock.style.left = coords.left  +'px'
        raitingBlock.style.top =  e.clientY +25 + 'px'
        // console.log(raitingBlock.style.top);
    }
}
