// home
let navBar = document.querySelector('.navbar-scroll');
let laiThu = document.querySelector('.laiThu');
let navbarExtended = document.querySelector(".navbar-extended");
let navbarExtendedBlocker = document.querySelector(".navbar-extended-blocker");

window.onscroll =  () => { 
    if (document.body.scrollTop >= 61 || document.documentElement.scrollTop >= 61) {
        navBar.classList.add("navbar-light");
        navBar.classList.remove("navbar-dark");

        navBar.classList.add("bg-light");
        navBar.classList.remove("bg-transparent");

        laiThu.classList.add("btn-outline-dark");
        laiThu.classList.remove("btn-outline-light");

    } 
    else {
        navBar.classList.add("navbar-dark");
        navBar.classList.remove("navbar-light");

        navBar.classList.add("bg-transparent");
        navBar.classList.remove("bg-light");

        laiThu.classList.add("btn-outline-light");
        laiThu.classList.remove("btn-outline-dark");
    }
};
showMenuExtend = () => {
    navbarExtended.classList.add("visible");
}
hideMenuExtend = () => {
    navbarExtended.classList.remove("visible");
}

let myCarousel = document.getElementById('carouselExampleCaptions')
let secondSlideContent = document.getElementById('secondSlide-content')
myCarousel.addEventListener('slide.bs.carousel', function (ev) {
    // console.log(ev.relatedTarget);
    secondSlideContent.innerHTML = ev.relatedTarget.querySelector(".carousel-caption").outerHTML;
})

