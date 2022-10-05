// парс элемента числа parseInt(); parseFloat();

// целые числа, запинается на первом не числовом символе включая точку
let elementWidth = '100px';

elementWidth = Number.parseInt(elementWidth);
// console.log(elementWidth);

// целые числа с плавающей точкой, запинается на первом не числовом символе.
let elementHeight = '457.85px';
elementHeight = Number.parseFloat(elementHeight);

// console.log(elementHeight);


//  метод toFixed(digits) ОТСЕКАЕТ ; digits- кол-во знаков после запятой
let salary = 150.19191;

// salary = salary.toFixed(2);

// преобразование со стоки в число
// salary = Number(salary);
// console.log(salary);

// либо записать матрешкой
// salary = Number(salary.toFixed(8));
// console.log(salary);

// либо записать матрешкой сразу в консоль
// console.log(Number(salary.toFixed(2)));


// приведение к числу Number(value)
// значение NaN (Not a Number) и метод Number .isNaN(value)

let quantity = '30';
let value = 'Эту строку в число не перевести';

// console.log(Number(quantity));
// console.log(Number(value));

// объект Math

// число Пи и другие математические методы
// console.log(Math.PI);

// возведение в степень
// const base = 3;
// const power = 2;

// const result = Math.pow(base, power);
// квадратный корень
// const result = Math.sqrt(base, power);
// console.log(result);

// console.log(Math.pow(base, power));

// оператор экспаненты то же самое как возведение в квадрат
// console.log(base**power);

//  ЗАДАЧА!
// Напиши скрипт который просит пользователя ввести число и степень.
// выводит чисто в степень и выводит результат в консоль

// let base = prompt('Введите число которое нужно возвести в степень');
// base = Number(base);

// console.log(base);

// let power = prompt('введите число степени');
// power = Number(power);
// console.log(power);

// // const result = Math.pow(base, power);
// // console.log(result);

// console.log(base ** power);

// =====================================================
// генерим случайные числа Math.random() Math.round()

// const random = Math.random();
// console.log(random);
    
// в диапазоне Math.random() * ((max-min) + min);
const max = 60;
const min = 50;

let randomInRange = Math.random() * (max - min) + min;

//  округление до целого числа
// randomInRange = Math.round(randomInRange);

// либо сокращенное 
//  randomInRange = Math.round(Math.random() * (max - min) + min);
// console.log(randomInRange);

