let menu = document.querySelector(".menu");
let headerRight = document.querySelector(".header-right")
let headerMid = document.querySelector(".header-mid")

menu.addEventListener("click", function () {
    headerRight.classList.toggle("visible");
    headerMid.classList.toggle("visible");
})