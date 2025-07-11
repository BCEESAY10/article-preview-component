// The Js code
const shareBtn = document.getElementById("share");
const socials = document.querySelector(".social");

shareBtn.addEventListener('click', () => {
    socials.classList.toggle("hide");
})