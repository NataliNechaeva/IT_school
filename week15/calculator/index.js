function Addition () {
    let firstNumber=document.getElementById('FirstNumber').value;
    let secondNumber=document.getElementById('SecondNumber').value;
    document.getElementById('allresult').innerHTML = `Результат сложения: ${+firstNumber + + secondNumber}`;
}

function Subtraction () {
    let firstNumber=document.getElementById('FirstNumber').value;
    let secondNumber=document.getElementById('SecondNumber').value;
    document.getElementById('allresult').innerHTML = `Результат вычетания: ${firstNumber - secondNumber}`;
}

function Multiplication () {
    let firstNumber=document.getElementById('FirstNumber').value;
    let secondNumber=document.getElementById('SecondNumber').value;
    document.getElementById('allresult').innerHTML = `Результат умножения: ${firstNumber*secondNumber}`;
}

function Division () {
    let firstNumber=document.getElementById('FirstNumber').value;
    let secondNumber=document.getElementById('SecondNumber').value;
    if (secondNumber==0) {
        document.getElementById('allresult').innerHTML = `На ноль делить нельзя`;
    }
    else {
        document.getElementById('allresult').innerHTML = `Результат деления: ${firstNumber/secondNumber}`;}
}



