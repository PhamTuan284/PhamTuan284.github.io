// function sum(a, b, ...other) {
//     let total = a + b;
//     for (let n of other) {
//         total += n;
//     }
//     return total;
// }
// console.log(sum(1,2,3,4,5,6,7));


// let sum = (...numbers) => { //numbers là mảng [] chứa toàn bộ tham số truyền vào hàm
//     let total = 0;
//     for (let i = 0; i < numbers.length; i++){
//         total += numbers[i];
//     }
//     return total;
// }

// var a = [1, 2, 3, 4, 5];
// var sum = (...args) => {
//     console.log(args);
// }
// console.log(sum(...a));

// var sum = (a, b) => a + b;
// console.log(sum(...a));

// var [v1, v2, v3] = [1];
var user = {
    name: "Ba",
    handsome: true
}

var name = "Beo U";
var { name: userName, badboy = false } = user;
console.log(name);
console.log(userName);
