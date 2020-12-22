//bài 1
// function random(a, b) {
//     return Math.random() * (b - a + 1)
// }

//arrow
// let random = (a,b) => Math.random() * (b - a + 1)

//bài 2
// function isTriangle(a, b, c) {
//     if (a + b > c && b + c > a && a + c > b) {
//         return console.log("3 cạnh là tam giác")
//     } else return console.log("3 cạnh không là tam giác");
// }

//arrow
// let isTriangle = (a, b, c) => a + b > c && b + c > a && a + c > b ? console.log("3 cạnh là tam giác") : console.log("3 cạnh không là tam giác")

//bài 3
// function guessNumber() {
//     let count = 0;
//     let random = Math.floor(Math.random() * 11)
//     console.log("Số random là "+random);
//     let n = +prompt("Hãy đoán một số từ 0 đến 10");
//     while (count < 2 && n != false && !isNaN(n)) {
//         if (n == random) {
//             alert("Â mây zing, gút chóp");
//             break;
//         } else {
//             count++;
//             n = +prompt("Không khớp, xin mời nhập lại")
//         } 
//     }
// }

//arrow
// let guessNumber = () => {
//     let count = 0;
//     let random = Math.floor(Math.random() * 11)
//     console.log("Số random là "+random);
//     let n = +prompt("Hãy đoán một số từ 0 đến 10");
//     while (count < 2 && n != false && !isNaN(n)) {
//         if (n == random) {
//             alert("Â mây zing, gút chóp");
//             break;
//         } else {
//             count++;
//             n = +prompt("Không khớp, xin mời nhập lại")
//         } 
//     }
// }
// guessNumber()

//bài 4
// function nearest(a, b) {
//     let countA = 0,
//         countB = 0,
//         printA = a,
//         printB = b;
//     if (a > 100) {
//         while (a != 100) {
//             countA++;
//             a--;
//         }
//     } else {
//         while (a != 100) {
//             countA++;
//             a++;
//         }
//     }
//     if (b > 100) {
//         while (b != 100) {
//             countB++;
//             b--;
//         }
//     } else {
//         while (b != 100) {
//             countB++;
//             b++;
//         }
//     }
//     countA > countB ? console.log("Số gần với 100 hơn là "+printB) : console.log("Số gần với 100 hơn là "+printA)
// }

//arrow
// let nearest = (a, b) => {
//     let countA = 0,
//         countB = 0,
//         printA = a,
//         printB = b;
//     if (a > 100) {
//         while (a != 100) {
//             countA++;
//             a--;
//         }
//     } else {
//         while (a != 100) {
//             countA++;
//             a++;
//         }
//     }
//     if (b > 100) {
//         while (b != 100) {
//             countB++;
//             b--;
//         }
//     } else {
//         while (b != 100) {
//             countB++;
//             b++;
//         }
//     }
//     countA > countB ? console.log("Số gần với 100 hơn là "+printB) : console.log("Số gần với 100 hơn là "+printA)
// }
// nearest();

//bài 5
// function sequense(a, b, c) {
//     if (a >= b && b >= c) {
//         console.log("giảm dần")
//     } else if (a <= b && b <= c) {
//         console.log("tăng dần")
//     } else console.log("không biết");
// }

//arrow
// let sequense = (a, b, c) => a >= b && b >= c ? console.log("giảm dần") : a <= b && b <= c ? console.log("tăng dần") : console.log("không biết");
// sequense();

//bài 6
// function countDecimal(number) {
//     console.log((String(number).split(".")[1]).length)
// }
// arrow
// let countDecimal = (number) => console.log((String(number).split(".")[1]).length)

//bài 7
// function isAscending(number) {
//     let numberStr = String(number);
//     for (let i = 0; i < numberStr.length-1; i++){
//         if (numberStr[i] > numberStr[i + 1]) {
//             return console.log("không tăng dần");
//         }
//     } return console.log("tăng dần");
// }

//arrow
// let isAscending = (number) => {
//     let numberStr = String(number);
//     for (let i = 0; i < numberStr.length-1; i++){
//         if (numberStr[i] > numberStr[i + 1]) {
//             return console.log("không tăng dần");
//         }
//     } return console.log("tăng dần");
// }
// isAscending(123);

//bài 8
// function countEven(number) {
//     let length = String(number).length - 1,
//         result = "";
//     for (let i = 0; i < length; i++){
//         if (number % 2 == 0) {
//             result += String(Math.trunc(number))[String(Math.trunc(number)).length - 1]
//         }
//         if (Math.trunc(number /= 10) % 2 == 0) {
//             result+=String(Math.trunc(number))[String(Math.trunc(number)).length - 1]
//         }
//     }
//     console.log("Số chẵn là " + result);
// }

//arrow
// let countEven =(number) =>{
//     let length = String(number).length - 1,
//         result = "";
//     for (let i = 0; i < length; i++){
//         if (number % 2 == 0) {
//             result += String(Math.trunc(number))[String(Math.trunc(number)).length - 1]
//         }
//         if (Math.trunc(number /= 10) % 2 == 0) {
//             result+=String(Math.trunc(number))[String(Math.trunc(number)).length - 1]
//         }
//     }
//     console.log("Số chẵn là " + result);
// }
// countEven(123456);

//bài 9
// function find(number) {
//     let n = 0,
//         sum = 0;
//     for (let i = 1; i < number; i++){
//         sum += i;
//         if (sum > number) {
//             n = i-1;
//             break;
//         }
//     }
//     return n
// }

//arrow
// let find = (number) => {
//     let n = 0,
//         sum = 0;
//     for (let i = 1; i < number; i++){
//         sum += i;
//         if (sum > number) {
//             n = i-1;
//             break;
//         }
//     }
//     return n
// }

//bài 10
// function sum(value1, unit1, value2, unit2) {
//     let sum = 0;
//     if (unit1 == "km") {
//         unit2 == "km" ? sum = value1 + value2 + "km"
//         : unit2 == "m" ? sum = value1 + (value2 *0.001) + "km"
//         : unit2 == "dm" ? sum = value1 + (value2 *0.0001) + "km"
//         : unit2 == "cm" ? sum = value1 + (value2 *0.00001) + "km"
//         : sum = value1 + (value2 *0.000001) + "km" 
//     }
//     else if (unit1 == "m") {
//         unit2 == "km" ? sum = value1 + (value2 * 1000) + "m"
//         : unit2 == "m" ? sum = value1 + value2 + "m"
//         : unit2 == "dm" ? sum = value1 + (value2 *0.1) + "m"
//         : unit2 == "cm" ? sum = value1 + (value2 *0.01) + "m"
//         : sum = value1 + (value2 *0.001) + "m" 
//     }
//     else if (unit1 == "dm") {
//         unit2 == "km" ? sum = value1 + (value2 * 10000) + "dm"
//         : unit2 == "m" ? sum = value1 + (value2 * 10) + "dm"
//         : unit2 == "dm" ? sum = value1 + value2 + "dm"
//         : unit2 == "cm" ? sum = value1 + (value2 *0.1) + "dm"
//         : sum = value1 + (value2 *0.01) + "dm" 
//     }
//     else if (unit1 == "cm") {
//         unit2 == "km" ? sum = value1 + (value2 * 100000) + "cm"
//         : unit2 == "m" ? sum = value1 + (value2 *100) + "cm"
//         : unit2 == "dm" ? sum = value1 + (value2 *10) + "cm"
//         : unit2 == "cm" ? sum = value1 + value2 + "cm"
//         : sum = value1 + (value2 *0.1) + "cm" 
//     } else {
//         unit2 == "km" ? sum = value1 + (value2 * 1000000) + "mm"
//         : unit2 == "m" ? sum = value1 + (value2 *1000) + "mm"
//         : unit2 == "dm" ? sum = value1 + (value2 *100) + "mm"
//         : unit2 == "cm" ? sum = value1 + (value2 *10) + "mm"
//         : sum = value1 + value2 + "mm" 
//     }
//     return sum
// }

//arrow
// let sum = (value1, unit1, value2, unit2) => {
//     let sum = 0;
//     if (unit1 == "km") {
//         unit2 == "km" ? sum = value1 + value2 + "km"
//         : unit2 == "m" ? sum = value1 + (value2 *0.001) + "km"
//         : unit2 == "dm" ? sum = value1 + (value2 *0.0001) + "km"
//         : unit2 == "cm" ? sum = value1 + (value2 *0.00001) + "km"
//         : sum = value1 + (value2 *0.000001) + "km" 
//     }
//     else if (unit1 == "m") {
//         unit2 == "km" ? sum = value1 + (value2 * 1000) + "m"
//         : unit2 == "m" ? sum = value1 + value2 + "m"
//         : unit2 == "dm" ? sum = value1 + (value2 *0.1) + "m"
//         : unit2 == "cm" ? sum = value1 + (value2 *0.01) + "m"
//         : sum = value1 + (value2 *0.001) + "m" 
//     }
//     else if (unit1 == "dm") {
//         unit2 == "km" ? sum = value1 + (value2 * 10000) + "dm"
//         : unit2 == "m" ? sum = value1 + (value2 * 10) + "dm"
//         : unit2 == "dm" ? sum = value1 + value2 + "dm"
//         : unit2 == "cm" ? sum = value1 + (value2 *0.1) + "dm"
//         : sum = value1 + (value2 *0.01) + "dm" 
//     }
//     else if (unit1 == "cm") {
//         unit2 == "km" ? sum = value1 + (value2 * 100000) + "cm"
//         : unit2 == "m" ? sum = value1 + (value2 *100) + "cm"
//         : unit2 == "dm" ? sum = value1 + (value2 *10) + "cm"
//         : unit2 == "cm" ? sum = value1 + value2 + "cm"
//         : sum = value1 + (value2 *0.1) + "cm" 
//     } else {
//         unit2 == "km" ? sum = value1 + (value2 * 1000000) + "mm"
//         : unit2 == "m" ? sum = value1 + (value2 *1000) + "mm"
//         : unit2 == "dm" ? sum = value1 + (value2 *100) + "mm"
//         : unit2 == "cm" ? sum = value1 + (value2 *10) + "mm"
//         : sum = value1 + value2 + "mm" 
//     }
//     return sum
// }