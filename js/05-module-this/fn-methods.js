/*
 * call и apply
 */

// const showThis = function (a, b, arr) {
//   console.log(a, b, arr);
//   console.log('showThis -> this', this);
// };

// showThis();

// const fnA = {
//   a: 10,
//   b: 20,
// };

// const fnB = {
//   x: 1,
//   y: 2,
// };

// showThis.call(fnA, 11, 22, [1, 2, 3]); // для передачи аргументов
// showThis.apply(fnB, [1, 2, 3]); // для передачи массива, он его распылит

// const changeColor = function (color, style) {
//   //   console.log('changeColor -> this', this);
//   this.color = color;
//   this.style = style;
// };

// const hat = {
//   color: 'black',
//   style: 'some',
// };

// const sweeter = {
//   color: 'blue',
//   style: 'classic',
// };
// changeColor.call(hat, 'white', 'babushkin');
// console.log(hat);

// changeColor.call(sweeter, 'green', 'casual');

// console.log(sweeter);

/*
 * bind навсегда привязывает this и делают копию функции
 */
// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor('yellow');
// console.log(hat);

// changeSweaterColor('red');
// console.log(sweater);

/*
 * counter
 */

const counter = {
  value: 0,
  increment(value) {
    console.log('increment -> this', this);
    this.value += value;
  },
  decrement(value) {
    console.log('decrement -> this', this);
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

updateCounter(10, counter.increment.bind(counter)); //undefined
updateCounter(5, counter.decrement.bind(counter)); // undefined
