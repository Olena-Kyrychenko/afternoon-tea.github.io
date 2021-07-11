var afternoonTea = [
    {
        text: "Кефір",
        img: "img/kefir.jpg"
    },
    {
        text: "Полуниця",
        img: "img/strawberries.jpg"
    },
    {
        text: "Банан",
        img: "img/banana.jpg"
    },
    // {
    //     text: "Слойка з джемом"
    // },
    {
        text: "Сушки",
        img: "img/sushki.jpg"
    },
    // {
    //     text: "Плюшки"
    // },
    {
        text: "Свіже яблуко",
        img: "img/apple.jpg"
    },
    // {
    //     text: "Йогурт"
    // },
    // {
    //     text: "Ряжанка"
    // },
    // {
    //     text: "Запечене яблуко"
    // },
    {
        text: "Кисіль",
        img: "img/kissel.jpg"

    },
    // {
    //     text: "Пиріжок з сиром"
    // },
    {
        text: "Молоко",
        img: "img/milk.jpg"
    },
    // {
    //     text: "Булочка з родзинками"
    // },
    // {
    //     text: "Сирне печиво"
    // },
    // {
    //     text: "Апельсин"
    // },
    // {
    //     text: "Булочка з сиром"
    // },
    // {
    //     text: "Вівсяне печиво"
    // },
    // {
    //     text: "Пиріжок з яблуками"
    // },
    // {
    //     text: "Фруктове желе"
    // },
    // {
    //     text: "Бісквіт"
    // },
    // {
    //     text: "Молочне желе"
    // },
    // {
    //     text: "Груша"
    // },
    {
        text: "Сирники",
        img: "img/cheeseСakes.jpg"
    },
    // {
    //     text: "Пряники"
    // },
    // {
    //     text: "Фініки"
    // },
    {
        text: "Завиток з маком",
        img: "img/bun.jpg"
    },
    {
        text: "Морс із журавлини",
        img: "img/fruitDrink.jpg"
    },
    {
        text: "Млинці",
        img: "img/pancake.jpg"
    },
    {
        text: "Оладки",
        img: "img/thickPancake.jpg"
    }
];
//Що на підвечірок?
afternoonTea[Math.floor(Math.random() * afternoonTea.length)];

// document.write(afternoonTea[Math.floor(Math.random()*afternoonTea.length)] )
var objAftTea = afternoonTea[Math.floor(Math.random() * afternoonTea.length)];
document.getElementById("afternoon-tea").innerHTML = objAftTea.text;
document.getElementById("afternoon-tea-img").src = objAftTea.img;