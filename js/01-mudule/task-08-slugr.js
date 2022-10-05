/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 */

// Должно получиться top-10-benefits-of-react-framework

const title = 'Top 10 benefits of React framework';

// * - Нормализуем строку
// let titleLoverCase = title.toLocaleLowerCase();
// console.log(titleLoverCase);

// // * - Разбиваем по словам
// const words = titleLoverCase.split(' ');
// console.table(words);

// //  * - Сшиваем в строку с разделителями
// const slug = words.join('-');
// console.log(slug);

// метод chain (Цепочка) по вызовам. Декларативный код

const slug = title.toLocaleLowerCase().split(' ').join('-');

console.log(slug);