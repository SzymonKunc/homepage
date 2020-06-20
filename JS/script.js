console.log("Czesc Wszystkim Youcodeowcom :D !!!");

let nav = document.querySelector("nav");
let changeButton = document.querySelector(".changeBackground");
let container = document.querySelector(".container");

let przycisk = document.querySelector(".przycisk");
let naglowek = document.querySelector(".section__header");

let przycisk1 = document.querySelector(".section__button1");
let paragraf = document.querySelector(".tlo");
let paragraf1 = document.querySelector(".tlo1");

przycisk.addEventListener("click", () => {
    naglowek.remove();

});


przycisk1.addEventListener("click", () => {
    paragraf.classList.toggle("tlo");
    paragraf1.classList.toggle("tlo");
});

changeButton.addEventListener("click", () => {
    container.classList.toggle("changeBackround");
    nav.classList.toggle("nav");

    if (changeButton.innerText === "Wrzuć ciemno-czerwony motyw") {
        changeButton.innerText = "Wrzuć biało-czarny motyw"
    } else {
        changeButton.innerText = "Wrzuć ciemno-czerwony motyw"
    }


})