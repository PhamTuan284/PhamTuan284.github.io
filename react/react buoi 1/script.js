// Cho một mảng các số nguyên A. Hãy viết giải thuật xác định xem mảng có từ 2 phần tử trở lên có cùng giá trị không, nếu có return true, ngược lại return false. Biết rằng:
// - 1 < length(A) < 10^6
// - -10^8 < A[i] < 10^8

// function duplicateArr(arr) {
//     var Arr = arr.sort()
//     var newArr = [Arr[0]];
//     flag = true;

//     for (let i = 1; i < Arr.length; i++) {
//         if (Arr[i] !== Arr[i - 1]) {
//             flag = false; 
//         } else {
//             flag = true;
//             break;
//         }
//     }

//     return flag
// }
// console.log(duplicateArr([3,1, 2,3,4 ,1]))
// console.log(duplicateArr([1, 2, 3, 5, 7, 6]))

// Bill là một Travel Blogger rất thích đi du lịch. Mỗi lần đi tới đâu, cậu đều ghi lại địa điểm và thời gian đến thăm vào cuốn sổ của mình. Mỗi dòng trong cuốn sổ có cấu trúc:
// Địa điểm: Thời gian thăm
// Sau 20 năm, cuốn sổ 1000 trang đã được viết gần hết. Và danh sách quá dài khiến cho Bill rất khó nhớ xem mình đã từng đến một địa điểm hay chưa để lên kế hoạch cho chuyến đi kế tiếp.
// Hãy lựa chọn cấu trúc dữ liệu nhằm số hoá cuốn sổ của Bill, giúp cậu xác định nhanh nhất một địa chỉ đã được tới thăm hay chưa và vào thời gian nào. Giải thích về lựa chọn của mình.
// Hawaii: 2011
// New York: 2018
// Ha Noi: 2021
// let journey = {
//     2011: ["Hawaii", "New York"],
//     2018: ["Ha Noi"]

// }
// function checkLocation(location) {
//     for (let i = 0; i < journey.length; i++){
//         console.log(journey);
//         // if (journey[i] == location) {
//         //     return true
//         // }
//     }
//     return false
// }

// checkLocation("Hawaii")


// Với ngôn ngữ lập trình mà bạn quen thuộc nhất, hãy mô tả những cách mà bạn biết để có thể nhân đôi tất cả các giá trị cho trước trong một mảng.
// Input: A = [1, 2, 3, 4]
// Output: B = [2, 4, 6, 8]

// function doubleArr(arr) {
//     let arrB = []
//     for (let i = 0; i < arr.length; i++){
//         arrB.push(arr[i] *2)
//     }
//     return arrB
// }
// console.log(doubleArr([1, 2, 3, 4]));


// test2
// Câu 1: Viết chương trình đệ quy tính tổng các số từ 1 đến n, với n là một số cho trước.
// Ví dụ:
// n=0 -> 0 n=1 -> 1 n=3 -> 6 n=10 -> 55
// function sum(n) {
//     if (n == 1) return 1;
//     return n + sum(n - 1);
// }
// console.log(sum(10));

// Câu 2: Cho một dãy số [1, 25, 7, -7, -3, 12, -22, 0]
// 1. Sử dụng JavaScript để sắp xếp dãy số theo thứ tự tăng dần. Kết quả: [-22, -7, -3, 0, 1, 7, 12, 25]
// 2. Sắp xếp dãy số tăng dần theo giá trị tuyệt đối (trong trường hợp số 2 số bằng nhau thì số âm được ưu tiên đứng trước)
// Kết quả: [0, 1, -3, -7, 7, 12, -22, 25]

// let array = [1, 25, 7, -7, -3, 12, -22, 0,100]
// function increaseArrSort(arr) {
//     let Arr = [...arr].sort((a, b) => a - b);
//     return Arr
// }
// increaseArrSort(array);


// function increaseArr(arr) {
//     for (let i = 0; i < arr.length - 1; i++){
//         for (let j = i + 1; j < arr.length; j++){
//             if (arr[i] > arr[j]) {
//                 let k = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = k;
//             }
//         }
//     }
//     console.log(arr);
// }
// // increaseArr(array)


// // function increaseAbsArrSort(arr) {
// //     var Arr = arr.sort();
// //     console.log(Arr);
// // }
// function increaseAbsArr(arr) {
//     for (let i = 0; i < arr.length - 1; i++){
//         for (let j = i + 1; j < arr.length; j++){
//             if (Math.abs(arr[i]) >= Math.abs(arr[j])) {
//                 let k = arr[j];
//                 arr[j] = arr[i];
//                 arr[i] = k;
//             }
//         }
//     }
//     console.log(arr);
// }
// // increaseAbsArr(array)



// Viết hàm sử dụng regex biến đổi url theo định dạng mong muốn. Hàm này có mục tiêu làm thay đổi kích thước ảnh theo các tỷ lệ đã được định nghĩa trước:
// 1. Các định dạng: _100x, _x100, _100x100
// 2. Nằm liền kề dấu chấm của phần mở rộng: url_100x.jpg
let tests = [
    {
        "input": "https://cdn.shopify.com/e.jpg?v=15",
        "output": "https://cdn.shopify.com/e_100x.jpg?v=15",
        "size": "100x"
    },
    {
        "input": "https://cdn.shopify.com/e_100x200.jpg?v=15",
        "output": "https://cdn.shopify.com/e_x200.jpg?v=15",
        "size": "x200"
    },
    {
        "input": "https://cdn.shopify.com/e-jpg_200x100.jpg?v=15",
        "output": "https://cdn.shopify.com/e-jpg_100x.jpg?v=15",
        "size": "100x"
    },
    {
        "input": "https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_100x.jpg?v=15",
        "output": "https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_x100.jpg?v=15",
        "size": "x100"
    },
    {
        "input": "https://cdn.shopify.com/e-800x600-jpg.jpg?v=15",
        "output":"https://cdn.shopify.com/e-800x600-jpg_100x200.jpg?v=15",
        "size": "100x200"
    }
]

// /jpg[?]/gm
// /_[12]/gm
let replaceSize = function (url, size) {
    const regex = /\.(png|jpeg|gif|jpg)[?]/g;
    let indexJpg = url.indexOf(regex.exec(url)[0]);
    let indexUnderline = 0
    let head = "";
    if (url.lastIndexOf("_") != -1) {
        indexUnderline = url.lastIndexOf("_");
        head = url.slice(0, indexUnderline);
    } else {
        head = url.slice(0, indexJpg)
    } 
    let footer = url.slice(indexJpg, url.length);
    return head.concat("_", size, footer);
}
replaceSize("https://cdn.shopify.com/e.jpg?v=15","100x");
replaceSize("https://cdn.shopify.com/e_100x200.jpg?v=15","x200");
replaceSize("https://cdn.shopify.com/e-jpg_200x100.jpg?v=15", "100x");
replaceSize("https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_100x.jpg?v=15", "x100");
replaceSize("https://cdn.shopify.com/e-800x600-jpg.jpg?v=15", "100x200");

