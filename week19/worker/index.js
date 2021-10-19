class Worker {
    constructor(name, surname, rate, days) {
      this.name = name; //имя
      this.surname = surname; //фамилия 
      this.rate = rate; //ставка за день 
      this.days = days; //количесвто дней 
    }
    getSalary() {
        return this.rate*this.days;
    }
}

let worker = new Worker('Иван', 'Иванов', 10, 31);
  
console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31