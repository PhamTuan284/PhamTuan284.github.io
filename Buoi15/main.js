
// 1. Đếm xem có tất cả bao nhiêu từ trong 2 đoạn văn có độ dài lớn hơn 8
// 2. Style cho các từ có độ dài lớn hơn 8 trong p1
// 3. Thay thế các từ có độ nhỏ hơn 8 trong p2 thành "Anh Ba đẹp trai 🤣". Lưu ý thay thế đúng không thì 0đ!!!

let p = document.querySelectorAll("p");
let countLetter = (string) => {
    for (let i = 0; i <= string.length; i++) {
        if (string[string.length - 1] === ",") {
            string = string.slice(0, string.indexOf(","));
        }
        if (string[string.length - 1] === "?") {
            string = string.slice(0, string.indexOf("?"));
        }
        if (string[string.length - 1] === "!") {
            string = string.slice(0, string.indexOf("!"));
        }
        if (string.length > 8) {
            return true
        } else return false
    }
}
let pCount = (p) => {
    let count = 0;
    for (let i = 0; i < p.length; i++){
        let pSplit = p[i].innerHTML.split(" ");
        for (let j = 0; j < pSplit.length; j++){
            if (countLetter(pSplit[j])) {
                pSplit[j] = `<div class='red'> ${pSplit[j]}</div>`
                count++;
            } else {
                if (pSplit[j] != " ") {
                    pSplit[j] = "Anh Ba đẹp trai 🤣"
                }
            }
        }
        let pReplace = pSplit.join(" ");
        p[i].innerHTML = pReplace;
    }
    console.log(count);
}
pCount(p);

// 4. Thêm src, alt, href cho ảnh, link
let img = document.querySelector("img");
img.outerHTML = '<img src="http://placeimg.com/640/480/any" alt="" href="#"/>'

let a = document.querySelector("a");
a.outerHTML = '<a href="https://www.facebook.com/">link</a>'

// 5. Thêm background cho các ô ngẫu nhiên trong bảng (mỗi hàng 1 ô, style bằng .style.backgroundColor), và thay đổi nội dung trong các ô đó thành "😍 Mr. Ba đẹp trai"
let tr = document.querySelectorAll("tr");
for (let i = 0; i < tr.length; i++) {
    let tdRandom = tr[i].children[Math.floor(Math.random() * 4)];
    tdRandom.style.backgroundColor = "red";
    tdRandom.innerHTML = "😍 Mr. Ba đẹp trai";
}