const addBtn = document.getElementById("btn_add_comment");
const commentField = document.getElementById("add_comment");
let arrayComment = [];

//Вставка аватарки по изменение в поле <input type="file" id="file" value="">
document.getElementById("file").addEventListener('change', (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
        const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
        localStorage.setItem('wallpaper', base64String);
        document.getElementById("img_avatar").src = "data:image/png;base64," + base64String;
    };
    reader.readAsDataURL(file);
});

//создание комментария (аватарка + никнем + комментарий)
function sendMessage(wallpaper, author, text2) {
    document.getElementById("chat").innerHTML += `<span class="alert">
    <img><img id="img_avatar" class ="smallavatar" src=${wallpaper} alt="Avatar">
    <label>${author}: </label> ${text2} <br> </span>`;
}

//проверяем документ на наличие в нем информации в localStorage
document.addEventListener("DOMContentLoaded", function(event){
    let name = localStorage.getItem('name');
    if(name!=null)
    {
    document.getElementById("author").value = name;
    }
    let avatar = localStorage.getItem('wallpaper');
if (avatar != null) {
    let avatarImg = document.getElementById("img_avatar");
    avatarImg.src = "data:image/png;base64," + avatar;
}
if (localStorage.getItem('comment') != null) {
    arrayComment = JSON.parse(localStorage.getItem('comment'));
    for(let i = 0; i < arrayComment.length; i++){
        sendMessage(document.getElementById("img_avatar").src, author, arrayComment[i]);
    }
}
});


function checkMessage () {
    let author = document.getElementById("author").value;
    let wallpaper = document.getElementById("img_avatar").src;
    let text = document.getElementById("add_comment").value;
    let text1 = text.replace(/(viagra)/ig, "***");
    let text2 = text1.replace(/(xxx)/ig, "***");

    if(localStorage.getItem('name') == null) {
        localStorage.setItem('name', author);
    }
    sendMessage(wallpaper, author, text2);
    commentField.value = "";

    arrayComment.push(text2);
    localStorage.setItem('comment', JSON.stringify(arrayComment));
    //document.getElementById("answerspam").innerHTML =text2;
}
//функция срабатывает при нажатии на кнопку очистить, чистит страницу и localStorage от всего
btn_clear_comment.addEventListener("click", () => {
    const commentContainer = document.querySelectorAll(".alert");
    for (let i = commentContainer.length; i--;) {
        commentContainer[i].remove();
    }
    commentField.value = "";
    localStorage.clear();
    document.getElementById("img_avatar").src = "image/femaleheadshot.png";
    document.getElementById("author").value = "";
    document.getElementById("file").value = "";
    arrayComment = [];
});
