class ValidatorStatic {
    static isEmail (EmailField) {
        let mailFormat = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        if (EmailField.match(mailFormat)) {
            return true;
        }
        else {
            return false;
        }
    }
    static isDomain (DomainField) {
        let domainFormat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        if (DomainField.match(domainFormat)) {
            return true;
        }
        else {
            return false;
        }
    }
    static isDate (DateField) {
        let dateFormat = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
        if (DateField.match(dateFormat)) {
            return true;
        }
        else {
            return false;
        }
    }
    static isPhone (PhoneField) {
            let phoneFormat = /^\d[\d\(\)\ -]{4,14}\d$/;
            if (PhoneField.match(phoneFormat)) {
                return true;
            }
            else {
                return false;
            }
    }
}

    function validation () {
        let errors = [];
        if(ValidatorStatic.isEmail(document.getElementById('mail').value)==false) {
            { errors.push('Ваш адрес электронной почты введен неверно!');};
        }
        if (ValidatorStatic.isDomain(document.getElementById('domain').value)==false) {
		{ errors.push('Ваш домен введен неверно!');};
    }
    if (ValidatorStatic.isDate(document.getElementById('date').value)==true) {
		{ errors.push('Формат даты введен неверно!');};
    }
    if (ValidatorStatic.isPhone(document.getElementById('telephone').value)==false) {
		{ errors.push('Телефон введен неверно!');};
    }
    document.getElementById('result').innerHTML = 
    errors.join(', <br>');}
