function createComment(comment) {
    let html = `
    <div class="post-comment mb-5">
        <b class="post-comment-name">${comment.name}</b>
        <p class="post-comment-content">
            ${comment.content}
        </p>
    </div>
    `
    return html;
}

