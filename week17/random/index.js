function generator () {
let ab = [];
for (let i = 0; i < 10; i++) ab[i] = Math.floor (Math.random () * 21 - 10); { 
    console.log([ab]);
    function average(ab) {
        return ab.reduce((a, b) => (a + b)) / 10;
    };
    document.getElementById("array").innerHTML = 'Сгенерировали  '+ [ab];
    document.getElementById("max").innerHTML = 'Максимальное  '+ Math.max.apply(null, ab);
    document.getElementById("min").innerHTML = 'Миниимальное  '+ Math.min.apply(null, ab);
    document.getElementById("average").innerHTML = 'Среднее  '+ average(ab);
    document.getElementById("sum").innerHTML = 'Сумма  '+ ab.reduce((a, b) => a + b, 0);
    document.getElementById("multiplication").innerHTML = 'Произведение  '+ ab.reduce((a,b)=>a*b);
}
}