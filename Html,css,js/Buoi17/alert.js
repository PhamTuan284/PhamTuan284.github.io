// Tạo một nút click để hiển thị thông báo trên góc trình duyệt:

// - sau 2s tự động tắt

// - hoặc có nút tắt trong bảng thông báo

// Bonus: Có thể bấm nhiều thông báo

let alert = document.querySelector('.alert');
let ulAlert = document.querySelector('.ul-alert');
let button = document.querySelector('.button');

button.onclick = function () {
    let li = document.createElement("li");
    li.innerHTML = "A Ba đẹp trai";
    ulAlert.append(li);
    let time = setInterval(function () {
        ulAlert.removeChild(li)
    },2000)
}