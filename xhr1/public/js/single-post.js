let url = new URL(window.location.href);
let postId = +url.searchParams.get("id");
let post = document.getElementById("post-detail");
let comments = document.getElementById("post-comment");
let form = document.forms.comment;
let btnComment = document.getElementById("btn-comment");

let xhr = new XMLHttpRequest();

xhr.responseType = "json";

xhr.open("GET", `/posts/${postId}?_expand=user&_embed=details&_embed=comments`);

xhr.send();

xhr.error = () => console.log("Can't send request");
    
function createSinglePost(post) {    
    return html = `
    <h1 class="post-title">
        ${post.title}
    </h1>
    <p class="post-author">
        ${post.created}
        <img
            src="${post.user.avatar}"
            alt="${post.user.username}"
        />
        ${post.user.username}
    </p>
    <img
        src="${post.details[0].cover}"
        alt=""
        class="post-cover"
    />
    <p class="post-content">
        ${post.details[0].body}
    </p>
    `
}

function createSinglePostComment(comment) {
    return html = `
        <div class="comment">
            <p class="name">${comment.name}</p>
            <p class="content">
                ${comment.content}
            </p>
        </div>
    `;
}

xhr.onload = () => {
    if (xhr.status == 200) {
        let data = {};
        data.json = xhr.response;
        data.headers = {};
        xhr.getAllResponseHeaders()
            .split("\r\n")
            .forEach((header) => {
                let [key, value] = header.split(": ");
                data.headers[key] = value;
            }); 
        post.insertAdjacentHTML("beforeend", createSinglePost(data.json));

        if (data.json.comments.length > 0) {
            data.json.comments.forEach((comment) => {
                let html = createSinglePostComment(comment);
                comments.insertAdjacentHTML("afterbegin", html);
            });  
        } else {
            comments.textContent="Chưa có comment"
        }
    } else {
        console.log("Error" + xhr.status);
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = form.elements.name.value.trim();
    let content = form.elements.content.value.trim();

    let xxx = new XMLHttpRequest();

    xxx.responseType = "json";

    xxx.open("POST", `/comments`);

    xxx.send(JSON.stringify({ name, content, postId }));

    xxx.error = () => console.log("Error create comment");

    xxx.contentType = "application/json";

    xxx.onload = () => {
        console.log(xxx.response);
        comments.insertAdjacentHTML("afterbegin", createSinglePostComment(xxx.response));
        form.reset();
    };
})
