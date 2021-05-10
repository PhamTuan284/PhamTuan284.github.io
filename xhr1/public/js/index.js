let xhr = new XMLHttpRequest();

xhr.responseType = "json";

xhr.open("GET", "/posts?_expand=user");

xhr.send();

xhr.error = () => console.log("Can't send request");

xhr.onload = () => {
    if (xhr.status == 200) {
        let posts = document.getElementById("posts-list");
        xhr.response.forEach(post => {
            let html = createPost(post);
            posts.insertAdjacentHTML("beforeend", html);
        });
    } else {
        console.log("Error" + xhr.status);
    }
}

function createPost(post) {    
    return html = `
    <div class="col-12 col-md-6 col-lg-4">
        <div class="post mb-4">
            <a href="single-post.html?id=${post.id}"><img src="${post.thumbnail}" alt="" class="post-thumbnail"></a>
            <div class="post-author pt-3 ps-3 pe-3 d-flex">
                <a href="post-by-author.html"><img src="${post.user.avatar}" alt="" class="post-author-avatar"></a>
                <div class="post-author-info d-flex flex-column justify-content-center ms-3">
                    <a href="post-by-author.html" class="post-author-info-name">${post.user.username}</a>
                    <p class="post-author-info-time">${post.created}</p>
                </div>
            </div>
            <div class="post-detail p-3">
                <a href="single-post.html?id=${post.id}" class="post-detail-title">${post.title}</a>
                <p class="post-detail-desc">${post.description}</p>
            </div>
        </div>
    </div>
    `
}
