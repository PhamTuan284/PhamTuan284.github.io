import xhr, { createPostDetail } from "./common.js";

let url = new URL(window.location.href);

//lấy post id và chuyển post ID thành kiểu số
let postId = +url.searchParams.get("id");

let post = document.getElementById("post");
let comments = document.getElementById("comments");

//lấy nút làm comment
let btnComment = document.getElementById("btn-comment");

//nhận vào 1 object comment
function createComment(comment) {
    let html = `
        <div class="comment">
            <p class="name">${comment.name}</p>
            <p class="content">
                ${comment.content}
            </p>
        </div>
    `;

    return html;
}

xhr({
    method: "GET",
    url: `/posts/${postId}?_expand=user&_embed=details&_embed=comments`,
    responseType: "json",
    contentType: "application/json",
    body: null,
})
    .then((data) => {
        //render nội dung post
        post.insertAdjacentHTML("beforeend", createPostDetail(data.json));

        //render comment
        //data.json lấy về từ xhr
        //mỗi một comment là 1 object, truyền object comment đó vào hàm createComment
        if (data.json.comments.length > 0) {
            data.json.comments.forEach((comment) => {
                let html = createComment(comment);
                comments.insertAdjacentHTML("afterbegin", html);
            });  
        } else {
            comments.textContent="Chưa có comment"
        }

    })
    .catch((error) => console.log(error));

let form = document.forms.comment;

//event cho send btn
form.addEventListener("submit",(e) => {
    e.preventDefault();

    //button loading
    btnComment.classList.add("loading");
    btnComment.disabled = true;

    let name = form.elements.name.value.trim();
    let content = form.elements.content.value.trim();

    //post comment vao api
    xhr({
        method: "POST",
        url: "/comments",
        responseType: "json",
        contentType: "application/json",
        //name, content ở trên, postId có ở trên cùng (search.param)
        body: JSON.stringify({ name, content, postId }),
    })
        .then((data) => {
            //set timeout cho nút loading
            setTimeout(() => {
                // console.log(data.json); //data.json chính là comment
                // dùng lại fnc createComment để đẩy comment mới lên
                comments.insertAdjacentHTML("afterbegin", createComment(data.json));
                //xoá value sau khi submit
                form.reset();
                
                btnComment.classList.remove("loading");
                btnComment.disabled = false;
            }, 3000)
        })
        .catch((error) => {
            console.log(error);
        })
})