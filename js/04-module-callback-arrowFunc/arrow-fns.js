/*
 * Стрелочные функции
 * - Объявление
 * - Явный (implicit) и (explicit) неявный возврат
 * - Аргументы
 * - Неявный возврат объекта
 */

// если передаваемый параметр один,
//  то можно писать без скобок

// const addArrow2 = name => {
//   //   console.log(name);
//   return name.toUpperCase();
// };
// console.log(addArrow2('mango'));

// если параметра нет,
// то обязательно пустые скобки

const addArrow3 = () => {};

// если выражение в теле функции одно,
// то можно записать не явным возвратом

// const addArrow4 = (x, y) => x * y;

// console.log(addArrow4(5, 3));

// =========Неявный возврат объекта==========

const fnA = function () {
  return {
    a: 5,
    b: 10,
  };
};
// console.log(fnA());

// Неявный (explicit) возврат объекта, такой синтаксис

const fnArrow = () => ({ a: 5, b: 10 });

// console.log(fnArrow());

// Псевдомассив Arguments

const add = function (a, b, c) {
  // console.log(arguments);
};
add(5, 8, 2);

const addArrow = (...args) => {
  // console.log(args);
};
addArrow(5, 8, 2);

// =======Context==================
// Контекст внутри стрелки
// обьявляется местом ее обьявления,
// а не вызова, и ссылается на контекст
//  родительской функции
// у стрелочной функции нет своего this

// const showThis = () => {
//   console.log('this in showThis', this);
// };
// showThis();

// const user = { name: 'mango' };
// user.showContext = showThis;
// user.showContext();

const user = {
  fullName: 'Mango',
  showName() {
    console.log('this', this);
    console.log('this fullName', this.fullName);

    // const inner = function () {
    // console.log('this in inner:', this); // undefined
    // };

    const inner = () => {
      console.log('this in inner:', this);
    };
    inner();
  },
};
user.showName();

// Стрелки как методы объекта
// никогда не использовать стрелки в методе объекта
