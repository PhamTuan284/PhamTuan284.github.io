import xhr, { createPost, createPagination } from "./common.js";

// lưu biến của URL hiện tại
let url = new URL(window.location.href);
// get số trang hiện tại
let currentPage = +url.searchParams.get("page") || 1;
// get số trang limit của page
let limit = +url.searchParams.get("limit") || 10;

xhr({
  method: "GET",
  url: `/posts?title_like=i&_expand=user&_page=${currentPage}&_limit=${limit}`,
  responseType: "json",
  contentType: "application/json",
  body: null,
}).then((data) => {
  let posts = document.getElementById("posts");
  data.json.forEach((x) => {
    let html = createPost(x);
    posts.insertAdjacentHTML("beforeend", html);
  });
  let total = Math.ceil(+data.headers["x-total-count"] / limit);
  // get element pagination
  let pagination = document.getElementById("pagination");

  createPagination(currentPage, total, limit, pagination);
}).catch((error) => console.log(error));
