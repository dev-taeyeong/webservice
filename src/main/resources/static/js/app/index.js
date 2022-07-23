// var main = {
//     init: function () {
//         var _this = this;
//         $('#btn-save').on('click', function () {
//             _this.save();
//         });
//         $("#btn-update").on("click", function () {
//             _this.update();
//         });
//     },
//
//     save: function () {
//         var data = {
//             title: $('#title').val(),
//             author: $('#author').val(),
//             content: $('#content').val(),
//         };
//
//         $.ajax({
//             type: 'POST',
//             url: '/api/v1/posts',
//             dataType: 'json',
//             contentType: 'application/json; charset=utf-8',
//             data: JSON.stringify(data)
//         }).done(function () {
//             alert('글이 등록되었습니다.');
//             window.location.href = '/';
//         }).fail(function (error) {
//             alert(JSON.stringify(error));
//         });
//     },
//
//     update: function () {
//         var data = {
//             title: $("#title").val(),
//             content: $("#content").val()
//         };
//
//         var id = $("$id").val();
//
//         $.ajax({
//             type: "PUT",
//             url: "/api/v1/posts/" + id,
//             dataType: "json",
//             contentType: "application/json; charset=utf-8",
//             data: JSON.stringify(data),
//         }).done(function () {
//             alert("글이 수정되었습니다.");
//             window.location.href = "/";
//         }).fail(function (error) {
//             alert(JSON.stringify(error));
//         });
//     },
// }
//
// main.init()

const btnSave = document.getElementById("btn-save");
const btnUpdate = document.getElementById("btn-update");
const btnDelete = document.getElementById("btn-delete");

btnSave && btnSave.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const content = document.getElementById("content").value;

    fetch("http://localhost:8080/api/v1/posts", {
        method: "post",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            title: title,
            author: author,
            content: content,
        })
    })
        .then(res => {
            if (!res.ok) {
                throw Error(res.status.toString());
            }
            return res.json();
        })
        .then((data) => {
            alert("글이 등록되었습니다.");
            window.location.href = "/";
        })
        .catch((error) => {
            alert(error);
        });
});

btnUpdate && btnUpdate.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const id = document.getElementById("id").value;

    fetch("http://localhost:8080/api/v1/posts/" + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            title: title,
            content: content,
        })
    }).then(() => {
            alert("글이 수정되었습니다.");
            window.location.href = "/";
    }).catch((error) => {
        alert(error);
    });
});

btnDelete && btnDelete.addEventListener("click", () => {
    const id = document.getElementById("id").value;

    fetch("http://localhost:8080/api/v1/posts/" + id, {
        method: "delete",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
    }).then(() => {
        alert("글이 삭제되었습니다.");
        window.location.href = "/";
    })
});