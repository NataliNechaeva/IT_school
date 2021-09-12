function Addition () {
    let FirstNumberInput=document.getElementById('FirstNumber');
    console.log(FirstNumberInput.value);
    let SecondNumberInput=document.getElementById('SecondNumber');
    console.log(SecondNumberInput.value);
    let result = Number(FirstNumberInput.value);
    let result2 = Number(SecondNumberInput.value);
    console.log(FirstNumberInput.value + SecondNumberInput.value);
    document.getElementById('allresult').innerHTML = `Результат сложения: ${+result + + result2}`;
}

function Subtraction () {
    let FirstNumberInput=document.getElementById('FirstNumber');
    console.log(FirstNumberInput.value);
    let SecondNumberInput=document.getElementById('SecondNumber');
    console.log(SecondNumberInput.value);
    let result = Number(FirstNumberInput.value);
    let result2 = Number(SecondNumberInput.value);
    console.log(FirstNumberInput.value + SecondNumberInput.value);
    document.getElementById('allresult').innerHTML = `Результат вычетания: ${result - result2}`;
}

function Multiplication () {
    let FirstNumberInput=document.getElementById('FirstNumber');
    console.log(FirstNumberInput.value);
    let SecondNumberInput=document.getElementById('SecondNumber');
    console.log(SecondNumberInput.value);
    let result = Number(FirstNumberInput.value);
    let result2 = Number(SecondNumberInput.value);
    console.log(FirstNumberInput.value + SecondNumberInput.value);
    document.getElementById('allresult').innerHTML = `Результат умножения: ${result * result2}`;
}

function Division () {
    let FirstNumberInput=document.getElementById('FirstNumber');
    console.log(FirstNumberInput.value);
    let SecondNumberInput=document.getElementById('SecondNumber');
    console.log(SecondNumberInput.value);
    let result = Number(FirstNumberInput.value);
    let result2 = Number(SecondNumberInput.value);
    console.log(FirstNumberInput.value + SecondNumberInput.value);
    document.getElementById('allresult').innerHTML = `Результат деления: ${result / result2}`;
}



