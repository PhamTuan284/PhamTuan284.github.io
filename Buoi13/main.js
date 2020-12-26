
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
function NewGuid(){
    let newGuid = "";
    for (let i = 0; i < 32; i++){
        newGuid += Math.floor(Math.random() * 0xF).toString(0xF);
    }
  return newGuid;
}
NewGuid();

// 11. Viết hàm thay thế các ký tự trong chuỗi thành ký tự liền sau trong bảng mã Unicode. VD: “ad” => “be”
function unicode(s) {
    let result = "";
    for (let i = 0; i < s.length; i++){
        result += String.fromCodePoint(s.charCodeAt(i) +1);
    }
    return result;
}
unicode("abd");