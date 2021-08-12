let navbarExtended = document.querySelector(".navbar-extended");

showMenuExtend = () => {
    navbarExtended.classList.add("visible");
}
hideMenuExtend = () => {
    navbarExtended.classList.remove("visible");
}

let color = document.querySelectorAll(".cardetail-color-colorpick");
let img = document.querySelector(".cardetail-color-img").firstElementChild;
for (let i = 0; i < color.length; i++){
    color[i].addEventListener("click", (e) => {
        for (let j = 0; j < color.length; j++){
            color[j].childNodes[1].classList.remove("color-active");
        }
        color[i].childNodes[1].classList.add("color-active");
        if (i == 0) {
            img.src = "img/detailcar/president/presidentred.png";
        }
        if (i == 1) {
            img.src = "img/detailcar/president/presidentsilver.png";
        }
        if (i == 2) {
            img.src = "img/detailcar/president/presidentpurple.png";
        }
        if (i == 3) {
            img.src = "img/detailcar/president/presidentwhite.png";
        }
        if (i == 4) {
            img.src = "img/detailcar/president/presidentorange.png";
        }
        if (i == 5) {
            img.src = "img/detailcar/president/presidentblack.png";
        }
        if (i == 6) {
            img.src = "img/detailcar/president/presidentblue.png";
        }
        if (i == 7) {
            img.src = "img/detailcar/president/presidentbrown.png";
        }
        if (i == 8) {
            img.src = "img/detailcar/president/presidentgray.png";
        }
    })
}

let feature = document.querySelectorAll(".cardetail-feature");
console.log(feature);
let featureImg = document.querySelector(".cardetail-features-img").firstElementChild;
for (let i = 0; i < feature.length; i++){
    feature[i].addEventListener("click", (e) => {
        for (let j = 0; j < feature.length; j++){
            feature[j].classList.remove("cardetail-features-list-active");
        }
        feature[i].classList.add("cardetail-features-list-active");
        if (i == 0) {
            featureImg.src = "img/detailcar/president/slide1.jpg";
        }
        if (i == 1) {
            featureImg.src = "img/detailcar/president/slide2.jpeg";
        }
        if (i == 2) {
            featureImg.src = "img/detailcar/president/slide3.jpeg";
        }
        if (i == 3) {
            featureImg.src = "img/detailcar/president/slide4.jpeg";
        }
        if (i == 4) {
            featureImg.src = "img/detailcar/president/slide5.jpeg";
        }
        if (i == 5) {
            featureImg.src = "img/detailcar/president/slide6.jpeg";
        }
        if (i == 6) {
            featureImg.src = "img/detailcar/president/slide7.jpeg";
        }
        if (i == 7) {
            featureImg.src = "img/detailcar/president/slide8.jpeg";
        }
        if (i == 8) {
            featureImg.src = "img/detailcar/president/slide9.jpeg";
        }
        if (i == 9) {
            featureImg.src = "img/detailcar/president/slide10.jpeg";
        }
        if (i == 10) {
            featureImg.src = "img/detailcar/president/slide11.jpeg";
        }
        if (i == 11) {
            featureImg.src = "img/detailcar/president/slide12.jpeg";
        }
        if (i == 12) {
            featureImg.src = "img/detailcar/president/slide13.jpeg";
        }
        if (i == 13) {
            featureImg.src = "img/detailcar/president/slide14.jpeg";
        }
        if (i == 14) {
            featureImg.src = "img/detailcar/president/slide15.jpeg";
        }
        if (i == 15) {
            featureImg.src = "img/detailcar/president/slide16.jpeg";
        }
 
    })
}