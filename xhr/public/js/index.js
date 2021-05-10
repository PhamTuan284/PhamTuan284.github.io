import newXHR, {createItem} from "./common.js";

let notList = document.getElementById("not");
let doneList = document.getElementById("done");

newXHR({
    method: "GET",
    url: "/todos",
    responseType: "json",
    contentType: "application/json",
    body: null,
})
    .then((json) => {
        json.forEach((item) => {
            let html = createItem(item);
            if (item.status == false) {
                notList.insertAdjacentHTML("beforeend", html)
            } else {
                doneList.insertAdjacentHTML("beforeend", html)
            }
        });
    })
    .catch((error) => {
        console.log(error);
    })

let formAdd = document.forms.add;

formAdd.addEventListener("submit",(e) => {
    e.preventDefault();

    let title = formAdd.elements.inputAdd.value.trim();
    let status = false;
    let created = new Date().toLocaleString('vi');

    newXHR({
        method: "POST",
        url: "/todos",
        responseType: "json",
        contentType: "application/json",
        body: JSON.stringify({title, status, created}),
    })
        .then((json) => {
            let html = createItem(json);
            notList.insertAdjacentHTML("beforeend", html);
            formAdd.reset();
        })
        .catch((error) => {
            console.log(error);
        })
})

// function deleteItem(el, id) {
//     let item = el.closest(".item");
    
//     let xhr = new XMLHttpRequest();
//     xhr.responseType = "json";
//     xhr.open("DELETE", "/todos/" + id);
//     xhr.send();
//     xhr.onerror = () => alert("Error");
//     xhr.onload = () => {
//         if (xhr.status === 200) {
//             item.remove();
//         } else {
//             alert("Error");
//         }
//     };
// }

// $.ajax({
//     type: "GET",
//     url: "/todos",
//     dataType: "json",
//     error: (req, status) => {
//         // console.log(req);
//         // console.log(status);
//         console.log("Can not send request");
//     },
//     success: (req, status) => {
//         $.each(req, (index, todo) => {
//             $("#todos").append(createTodo(todo));
//         })
//     }
// })

// $.getJSON("/todos", (req) => {
//     $.each(req, (index, todo) => {
//         $("#todos").append(createTodo(todo));
//     })
// })

// function createTodo(todo) {
//     let html = `
//         <div class="todo mb-3">
//             <div class="input-group">
//                 <div class="input-group-text">
//                     <input
//                         class="form-check-input mt-0"
//                         type="checkbox"
//                         ${todo.status === true ? "checked" : ""}
//                         data-id=${todo.id}
//                         data-created=${todo.created}
//                         onchange="upd(event, this)"
//                     />
//                 </div>
//                 <input
//                     type="text"
//                     class="form-control form-control-lg me-0 title"
//                     disabled
//                     value="${todo.title}"
//                     data-id=${todo.id}
//                     data-created=${todo.created}
//                     onblur="disable(this)"
//                     onkeyup="put(event, this)"
//                 />
//                 <button
//                     class="btn btn-outline-secondary"
//                     type="button"
//                     id="edit"
//                     onclick="edit(this)"
//                 >
//                     <i class="far fa-edit"></i>
//                 </button>
//                 <button
//                     class="btn btn-outline-danger"
//                     type="button"
//                     id="delete"
//                     onclick="del(this, ${todo.id})"
//                 >
//                     <i class="far fa-trash-alt"></i>
//                 </button>
//             </div>
//         </div>
//     `;

//     return html;
// }