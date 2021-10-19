class Cat {
    constructor(nickname, breed, food, sex) {
      this.nickname = nickname; //кличка
      this.breed = breed; //порода
      this.food = food; //корм 
      this.sex = sex; //пол 
    }
}
function getCat () {

    let n = document.getElementById("breed").options.selectedIndex;


let cat = new Cat(document.getElementById("nickname").value,
    document.getElementById("breed").options[n].text,
    document.querySelector('input[name="food"]:checked').value,
    document.querySelector('input[name="sex"]:checked').value);

console.log(cat.nickname); 
console.log(cat.breed); 
console.log(cat.food); 
console.log(cat.sex);
}