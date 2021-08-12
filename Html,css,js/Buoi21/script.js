let navIcon = document.querySelector(".nav-icon");
console.log(navIcon,navUl);
navIcon.addEventListener("click", function () {
    navUl.classList.toggle("show");
    navUl.classList.toggle("d-none")
})