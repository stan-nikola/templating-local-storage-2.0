import '../css/common.css';

/*
 - Создание
 - Unix-время
 - Методы
 - Разница времени
 - Date.now()
*/

// const date = new Date();

// console.log(date.getTime());

// считает с 1 января 1970 00:00

// const date = new Date(60000);
// // смещение на 60000 мс
// console.log(date);

// создаем лишний объект
// const date1 = new Date().getTime();
// console.log('date1:', date1);

// setTimeout(() => {
//     const date2 = new Date().getTime();

//     console.log('date1:', date1);
//     console.log('date2:', date2);
//     console.log(date2 - date1);
// }, 3000);

// не создаем лишний объект - Date.now()
const date1 = Date.now();
console.log('date1:', date1);

setTimeout(() => {
    const date2 = Date.now();

    console.log('date1:', date1);
    console.log('date2:', date2);
    console.log(date2 - date1);
}, 3000);
