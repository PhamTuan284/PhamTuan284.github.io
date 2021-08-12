var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
  keyboard: false
})

let studentList = document.getElementById("table-body");
let backBtn = document.getElementById("back");
let mustFillSpan = document.querySelectorAll("#mustFill");
let mustFillValidate = document.querySelectorAll(".mustFillValidate");


let xhr = new XMLHttpRequest();
xhr.responseType = "json";
xhr.open("GET", "/student");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(null);
xhr.onerror = () => (console.log("Error! Can't send request"));
xhr.onload = () => {
  if (xhr.status >= 200 && xhr.status < 300) {
    let data = xhr.response;
    data.forEach((x) => {
      let html = createStudent(x);
      studentList.insertAdjacentHTML("beforeend", html);
    });
  } else {
    console.log("Can't find data");
  }

  // let deleteBtn = document.querySelectorAll("#delete");
  // for (let i = 0; i < deleteBtn.length; i++) {
  //   deleteBtn[i].addEventListener("click", (e) => {
  //     let xxx = new XMLHttpRequest();
  //     xxx.open("DELETE", "/student/" + (i + 1));
  //     xxx.send();
  //     xxx.onerror = () => (console.log("Error! Can't send request"));
  //     xxx.onload = () => {
  //       deleteBtn[i].parentElement.parentElement.parentElement.remove();
  //     };
  //   });
  // };
}

backBtn.addEventListener("click", (e) => {
  for (let i = 0; i < mustFillSpan.length; i++) {
    let mustFillInput = mustFillSpan[i].parentElement.nextElementSibling;
    mustFillInput.classList.remove("is-invalid");
    mustFillInput.classList.remove("is-invalid");
    mustFillInput.classList.remove("is-valid");
    mustFillInput.classList.remove("is-valid");
  }
});

function mustFill() {
  for (let i = 0; i < mustFillSpan.length; i++){
    let mustFillInput = mustFillSpan[i].parentElement.nextElementSibling;
    if (mustFillInput.value.length == 0) {
      mustFillInput.classList.add("is-invalid");
      mustFillValidate[i].classList.remove("d-none");
    } else {
      mustFillInput.classList.remove("is-invalid");
      mustFillValidate[i].classList.add("d-none");
    };
  }
};

function createStudent(student) {
  const html = `
  <tr>
    <td>${student.name}</td>
    <td>${student.dob}</td>
    <td>${student.email}</td>
    <td>${student.phone}</td>
    <td>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-primary" id="edit">
          <i class="fas fa-edit"></i>
        </button>
        ${deleteBtn(student)}
      </div>
    </td>
  </tr>
  `
  return html;
};

let form = document.forms.exampleModal;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = form.elements.name.value.trim();
  let dob = form.elements.dob.value.trim();
  let email = form.elements.email.value.trim();
  let phone = form.elements.phone.value.trim();

  let xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open("POST", "/student");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({ name, dob, email, phone }));
  xhr.onerror = () => (console.log("Error! Can't send request"));
  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      let data = xhr.response;
      studentList.insertAdjacentHTML("beforeend", createStudent(data));
      form.reset();
      // myModal.hide()
    } else {
      console.log("Can't find data");
    }
  };
  mustFill();
});

function deleteBtn(student) {
  let btn = `
  <button type="button" class="btn btn-danger" id="delete">
    <i class="fas fa-trash"></i>
  </button>
`
  btn.onclick = function (e) {
    console.log(student.id);
  }
  return btn;
}

function editBtn() {

}

//tách nút delete và edit thành 2 hàm để tạo + gắn sự kiện cho nó trong hàm đó luôn
//edit làm 1 modal nữa, lấy dữ liệu cũ fill vào và update lại khi ấn lưu, dùng data() để lấy id

// let email = document.getElementById("exampleInputEmail1");
// let password = document.getElementById("exampleInputPassword1");
// let user = {
//     email: "tuanpham22790@gmail.com",
//     password: "password"
// }

// export function emailValidation() {
//     let emailContent = email.value.trim();
//     if (emailContent.length > 6 || emailContent === JSON.parse(localStorage.getItem("userEmail"))) {
//         return true;
//     } else return false;
// }

// export function emailValid() {
//     email.classList.add("is-valid");
//     email.classList.remove("is-invalid")
// }

// export function emailInvalid() {
//     email.classList.add("is-invalid");
//     email.classList.remove("is-valid")
// }

// export function passwordValidation() {
//     let passwordContent = password.value.trim();
//     if (passwordContent.length > 6 || passwordContent === JSON.parse(localStorage.getItem("userPassword"))) {
//         return true
//     }
//     else return false
// }

// export function passwordValid() {
//     password.classList.add("is-valid");
//     password.classList.remove("is-invalid");
// }

// export function passwordInvalid() {
//     password.classList.add("is-invalid");
//     password.classList.remove("is-valid");
// }

// export function emailCheck() {
//     if (email.value.trim() === user.email || email.value.trim() === JSON.parse(localStorage.getItem("userEmail"))) {
//         return true
//     } else return false
// }

// export function passwordCheck() {
//     if (password.value.trim() === user.password || password.value.trim() === JSON.parse(localStorage.getItem("userPassword"))) {
//         return true
//     } else return false
// }
