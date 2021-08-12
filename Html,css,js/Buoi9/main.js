// bai 1: tính chu vi, diện tích hcn
// let chieuDai = +prompt("Nhập chiều dài = ");
// let chieuRong = +prompt("Nhập chiều rộng = ")
// console.log("Diện tích là = ", chieuDai * chieuRong);
// console.log("Chu vi là = ", (chieuDai + chieuRong) * 2);

//bai 2: nhap vao ban kinh hinh tron, in ra chu vi, dien tich
// let r = +prompt("Nhập vào bán kính hình tròn");
// const PI = 3.14;
// console.log("Diện tích hình tròn là ", r * r * PI);
// console.log("Chu vi hình tròn là ", 2 * r * PI);

//bai 3: nhập vào số a,b của phương trình ax+b=0, tình và in ra nghiệm
// let a = +prompt("Nhập số a");
// let b = +prompt("Nhập số b");
// if (a == 0 && b == 0) {
//     console.log("Phương trình có vô số nghiệm");
// } else if (a != 0) {
//     console.log("Nghiệm của phương trình là x = ", -b / a);
// } else {
//     console.log("Phương trình vô nghiệm");
// }

//bài 4: nhập vào số đơn vị là cm, in ra giá trị tương ứng là mm, m, km
// let cm = +prompt("Nhập vào số cm");
// let mm = cm * 10,
//     m = cm * 0.01,
//     km = cm * 0.00001;
// console.log(cm + " cm = " + mm + " mm");
// console.log(cm + " cm = " + m + " m");
// console.log(cm + " cm = " + km + " km");


//bài 5: nhập vào độ C, in ra độ F, K
// let c = +prompt("Nhập vào độ C");
// let f = c * 1.8 + 32,
//     k = c + 273.15;
// console.log(c + " độ C = " + f + " độ F");
// console.log(c + " độ C = " + k + " độ K");

//bài 6: nhập vào số phút tính từ 0h, in ra giờ/ phút tương ứng
// let a = +prompt("Nhập số phút");
// let h = Math.floor(a / 60);
// let m = a % 60;
// console.log(h, m);
// if (m >= 0) {
//     console.log(h + "h" + m + "m");
// } else {
//     console.log("Nhập sai, mời bạn nhập lại");
// }

// let a = +prompt("Nhập số phút");
// var m = a%60 
// var h = (a - m)/60 
// console.log(h + "h" + m + "m");

// bài 1: nhập vào 3 số, in ra số lớn nhất
// let a = +prompt("Nhập số thứ nhất"),
//     b = +prompt("Nhập số thứ hai"),
//     c = +prompt("Nhập số thứ ba"),
//     max = a;
// if (max < b) {
//     max = b;
// }
// if (max < c) {
//     max = c;
// }
// console.log(max);

//bài 2: nhập vào 1 số, kiểm tra và in ra số có chia hết 5 và 11 không
// let a = +prompt("Nhập một số");
// if (a % 5 == 0) {
//     console.log(a + " chia hết cho 5");
// } else {
//     console.log(a + " không chia hết cho 5")
// }
// if (a % 11 == 0) {
//     console.log(a + " chia hết cho 11");
// } else {
//     console.log(a + " không chia hết cho 11");
// }

//bài 3: nhập vào 1 năm, kiểm tra và in ra có phải năm nhuận không
// let year = +prompt("Năm muốn kiểm tra");
// if (year % 4 == 0) {
//   if (year % 100 == 0) {
//     if (year % 400 == 0) {
//       console.log(year + " là năm nhuận");
//     } else {
//       console.log(year + " không là năm nhuận");
//     }
//   } else {
//     console.log(year + " là năm nhuận");
//   }
// } else {
//   console.log(year + " không là năm nhuận");
// }

//bài 4: nhập vào 1 ký tự, in ra ký tự đó có thuộc bảng alphabe không
// let a = prompt("Nhập vào một ký tự");
// if (a >= "a" && a <= "z" || a >= "A" && a <= "Z") {
//     console.log(a + " thuộc bảng alphabe");
// } else {
//     console.log(a + " không thuộc bảng alphabe");
// }

//bài 5: nhập vào 1 ký tự, kiểm tra là nguyên âm hay phụ âm
// let a = prompt("Nhập vào một ký tự");
// if (a == 'a' || a == 'A' || a == 'e' || a == 'E' || a == 'i' || a == 'I' || a == 'o' || a == 'O' || a == 'u' || a == 'U') {
//     console.log(a + " là nguyên âm");
// } else {
//     console.log(a + " là phụ âm");
// }

//bài 6: nhập vào 1 ký tự, kiểm tra là chữ hoa hay thường
// let a = prompt("Nhập vào một ký tự");
// if (a >= "a" && a <= "z" ) {
//     console.log(a + " là chữ thường");
// } else if(a >= "A" && a <= "Z"){
//     console.log(a + " là chữ hoa");
// } else {
//     console.log("Bạn đã nhập sai, hãy nhập lại");
// }

//bài 7: nhập vào 3 số a,b,c của pt ax^2 +bx + c= 0, tính ra nghiệm
// let a = +prompt("Nhập vào số a"),
//     b = +prompt("Nhập vào số b"),
//     c = +prompt("Nhập vào số c");
// let x, x1, x2;
// let delta = b*b - 4*a*c;
// if (delta < 0) {
// console.log(" Phương trình vô nghiệm ");
// }
// else if (delta == 0) {
//     x = -b/2*a;
//     console.log("Phương trình có nghiệm kép = " + x);
// }
// else if (delta > 0) {
//     x1 = (-b + Math.sqrt(delta)) / (2 * a);
//     x2 = (-b - Math.sqrt(delta)) / (2 * a); 
//     console.log("Phương trình có 2 nghiệm: x1 = " + x1 + " và x2 = " + x2);
// }

//bài 8: quy đổi điểm hệ số 10 sang chữ với điểm =< 10 là A, < 8.5 là B, < 7.0 là C, < 5.5 là D, < 4.0 là F
// let a = +prompt("Nhập vào số điểm");
// if (a >= 0 && a < 4) {
//     console.log("F");
// } else if (a >= 4 && a < 5.5) {
//     console.log("D");
// } else if (a >= 5.5 && a < 7) {
//     console.log("C");
// } else if (a >= 7 && a < 8.5) {
//     console.log("B");
// } else if (a >= 8.5 && a <= 10) {
//     console.log("A");
// } else {
//     console.log("Bạn đã nhập sai, hãy nhập lại");
// }