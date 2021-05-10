import xhr, { createPostDetail } from "./common.js";

let url = new URL(window.location.href);
let postId = +url.searchParams.get("id");

xhr({
    method: "GET",
    url: `/posts/${postId}?_expand=user&_embed=details&_embed=comments`,
    responseType: "json",
    contentType: "application/json",
    body: null,
})
    .then((data) => {
        let post = document.getElementById("post");
        post.insertAdjacentHTML("beforeend", createPostDetail(data.json));
    })
    .catch((error) => console.log(error));
 