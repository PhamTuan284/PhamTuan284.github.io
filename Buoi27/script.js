import * as validate from "./validate.js";
let form = document.getElementById("login-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let flag = true;

    if (validate.emailValidation()) {
        validate.emailValid();
    } else {
        validate.emailInvalid();
        flag = false;
    }

    if (validate.passwordValidation()) {
        validate.passwordValid();
    } else {
        validate.passwordInvalid();
        flag = false;
    }

    if (validate.emailCheck()) {
        flag = true;
    } else flag = false;

    if (validate.passwordCheck()) {
        flag = true;
    } else flag = false;

    if (flag) {
        location.href = "http://127.0.0.1:5500/register.html"
    }
})


// class User{
//     constructor(name) {
//         this.name = name;
//     }
//     love() {
//         console.log(`I love ${this.name}`);
//     }
// }
// let user = new User("Tuan");
// user.love()


// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(val) {
//         if (val.trim().length > 1) {
//             this._name = val;
//         } else console.log("Too short");
//     }
// }

// let ba = new User("ba", 28);
// console.log(ba);
// ba.name = "";
// ba.age = -1;
// console.log(ba);

