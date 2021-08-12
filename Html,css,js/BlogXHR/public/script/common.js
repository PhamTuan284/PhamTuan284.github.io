export default function (options) {
  let { method, url, responseType, contentType, body } = options;

  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = responseType;
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", contentType);
    xhr.send(body);
    xhr.onerror = () => reject("Error! Can't send request");
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        let data = {};
        data.json = xhr.response;
        // console.log(data.json);
        data.headers = {};
        xhr
          .getAllResponseHeaders()
          .split("\r\n")
          .forEach((header) => {
            let [key, value] = header.split(": ");
            data.headers[key] = value;
          });
        resolve(data);
      } else {
        reject("Can't find data");
      }
    };
  });
}

export const createPost = (post) => {
  let html = `
    <div class="col-12 col-md-6 col-lg-4 mb-4">
    <div class="post">
        <a href="post.html?id=${post.id}">  
            <img
                class="post-thumbnail"
                src="${post.thumbnail}"
                alt="${post.title}"
            />
        </a>

        <div class="post-description mx-2">
            <p class="post-author mt-2">
                ${post.created}
                <a href="post-by-user.html?id=${post.userId}">
                    <img
                        src="${post.user.avatar}"
                        alt="${post.user.name}"
                    />
                    ${post.user.name}
                </a>
            </p>

            <a href="post.html?id=${post.id}">
                <h2 class="post-title">
                    ${post.title}
                </h2>
            </a>

            <p class="post-short-description">
                ${post.description}
            </p>
        </div>
    </div>
</div>
    `;
  return html;
};

export const createPagination = (current, total, limit, el) => {
  for (let i = 1; i <= total; ++i) {
    let curr = i == current ? "current" : "";
    el.insertAdjacentHTML(
      "beforeend",
      `
                  <li class="page-item">
                      <a class="page-link ${curr}" href="index.html?page=${i}&limit=${limit}"
                          >${i}</a
                      >
                  </li>
          `
    );
  }
}

export const createPostDetail = (post) => {
  let html = `
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
    `;
  return html;
}

document.forms.search.addEventListener("submit", (e) => {
  e.preventDefault();

  let value = document.forms.search.elements.keyword.value.trim();
  value = value.replace(/ +g/, " ");
  console.log(value);

  let url = new URL(window.location.href);
  url = new URL(url.origin);
  url.pathname = "/search.html"
  url.searchParams.set("keyword", value);
  window.location.href = url.href;


})