// const user = {
//     'Алексей_1994b': {
//         name: "Алексей_1994b",
//         text: "Самое обидное когда сценарий по сути есть - в виде книг, где нет сюжетных дыр, всё логично, стройное повествование и достаточно взять и экранизировать оригинал как это было в первых фильмах с минимальным количеством отсебятины и зритель с восторгом примет любой такой фильм и сериал, однако вместо этого 'Кольца власти' просто позаимствовали имена из оригинала, куски истории, мало связанные между собой и выдали очередной среднячковый сериал на один раз в лучшем случае.",
//     },
//     'Джунбокс3000': {
//         name: "Джунбокс3000",
//         text: "Наверное, самая большая ошибка создателей сериала была в том, что они поставили уж слишком много надежд на поддержку фанатов вселенной. Как оказалось на деле, большинство фанатов с самой настоящей яростью и желчью стали уничтожать сериал, при этом объективности в отзывах самый минимум.",
//     },
//     'Максим Авдеенко': {
//         name: "Максим Авдеенко",
//         text: "",
//     },
// };

// const textInput = document.querySelector(".new-comments__form-input");
// const buttonInput = document.querySelector(".new-comments__form-button");
// const amount = document.querySelector(".new-comments__amount");
// const raitingBlock = document.querySelector(".rating-block");
// const menuSorting = document.querySelector(".menu__sorting");
// const newComment = document.querySelector(".new-comments");
// const blockTwo = document.querySelector('.block-two')

// textInput.addEventListener("keydown", textarea);

// function textarea() {
//     this.style.removeProperty("height");
//     amount.textContent = textInput.value.length + 1 + "/1000";

//     this.style.height = this.scrollHeight + 6 + "px";
//     if (textInput.value !== "" && textInput.value.length < 1000) {
//         buttonInput.style.background = "#ABD873";
//     } else if (textInput.value.length > 1000) {
//         buttonInput.style.background = "#a2a2a2";
//     }
// }

// меню выбор списка
// const arrList = [
//     { text: "По дате" },
//     { text: "По количеству оценок" },
//     { text: "По актуальности" },
//     { text: "По количеству ответов" },
// ];
// menuSorting.textContent = arrList[0].text;

// arrList.forEach((element, index) => {
//     let listItem = `
//     <p class="rating-block__item n${index} ${index === 0 ? "active-item" : ""
//         } " data-index="${index}""><img src="./image/icons8-галочка-96 1.svg" class="rating-block__item-image image${index} ${index === 0 ? "active" : ""
//         } " alt="${index}">${arrList[index].text}</p>`;
//     raitingBlock.innerHTML += listItem;
// });

// raitingBlock.querySelectorAll(".rating-block__item").forEach((item) => {
//     item.addEventListener("click", function () {
//         initString(item.dataset.index);
//     });
// });

// function initString(num) {
//     raitingBlock.querySelector(".active-item").classList.remove("active-item");
//     raitingBlock.querySelector(".n" + num).classList.add("active-item");
//     raitingBlock.querySelector(".active").classList.remove("active");
//     raitingBlock.querySelector(".image" + num).classList.add("active");
//     menuSorting.textContent = arrList[num].text;
//     raitingBlock.classList.toggle("active-menu");
// }

// menuSorting.addEventListener("click", () => {

//     raitingBlock.classList.toggle("active-menu");
// });

// buttonInput.addEventListener("click", (event) => {
//     event.preventDefault()
//     writeNewComment(textInput.value);
// });

// //функция описания времени

// const nowTime =()=>{
//     let dateNow = new Date();
//     let month = ((dateNow.getMonth()+1)>9? (dateNow.getMonth()+1) : '0'+(dateNow.getMonth()+1))
//     let date = dateNow.getDate()
//     let hour = dateNow.getHours()
//     let minutes = dateNow.getMinutes()>9? dateNow.getMinutes():'0'+ dateNow.getMinutes()

//     return time = `${date}.${month} ${hour}:${minutes}`
// }

// const writeNewComment = (text) => {

//     let commentDivMain = document.createElement('div')
//     commentDivMain.classList.add('comment')

//     let imageAccount = document.createElement('img')
//     imageAccount.classList.add('comment__image')
//     imageAccount.src = "./image/samsung-memory-hjRC0i0oJxg-unsplash 1.jpg"
//     imageAccount.alt = "foto account"

//     let signatureName = document.createElement('h2')
//     signatureName.classList.add("comment__name")
//     signatureName.textContent = 'Максим Авдеенко'
//     let signatureDate = document.createElement('p')
//     signatureDate.classList.add("comment__date")
//     signatureDate.textContent = nowTime()
//     let commentText = document.createElement('p')
//     commentText.classList.add('comment__text')
//     commentText.textContent = text

//     // нижняя панель сообщения

//     let commentPanelDiv = document.createElement('div')
//     commentPanelDiv.classList.add('comment__panel')

//     let panelButtonAnswer = document.createElement('button')
//     panelButtonAnswer.classList.add('comment__panel-answer')
//     let panelButtonAnswerImage = document.createElement('img')
//     panelButtonAnswerImage.src = "./image/Mask group.svg"
//     panelButtonAnswerImage.alt = 'button answer'

//     let panelButtonFavorites = document.createElement('button')
//     panelButtonFavorites.classList.add('comment__panel-favorites')
//     let panelButtonFavoritesImage = document.createElement('img')
//     panelButtonFavoritesImage.src = "./image/Mask group (1).svg"
//     panelButtonFavoritesImage.alt = 'button favorites'

//     let panelFavoritesDiv = document.createElement('div')
//     panelFavoritesDiv.classList.add('comment__favorite-button')

//     let ButtonMinus = document.createElement('button')
//     ButtonMinus.classList.add('comment__favorite-button-minus')
//     let ButtonMinusImage = document.createElement('img')
//     ButtonMinusImage.src = './image/minus.svg'
//     ButtonMinusImage.alt = 'minus'

//     let panelFavoritesDivText = document.createElement('p')
//     panelFavoritesDivText.classList.add('comment__favorite-button-number')
//     panelFavoritesDivText.textContent = 0

//     let ButtonPlus = document.createElement('button')
//     ButtonPlus.classList.add('comment__favorite-button-plus')
//     let ButtonPlusImage = document.createElement('img')
//     ButtonPlusImage.src = './image/plus.svg'
//     ButtonPlusImage.alt = 'minus'

//     // создание структуры коментария

//     commentDivMain.append(imageAccount, signatureName, signatureDate, commentText, commentPanelDiv)
//     commentPanelDiv.append(panelButtonAnswer, panelButtonFavorites, panelFavoritesDiv)
//     panelButtonAnswer.append(panelButtonAnswerImage, 'Ответить')
//     panelButtonFavorites.append(panelButtonFavoritesImage, "В избранное")
//     ButtonMinus.append(ButtonMinusImage)
//     ButtonPlus.append(ButtonPlusImage)
//     panelFavoritesDiv.append(ButtonMinus, panelFavoritesDivText, ButtonPlus)
//     console.log(commentDivMain)

//     blockTwo.append(commentDivMain)

// };

class Index {
    constructor() {
        this._main = new Main();
    }
    start() {
        this._main.initButton();
    }
}
let index = new Index();

index.start();
