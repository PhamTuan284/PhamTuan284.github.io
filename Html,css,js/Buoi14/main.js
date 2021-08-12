// //1
// let tbc = [1, 2, 3, 4, 5, 6, 7, 8];
// function caculator(arr) {
//     result = 0;
//     count = 0;
//     for (let i = 0; i < arr.length; i++){
//         result += arr[i];
//         count++
//     }
//     return result / count;
// }

// // //2. Cho một mảng số, viết hàm tìm index của một số trong mảng
// function indexArr(arr,n) {
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] === n) {
//             return i;
//         }
//     }
// }
// indexArr(tbc, 5);

// // //3. Viết hàm sao chép một mảng số
// let copy = (arr) => arr.map((i) => i);


// // //4. Cho một mảng số, viết hàm tìm giá trị lớn nhất trong mảng
// function maxArr(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// // //5. Viết hàm đổi chỗ vị trí 2 phần tử trong mảng
// function swap(arr, n1, n2) {
//     let temp = arr[n1];
//     arr[n1] = arr[n2];
//     arr[n2] = temp;
//     return arr;
// }

// // //6. Cho một mảng số đã được sắp xếp tăng dần, viết hàm tìm số lớn thứ 2 trong mảng
// function max2(arr) {
//     // let snd = arr[arr.length - 1];
//     // for (let i = arr.length - 1; i >= 0; i--){
//     //     if (arr[i] < snd) {
//     //         snd = arr[i];
//     //         break;
//     //     }
//     // }
//     // return snd;
// }
// max2(tbc);

// // //7. Viết hàm chuyển đổi một chuỗi thành dạng capitalize. VD “hello world” => “Hello World”
// function capitalize(string) {
//     let space = string.indexOf(" ");
//     let newString = string.charAt(0).toUpperCase() + string.slice(1);
//     return newString.replace(string[space + 1], string[space + 1].toUpperCase());
// }
// capitalize("string hello world");

// // //8. Viết hàm tìm số lần xuất hiện lớn nhất của một phần tử trong mảng
// // function showUp(arr) {
// //     return arr.reduce(function(a, b){
// //         a[b] = a[b] + 1 || 1
// //         return a;
// //       }, {});
// // }
// // showUp(1, 2, 3, 4, 5, 6, 4, 2, 3, 2, 3, 4);

// // //9. Viết hàm cắt chuỗi thành một mảng có độ dài chỉ định. VD “Hello”, 2 => [“He”, “ll”, “o”]
// function cutStr(string, n) {
//     let newArr = [];
//     for (let i = 0, j=0; i <= string.length; i+=n,j++){
//         newArr[j] = string.slice(i, i+n);
//     }
//     return newArr;
// }
// cutStr("Hello",3);

// // //10. Viết hàm tách chuỗi thành một mảng các chuỗi con. VD “dog” => [“d”, “do”, “dog”, “og”, “g”]
// function cutStr2(string) {
//     let newArr = [];
//     for (let i = string.length, j = 0; i > 1; i--, j++){
//         newArr[j] = string.slice(i-1);
//     }
//     for (let i = 0, j = newArr.length; i < string.length; i++, j++){
//         newArr[j] = string.slice(i);
//     }
//     return newArr;
// }
// cutStr2("dog");

// // // 11. Cho một mảng số, viết hàm loại bỏ số trùng lặp trong mảng. VD [1,2,2,3] => [1,2,3]
// function duplicate(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (result.indexOf(arr[i]) === -1) result.push(arr[i]);
//     }
//     return result;
// }
// duplicate([1, 2, 3, 4, 5, 6, 3, 3, 2]);

// // //12. Viết hàm trả về một mảng lưu dãy số Fibonacci từ 0 -> n. VD 8 => [0, 1, 1, 2, 3, 5, 8, 13]
// let fibonacci = (num) => {
//     var a = 1,
//       b = 0,
//       temp;
//     while (num > 0) {
//       temp = a;
//       a = a + b;
//       b = temp;
//       num--;
//     }
//     return b;
//   }
//   let createFibonacciArray = (n) => {
//     let result = [];
//     for (let i = 0; i < n; i++) {
//       result.push(fibonacci(i));
//     }
//     return result;
//   }
//   createFibonacciArray(8);

// //13. Viết hàm trả về một mảng các số trùng nhau trong 2 mảng. VD [1,2,3], [2,3,4] => [2,3]
// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4];
// let findSimilar = (arr1, arr2) => {
//   let result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.indexOf(arr1[i]) != -1 && result.indexOf(arr1[i]) == -1)
//       result.push(arr1[i]);
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) != -1 && result.indexOf(arr2[i]) == -1)
//       result.push(arr2[i]);
//   }
//   return result;
// };
// findSimilar(arr1, arr2);

// //14. Viết hàm trả về một mảng các số không trùng nhau trong 2 mảng. VD [1,2,3], [2,3,4] => [1,4]
// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4];
// let findDefference = (arr1, arr2) => {
//   let result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.indexOf(arr1[i]) == -1) result.push(arr1[i]);
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) result.push(arr2[i]);
//   }
//   return result;
// };
// findDefference(arr1, arr2);

// // //15. Viết hàm loại bỏ các giá trị “false” khỏi mảng. VD [null, 1, 0, NaN, “”] => [1]
// arr = [];
// arr.filter((i) => !!i);


// 1. Viết hàm sắp xếp một mảng số nguyên
// sắp xếp từ bé đến lớn
let arrangeNumber = (arr) => arr.sort((a, b) => a - b)
arrangeNumber([1, 4, 5, 3, 32, 5, 6, 4, 3, 45, 123]);

// 2. Viết hàm sắp xếp một mảng “string”
// sắp xếp theo bảng chữ cái
let arrangeString = (arr) => arr.sort();
arrangeString(["Chuoi", "Cam", "Tao", "Xoai"]);  

// 3. Cho một mảng object user [{name: “Ba”, age: 28}, {name: “Bon”, age: 3}, ...] Viết hàm sắp xếp
// mảng user tăng dần theo age
let user = [
    { name: "Ba", age: 28 },
    { name: "Bon", age: 18 },
    { name: "Namm", age: 20 },
    { name: "Sauuuu", age: 22 },
    { name: "Bay", age: 15 },
];
let sortAge = (arr) => arr.sort((a, b) => a.age - b.age);
sortAge(user);

// 4. Tương tự, viết hàm sắp xếp mảng user theo name.length
let sortName = (arr) => arr.sort((a, b) => a.name.length - b.name.length);
sortName(user);

// 5. Viết hàm sắp xếp mảng user theo name
let sortName2 = (arr) => arr.sort((a, b) => a.name - b.name);
sortName2(user);

// 6. Cho một mảng số, và một số n, tìm trong mảng vị trí 2 phần tử có tổng bằng n, kết quả trả về là một mảng lưu vị trí 2 phần tử, hoặc mảng rỗng nếu không tìm thấy
let arr6 = [1, 2, 3, 4, 5, 6, 3, 4, 5, 5, 3, 1];
let equalN = (n) => {
    let result = [];
    for (let i = 0; i < arr6.length; i++){
        for (let j = i + 1; j < arr6.length; j++){
            if (arr6[i] + arr6[j] == n) {
                result.push(`${[i]} ${[j]}`);
            }
        }
    }
    return result;
}
equalN(4);

// 7. Viết hàm lấy một phần tử ngẫu nhiên trong mảng
let takeRandom = (arr) => arr[Math.trunc(Math.random() * --arr.length)]
takeRandom(arr6);

// 8. Viết hàm sắp xếp mảng với vị trí ngẫu nhiên (xáo trộn mảng)
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr
}
shuffleArray(arr6)

// 9. Viết hàm biến một một mảng 2 chiều thành mảng 1 chiều. VD [[1,2,3],[3,4,5] => [1,2,3,3,4,5]
let arr9 = [[1, 2, 3], [3, 4, 5]];
let mergeArr = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]);
    }
  }
  return result;
}
mergeArr(arr9);

// 10. Viết hàm biến một mảng nhiều chiều(3 hoặc nhiều hơn) thành mảng một chiều
let arr10 = [[1, 2, 3], [3, 4, 5], [5, 6, 7], [7, 8, 9]];
let mergeArr2 = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        result.push(arr[i][j]);
    }
  }
  return result;
}
mergeArr2(arr10);


// 1. Viết hàm biến đổi các phần tử của mảng số nguyên thành bình phương của chính nó
let squareArr = (arr) => arr.map((i) => i * i)
squareArr([1,2,3,4,5,6]);

// 2. Viết hàm biến đổi các phần tử của mảng chuỗi thành dạng uppercase()
let upperCaseArr = (arr) => arr.map((i) => i.toUpperCase())
upperCaseArr(["hello"])

// 3. Viết hàm lọc ra các phần tử có kiểu “number” trong một mảng hỗn hợp
let numberFilter = (arr) => arr.filter((i) => typeof i == typeof 1);
numberFilter([1, 2, 3, "hello", true, null, undefined])

// 4. Tạo một mảng object với các thông tin name, age, ...
let user2 = [
    {
        name: "Tuan1 hello",
        age: 24,
        gender: "male",
    },
    {
        name: "tuan2 hi",
        age: 241,
        gender: "female",
    },
    {
        name: "tuan3 ba",
        age: 20,
        gender: "male",
    },
    {
        name: "tuan4",
        age: 18,
        gender: "female",
    },
]

// 5. Viết hàm lọc ra các object với age > 20
let adult = (arr) => arr.filter((i) => i.age > 20);
adult(user2);

// 6. Viết hàm chuyển đổi name của object thành dạng capitalize
let capitalizeArr = (arr) => arr.map((i) => {
    let space = i.name.indexOf(" ");
    let newArr = i.name.charAt(0).toUpperCase() + i.name.slice(1);
    newArr = newArr.replace(i.name[space + 1], i.name[space + 1].toUpperCase());
    return newArr
})

capitalizeArr(user2);

// 7. Viết hàm chuyển đổi name của object thành dạng viết tắt. VD “Ba Nguyen” => “Ba N.”
let shortenedName = (arr) => arr.map((i) => {
    let space = i.name.indexOf(" ");
    if (space != -1) {
        return i.name = i.name.slice(0, space + 2) + ".";
    } else return i.name;
})
shortenedName(user2)

// 8. Viết hàm để chuyển mảng object thành một mảng chỉ chứa name. VD [{name: “Ba”, age: 28}, {name: “Béo Ú”, age: 82}] => [“Ba”, “Béo Ú”]
let nameOnly = (arr) => arr.map((i) => i = i.name)
nameOnly(user2);


//date time
// 1. Viết hàm kiểm tra xem một giá trị có phải giá trị thời gian hợp lệ hay không
let validDay = (value) => {
    let check = new Date(value);
    if (isNaN(check.getTime())) {
        return false
    } else return true
}
validDay("2020-4")

// 2. Viết hàm in ra thứ viết tắt, tương ứng với ngày hiện tại. VD “T2”, “T3”, “CN”
let today = () => {
    let date = new Date();
    let day = date.getDay() + 1;
    if (day >= 2 && day <= 7) {
        return "T" + day
    } else return "CN"
}
today();

// 3. Viết hàm trả về ngày trước ngày hiện tại n ngày
function back(n) {
    let today = new Date();
    today.setDate(today.getDate() - n);
    return today
}
back(4);

// 4. Viết hàm trả về số ngày trong tháng bất kỳ, năm và tháng là tham số truyền vào
function daysInMonth(year, month) {
    return new Date(year,month,0).getDate()
}
daysInMonth(2020, 4)

// 5. Viết hàm tính số giây hiện tại trong ngày
let calculateSecond = () => new Date().getSeconds()
calculateSecond()

// 6. Viết hàm tính số ngày còn lại đến tết dương lịch năm sau
function countdown() {
    let today = new Date();
    let newyear = new Date(today.getFullYear() + 1,0,1);
    let left = newyear - today; 
    day =  Math.floor(left / (24*60*60*1000)) ; 
    return day;
}
countdown

// 7. Viết hàm kiểm tra một ngày có phải cuối tuần hay không, ngày là tham số truyền vào
function weekend(day) {
    let dayCheck = new Date(day),
        check = false;
    dayCheck.getDay() == 0 || dayCheck.getDay() == 6 ? check = true : false
    return check;
}
weekend("2021-04-28");

// 8. Viết hàm trả về số quý tương ứng với giá trị ngày tháng truyền vào (quý 1 -> 4)
function quarterCheck(date) {
    let check = new Date(date).getMonth() + 1,
        quarter = 0;
    check >= 1 && check <= 3 ? quarter = 1 :
    check >= 4 && check <= 6 ? quarter = 2 :
    check >= 7 && check <= 9 ? quarter = 3 : quarter = 4
    return quarter;
}
quarterCheck("2020-04")

// 9. Viết hàm tính tổng số ngày đã qua trong năm
let dayPass = () => {
    let today = new Date();
    previous = new Date(today.getFullYear(), 0, 1);
    return Math.ceil((today - previous + 1) / 86400000);
}
dayPass();

// 10. Viết hàm tính tuổi theo ngày tháng truyền vào
function ageCalculator(y,m) {
    let age = new Date(y, m),
        now = new Date();
    return Math.trunc((now - age) / (1000*60*60*24*12))
}
ageCalculator(1996,04,28);

// 11. Viết hàm trả về chuỗi ngày tháng hiện tại có dạng “10:01:30 CN 20/01/2020”
function todayDate() {
    let day = new Date().getDay() + 1,
        today = new Date(),
        shortenedDay;
    if (day >= 2 && day <= 7) {
        shortenedDay = "T" + day
    } else shortenedDay = "CN";
    return `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()} ${shortenedDay} ${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`;
}
todayDate();

// 12. Viết hàm trả về thời gian chênh lệnh giữa 2 TP trên TG
function differenceCapital(zone1, zone2) {
    let hour1 = new Date().toLocaleString(undefined, { hour: 'numeric', hour12: false, timeZone: zone1 });
    let hour2 = new Date().toLocaleString(undefined, { hour: 'numeric', hour12: false, timeZone: zone2 });
    return hour1 - hour2
}
differenceCapital('America/New_York','Europe/London')

// 13. Viết hàm trả về ngày sau ngày hiện tại n ngày
function forward(n) {
    let today = new Date();
    today.setDate(today.getDate() + n);
    return today
}
forward(4);

// 14. Viết hàm trả về số giờ chênh lệnh giữa 2 ngày
let difference = (date1, date2) => {
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    return (d1 - d2) / (1000*60*60)
}
difference("2020-04-28", "2020-04-27")

// 15. Viết hàm trả về ngày tương ứng với ngày đầu tuần
function firstDayOfWeek(date) {
    let newDate = new Date(date),
        day = newDate.getDay(),
        diff = newDate.getDate() - day + (day == 0 ? -6:1);
    return new Date(newDate.setDate(diff));
}
firstDayOfWeek(new Date());