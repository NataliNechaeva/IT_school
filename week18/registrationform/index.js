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
function checkAll() {
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
}