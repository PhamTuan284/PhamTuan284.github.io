let navbarExtended = document.querySelector(".navbar-extended");

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
            orderImg.src = "img/detailcar/president/presidentred.png";
        }
        if (i == 1) {
            orderImg.src = "img/detailcar/president/presidentsilver.png";
        }
        if (i == 2) {
            orderImg.src = "img/detailcar/president/presidentpurple.png";
        }
        if (i == 3) {
            orderImg.src = "img/detailcar/president/presidentwhite.png";
        }
        if (i == 4) {
            orderImg.src = "img/detailcar/president/presidentorange.png";
        }
        if (i == 5) {
            orderImg.src = "img/detailcar/president/presidentblack.png";
        }
        if (i == 6) {
            orderImg.src = "img/detailcar/president/presidentblue.png";
        }
        if (i == 7) {
            orderImg.src = "img/detailcar/president/presidentbrown.png";
        }
        if (i == 8) {
            orderImg.src = "img/detailcar/president/presidentgray.png";
        }
    })
}


let orderInterior = document.querySelectorAll(".order-interior");
for (let i = 0; i < orderInterior.length; i++){
    orderInterior[i].addEventListener("click", (e) => {
        for (let j = 0; j < orderInterior.length; j++){
            orderInterior[j].firstElementChild.classList.remove("order-interior-active");
        }
        orderInterior[i].firstElementChild.classList.add("order-interior-active");
        // if (i == 0) {
        //     orderImg.src = "img/detailcar/president/presidentred.png";
        // }
        // if (i == 1) {
        //     orderImg.src = "img/detailcar/president/presidentsilver.png";
        // }
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

    if (flag) {
        location.href = "ordersuccess.html";
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


