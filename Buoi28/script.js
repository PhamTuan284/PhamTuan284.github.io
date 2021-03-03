// function asyn(callback) {
//     console.log("Start");
//     setTimeout(() => {
//         callback("Done")
//     }, 1000);
// }
// asyn((data) => console.log(data));
// console.log("Processing");


// function asyn(callback) {
//     console.log("Start");
//     setTimeout(() => {
//         callback("Done")
//     }, 1000);
// }
// function convert(data) {
//     console.log(data);
// }
// asyn((data) => {
//     convert(data);
// });
// console.log("Processing");


// function doSth() {
//     return {
//         error: null,
//         data: "This is data",
//     }
// }
// function asyn(callback) {
//     let { error, data } = doSth();
//     callback(error, data);
// }
// function convert(data) {
//     console.log("Convert function");
//     console.log(data);
// }
// function callback(error,data) {
//     if (error) {
//         console.log(error);
//     } else convert(data);
// }
// asyn(callback);


// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("12345");
//         // reject("khong lam duoc");
//     }, 2000);
// })
//     .then((data) => {
//         console.log("Done");
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log("Error");
//         console.log(error);
//     });
// console.log(promise);


// function cap(param) {
//     return param.split(" ").map((i) => i[0].toUpperCase() + i.slice(1).toLowerCase())
// }
// function capitalize(param, ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (typeof param == "string") {
//                 resolve(cap(param));
//             } else {
//                 reject("Error");
//             }
//         }, ms);
//     })
// }
// capitalize(["this is string", "string1 string2"], 5000)
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));


// function cap(param) {
//     return param
//         .split(" ")
//         .map((i) => i[0].toUpperCase() + i.slice(1).toLowerCase())
//         .join(" ")
// }
// function capitalize(param, ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             for (let i = 0; i < param.length; i++) {
//                 if (typeof param[i] == "string") {
//                     param[i] = cap(param[i])
//                 } else {
//                     reject("Error!!!")
//                 }
//             }
//             resolve(param)
//         }, ms);
//     })
// }
// capitalize(["this is string", "string1 string2"], 2000)
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));