// Todolist
let todos = [
    { id: 1, title: "Coding", completed: false },
    { id: 2, title: "Xem bắn pháo hoa", completed: false },
    { id: 3, title: "Giao bài tập cho lớp FE12", completed: true },
    { id: 4, title: "Đòi nợ Thảo 10$", completed: false },
    { id: 5, title: "Dọn nhà", completed: true },
    // add more
  ];
  
// Từ todolist trên render ra trang HTML theo mẫu trong ảnh
  
let body = document.querySelector("body");
body.innerHTML = '<div class="toDo"></div> <div class="doing"></div> <div class="completed"></div>';

let todo = document.querySelector(".toDo");
todo.innerHTML = '<input type="text" id="addInput" placeholder="What you want to do?"> <p id="add" onclick="clickAdd()">+</p> ';

let doing = document.querySelector(".doing");
let completed = document.querySelector(".completed");

doing.innerHTML = "<h4>Doing</h4>";
completed.innerHTML = "<h4>Completed</h4>";


for (let i = 0; i < todos.length; i++){
    if (todos[i].completed == false) {
        doing.innerHTML +=`
        <div id="doingWrapper">
            <input type="checkbox" id="doingInput" name="doing" value="${todos[i].title}" onClick="">
            <label for="${todos[i].title}">${todos[i].title}</label><br>
        </div>`
    } else {
        completed.innerHTML +=`
        <input type="checkbox" id="completedInput" value="${todos[i].title}" checked>
        <label for="${todos[i].title}">${todos[i].title}</label><br>`
    }
    
}

function clickAdd() {
    let addDoing = addInput.value;
    doing.innerHTML += `
    <input type="checkbox" id="doingInput" name="doing" value="${addDoing}">
    <label for="${addDoing}">${addDoing}</label><br>`
    addInput.value = "";
}

// function clickDone() {
//     for (let i = 0; i < doingWrapper.length; i++){
//         console.log(this.currentTarget);
//     }
// }