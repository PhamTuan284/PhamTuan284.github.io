var navBar = document.querySelector('.navbar');
var laiThu = document.querySelector('.laiThu');


window.onscroll = function () { 
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
