// function hello() {
//     console.log("hello");
// }

// let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// //error vi may cua minh khong the gui request
// xhr.onerror = () => console.log("Error");
// xhr.onload = () => {
//     if (xhr.status == 200) {
//         console.log("loaded");
//         let data = JSON.parse(xhr.response);
//         console.log(data);
//         createUserList(data);
//     } else {
//         //phan hoi error tu may chu
//         console.log("Error");
//         console.log(xhr.status);
//     }
// }
// xhr.send();
// function createUser(user) {
//     let div = document.createElement("div");
//     div.innerHTML = `
//         <h4>${user.name}</h4>
//         <p>${user.email}</p>
//     `;
//     div.classList.add("user");
//     return div;
// }
// function createUserList(users) {
//     const root = document.getElementById("root");
//     users.forEach((user) => {
//         root.append(createUser(user))
//     });
// }


// function request(method, url, onloadCallBack) {
//     let xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     //error vi may cua minh khong the gui request
//     xhr.onerror = () => console.log("Error");
//     xhr.onload = () => {
//         if (xhr.status == 200) {
//             console.log("loaded");
//             let data = JSON.parse(xhr.response);
//             console.log(data);
//             // createUserList(data);
//             onloadCallBack(data);
//         } else {
//             //phan hoi error tu may chu
//             console.log("Error");
//             console.log(xhr.status);
//         }
//     }
//     xhr.send();
// }
// function createUser(user) {
//     let div = document.createElement("div");
//     div.innerHTML = `
//         <h4>${user.name}</h4>
//         <p>${user.email}</p>
//     `;
//     div.classList.add("user");
//     return div;
// }
// function createUserList(users) {
//     const root = document.getElementById("root");
//     users.forEach((user) => {
//         root.append(createUser(user))
//     });
// }
// request("GET", "https://jsonplaceholder.typicode.com/users",createUserList)


// function request(method, url) {
//     let xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.send();
//     return new Promise((resolve, reject) => {
//         //error vi may cua minh khong the gui request
//         xhr.onerror = () => reject("Error");
//         xhr.onload = () => {
//             if (xhr.status == 200) {
//                 let data = JSON.parse(xhr.response);
//                 resolve(data);
//             } else {
//                 //phan hoi error tu may chu
//                 reject("Error", xhr.status);
//             }
//         }
//     })
// }
// function createUser(user) {
//     let div = document.createElement("div");
//     div.innerHTML = `
//         <h4>${user.name}</h4>
//         <p>${user.email}</p>
//     `;
//     div.classList.add("user");
//     return div;
// }
// function createUserList(users) {
//     const root = document.getElementById("root");
//     users.forEach((user) => {
//         root.append(createUser(user))
//     });
// }
// request("GET", "https://jsonplaceholder.typicode.com/users")
//     .then(users => createUserList(users))
//     .catch((error) => console.log("error"));



// load du lieu, render ra post title, post body, tac gia, link click duoc, loc theo ten tac gia(lay theo ID, lay data cua post xong render ra), lấy hết users và posts ra, tạo 2 hàm request (request này then request kia), create post nhận vào cả post và user, href="post.html?id=${post.id}"
// single post let url = new URL(window.location.href)

function request(method, url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.send();
        xhr.onerror = () => reject("Error");
        xhr.onload = () => {
            if (xhr.status == 200) {
                let data = JSON.parse(xhr.response);
                resolve(data);
            } else {
                reject("Error", xhr.status);
            }
        }
    })
}

function createPost(post) {
    let div = document.createElement("div");
    div.innerHTML = `
        <a href="single-post.html?id=${post.id}" class="post-title">${post.title}</a>
        <p class="post-body">${post.body}</p>
        <p class="post-author">UserID: ${post.userId}</p>
    `;
    div.classList.add("post");
    return div;
}

function createPostList(posts) {
    const root = document.getElementById("root");
    posts.forEach((post) => {
        root.append(createPost(post))
    });
}

function getAuthorName(authorName) {
    const author = document.querySelectorAll(".post-author");
    author.textContent = `${authorName.name}`;
}

request("GET", "https://jsonplaceholder.typicode.com/posts")
    .then((posts) => createPostList(posts))
    .catch((error) => console.log("error", error));

request("GET", "https://jsonplaceholder.typicode.com/users")
    .then((authorName) => getAuthorName(authorName))
    .catch((error) => console.log("error", error));
