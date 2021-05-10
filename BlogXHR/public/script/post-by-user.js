import xhr, { createPagination, createPost } from "./common.js";

let url = new URL(window.location.href);
let currentPage = +url.searchParams.get("page") || 1;
let limit = +url.searchParams.get("limit") || 10;
let id = +url.searchParams.get("id");

xhr({
    method: "GET",
    url: `/posts?userId=${id}&_expand=user&_page=${currentPage}&_limit=${limit}`,
    responseType: "json",
    contentType: "application/json",
    body: null,
})
    .then((data) => {
        console.log(data.json);
        let posts = document.getElementById("posts");
        document.getElementById("post-by").innerHTML = "Các bài viết của: " + data.json[0].user.username;

        data.json.forEach((post) => {
            let html = createPost(post);
            posts.insertAdjacentHTML("beforeend", html);
        });

        let total = Math.ceil(+data.headers["x-total-count"] / limit);

        let pagination = document.getElementById("pagination");
        createPagination(currentPage, total, limit, pagination);
    })
    .catch((error) => console.log(error));
