
class Calc {
    
static sum () 
		{
            let firstQuantity=document.getElementById('FirstNumber').value;
            let secondQuantity=document.getElementById('SecondNumber').value;
            return + firstQuantity + + secondQuantity;
}
static sub () {
    let firstQuantity=document.getElementById('FirstNumber').value;
            let secondQuantity=document.getElementById('SecondNumber').value;
            return  firstQuantity - secondQuantity;
}
static multi () {
    let firstQuantity=document.getElementById('FirstNumber').value;
            let secondQuantity=document.getElementById('SecondNumber').value;
            return  firstQuantity * secondQuantity;
}
static div () {
    let firstQuantity=document.getElementById('FirstNumber').value;
            let secondQuantity=document.getElementById('SecondNumber').value;
            return  firstQuantity / secondQuantity;
}
}

function Summing () {
    document.getElementById('allresult').innerHTML = `Результат сложения: ${Calc.sum()}`;
};
function Subtraction () {
    document.getElementById('allresult').innerHTML = `Результат вычитания: ${Calc.sub()}`;
};
function Multiplication () {
    document.getElementById('allresult').innerHTML = `Результат умножения: ${Calc.multi()}`;
};
function Division () {
    document.getElementById('allresult').innerHTML = `Результат деления: ${Calc.div()}`;
};

