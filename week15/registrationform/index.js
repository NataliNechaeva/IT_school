function check () {
    let namelogin = document.getElementById("Login");
    let email = document.getElementById("inputEmail4");
    let data = document.getElementById("date");
    let password1 = document.getElementById("inputPassword4");
    let password2  = document.getElementById("inputPassword5");
    let address = document.getElementById("inputAddress");
    document.getElementById('errormessage').innerHTML = '';

if (namelogin.value == '') {
    document.getElementById('errormessage').innerHTML +="Ваш логин не заполнен<br>";
}
if (email.value == '') {
    document.getElementById('errormessage').innerHTML +="Ваш email не заполнен<br>";
}
if (email.value == '') {
    document.getElementById('errormessage').innerHTML +="Ваш пароль не заполнен<br>";
}
if (data.value == '') {
    document.getElementById('errormessage').innerHTML +="Дата рождения не заполнена<br>";
}
if (password1.value != password2.value) {
    document.getElementById('errormessage').innerHTML +="Введенные пароли не соответсвуют<br>";
}
if( password1.value.length<4) {document.getElementById('errormessage').innerHTML +="Пароль содержит менее 4 символов<br>";
}
if (address.value == '') {
    document.getElementById('errormessage').innerHTML +="Ваш адрес не заполнен<br>";
}
else {
    document.getElementById('errormessage').innerHTML +=`Привет, ${namelogin.value}!`;
}
}
