// khai báo hàm gộp mảng
let _concat = function (arr) {
  let result = []; // khai báo mảng mới chứa các phần tử của cả 2 mảng

  // loop qua mảng "this"
  for (let i = 0; i < this.length; i++) {
    result.push(this[i]); // push từng phần tử của "this" vào result
  }

  // xong "this" rồi thì đến arr
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]); // push từng phần tử của "arr" vào result
  }

  // xong rồi thì return mảng result về
  return result;
};

// khai báo một mảng
let arr = [1, 2, 3];
// gán hàm _concat vào thuộc tính _concat của arr
arr._concat = _concat;

// khai báo một mảng khác, mảng này sẽ được "concat" với arr
let other = [4, 5, 6];

// gọi phương thức
arr._concat(other); // this = arr, còn tham số arr của _concat = other
