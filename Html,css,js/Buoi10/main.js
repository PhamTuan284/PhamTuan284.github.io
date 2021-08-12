// bai 1
// function multiplicationTables() {
//     for (let i = 2; i <= 9; i++){
//         for (let j = 1; j <= 10; j++){
//             document.write(i + "x" + j + "=" + i * j + " ");
//         }
//         document.write("</br>");
//     }
// }
// multiplicationTables();

//bài 2
// function fizzBizz(n) {
//     if (n >= 0 && n <= 100 && !isNaN(n) && n != null) {
//         if (+n % 3 !== 0 && +n % 5 !== 0) {
//             console.log("BizzFuzz");
//         } else if (+n % 3 == 0 && +n % 5 == 0) {
//             console.log("FizzBuzz");
//         } else if (+n % 3 == 0) {
//             console.log("Fizz");
//         } else if (+n % 5 == 0) {
//             console.log("Buzz")
//         } 
//     } else {
//         console.log("Bạn đã nhập sai, xin mời nhập lại");
//     }
// }
// fizzBizz();

// bài 3
// function commonMultiple() {
//     let result = 0;
//     document.write("Bội chung của 3 và 5 là ")
//     for (let i = 0; i <= 1000; i++){
//         if (i % 3 == 0 && i % 5 == 0) {
//             document.write(i + " ");
//             result += i;
//         }
//     }
//     document.write("</br>Tổng = " + result);
// }
// commonMultiple();

//bài 4
// function isPrime(n) {
//     let check = true;
//     if (!isNaN(n) && n != null && n > 1) {
//         for (let i = 2; i < n; i++) {
//             if (n % i == 0) {
//               check = false;
//             }
//           }
        
//         check
//         ? console.log(n + " là số nguyên tố")
//         : console.log(n + " không là số nguyên tố");
//     } else {
//         console.log("Bạn nhập sai, mời nhập lại");
//     }
// }
// isPrime();

//bài 5
// function isPrime() {
//     let result = "";
//     for (let n = 1; n < 1000; n++){
//         let count = 0; //đếm số ước của n
//         for (let i = 2; i <= Math.sqrt(n); i++){
//             if (n % i == 0) {
//                 count++
//             }
//         }
//         if (count == 0 && n > 1) {
//             result += n + " ";
//         }
//     }
//     console.log(result);
// }
// isPrime();

//bài 6
// function isPrime(a,b) {
//     let result = "";
//     if (b > a && a != b && !isNaN(a) && !isNaN(b) && a != null && b != null && a > 0) {
//         for (let n = a; n <= b; n++){
//             let count = 0; //đếm số ước của n
//             for (let i = 2; i <= Math.sqrt(n); i++){
//                 if (n % i == 0) {
//                     count++
//                 }
//             }
//             if (count == 0 && n > 1) {
//                 result += n + " ";
//             }
//         }
//         console.log(result);
//     } else {
//         console.log("Bạn nhập sai, mời nhập lại");
//     }
    
// }
// isPrime();

//bài 7
// function multiplicationTables() {
//     for (let i = 2; i <= 9; i++){
//         for (let j = 10; j >= 1; j--){
//             document.write(i + "x" + j + "=" + i * j + " ");
//         }
//         document.write("</br>");
//     }
// }
// multiplicationTables();

//bài 8
// function print(n) {
//     if (!isNaN(n) && n != null && n >= 10) {
//         let count = String(n).length - 1,
//         temp = 1;
//         for (i = 1; i <= count; i++){
//             temp *= 10;
//         }
//         console.log("Số đầu là " + (n - (n % temp)) / temp);
//         console.log("Số cuối là " + n % 10);
//     } else {
//         console.log("Bạn nhập sai, mời nhập lại")
//     }
// }
// print();

//bài 9
// function fibonacci(n) {
//     if (!isNaN(n) && n != null && n >=0) {
//         let n1 = 1,
//             n2 = 1,
//             n3 = 0;
//         if(n == 0 || n == 1){
//             console.log("1");
//         } else {
//             for (let i = 1; i <= n; i++){
//                 console.log(n1);
//                 n3 = n1 +n2;
//                 n1 = n2;
//                 n2 = n3;
//             }       
//         }
//     } else {
//         console.log("Ban nhap sai, hay nhap lai");
//     }
    
// }
// fibonacci();

//bài 10
// function a(a, b) {
//     if (!isNaN(a) && !isNaN(b) && a != null && b != null) {
//         //BCNN
//         let max = a * b;
//         if (a > b) {
//             for (let i = a; i <= max; i++) {
//                 if (i % a == 0 && i % b == 0) {
//                     console.log("Bội chung nhỏ nhất là " +i);
//                     break;
//                 }
//             }
//         } else {
//             for (let i = b; i <= max; i++) {
//                 if (i % a == 0 && i % b == 0) {
//                     console.log("Bội chung nhỏ nhất là " +i);
//                     break;
//                 }
//             }
//         }
//         //UCLN
//         if (a > b) {
//             for (let i = a; i > 0; i--){
//                 if (a % i == 0 && b % i == 0) {
//                     console.log("Ước chung lớn nhất là " +i);
//                     break;
//                 }
//             } 
//         } else {
//             for (let i = b; i > 0; i--){
//                 if (a % i == 0 && b % i == 0) {
//                     console.log("Ước chung lớn nhất là " +i);
//                     break;
//                 }
//             } 
//         }
//     } else {
//         console.log("Bạn đã nhập sai, mời nhập lại");
//     }
// }
// a();

//bài chuyển nhiệt độ
// function convertTemperature(temp, from = "C", to = "K") {
//     if (!isNaN(temp) && temp != null) {
//         // do C
//         if (from === "C") {
//             if (to === "K") {
//                 temp = temp + 273.15;
//                 console.log(temp);
//             } else if (to === "F") {
//                 temp = 1.8 * temp + 32;
//                 console.log(temp);
//             } else {
//                 console.log("Ban da nhap sai don vi thu hai, moi ban nhap lai")
//             }
//         }  
//         // do K
//         else if (from === "K") {
//             if (to === "C") {
//                 temp = temp - 273.15;
//                 console.log(temp);
//             } else if (to === "F") {
//                 temp = 1.8 * temp - 459.7;
//                 console.log(temp);
//             } else {
//                 console.log("Ban da nhap sai don vi thu hai, moi ban nhap lai")
//             }
//         }
//         // do F
//         else if (from === "F") {
//             if (to === "K") {
//                 temp = ((temp - 32) / 1.8) + 273.15;
//                 console.log(temp);
//             } else if (to === "C") {
//                 temp = (temp - 32) / 1.8;
//                 console.log(temp);
//             } else {
//                 console.log("Ban da nhap sai don vi thu hai, moi ban nhap lai")
//             }
//         } else {
//             console.log("Ban da nhap sai don vi dau tien, moi ban nhap lai");
//         }

//     } else {
//         console.log("Ban da nhap sai nhiet do, moi ban nhap lai");
//     }
// }
// convertTemperature();

//bài 11
// function sao1() {
//     for (i = 0; i < 5; i++){
//         for (j = 0; j <= i; j++){
//             document.writeln("*");
//         }
//         document.writeln("<br/>");
//     }
// }
// sao1();

// function sao2() {
//     for (i = 5; i >0 ; i--){
//         for (j = 1; j < i; j++)
//             document.writeln("&nbsp;&nbsp;");
//         for (j = 6; j > i; j--)
//             document.writeln("*");
//             document.writeln("<br>");
//     }
// }
// sao2();

// function sao3(){
//   for (i = 0; i < 5; i++){
//     for (j = 4; j > i; j--)
//         document.writeln("&nbsp;&nbsp;");
//     for (j = 0; j < i * 2 + 1; j++)
//         document.writeln("*");
//         document.writeln("<br>");
//   }
// }
// sao3()

// function sao4(){
//   for (i = 0; i < 3; i++){
//     for (j = 4; j > i; j--)
//         document.writeln("&nbsp;&nbsp;");
//     // for (j = 4; j < i; j++)
//     //     document.writeln("&nbsp;&nbsp;");
//     for (j = 0; j < i *2+1; j++)
//         document.writeln("*");
//       document.writeln("<br>");
//   }
//     for (i = 5; i > 3; i--){
//         for (j = 5; j < i; j++){
//             document.writeln("&nbsp;&nbsp;");
//         }
//         for (j = 5; j > i *2+1; j--)
//         document.writeln("*");
//       document.writeln("<br>");
//     }
// }
// sao4();

// function sao5() {
//     for (i = 0; i < 5; i++){
//         for (j = 4; j >= i; j--){
//             document.writeln("*");
//         }
//         document.writeln("<br/>");
//     }
// }
// sao5();

// function sao6(){
//   for (i = 0; i < 5; i++){
//     for (j = 0; j < i; j++)
//         document.writeln("&nbsp;&nbsp;");
//     for (j = 6; j >= i * 2; j--)
//         document.writeln("*");
//         document.writeln("<br>");
//   }
// }
// sao6();

// function sao7() {
//     for (i = 5; i >0 ; i--){
//         for (j = 5; j > i; j--)
//             document.writeln("&nbsp;&nbsp;");
//         for (j = 0; j < i; j++)
//             document.writeln("*");
//             document.writeln("<br>");
//     }
// }
// sao7();

// function sao12(){
// 	for(i = 0; i < 4; i++){
// 		for(j = 0; j < 10 ; j++)
// 			if((j == 4 - i) || (j == 4 + i))
// 				document.writeln("*");
// 			else
// 				document.writeln("&nbsp;&nbsp;");
// 				document.writeln("<br>");
// 	}
// 	for(j = 0; j < 9 ; j++)
// 	    document.writeln("*");
// }
    
// sao12();

// function sao13() {
//     for(j = 0; j < 9 ; j++)
//         document.writeln("*");
//         document.writeln("<br>");
// 	for(i = 0; i < 4; i++)
//         for (j = 0; j < 10; j++)
//             if ((j == 4 - i) || (j == 4 + i)) 
//                 document.writeln("&nbsp;&nbsp;");
// 				document.writeln("<br>");
//             else
//                 document.writeln("*");
        
	
// }
// sao13();