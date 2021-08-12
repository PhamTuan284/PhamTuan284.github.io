let menu = document.querySelector(".menu");
let headerRight = document.querySelector(".header-right")

menu.addEventListener("click", function () {
    headerRight.classList.toggle("visible");
})