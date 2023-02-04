const user = {
    Алексей_1994b: {
        name: "Алексей_1994b",
        text: "Самое обидное когда сценарий по сути есть - в виде книг, где нет сюжетных дыр, всё логично, стройное повествование и достаточно взять и экранизировать оригинал как это было в первых фильмах с минимальным количеством отсебятины и зритель с восторгом примет любой такой фильм и сериал, однако вместо этого 'Кольца власти' просто позаимствовали имена из оригинала, куски истории, мало связанные между собой и выдали очередной среднячковый сериал на один раз в лучшем случае.",
    },
    Джунбокс3000: {
        name: "Джунбокс3000",
        text: "Наверное, самая большая ошибка создателей сериала была в том, что они поставили уж слишком много надежд на поддержку фанатов вселенной. Как оказалось на деле, большинство фанатов с самой настоящей яростью и желчью стали уничтожать сериал, при этом объективности в отзывах самый минимум.",
    },
};

let textInput = document.querySelector(".form__input");
const buttonInput = document.querySelector(".form__button");
const textCol = document.querySelector(".new-comments__write__text-col");
const blockRaiting = document.querySelector(".rating-block");
const sorting = document.querySelector(".menu__sorting");
const blockComment = document.querySelector(".new-comments");

textInput.addEventListener("keydown", textarea);

function textarea() {
    this.style.removeProperty("height");
    textCol.textContent = textInput.value.length + 1 + "/1000";

    this.style.height = this.scrollHeight + 6 + "px";
    if (textInput.value !== "" && textInput.value.length < 1000) {
        buttonInput.style.background = "#ABD873";
    } else if (textInput.value.length > 1000) {
        buttonInput.style.background = "#a2a2a2";
    }
}

// меню выбор списка
const arrList = [
    { text: "По дате" },
    { text: "По количеству оценок" },
    { text: "По актуальности" },
    { text: "По количеству ответов" },
];
sorting.textContent = arrList[0].text;

arrList.forEach((element, index) => {
    let listItem = ` 
    <p class="rating-block__item n${index} ${
        index === 0 ? "active-item" : ""
    } " data-index="${index}""><img src="./image/icons8-галочка-96 1.svg" class="rating-block__item-image image${index} ${
        index === 0 ? "active" : ""
    } " alt="${index}">${arrList[index].text}</p>`;
    blockRaiting.innerHTML += listItem;
});

blockRaiting.querySelectorAll(".rating-block__item").forEach((item) => {
    item.addEventListener("click", function () {
        initString(item.dataset.index);
    });
});

function initString(num) {
    blockRaiting.querySelector(".active-item").classList.remove("active-item");
    blockRaiting.querySelector(".n" + num).classList.add("active-item");
    blockRaiting.querySelector(".active").classList.remove("active");
    blockRaiting.querySelector(".image" + num).classList.add("active");
    sorting.textContent = arrList[num].text;
    blockRaiting.classList.toggle("active-menu");
}

sorting.addEventListener("click", () => {
    
    blockRaiting.classList.toggle("active-menu");
});

buttonInput.addEventListener("click", () => {
    writeNewComment(textInput.value);
});


const writeNewComment = (text) => {
    let comment = `<div class="comment">
    <img
        class="comment__image"
        src="./image/albert-dera-ILip77SbmOE-unsplash.jpg"
        alt=""
    />
    <div>
        <div class="comment__signature">
            <h2 class="comment__signature-name">
            Максим Авдеенко
            </h2>
            <p class="comment__signature-date">data</p>
        </div>
        <p class="comment__text">${text}
        </p>
        <div class="comment__panel">
            <button class="comment__panel-answer">
                <img
                    src="./image/Mask group.svg"
                    alt=""
                />
                Ответить
            </button>
            <button class="comment__panel-favorites">
                <img
                    src="./image/Mask group (1).svg"
                    alt=""
                />
                В избранное
            </button>
            <div class="comment__favorite-button">
                <button
                    class="comment__favorite-button-minus"
                >
                    <img
                        src="./image/minus.svg"
                        alt=""
                    />
                </button>
                <p
                    class="comment__favorite-button-number"
                >
                    0
                </p>
                <button
                    class="comment__favorite-button-plus"
                >
                    <img
                        src="./image/plus.svg"
                        alt=""
                    />
                </button>
            </div>
        </div>
    </div>
</div>`;

    blockComment.innerHTML += comment;
    
};
