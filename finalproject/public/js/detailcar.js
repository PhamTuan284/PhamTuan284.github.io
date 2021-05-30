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

