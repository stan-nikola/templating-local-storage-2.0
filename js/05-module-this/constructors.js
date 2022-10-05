/*
 * Основы ООП: класс, экземпляр (объект), интерфейс
 */

/*
 * Функции-конструкторы
 * - Именование
 * - Оператор new
 * - Свойство Function.prototype
 */

// const Car = function ({ brand, model, price } = {}) {
//   // const { brand, model, price } = config;
//   // 2. Функция вызывается в контексте созданного объекта,
//   //    то есть в this записывается ссылка на него
//   this.brand = brand;
//   this.model = model;
//   this.price = price;

//   // 3. В свойство this.__proto__ записывается ссылка на обьект Car.prototype
//   //    тоесть Car.prototype это ПРОТОТИП будущего обьекта (экземпляра)

//   // 4. Ссылка на обьект возвращается в место вызова new Car
// };

// Car.prototype.sayHi = function () {
//   console.log('Car.prototype.sayHi -> this', this);
//   console.log('Hello :) ');
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// // console.log(Car.prototype);

// // 1. Если функция вызывается через new, создаётся пустой объект
// const myCar = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });
// // console.log(myCar);

// // myCar.sayHi();
// myCar.changePrice(10000);
// console.log(myCar);

// const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 50000 });
// // console.log(myCar2);

// myCar2.sayHi();

// const myCar3 = new Car({ brand: 'Audi', model: 'A6', price: 65000 });
// // console.log(myCar3);

// myCar3.sayHi();

const User = function ({ email, password } = {}) {
  this.email = email;
  this.password = password;
};

User.prototype.changeData = function (newEmail, newPass) {
  this.email = newEmail;
  this.password = newPass;
};

const mango = new User({ email: 'mango@gmail.com', password: 'qwe123' });

mango.changeData('new-mango@gmail.com', 'asdf456');

console.log(mango);

/*
 * Статические свойства и методы
 * - Статические свойства и методы доступны только на самом конструкторе
 * - В статических методах не нужен this
 */

User.message = 'Я статическое свойство, меня нет на экземплярах или в прототипе.';

User.logInfo = function (obj) {
  console.log('User.logInfo -> obj', obj);
  console.log('Почта: ', obj.email);
  console.log('Пароль: ', obj.password);
};

User.logInfo(mango);

// Object.keys()
// Object.value()
