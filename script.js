/* HAMBURGER MENU */

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {

    menu.classList.toggle("active");

});

/* IMAGE SLIDER */

const images = [

'https://picsum.photos/700/900?10',
'https://picsum.photos/700/900?11',
'https://picsum.photos/700/900?12',
'https://picsum.photos/700/900?13'

];

let current = 0;

const sliderImage = document.getElementById("slider-image");

setInterval(() => {

    current = (current + 1) % images.length;

    sliderImage.src = images[current];

}, 3500);