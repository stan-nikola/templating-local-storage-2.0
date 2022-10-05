// /*
//  * Напиши скрипт поиска логина
//  * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
//  * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'

//  * - Сначала через for
//  * - Потом через for...of
//  * - Логика break
//  * - Метод includes() с тернарным оператором
//  *

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

const loginToFind = 'm4ngaoDoge';
let message;

// for (let i = 0; i < logins.length; i += 1){
//     // console.log( logins[i]);
//     if (logins[i] === loginToFind) {
        
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     } else
//     message = `Пользователь ${loginToFind}  не найден.`;
     
// }
// console.log(message);
 
// let message = `Пользователь ${loginToFind}  не найден.`;

// for (const login of logins) {

//     if (login === loginToFind){
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }         
// }

// console.log(message);
   
message = logins.includes(loginToFind) ? `Пользователь ${loginToFind}  найден.` : `Пользователь ${loginToFind} не найден.`;
   


console.log(message);