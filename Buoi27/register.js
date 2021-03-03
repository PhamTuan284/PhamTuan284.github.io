let registForm = document.getElementById("register-form");
let registEmail = document.getElementById("registEmail");
let registPassword = document.getElementById("registPassword");
let reRegistPassword = document.getElementById("re-registPassword");
// let user = {
//     email: "",
//     password: ""
// };
// let storeEmail = "";
// let storePassword = "";

function registEmailValidation() {
    if (registEmail.value.trim().length > 6) {
        return true;
    }
    else return false;
}

function registEmailValid() {
    registEmail.classList.add("is-valid");
    registEmail.classList.remove("is-invalid");
    // storeEmail = registEmail.value;
    localStorage.setItem("userEmail", JSON.stringify(registEmail.value));
}

function registEmailInvalid() {
    registEmail.classList.add("is-invalid");
    registEmail.classList.remove("is-valid")
}

function registPasswordValidation() {
    if (registPassword.value.trim().length > 6) {
        return true
    }
    else return false
}

function registPasswordValid() {
    registPassword.classList.add("is-valid");
    registPassword.classList.remove("is-invalid");

}

function registPasswordInvalid() {
    registPassword.classList.add("is-invalid");
    registPassword.classList.remove("is-valid");
}

function reRegistPasswordValidation() {
    if (reRegistPassword.value.trim() === registPassword.value.trim()) {
        return true
    }
    else return false
}

function reRegistPasswordValid() {
    reRegistPassword.classList.add("is-valid");
    reRegistPassword.classList.remove("is-invalid");
    // storePassword = reRegistPassword.value;
    localStorage.setItem("userPassword", JSON.stringify(registPassword.value));
}

function reRegistPasswordInvalid() {
    reRegistPassword.classList.add("is-invalid");
    reRegistPassword.classList.remove("is-valid");
}

registForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let flag = true;

    if (registEmailValidation()) {
        registEmailValid();
    } else {
        registEmailInvalid();
        flag = false;
    }

    if (registPasswordValidation()) {
        registPasswordValid();
    } else {
        registPasswordInvalid();
        flag = false;
    }

    if (reRegistPasswordValidation()) {
        reRegistPasswordValid();
    } else {
        reRegistPasswordInvalid();
        flag = false;
    }

    if (flag) {
        location.href = "http://127.0.0.1:5500/index.html";
        // user.email = storeEmail;
        // user.password = storePassword;
    }

})
