function sumInput() {
    let sum = 0;
    let numbers = [];
for(;;) {

  let value = +prompt("Введите число", '');

  if (!value) break; 

  sum += value;
  numbers.push(+value);
  
}
numbers.sort(function (a, b) {
    return a - b;
});
alert( 'Если сложить '+numbers +' получится: '+ sum );

console.log(numbers)
}