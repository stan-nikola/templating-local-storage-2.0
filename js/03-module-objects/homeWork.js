// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

/**
  |============================
  | Напиши функцию countProps(object), 
  которая считает и возвращает количество собственных свойств объекта 
  в параметре object.
   Используй переменную propCount для 
   хранения количества свойств объекта.
  |============================
*/
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount = Object.values(object).length;
//     }
//   }

//   return propCount;
// }

// function countProps(object) {
//   let propCount = [];
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount.push(object[key]);
//     }

//     // Change code above this line
//   }
//   // Change code above this line
//   return propCount.length;
// }

// console.log(countProps({})); //0
// console.log(countProps({ name: 'Mango', age: 2 })); //2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500, qwe: 11 })); //

/**
  |============================
  | Перебери объект apartment используя метод Object.keys()
   и цикл for...of. Запиши в переменную keys массив ключей 
   собственных свойств объекта apartment,
   и добавь в массив values все значения его свойств.
  |============================
*/

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }

/**
  |============================
  | Выполни рефакторинг функции countProps(object) 
  используя метод Object.keys() и,
  возможно, но необязательно, цикл for...of.
  |============================
*/

// function countProps(object) {
//   // Change code below this line
//   let propCount = Object.keys(object);

//   return propCount.length;
//   // Change code above this line
// }

// console.log(countProps({ name: 'Mango', age: 2 })); //2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); //3

/**
  |============================
  | Напиши функцию countTotalSalary(salaries)
   которая принимает объект зарплат,
    где имя свойства это имя сотрудника,
    а значение свойства это зарплата.
     Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
   Используй переменную totalSalary для хранения общей суммы зарплаты.
  |============================
*/

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   for (const value of Object.values(salaries)) {
//     totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); //330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // 400
// console.log(countTotalSalary({})); //0

/**
  |============================
  | Перебери массив объектов colors используя цикл for...of.
   Добавь в массив hexColors значения свойств hex, 
  а в массив rgbColors значения свойств rgb из всех объектов массива colors.
  |============================
*/

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

/**
  |============================
  | Напиши функцию getProductPrice(productName)
   которая принимает один параметр
    productName - название продукта.
     Функция ищет объект продукта с таким именем (свойство name) 
    в массиве products и возвращает его цену (свойство price).
   Если продукт с таким названием не найден, функция должна возвращать null.
  |============================
*/
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (productName === product.name)
//       return `Product price: ${product.price} with ${product.quantity} quantity`;
//   }
//   return `Product with name "${productName}" not found`;
// }

// console.log(getProductPrice('Radar')); //1300
// console.log(getProductPrice('Grip')); //1400
// console.log(getProductPrice('Scanner')); //2700
// console.log(getProductPrice('Engine')); //null

/**
  |============================
  | Напиши функцию getAllPropValues(propName) которая принимает
   один параметр propName - имя (ключ) свойства.
    Функция должна вернуть массив всех значений свойства
     с таким именем из каждого объекта в массиве products.
      Если в объектах нет свойства с таким именем,
       функция должна вернуть пустой массив.
  |============================
*/

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const propArray = [];
//   for (const product of products) {
//     if (Object.keys(product).includes(propName)) {
//       propArray.push(product[propName]);
//     }
//   }
//   return propArray;
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('prddice'));

/**
  |============================
  | Напиши функцию calculateTotalPrice(productName) которая принимает один параметр
   productName - название товара.
   Функция должна вернуть общую стоимость (цена * количество)
    товара с таким именем из массива products.
  |============================
*/
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const product of products) {
//     if (Object.values(product).includes(productName)) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   return totalPrice;
// }

// console.log(calculateTotalPrice('Blaster'));
// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Droid'));

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// const scores = [89, 64, 42, 17, 93, 51, 26];
// console.log(...scores);

// const bestScore = [...scores];

// console.log(bestScore);

/**
  |============================
  | Напиши функцию makeTask(data) которая
   принимает один параметр 
   data - объект со следующими свойствами.
    text - текст задачи.
    category - категория задачи.
    priority - приоритет задачи.

Функция должна составить и вернуть новый объект задачи,
 не изменяя напрямую параметр data.
  В новом объекте должно быть свойство completed,
   значение которого хранится в одноимённой локальной переменной.

В параметре data гарантированно будет
 только свойство text, а остальные два,
  category и priority, могут отсутствовать.
   Тогда, в новом объекте задачи, 
   в свойствах category и priority
    должны быть значения по умолчанию, 
    хранящиеся в одноимённых локальных переменных.
  |============================
*/
// function makeTask(...) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';

//   // Change code below this line
//   return { completed, category, priority, ...data };
//   // Change code above this line
// }

// console.log(makeTask({}));
// console.log(makeTask({ category: 'Homemade', priority: 'Low', text: 'Take out the trash' }));
// console.log(makeTask({ category: 'Finance', text: 'Take interest' }));
// console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));

/**
  |============================
  | Используя операцию rest дополни код функции add() так, 
  чтобы она принимала любое количество аргументов, считала и возвращала их сумму.
  |============================
*/

// function add(...args) {
//   let sumArgs = 0;
//   for (const arg of args) {
//     sumArgs += arg;
//   }
//   return sumArgs;
// }

// console.log(add(32, 6, 13, 19, 8)); //78
// console.log(add(74, 11, 62, 46, 12, 36)); //241

/**
  |============================
  | Функция addOverNum() считает сумму всех аргументов.
   Измени параметры и тело функции addOverNum() так,
    чтобы она считала сумму только тех аргументов,
   которые больше чем заданное число.
    Это число должно быть первым параметром функции.
  |============================
*/

// // Change code below this line
// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber) {
//       total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }

// // console.log(addOverNum(50, 15, 27)); //0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //71

/**
  |============================
  | Функция findMatches() принимает произвольное количество аргументов.
   Первым аргументом всегда будет массив чисел, 
   а остальные аргументы будут просто числами.

Дополни код функции так,
 чтобы она возвращала новый массив matches,
  в котором будут только те аргументы,
   начиная со второго,
    которые есть в массиве первого аргумента.

Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2],
 потому что только они есть в массиве первого аргумента.
  |============================
*/

// function findMatches(firstNumber, ...args) {
//   const matches = [];
//   for (const arg of [...args]) {
//     if (firstNumber.includes(arg)) {
//       matches.push(arg);
//     }
//   }

//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); //[1, 2]
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); //[17, 89, 2]
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); // []

/**
  |============================
  | Дополни метод updateBook(oldName, newName) так,
   чтобы он изменял название книги с oldName
    на newName в свойстве books. Используй indexOf() для того, 
  чтобы найти нужный элемент массива,
   и splice() для того чтобы заменить этот элемент
  |============================
*/

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     console.log(bookIndex);
//     this.books.splice(bookIndex, 1, newName);
//     return this.books;
//     // Change code above this line
//   },
// };

// // console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles')); //["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// console.log(bookShelf.updateBook('The last kingdom', 'Dune')); //["Dune", "Haze", "The guardian of dreams"]

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const item of this.potions) {
//       if (item.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];
//       if (potionName === potion.name) {
//         this.potions.splice(i, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     let result = `Potion ${oldName} is not in inventory`;
//     for (let i = 0; i < this.potions.length; i += 1) {
//       const potion = this.potions[i];

//       if (oldName === potion.name) {
//         potion.name = newName;
//         result = `Found ${oldName} change to ${newName} `;
//       }
//     }
//     return console.log(result);
//   },
//   // Пиши код выше этой строки
// };

// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));

/**
  |============================
  | Тимми и Сара думают, что они влюблены, но там,
   где они живут, они узнают об этом,
    только когда каждый сорвет по цветку.
     Если у одного из цветов четное количество лепестков,
      а у другого нечетное количество лепестков,
       это означает, что они влюблены.

Напишите функцию,
 которая будет принимать количество лепестков каждого цветка
  и возвращать true, если они влюблены, и false, если нет.
  |============================
*/
// function lovefunc(flower1, flower2) {
//   return flower1 % 2 !== flower2 % 2;
// }
// function lovefunc(flower1, flower2) {
//   if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
//     return true;
//   }
//   return false;
// }

// console.log(lovefunc(905, 872));
// // console.log(lovefunc(2, 2));
// // console.log(lovefunc(0, 0));

// function makeNegative(num) {
//   if (num > 0) {
//     return num * -1;
//   }
//   return num;
// }

// console.log(makeNegative(1));
// console.log(makeNegative(-1));

/**
  |============================
  | Напишите функцию для преобразования имени в инициалы.
   Это ката строго состоит из двух слов
    с одним пробелом между ними.

На выходе должны быть две заглавные буквы с точкой,
 разделяющей их.

Это должно выглядеть так:

Sam Harris=>S.H

patrick feeney=>P.F
  |============================
*/

// function abbrevName(name) {
//   const nameArray = name.split(' ');
//   return nameArray[0][0] + '.' + nameArray[1][0];
// }

// console.log(abbrevName('Sam Harris')); //'S.H'
// // console.log(abbrevName('Patrick Feenan')); //"P.F"

/**
  |============================
  | Вам даны два внутренних угла (в градусах) треугольника.

Напишите функцию, возвращающую 3-е число.

Примечание: будут проверены только положительные целые числа.
  |============================
*/
// function otherAngle(a, b) {
//   return 180 - a - b;
// }

// console.log(otherAngle(30, 60)); //90
// console.log(otherAngle(60, 60)); //60
// console.log(otherAngle(43, 78)); //59

/**
  |============================
  | Наша футбольная команда завершила чемпионат.
   Результат каждого совпадения выглядит как "x:y".
    Результаты всех матчей фиксируются в сборнике.

Например: ["3:1", "2:2", "0:1", ...]

Напишите функцию, которая берет такую ​​коллекцию
 и считает очки нашей команды в чемпионате. 
 Правила подсчета очков за каждый матч:

если х > у: 3 балла
если х < у: 0 баллов
если х = у: 1 балл
Заметки:

в чемпионате 10 матчей
0 <= х <= 4
0 <= у <= 4

  |============================
*/
// function points(games) {
//   var sum = 0;
//   for (var i = 0; i < games.length; i += 1) {
//     if (games[i][0] > games[i][2]) {
//       sum += 3;
//     }
//     if (games[i][0] == games[i][2]) {
//       sum += 1;
//     }
//   }
//   return sum;
// }

// // };
// //30
// console.log(points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']));
// //10
// console.log(points(['1:1', '2:2', '3:3', '4:4', '2:2', '3:3', '4:4', '3:3', '4:4', '4:4']));

// function sum(numbers) {
//   let total = 0;
//   for (const number of numbers) {
//     total += number;
//   }
//   return total;
// }

// console.log(sum([])); //0
// console.log(sum([1, 5.2, 4, 0, -1])); //9.2
// function doubleChar(str) {
//   var word = '';
//   for (var i = 0; i < str.length; i += 1) {
//     word = word + str[i] + str[i];
//   }
//   return word;
// }

// console.log(doubleChar('abcd'));

// function updateLight(current) {
//   if (current === 'green') {
//     return 'yellow';
//   } else if (current === 'yellow') {
//     return 'red';
//   } else if (current === 'red') {
//     return 'green';
//   }
// }

// function updateLight(current) {
//   switch (current) {
//     case 'green':
//       return 'yellow';

//     case 'yellow':
//       return 'red';

//     case 'red':
//       return 'green';

//     default:
//       return 'Broken';
//   }
// }

// console.log(updateLight('red'));

// function solution(str) {
//   console.log([...str].reverse().join(''));
//   return [...str].reverse().join('');
// }

// function solution(str) {
//   let n = '';
//   for (let i of str) {
//     console.log(i);
//     n = i + n;
//   }
//   return n;
// }

// console.log(solution('world'));

/**
  |============================
  | Напишите функцию RemoveExclamationMarks,
   которая удаляет все восклицательные знаки
    из заданной строки.
  |============================
*/
function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}
console.log(removeExclamationMarks('Hello!  World!'));
