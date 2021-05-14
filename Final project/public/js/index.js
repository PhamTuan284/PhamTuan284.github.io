var navBar = document.querySelector('.navbar-scroll');
var laiThu = document.querySelector('.laiThu');
var navDropdown = document.querySelector(".nav-dropdown");
var navbarExtended = document.querySelector(".navbar-extended")

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

navDropdown.onclick = (ev) => {
    navbarExtended.classList.toggle("visible");
}

var myCarousel = document.getElementById('carouselExampleCaptions')
var secondSlideContent = document.getElementById('secondSlide-content')
myCarousel.addEventListener('slide.bs.carousel', function (ev) {
    // console.log(ev.relatedTarget);
    secondSlideContent.innerHTML = ev.relatedTarget.querySelector(".carousel-caption").outerHTML;
})
