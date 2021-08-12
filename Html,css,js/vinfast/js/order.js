// let orderNextBtn = document.getElementById("orderNextBtn");
// let orderColorTemp = document.querySelectorAll(".cardetail-color-colorpick");
// let orderColorFinal = "";
// let orderInteriorTemp = document.querySelectorAll(".order-interior");
// let orderInteriorFinal = "";

// orderNextBtn.onclick = () => {
//     for (let i = 0; i < orderColorTemp.length; i++){
//         if (orderColorTemp[i].firstElementChild.classList[2] === "color-active") {
//             orderColorFinal = orderColorTemp[i].firstElementChild.parentElement;
//         }
//     }
//     for (let i = 0; i < orderInteriorTemp.length; i++){
//         if (orderInteriorTemp[i].firstElementChild.classList[0] === "order-interior-active") {
//             orderInteriorFinal = orderInteriorTemp[i].firstElementChild.parentElement;
//         }
//     }
//     console.log(orderColorFinal);
//     console.log(orderInteriorFinal);
// }


let navbarExtended = document.querySelector(".navbar-extended");
let orderInterior = document.querySelectorAll(".order-interior");
let orderImgParent = document.querySelector(".orderImgParent");

showMenuExtend = () => {
    navbarExtended.classList.add("visible");
}
hideMenuExtend = () => {
    navbarExtended.classList.remove("visible");
}

let oderVersionItem = document.querySelectorAll(".order-version");
// console.log(oderVersionItem);
for (let i = 0; i < oderVersionItem.length; i++){
    oderVersionItem[i].addEventListener("click", (e) => {
        for (let j = 0; j < oderVersionItem.length; j++){
            oderVersionItem[j].classList.remove("order-version-active");
        }
        oderVersionItem[i].classList.add("order-version-active");
    })
}


let color = document.querySelectorAll(".cardetail-color-colorpick");
let orderImg = document.querySelector(".order-img");
for (let i = 0; i < color.length; i++){
    color[i].addEventListener("click", (e) => {
        for (let j = 0; j < color.length; j++){
            color[j].childNodes[1].classList.remove("color-active");
        }
        color[i].childNodes[1].classList.add("color-active");
        if (i == 0) {
            orderImgParent.innerHTML = `
                <img src="img/detailcar/president/presidentred.png" alt="car" class="order-img mt-xl-5">
            `
        }
        if (i == 1) {
            orderImgParent.innerHTML = `
            <img src="img/detailcar/president/presidentsilver.png" alt="car" class="order-img mt-xl-5">
        `
        }
        if (i == 2) {
            orderImgParent.innerHTML = `
            <img src="img/detailcar/president/presidentpurple.png" alt="car" class="order-img mt-xl-5">
        `
        }
        if (i == 3) {
            orderImgParent.innerHTML = `
            <img src="img/detailcar/president/presidentwhite.png" alt="car" class="order-img mt-xl-5">
        `
        }
        if (i == 4) {
            orderImgParent.innerHTML = `
            <img src="img/detailcar/president/presidentorange.png" alt="car" class="order-img mt-xl-5">
        `
        }
        if (i == 5) {
            orderImgParent.innerHTML = `
            <img src="img/detailcar/president/presidentblack.png" alt="car" class="order-img mt-xl-5">
        `
        }
        if (i == 6) {
            orderImgParent.innerHTML = `
            <img src="img/detailcar/president/presidentblue.png" alt="car" class="order-img mt-xl-5">
        `
        }
        if (i == 7) {
            orderImgParent.innerHTML = `
            <img src="img/detailcar/president/presidentbrown.png" alt="car" class="order-img mt-xl-5">
        `
        }
        if (i == 8) {
            orderImgParent.innerHTML = `
            <img src="img/detailcar/president/presidentgray.png" alt="car" class="order-img mt-xl-5">
        `
        }
    })
}


for (let i = 0; i < orderInterior.length; i++){
    orderInterior[i].addEventListener("click", (e) => {
        for (let j = 0; j < orderInterior.length; j++){
            orderInterior[j].firstElementChild.classList.remove("order-interior-active");
        }
        orderInterior[i].firstElementChild.classList.add("order-interior-active");
        if (i == 0) {
            orderImgParent.innerHTML = `
            <iframe  width="100%" height="500px" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A//i.imgur.com/WfoCD7Z.jpg&amp;autoLoad=true"></iframe>
            `;
        }
        if (i == 1) {
            orderImgParent.innerHTML = `
            <iframe allowfullscreen width="100%" height="500px" style="border-style:none;" src="https://cdn.pannellum.org/2.5/pannellum.htm#panorama=https%3A//i.imgur.com/PKRzbKh.jpg&amp;autoLoad=true"></iframe>
            `;
        }
    })
}

let visa = document.getElementById("visa");
let atm = document.getElementById("atm");
let payAtm = document.querySelector(".shipping-left-pay");
let payVisa = document.querySelector(".payment-visa")


if (visa.checked) {
    payVisa.classList.add("shipping-left-pay-visible")
} else {
    payAtm.classList.remove.add("shipping-left-pay-visible")
}

visa.onclick = () => {
    if (visa.checked) {
        payVisa.classList.add("shipping-left-pay-visible");
        payAtm.classList.remove("shipping-left-pay-visible")
    }
}

atm.onclick = () => {
    if (atm.checked) {
        payAtm.classList.add("shipping-left-pay-visible");
        payVisa.classList.remove("shipping-left-pay-visible")
    }
}



let province = document.getElementById("province");
let showroom = document.getElementById("showroom")
function checkProvince() {
    if (province.value >= 1 && province.value <= 3) {
        return true
    } else return false
}
function checkShowroom() {
    if (showroom.value >= 1 && showroom.value <= 3) {
        return true
    } else return false
}

let nameInput = document.getElementById("name");
let cmndInput = document.getElementById("cmnd");
let phoneInput = document.getElementById("phone");
let emailInput = document.getElementById("email");
let deal1 = document.getElementById("deal1");
let deal2 = document.getElementById("deal2");
let deal3 = document.getElementById("deal3");
let invalidName = document.querySelector(".invalid-name");
let invalidCmnd = document.querySelector(".invalid-cmnd");
let invalidPhone = document.querySelector(".invalid-phone");
let invalidDeal = document.querySelector(".invalid-deal");
let regexLetter = /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/


function checkName(){
    if (nameInput.value.length < 1 || !nameInput.value.match(regexLetter) ) {
        return false
    } else return true
}
function checkCmnd(){
    if (cmndInput.value.length != 12 && cmndInput.value.length != 9 ) {
        return false
    } else return true
}
function checkPhone(){
    if (phoneInput.value.length < 9) {
        return false
    } else return true
}
function checkEmail() {
    if (emailInput.value.length < 4) {
        return false
    } else return true
}
function checkDeal() {
    if (deal1.checked == true && deal2.checked == true && deal3.checked == true) {
        return true
    } else return false
}


let cardNumber = document.getElementById("exampleFormControlInput5");
let csc = document.getElementById("exampleFormControlInput6");
let expirationDate = document.getElementById("exampleFormControlInput7");
function checkCardNumber(){
    if (cardNumber.value.length < 20 ) {
        return false
    } else return true
}
function checkCsc(){
    if (csc.value.length != 3 ) {
        return false
    } else return true
}
function checkExpirationDate(){
    if (expirationDate.value.length < 5) {
        return false
    } else return true
}

let form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let flag = true;
    
    if (checkProvince() == false) {
        province.classList.add("is-invalid");
        flag = false;
    }

    if (checkShowroom() == false) {
        showroom.classList.add("is-invalid");
        flag = false;
    }
    
    if (checkName() == false) {
        nameInput.classList.add("is-invalid");
        if (!nameInput.value.match(regexLetter) && nameInput.value != "") {
            invalidName.innerHTML = "Tên không đúng định dạng"
        }
        flag = false;
    }


    if (checkCmnd() == false) {
        cmndInput.classList.add("is-invalid");
        flag = false;
    }
    if (isNaN(cmndInput.value) == true) {
        cmndInput.classList.add("is-invalid");
    }
    if (cmndInput.value.length != 12 && cmndInput.value.length !=9) {
        invalidCmnd.innerHTML="CMND/CCCD phải dài 9-12 ký tự"
    }
    if (isNaN(cmndInput.value) && cmndInput.value !="") {
        invalidCmnd.innerHTML="CMND/CCCD không đúng định dạng"
    }


    if (checkPhone() == false) {
        phoneInput.classList.add("is-invalid");
        flag = false;
    }
    if (isNaN(phoneInput.value)) {
        phoneInput.classList.add("is-invalid");
    }
    if (phoneInput.value.length < 9 && phoneInput.value.length>0) {
        invalidPhone.innerHTML="Số điện thoại phải dài 8-11 ký tự"
    }
    if (isNaN(phoneInput.value) && phoneInput.value !="") {
        invalidPhone.innerHTML="Số điện thoại không đúng định dạng"
    }


    if (checkEmail() == false) {
        emailInput.classList.add("is-invalid");
        flag = false;
    }

    if (!deal1.checked || !deal2.checked || !deal3.checked) {
        flag = false;
        invalidDeal.classList.add("invalid-deal-visible")
    } else {
        invalidDeal.classList.remove("invalid-deal-visible")
    }

    if (visa.checked == true) {
        if (!checkCardNumber()) {
            flag = false;
            cardNumber.classList.add("is-invalid")
        }
        if (!checkCsc()) {
            flag = false;
            csc.classList.add("is-invalid")
        }
        if (!checkExpirationDate()) {
            flag = false;
            expirationDate.classList.add("is-invalid")
        }
    }

    if (flag) {
        location.href = "ordersuccess.html";
        form.reset();
    }
    
})

province.onchange = () => {
    province.classList.remove("is-invalid")
}
showroom.onchange = () => {
    showroom.classList.remove("is-invalid")
}
nameInput.onchange = () => {
    if (nameInput.value.length > 1) {
        nameInput.classList.remove("is-invalid");
    } else {
        nameInput.classList.add("is-invalid");
    }

}
cmndInput.onchange = () => {
    if (cmndInput.value.length == 12 || cmndInput.value.length == 9) {
        cmndInput.classList.remove("is-invalid");
    } else {
        cmndInput.classList.add("is-invalid");
    }

    if (isNaN(cmndInput.value) == false) {
        cmndInput.classList.remove("is-invalid");
    } else {
        cmndInput.classList.add("is-invalid");
    }
}

phoneInput.onchange = () => {
    if (phoneInput.value.length < 12 || phoneInput.value.length > 9) {
        phoneInput.classList.remove("is-invalid");
    } else {
        phoneInput.classList.add("is-invalid");
    }

    if (isNaN(phoneInput.value) == false) {
        phoneInput.classList.remove("is-invalid");
    } else {
        phoneInput.classList.add("is-invalid");
    }
}
emailInput.onchange = () => {
    if (emailInput.value.length >= 4) {
        emailInput.classList.remove("is-invalid")
    } else {
        emailInput.classList.add("is-invalid")
    }
}

cardNumber.onchange = () => {
    if (cardNumber.value.length >= 20) {
        cardNumber.classList.remove("is-invalid")
    } else {
        cardNumber.classList.add("is-invalid")
    }
}
csc.onchange = () => {
    if (csc.value.length == 3) {
        csc.classList.remove("is-invalid")
    } else {
        csc.classList.add("is-invalid")
    }
}
expirationDate.onchange = () => {
    if (expirationDate.value.length == 4) {
        expirationDate.classList.remove("is-invalid")
    } else {
        expirationDate.classList.add("is-invalid")
    }
}
