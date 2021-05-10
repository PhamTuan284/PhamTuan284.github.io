export default function (options) {
    const { method, url } = options;
    let postInfo = {};

    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.send();
        xhr.onload = () => {
            if (xhr.status == 200) {
                postInfo.posts = xhr.response;
                // postInfo.headers = xhr
                //     .getAllResponseHeaders()
                //     .split("\r\n")
                //     .reduce((obj, item) => {
                //         let [key, value] = item.split(": ");
                //         obj[key] = value;
                //         return obj;
                //     }, {});
                resolve(postInfo)
            } else {
                reject(xhr.status + ":" + xhr.statusText)
            }
        };
        xhr.onerror = () => reject("Error");
 
    });

}

export function createPost(post, user) {
    return `
    <div class="post">
        <div class="post-content">
        <div class="post-title text-uppercase">
            <h4><a href="post.html?id=${post.id}" target="_blank">${post.title}</a></h4>
        </div>
        <ul class="post-info">
            <li class="createdby">Written by <a href="postsbyuser.html?id=${user.id}">${user.name}</a></li>
        </ul>
        <p>${post.body}</p>
        </div>
    </div>
    `;
}