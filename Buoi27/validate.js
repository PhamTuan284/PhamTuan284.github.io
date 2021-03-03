let email = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword1");
let user = {
    email: "tuanpham22790@gmail.com",
    password: "password"
}

export function emailValidation() {
    let emailContent = email.value.trim();
    if (emailContent.length > 6 && emailContent === JSON.parse(localStorage.getItem("userEmail"))) {
        return true;
    } else return false;
}

export function emailValid() {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid")
}

export function emailInvalid() {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid")
}

export function passwordValidation() {
    let passwordContent = password.value.trim();
    if (passwordContent.length > 6 && passwordContent === JSON.parse(localStorage.getItem("userPassword"))) {
        return true
    }
    else return false
}

export function passwordValid() {
    password.classList.add("is-valid");
    password.classList.remove("is-invalid");
}

export function passwordInvalid() {
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
}

export function emailCheck() {
    if (email.value.trim() === user.email || email.value.trim() === JSON.parse(localStorage.getItem("userEmail"))) {
        return true
    } else return false
}

export function passwordCheck() {
    if (password.value.trim() === user.password || password.value.trim() === JSON.parse(localStorage.getItem("userPassword"))) {
        return true
    } else return false
}
