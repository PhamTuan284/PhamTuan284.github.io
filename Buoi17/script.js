let nextSlide = document.querySelectorAll('.nextSlide');
let slide = document.querySelectorAll('.aSlide');
let arrowLeft = document.querySelector('.arrowLeft');
let arrowRight = document.querySelector('.arrowRight');
let dropDown = document.querySelector('.dropDown')
let dropDownItem = document.querySelector('.dropDown-item');
//auto slide
let time = setInterval(function(){ autoSlide() },10000); 

//click vao nut
for (let i = 0; i < nextSlide.length; i++) {
    nextSlide[i].onclick = function(){
        clearInterval(time);

        //bo active trong nut truoc
        for (let k = 0; k < nextSlide.length; k++){
            nextSlide[k].classList.remove('active');
        }
        this.classList.add('active');

        //tinh vi tri nut tiep theo
        let activeButton = this,
            buttonPos = 0;
        for (buttonPos = 0; activeButton = activeButton.previousElementSibling; buttonPos++){}

        //cho slide tiep theo hien len
        for (let i = 0; i < slide.length; i++) {
            slide[i].classList.remove('showSlide');
            slide[buttonPos].classList.add('showSlide');
        }
    }
}
//het su kien cho nut   

//auto slide
function autoSlide(){
    // tinh vi tri slide
    let slidePos = 0;
    let activePos = document.querySelector('.showSlide');
    for (slidePos = 0; activePos = activePos.previousElementSibling; slidePos++){};

    //cho slide tiep theo hien len
    if (slidePos < (slide.length-1)){
        //cho an het slide di
        for (let i = 0; i < slide.length; i++){
            slide[i].classList.remove('showSlide');
            nextSlide[i].classList.remove('active');
        };

        //cho slide tiep theo hien ra   
        slide[slidePos].nextElementSibling.classList.add('showSlide');
        nextSlide[slidePos].nextElementSibling.classList.add('active');
    }
    else {
        //cho an het slide di
        for (let i = 0; i < slide.length; i++){
            slide[i].classList.remove('showSlide');
            nextSlide[i].classList.remove('active');
        };

        //cho slide dau tien hien ra   
        slide[0].classList.add('showSlide');
        nextSlide[0].classList.add('active');
    }
}

//nut slide trai
arrowLeft.onclick = function leftSlide() {
    // tinh vi tri slide
    let slidePos = 0;
    let activePos = document.querySelector('.showSlide');
    for (slidePos = 0; activePos = activePos.previousElementSibling; slidePos++){ };

    //cho slide truoc hien len
    if (slidePos != 0) {
        for (let i = 0; i < slide.length; i++) {
            slide[i].classList.remove('showSlide');
            slide[slidePos - 1].classList.add('showSlide');
            nextSlide[i].classList.remove('active');
            nextSlide[slidePos - 1].classList.add('active');
        }
    } else {
        for (let i = 0; i < slide.length; i++) {
            slide[i].classList.remove('showSlide');
            slide[slide.length - 1].classList.add('showSlide');
            nextSlide[i].classList.remove('active');
            nextSlide[slide.length - 1].classList.add('active');
        }
    }
}


//nut slide phai
arrowRight.onclick = function rightSlide() {
    // tinh vi tri slide
    let slidePos = 0;
    let activePos = document.querySelector('.showSlide');
    for (slidePos = 0; activePos = activePos.previousElementSibling; slidePos++){ };
    console.log(slidePos);

    //cho slide sau hien len
    if (slidePos != slide.length-1) {
        for (let i = 0; i < slide.length; i++) {
            slide[i].classList.remove('showSlide');
            slide[slidePos + 1].classList.add('showSlide');
            nextSlide[i].classList.remove('active');
            nextSlide[slidePos + 1].classList.add('active');
        }
    } else {
        for (let i = 0; i < slide.length; i++) {
            slide[i].classList.remove('showSlide');
            slide[0].classList.add('showSlide');
            nextSlide[i].classList.remove('active');
            nextSlide[0].classList.add('active');
        }
    }
}

//dropdown
dropDown.onclick = function () {
    dropDownItem.classList.toggle('dropDownShow')
}