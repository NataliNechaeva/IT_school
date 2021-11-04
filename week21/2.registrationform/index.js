//Проверка для одного поля
let errors = [];
function checkValidity(input) {
    let validity = input.validity;

    if (validity.valueMissing) 
		{ errors.push('Поле '+ input.placeholder + ' не заполнено');}
        
	if (validity.rangeUnderflow) 
		{ let min = input.min;
			errors.push('При регистрации тебе должно быть больше ' + min + ' лет'); }

	if (validity.patternMismatch) 
			{ errors.push('Поле '+ input.placeholder + ' заполнено некорректно');}
				console.log(errors)	
	if (document.getElementById("inputPassword4").value != document.getElementById("inputPassword5").value) 
		{
			errors.push('Введенные пароли не соответсвуют ');}		
				
		}

//Проверка для всех полей
postButton.onclick = function (event) {
	errors = [];
		//получаем все инпуты
    let inputs = document.querySelectorAll("input");

		//перебираем их и на каждый вызываем функцию валидации
    for (let input of inputs) {
        checkValidity(input);
    }

		//выводим ошибки в div 
    document.getElementById('errormessage').innerHTML = 
    errors.join(', <br>');

	event.preventDefault();
	let user = {
		login: document.getElementById("Login").value,
		email: document.getElementById("Email").value,
		age: document.getElementById("age").value,
		birth: document.getElementById("date").value,
		password: document.getElementById("inputPassword4").value
	}
	console.log(user);
	fetch("https://httpbin.org/post", 
	{
        method: 'POST',
		body: JSON.stringify(user),
		headers: {
			'Content-type': 'application/json; charset=utf=8'
		},
	})
	.then(response => response.json())
	.then(user1 => {console.log(user1);
	})
	.catch(error => console.log(error));

}