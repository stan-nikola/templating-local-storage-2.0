
/*
 * Операция spread (распыление)
 * - Array.prototype.concat() и аналог через spread
 */

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

// const numbers=[...[1, 2, 3], ...[4, 5, 6], 'item-1', ...[7, 8, 9], 'item-2', ...[20,30,40]]

// console.log(numbers);

/*
 * Поиск самой маленькой или большой температуры (числа)
 */
// const temps = [18, 14, 12, 21, 17, 29, 24];

// // распыляет массив на значения
// console.log('Самая малая температура:-', Math.max(...temps));
// console.log('Самая большая температура:-', Math.min(...temps));


/**
  |============================
  | // ======Передача сложных типов при распылении=====
  |============================
*/

// В случае сложных типов значения передаются по ссылке
// по этому элементы при распылении равны, а массивы  не равны
// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];

// const b = [...a];

// console.log('a: ', a);
// console.log('b: ', b);

// console.log(a[0] === b[0]);
// console.log(a === b);

// a[0].x = 1000;

// console.log('a: ', a);
// console.log('b: ', b);

/*
 * Сшиваем несколько массивов в один через concat() и spread
 */
const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

// const allTemps = lastWeekTemps.concat(currentTemps, nextWeekTemps);

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

// console.log(allTemps);

/*
 * Распыление объектов
 * - Object.prototype.assign() и spread
 */
const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

// олдскул
// const c = Object.assign({}, a, b);

// ===новая запись===
const c = {
    name:'Mango',
    ...a,
    ...b,
    password:'qwe',
}

console.log(c);

// можно распылить строку
console.log(...'string');

//  задача с перезаписыванием настроек
const defaultSettings = {
  theme: 'light',
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
    theme: 'dark',
    hideSidebar: true,
}

const finalSettings = {
    ...defaultSettings,
    ...userSettings
}

console.log(finalSettings);