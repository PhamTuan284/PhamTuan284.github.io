let navbarExtended = document.querySelector(".navbar-extended");

showMenuExtend = () => {
    navbarExtended.classList.add("visible");
}
hideMenuExtend = () => {
    navbarExtended.classList.remove("visible");
}

let oderVersionItem = document.querySelectorAll(".order-version");
console.log(oderVersionItem);
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