// let img = document.createElement("img");
// img.src = "http://placeimg.com/640/480/any";
// img.alt = "hello";
// let imgClone = img.cloneNode(true)

// document.body.insertAdjacentElement("afterbegin", img);
// document.body.insertAdjacentElement("beforeend", imgClone);
// imgClone.remove(); //xóa node hỏi DOM
// // document.body.removeChild(imgClone); //xóa node con khỏi DOM

// document.body.insertAdjacentHTML("afterbegin", "<div>hello</div>");
// document.body.insertAdjacentText("afterbegin", "text");


// fragment
// let todos = ["eat", "sleep", "repeat"];
// function createList() {
//     let fr = new DocumentFragment();
//     todos.forEach(function (i) {
//         var li = document.createElement("li");
//         li.textContent = i;
//         fr.append(li);
//     });
//     return fr;
// }
// list.append(createList());

// list.classList.add("red");

// let hello = () => {
//     p.classList.add("red");
// }
// let remove = () => {
//     p.classList.remove("red")
// }

p.onmouseover = function () {
    this.classList.toggle("red")
}

p.onmouseout = function () {
    this.classList.toggle("red")
}

let hello = () => alert("hello");
let hello1 = () => alert("hello1")
let hello2 = () => alert("hello2")

p.addEventListener("click", hello);
p.addEventListener("click", hello1);
p.addEventListener("click", hello2);

p.removeEventListener("click", hello);

document.body.onkeyup = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    console.log(e.key);
}