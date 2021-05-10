export default function xhr({ method, url, responseType, contentType, body }) {
    return new Promise((resolve, reject) => {
        let xxx = new XMLHttpRequest();

        xxx.responseType = responseType;
        xxx.open(method, url);

        xxx.setRequestHeader("Content-Type", contentType);
        xxx.send(body);

        xxx.onerror = () => reject("Không thể gửi request");

        xxx.onload = () => {
            if (xxx.status >= 200 && xxx.status < 300) {
                let data = {};
                data.json = xxx.response;
                data.headers = {};
                xxx.getAllResponseHeaders()
                    .split("\r\n")
                    .forEach((header) => {
                        let [key, value] = header.split(": ");
                        data.headers[key] = value;
                    });

                resolve(data);
            } else {
                reject("Không tìm thấy tài nguyên");
            }
        };
    });
}

export function createPost(post) {
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

            <div class="post-description">
                <p class="post-author">
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
}

export function createPagination(current, total, limit, el) {
    for (let i = 1; i <= total; i++) {
        if (i == 1) {
            el.insertAdjacentHTML(
                "beforeend",
                `
                    <li class="page-item">
                        <a class="page-link" href="index.html?page=1&limit=${limit}"
                            >First</a
                        >
                    </li>
            `
            );
        }

        if (i == current - 1) {
            el.insertAdjacentHTML(
                "beforeend",
                `
                    <li class="page-item">
                        <a class="page-link" href="index.html?page=${
                            current - 1
                        }&limit=${limit}"
                            >Previous</a
                        >
                    </li>
            `
            );
        }

        if (i == current) {
            el.insertAdjacentHTML(
                "beforeend",
                `
                    <li class="page-item">
                        <a class="page-link current"
                            >${current}</a
                        >
                    </li>
            `
            );
        }

        if (i == current + 1) {
            el.insertAdjacentHTML(
                "beforeend",
                `
                    <li class="page-item">
                        <a class="page-link" href="index.html?page=${
                            current + 1
                        }&limit=${limit}"
                            >Next</a
                        >
                    </li>
            `
            );
        }

        if (i == total) {
            el.insertAdjacentHTML(
                "beforeend",
                `
                    <li class="page-item">
                        <a class="page-link" href="index.html?page=${total}&limit=${limit}"
                            >Last</a
                        >
                    </li>
            `
            );
        }
    }
}

export function createPostDetail(post) {
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
