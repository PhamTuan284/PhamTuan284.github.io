$(function () {
    $.getJSON("/todos", (res) => {
        $.each(res, (index, todo) => {
            $("#todos").prepend(createTodo(todo));
        });
    });

    $(".new-task").submit(function (e) {
        e.preventDefault();

        let title = $(this).find("input#title").val().trim();

        if (title.length > 0) {
            let status = false;
            let created = Date.now();

            $.ajax({
                type: "POST",
                url: "/todos",
                data: JSON.stringify({ title, status, created }),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                error: () => alert("Cannot add new task"),
                success: (r) => {
                    $("#todos").prepend(createTodo(r));
                    this.reset();
                },
            });
        } else {
            alert("Add CC 🙂");
        }
    });

    $("#status").change(function (e) {
        if ($(this).val() === "") {
            delete $(document).data().status;
        } else {
            $(document).data().status = $(this).val();
        }

        let param = $.param($(document).data());

        $.getJSON("/todos?" + param, (res) => {
            $("#todos").html("");

            $.each(res, (index, todo) => {
                $("#todos").prepend(createTodo(todo));
            });
        });
    });

    $("#sort").change(function (e) {
        let sortBy = $(this).val();

        $(document).data()._sort = sortBy;
        $(document).data()._order = sortBy === "status" ? "asc" : "desc";

        let param = $.param($(document).data());

        $.getJSON("/todos?" + param, (res) => {
            $("#todos").html("");

            console.log(res);
            $.each(res, (index, todo) => {
                $("#todos").append(createTodo(todo));
            });
        });
    });
});

function btnEdit() {
    let btn = $("<button />", {
        html: "<i class='bi bi-pencil-square'></i>",
        class: "btn btn-outline-secondary edit",
        type: "button",
    });

    btn.click(function (e) {
        let todo = $(this).closest(".todo");

        todo.find("input.title")
            .removeAttr("disabled")
            .val("")
            .focus()
            .val(todo.data().title);

        todo.find("input.check").attr("disabled", true);
    });

    return btn;
}

function btnDelete() {
    let btn = $("<button />", {
        html: "<i class='bi bi-trash'></i>",
        class: "btn btn-outline-secondary delete",
        type: "button",
    });

    btn.click(function (e) {
        let todo = $(this).closest(".todo");

        $.ajax({
            type: "DELETE",
            url: "/todos/" + todo.data().id,
            error: () => alert("Cannot delete task"),
            success: (r) => $(todo).remove(),
        });
    });

    return btn;
}

function inputText(title) {
    let input = $("<input />", {
        type: "text",
        class: "form-control form-control-lg me-0 title",
        disabled: true,
        value: title,
    });

    input.blur(function (e) {
        let todo = $(this).closest(".todo");

        todo.find("input.title").attr("disabled", true);
        todo.find("input.check").removeAttr("disabled");
    });

    input.keyup(function (e) {
        let todo = $(this).closest(".todo");

        if (e.keyCode === 13) {
            let title = $(this).val().trim();

            if (title.length === 0) {
                alert("Sửa CC 🙂");
            } else {
                $.ajax({
                    type: "PUT",
                    url: "/todos/" + todo.data().id,
                    data: JSON.stringify({
                        title,
                        status: todo.data().status,
                        created: todo.data().created,
                    }),
                    contentType: "application/json; charset=utf-8",
                    error: () => alert("Cannot edit task"),
                    success: (r) => {
                        todo.data().title = title;
                        this.blur();
                    },
                });
            }
        }
    });

    return input;
}

function inputGroupText(status) {
    let checkbox = $("<input />", {
        class: "form-check-input mt-0 check",
        type: "checkbox",
        checked: status ? true : false,
    });

    checkbox.change(function (e) {
        e.preventDefault();

        let todo = $(this).closest(".todo");
        let { id, title, created } = todo.data();

        $.ajax({
            type: "PUT",
            url: "/todos/" + id,
            data: JSON.stringify({
                title,
                status: this.checked,
                created,
            }),
            contentType: "application/json; charset=utf-8",
            error: () => alert("Cannot edit task"),
            success: (r) => {
                todo.data().status = this.checked;
            },
        });
    });

    let div = $("<div />", {
        class: "input-group-text",
    });
    div.append(checkbox);

    return div;
}

function createTodo(todo) {
    let inputGroup = $("<div />", {
        class: "input-group",
    });
    inputGroup.append(inputGroupText(todo.status));
    inputGroup.append(inputText(todo.title));
    inputGroup.append(btnEdit());
    inputGroup.append(btnDelete());

    let div = $("<div />", {
        class: "todo mb-3",
    });
    div.append(inputGroup);
    div.data(todo);

    return div;
}
