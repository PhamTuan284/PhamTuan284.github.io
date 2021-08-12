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



// <!DOCTYPE html>
// <html lang="en">
//     <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>Dropdown</title>
//         <style>
//             .sub-menu {
//                 display: none;
//             }

//             .show {
//                 display: block !important;
//             }
//         </style>
//     </head>
//     <body>
//         <ul id="menu" class="menu">
//             <li class="menu-items">
//                 Dropdown 1
//                 <ul class="sub-menu">
//                     <li class="sub-items">Submenu 1 - 1</li>
//                     <li class="sub-items">Submenu 1 - 2</li>
//                     <li class="sub-items">Submenu 1 - 3</li>
//                 </ul>
//             </li>
//             <li class="menu-items">
//                 Dropdown 2
//                 <ul class="sub-menu">
//                     <li class="sub-items">Submenu 2 - 1</li>
//                     <li class="sub-items">Submenu 2 - 2</li>
//                     <li class="sub-items">Submenu 2 - 3</li>
//                 </ul>
//             </li>
//             <li class="menu-items">
//                 Dropdown 3
//                 <ul class="sub-menu">
//                     <li class="sub-items">Submenu 3 - 1</li>
//                     <li class="sub-items">Submenu 3 - 2</li>
//                     <li class="sub-items">Submenu 3 - 3</li>
//                 </ul>
//             </li>
//         </ul>

//         <p id="click"></p>
//         <script>
//             // Cái này để lưu cái li đã click trước đó
//             let prev;

//             // Thay vì thêm handler cho menu-item, mình thêm handler cho toàn trang (document), cái này gọi là nổi bọt sự kiện
//             // Nôm na chút, khi có một sự kiện xảy ra (ví dụ 'click') trên một thành phần trên trang, đầu tiên nó sẽ phát ra sự kiện click trên nó, sau đó, sự kiện sẽ được chuyển tiếp lên thành phần phía trên (cha mẹ)
//             // Vì bản chất các thành phần trên trang nó là các layer lồng nhau, khi click vào thành phần, thì cũng tương ứng click vào thành phần cha (right???)
//             document.addEventListener("click", function (ev) {
//                 // Ở đây, event target sẽ là đối tượng chính được click vào
//                 // Lấy ra nút DOM gần nhất có class là menu-items
//                 let li = ev.target.closest(".menu-items");

//                 // Tuy nhiên nếu click vào một khu vực khác, thì li sẽ bằng null
//                 // Vậy nên check xem có đúng là click vào li hay không
//                 if (li) {
//                     // Nếu đúng, kiểm tra xem trước đó đã click cái li nào hay chưa
//                     // Nếu click rồi, thì kiểm tra xem cái đã click trước đó có phải cái hiện tại click hay không (vì nếu click lại thì phải đóng chứ)
//                     // Nếu cái li trước đó không phải cái hiện tại, thì ẩn cái menu bên trong nó đi
//                     prev &&
//                         prev != li &&
//                         prev
//                             .querySelector(".sub-menu")
//                             .classList.remove("show");

//                     // Gán cho cái prev là cái menu hiện tại để check lần sau
//                     prev = li;
//                     // Cho hiển thị cái sub-menu trong li hiện tại
//                     li.querySelector(".sub-menu").classList.toggle("show");
//                     // Cái này lấy text ra làm màu tý thôi
//                     click.textContent = ev.target.firstChild.textContent;
//                 } else {
//                     // Nếu không có li, tức là click ra ngoài, thì kiểm tra xem trước đó đã click cái li nào hay chưa
//                     // Nếu có (prev không null) thì ẩn cái sub-menu của nó đi
//                     // Rồi xóa giá trị của prev đi (không có cái nào được check nữa)
//                     prev &&
//                         prev
//                             .querySelector(".sub-menu")
//                             .classList.remove("show") &&
//                         (prev = null);
//                 }
//             });
//         </script>
//     </body>
// </html>
