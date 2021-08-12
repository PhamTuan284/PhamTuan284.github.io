function request(method, url) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();
    return new Promise((resolve, reject) => {
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
function createSinglePost(post) {
    let div = document.createElement("div");
    div.innerHTML = `
        <a href="single-post.html">${post.title}</a>
        <p class="body-text">${post.body}</p>
        <p class="author">UserID: ${post.userId}</p>
    `;
    div.classList.add("single-post");
    return div;
}

request("GET", "https://jsonplaceholder.typicode.com/posts")
    .then(post => createSinglePost(post))
    .catch((error) => console.log("error"));