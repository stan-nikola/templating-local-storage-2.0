/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

// const fnA = function (message, callback) {
//   console.log(message);
//   //   console.log(callback);
//   callback(200);
// };

// const fnB = function (number) {
//   console.log('Это лог при вызове fnB', number);
// };
// fnA('qweqwe', fnB);

// const doMath = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };

// doMath(2, 5, function (x, y) {
//   return x + y;
// });
// doMath(5, 4, function (x, y) {
//   return x - y;
// });

/*
 * Отложенный вызов: регистрация событий
 */

// const buttonRef = document.querySelector('.js-button');

// const handleBtnClick = function () {
//   console.log('Клик по кнопке ' + Date.now());
// };

// buttonRef.addEventListener('click', handleBtnClick);

/*
 * Отложенный вызов: геолокация
 */

// const onGetPositionSuccess = function (position) {
//   console.log('Это вызов onGetPositionSuccess');
//   console.log(position);
// };

// const onGetPositionError = function (error) {
//   console.log('Это вызов onGetPositionError');
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(onGetPositionSuccess, onGetPositionError);

// const callback1 = function () {
//   console.log('Через 4 секунды внутри колбека в таймауте');
// };
// const callback2 = function () {
//   console.log('Через 6 секунды внутри колбека в таймауте');
// };

// console.log('В коде перед таймаутом');
// setTimeout(callback1, 4000);
// setTimeout(callback2, 6000);
// console.log('В коде после таймаута');

//  * Отложенный вызов: http-запрос
//  * - API URL: https://pokeapi.co/api/v2/pokemon
//  */

// const onRequestSuccess = function (response) {
//   console.log('Вызов функции onRequestSuccess после успешного ответа бекенда');
//   console.log(response);
// };

// fetch('https://pokeapi.co/api/v2/pokemon')
//   .then(res => res.json())
//   .then(onRequestSuccess);

/*
 * Фильтр
 */

const filter = function (array, test) {
  const filteredArray = [];

  for (const element of array) {
    const passed = test(element);

    if (passed) {
      filteredArray.push(element);
    }
  }

  return filteredArray;
};

// 1. надо передать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетворяет условию то функция вернет true
// 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

const callback1 = function (value) {
  return value >= 3;
};
const callback2 = function (value) {
  return value < 3;
};
const isFreshFruit = function (fruits) {
  return fruits.isFresh === true;
};

console.log(filter([1, 2, 3, 4, 5], callback1));
console.log(filter([1, 2, 3, 4, 5], callback2));

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

console.log(filter(fruits, isFreshFruit));
