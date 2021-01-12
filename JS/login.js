let loginButton = document.querySelector(".button-login");
let form = document.querySelector(".form");
let buttonX = document.querySelector(".button-x");
let cancelButton = document.querySelector(".cancel-button");

loginButton.addEventListener("click", function () {
    form.classList.add("active");
    document.body.classList.add("background");
})

function turnOff() {
    console.log("object");
    form.classList.remove("active");
    document.body.classList.remove("background");
}

buttonX.addEventListener("click", turnOff);
cancelButton.addEventListener("click", turnOff);
