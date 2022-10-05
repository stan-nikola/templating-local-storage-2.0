//  операторы ветвления if

if (6) {
    // тело выпотнится если true, если falce не выполнится
    console.log('Выполненено');
}
if (5 > 30) {
    // тело выпотнится если true, если false не выполнится
    console.log('Выполненено');
}
console.log('Дальше');

//  операторы ветвления if else
const x = 10;
const y = 30;
if (x > y) {
    console.log('x > y');
} else {
    console.log('x < y');
}

//  операторы ветвления if...else..if

const salary = 2000;
if (salary <= 500) {
    console.log('Уровень 1');
} else if (salary > 500 && salary <= 1000) {
    console.log('Уровень 2');
} else if (salary > 1000 && salary <= 2000) {
    console.log('Уровень 3 ');
} else {
    console.log('Уровень 4');
}

// тернарный оператор

const balance = -1000;
//  вариоант на операторе ветвления if...else..if

// выносим из области  видимости
// let message;
// if (balance >= 0) {
//     message = 'позитивный баланс';
// } else {
// message = 'негативный баланс';
// }

// вариант на тернарном операторе
// const message = условие ? выражение1 : выражение2;

const message = balance >= 0 ? 'позитивный баланс' : 'негативный баланс';
console.log(message);

// блочная видимость переменных
// то что внутри не видно снаружи, но то что внутри видно снаружи
// по этому переменную нужно выносить из области видимости

let a;
let b;
if (true) {
     a = 10;
}
if (true) {
     b = 20;
}
console.log(a);
console.log(b);


