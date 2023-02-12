class Likes {
    constructor({ blockTwo }) {
        this._blockTwo = blockTwo;
    }

    likesComment(buttonMinus,panelFavoritesDivText, buttonPlus) {
        let count = 0;
        let result;

        
        buttonMinus.addEventListener("click", () => {
            count--;

            if (count < 0) {
                panelFavoritesDivText.style.color = "#FF0000";
                result = count * -1;
            } else {
                result = count;
                panelFavoritesDivText.style.color = "#8ac540";
            }
            panelFavoritesDivText.textContent = result;
        });


        buttonPlus.addEventListener("click", () => {
            count++;

            if (count < 0) {
                panelFavoritesDivText.style.color = "#FF0000";
                result = count * -1;
            } else {
                result = count;

                panelFavoritesDivText.style.color = "#8ac540";
            }
            panelFavoritesDivText.textContent = result;
        });
    }

    // likes(){
    //     this._likesPanel = document.querySelectorAll('.comment__likes-button')

    //     this._likesPanel.forEach(panel => {
    //         let count = 0
    //         let result
    //         let buttonMinus = panel.querySelector('.comment__likes-button-minus')
    //         buttonMinus.addEventListener('click',()=>{
    //             let panelText = panel.querySelector('.comment__likes-button-number')
    //             count--

    //             if(count<0){
    //                 panelText.style.color = '#FF0000'
    //                 result = count * (-1)
    //             }else {
    //                 result = count
    //                 panelText.style.color = '#8ac540'

    //             }
    //             panelText.textContent = result
    //         })
    //         let buttonPlus = panel.querySelector('.comment__likes-button-plus')

    //         buttonPlus.addEventListener('click',()=>{
    //             let panelText = panel.querySelector('.comment__likes-button-number')
    //             count++

    //             if(count<0){
    //                 panelText.style.color = '#FF0000'
    //                 result = count * (-1)
    //             } else {
    //                 result = count

    //                 panelText.style.color = '#8ac540'

    //             }
    //             panelText.textContent = result
    //         })
    //     });

    // }
}
