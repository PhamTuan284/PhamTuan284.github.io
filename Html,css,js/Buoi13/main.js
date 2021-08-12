// //viết hàm ngẫu nhiên từ 0 đến n
// let rand1 = (n) => Math.floor(Math.random() * n);
// // chuyển đổi 1 số từ hệ có số này sang hệ cơ số khác
// // 
// function convert(n,c1,c2) {
//     return parseInt(n, c1).toString(c2);
// }
// convert(255, 10, 16)
// //tạo số ngẫu nhiên từ a sang b
// function rand2(a,b) {
//     return Math.floor((Math.random() * b) + a);
// }

// //mã màu ngẫu hiên HEX
// function hex() {
//     return Math.floor(Math.random() * 255).toString(16)
//         + Math.floor(Math.random() * 255).toString(16)
//         + Math.floor(Math.random() * 255).toString(16);
// }

// //cắt chuỗi từ vị trí đầu tiên tới vị trí chỉ định VD: "abcd",2 =>"abc"
// function cut(s, index) {
//     return s.substring(0, index + 1);
// }
// cut("abcd", 2);
// // đổi một tên thành tên viết tắt VD: "Ba Nguyễn" -> Ba N.
// function short(s) {
//     let space = s.indexOf(" ");
//     return s.substring(0, space + 2) + ".";
// }

// // viết hàm ẩn địa chỉ email VD: tuanpham22790@gmail.com -> tu...@gmail.com
// function email(s) {
//     return s.replace(s.substring(2, s.indexOf("@")) , "...")
// }
// email("tuanpham22@gmail.com");

//array
// viết hàm arr1._concat(arr2) gộp các phần tử của mảng vào arr2 vào arr1
// let arr = [1, 2, 3];
// arr._concat = function (arr2) {
//     let result = [];
//     for (let i = 0; i < this.length; i++){
//         result[result.length] = this[i];
//     };
//     for (let i = 0; i < arr2.length; i++){
//         result[result.length] = arr2[i];
//     }; 
// }
// console.log(arr._concat([3, 4]));

// // push(value) thêm giá trị vào cuối mảng
// let arr = [1,2,3]
// arr._push = function (value) {
//     this[this.length] = value;
//     return this;
// }

// // pop() xóa ptu cuối mảng, đồng thời trả về giá trị của phần tử bị xóa
// arr._pop = function () {
//     let result = [];
//     for (let i = 0; i < this.length; i++){
//         result[result.length] = this[i];
//     };
//     let del = result[result.length - 1];
//     console.log("Phan tu bi xoa " + del);
//     result.length = result.length - 1;
//     return result;
// }

// // indexOf(value) tìm và trả về index của ptu, nếu k có trả về -1
// arr._indexOf = function (value) {
//     let index = -1;
//     for (let i = 0; i < this.length; i++){
//         if (value == this[i]) {
//             return i;
//         }
//     }
//     return index;
// }

// // reverse() đảo ngược giá trị mảng
// arr._reverse = function () {
//     for (let i = 0, j = this.length - 1; i < j; i++,j--){
//             let temp = this[i];
//             this[i] = this[j];
//             this[j] = temp;
//     }
//     return this;
// }

// arr._reverse();

// //
// function f(number) {
//     console.log(number);
// }

// arr._forEach = function (callback) {
//     for (let i = 0; i < this.length; i++){
//         callback(this[i])
//     }
// }

// arr._forEach(f);

// //filter
// function f(object) {
    
// }

// arr._filter = function (callback) {
//     let result = [];
//     for (let i = 0; i < this.length; i++){
//         if (callback[this[i]]) {
//             result.push(this[i]);
//         } 
//     }   
//     return result
// } 

//map
let arr = [
    { name: "Ba", age: 29 },
    { name: "Bon", age:3}
];
arr._map = function (callback) {
    let result = [];
    for (let i = 0; i < this.length; i++){
        result.push(callback(this[i]))
    }
    return result;
}

// reduce
arr._reduce = function (callback, inditial) {
    let accumulator = inditial;
    for (let i = 0; i < this.length; i++){
        accumulator = callback(accumulator, this[i])
    }
    return accumulator
}
arr._reduce((sum, i) => (sum += i.age), 0);

// 1. Viết hàm chuyển đổi một chuỗi thành dạng capitalize. VD: “hello world” => “Hello World”
function capitalize(string) {
    let space = string.indexOf(" ");
    let newString = string.charAt(0).toUpperCase() + string.slice(1);
    return newString.replace(string[space + 1], string[space + 1].toUpperCase());
}
capitalize("string hello world");

// 2. Viết hàm chuyển đổi một chuỗi thành dạng paramaterize. VD “Hello World” => “hello-world”
function paramaterize(string) {
    let newString = "";
    for (let i = 0; i < string.length; i++){
        if (string[i] == string[i].toUpperCase()) {
            newString += string[i].toLowerCase();
        } else newString += string[i];
    }
    let space = newString.indexOf(" ");
    return newString.replace(/\s/g,"-");
}
paramaterize("string Hello World");

// 3. Viết hàm loại bỏ khoảng trắng ở đầu, cuối, và rút gọn khoảng trắng ở giữa các từ trong chuỗi. VD: “Hello world ! ” => “Hello world !”
let deleteSpace = (string) => string.replace(/\s+/g, " ");

deleteSpace("Hello    world   !");

// 4. Viết hàm đảo ngược chữ thường thành chữ hoa, và ngược lại. VD “aBcD” => “AbCd”
function reverse(string) {
    let newString = "";
    for (let i = 0; i < string.length; i++){
        if (string[i] == string[i].toUpperCase()) {
            newString += string[i].toLowerCase()
        } else if (string[i] == string[i].toLowerCase()) {
            newString += string[i].toUpperCase()
        } else {
            newString += string[i];
        }
    }
    return newString;
}
reverse("aBcD");

// 5. Viết hàm lặp chuỗi n lần. VD “Hehe”, 3 => “HeheHeheHehe”
function repeat(string, n) {
    let newString = "";
    for (let i = 0; i < n; i++){
        newString += string;
    }
    return newString;
}
repeat("Hehe", 3);

// 6. Viết hàm chèn một chuỗi con vào chuỗi tại index chỉ định. VD “ac”, “b”, 1 => “abc”
let addIndex = (string1, string2, index) => string1.slice(0, index) + string2 + string1.slice(index)

addIndex("abc", "a", 1);
// 7. Viết hàm rút gọn chuỗi nếu chuỗi dài hơn giá trị chỉ định. VD “abcdef”, 2 => “ab...”;
function shortened(string, index) {
    if (string.length > index) {
        return string.replace(string.substring(index, string.length), "...")
    } else return string;
}
shortened("abcde", 2);

// 8. Viết hàm đếm số lần xuất hiện của chuỗi con trong chuỗi. VD “abca”, “a” => 2
let count =(string1, string2) => string1.split(string2).length - 1;

count("abca", "a")

// 9. Viết hàm cắt chuỗi theo số từ chỉ định. VD “My name is Ba”, 2 => “My name”
function cutString(string, n) {
    let newString = "";
    for (let i = 0; i < n; i++){
        newString += string.split(" ")[i] + " ";
    }
    return newString
}
cutString("My name is Tuan", 2);

// 10. Viết hàm tạo chuỗi GUID ngẫu nhiên với độ dài 32 ký tự. VD “sfjh2ih4(U#%(kljo423oiir*(#%UIOJ”
function newGUID(){
    let newGuid = "";
    for (let i = 0; i < 32; i++){
        newGuid += Math.floor(Math.random() * 0xF).toString(0xF);
    }
  return newGuid;
}
newGUID();

// 11. Viết hàm thay thế các ký tự trong chuỗi thành ký tự liền sau trong bảng mã Unicode. VD: “ad” => “be”
function unicode(s) {
    let result = "";
    for (let i = 0; i < s.length; i++){
        result += String.fromCodePoint(s.charCodeAt(i) +1);
    }
    return result;
}
unicode("abd");

//////////////////////////////////////////////////////
// array.includes(element, start)
// tác dụng: xác định xem một mảng có chứa phần tử được chỉ định (element) không 

// tham số truyền vào
// element (Required): phần tử muốn tìm kiếm
// start (Optional): điểm bắt đầu tìm kiếm trong mảng

// trả về giá trị
// boolean

// ví dụ
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var n = fruits.includes("Banana", 3); // false


//////////////////////////////////////////////////////
// array.map(function(currentValue, index, arr), thisValue)
// tác dụng: lặp qua tất cả phần tử của mảng, tạo ra một mảng mới trong đó mỗi phần tử lần lượt thực hiện một function, mỗi lần lặp qua một phần tử sẽ gọi đến function đó

// tham số truyền vào
// currentValue (Required): giá trị của phần tử hiện tại
// index (Optional): chỉ số của phần tử hiện tại
// arr (Optional): đối tượng mà phần tử hiện tại thuộc về
// thisValue (Optional): một giá trị được dùng như "this" khi thực hiện lặp

// trả về giá trị
// array

// ví dụ
var numbers = [65, 44, 12, 4];
var newarray = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}
console.log(newarray); // [650, 440, 120, 40]


//////////////////////////////////////////////////////
// array.find(function(currentValue, index, arr),thisValue)
// tác dụng: trả về giá trị đầu tiên thỏa mãn điều kiện(được đặt ra bởi một function), phương thức này sẽ thực hiện function mỗi lần đi qua 1 phần tử trong mảng

// tham số truyền vào
// currentValue (Required): giá trị của phần tử hiện tại
// index (Optional): chỉ số của phần tử hiện tại
// arr (Optional): đối tượng mà phần tử hiện tại thuộc về
// thisValue (Optional): một giá trị được dùng như "this" khi thực hiện lặp

// trả về giá trị
// boolean

// ví dụ
var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

ages.find(checkAdult); //18


//////////////////////////////////////////////////////
// Array.isArray(obj)
// tác dụng: kiểm tra đối tượng có phải là mảng hay không

// tham số truyền vào
// obj: đối tượng

// trả về giá trị
// boolean

// ví dụ
function myFunction() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
}
console.log(Array.isArray(fruits))


//////////////////////////////////////////////////////
// Array.from(object, mapFunction, thisValue)
// tác dụng: trả về một mảng các đối tượng từ một đối tượng được truyền vào

// tham số truyền vào
// object: đối tượng 
// mapFunction: function được gọi mỗi khi lặp qua 1 phần tử trong mảng
// thisValue: một giá trị được dùng như "this" khi thực hiện mapFunction

// trả về giá trị
// array

// ví dụ
var myArr = Array.from("ABCDEFG");
console.log(myArr) // ["A", "B", "C", "D", "E", "F", "G"]


//////////////////////////////////////////////////////
// array.filter(function(currentValue, index, arr), thisValue)
// tác dụng: lặp qua tất cả phần tử của mảng, tạo ra một mảng mới chứa tất cả những phần tử thỏa mãn điều kiện

// tham số truyền vào
// currentValue (Required): giá trị của phần tử hiện tại
// index (Optional): chỉ số của phần tử hiện tại
// arr (Optional): đối tượng mà phần tử hiện tại thuộc về
// thisValue (Optional): một giá trị được dùng như "this" khi thực hiện lặp

// trả về giá trị
// array

// ví dụ
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

ages.filter(checkAdult); //[32, 33, 40]

//////////////////////////////////////////////////////
//array.fill(value, start, end)
// tác dụng: thay đổi giá trị tất cả các phần tử của một mảng thành một giá trị tĩnh cho trước, có thể xác định vị trí bắt đầu và kết thúc của hàm fill() trong mảng, mặc định nó sẽ áp dụng cho tất cả các phần tử của mảng

// tham số truyền vào
// value (Required): giá trị tĩnh sẽ được thay thế cho các phần tử trong mảng
// start (Optional): vị trị bắt đầu thay thế trong mảng
// end (Optional): vị trí kết thúc thay thế

// trả về giá trị
// array

// ví dụ
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi"); // ["Kiwi", "Kiwi", "Kiwi", "Kiwi"]


//////////////////////////////////////////////////////
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
// tác dụng: biến đổi một mảng thành một giá trị đơn giản, thực hiện một hàm được cung cấp cho mỗi giá trị của mảng, từ trái qua phải, trả về một kết quả được lưu trữ

// tham số truyền vào
// total (Required): giá trị trả lại trước đó của function
// currentValue (Required): giá trị của phần tử hiện tại
// currentIndex (Optional): chỉ số của phần tử hiện tại
// arr (Optional):  mảng mà phần tử hiện tại thuộc về.
// initialValue (Optional):  tham số không bắt buộc. Nếu được truyền vào thì initialValue sẽ được sử dụng làm giá trị ban đầu của function

// trả về giá trị
// single value

// ví dụ
var numbers = [175, 50, 25];

numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
} 
//100



