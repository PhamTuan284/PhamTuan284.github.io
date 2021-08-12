import xhr, { createPagination, createPost } from "./common.js";

let url = new URL(window.location.href);
let currentPage = +url.searchParams.get("page") || 1;
let limit = +url.searchParams.get("limit") || 10;
let keyword = url.searchParams.get("keyword");

xhr({
    method: "GET",
    url: `/posts?title_like=${keyword}&_expand=user&_page=${currentPage}&_limit=${limit}`,
    responseType: "json",
    contentType: "application/json",
    body: null,
})
    .then((data) => {
        console.log(data.json);
        let posts = document.getElementById("posts");
        document.getElementById("search-by").innerHTML = "Kết quả tìm kiếm với từ khoá: " + keyword;

        data.json.forEach((post) => {
            let html = createPost(post);
            posts.insertAdjacentHTML("beforeend", html);
        });

        let total = Math.ceil(+data.headers["x-total-count"] / limit);

        let pagination = document.getElementById("pagination");
        createPagination(currentPage, total, limit, pagination);
    })
    .catch((error) => console.log(error));
