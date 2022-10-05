// const dog = {
//   name: 'Mango',
//   age: 3,
//   isHappy: true,
// };
// // в строку stringify
// const dogJSON = JSON.stringify(dog);
// console.log('dogJSON', dogJSON);

// const savedUserDate = '{ "name": "Mango", "age": 3, "isHappy": true }';

// // в объект parse
// console.log(JSON.parse(savedUserDate));

console.log(localStorage);
// можно передать одну сущность
localStorage.setItem(
  'my-data',
  JSON.stringify({ name: 'Polly', age: 2, isHappy: true }),
);

const savedData = localStorage.getItem('my-data');
const parseData = JSON.parse(savedData);
console.log('localStorage-pars', parseData);
