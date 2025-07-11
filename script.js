// The Js code
const shareBtn = document.getElementById("share");
const socials = document.querySelector(".social");
const triangle = document.querySelector(".triangle");

shareBtn.addEventListener('click', () => {
    socials.classList.toggle("hide");
    triangle.classList.toggle("hide");
})