// console.log('Hello world!');
// import qwe from '../src/validate-password';

// console.log('qwe', qwe);

// дефолтный импорт
import validatePassword from './validate-password';
console.log(validatePassword('fd'));

// импортируем объект функций
// import apiService from './api-service';

// console.log('apiService', apiService);

// импортируем сколько угодно
//  можно переименовать с импорта переменную x as value
// import {
//     fetchAllUsers,
//     fetchUserById,
//     x as value,
//     y as name,
// } from './api-service';

// console.log(fetchAllUsers);
// console.log(fetchUserById);
// console.log(value);
// console.log(name);

// импорт пространства имен импортирует объект,
//  все что было в экспортируемом файле
// import * as apiService from './api-service';
// console.log('apiService', apiService);

import { addUser } from './api-service';
addUser('Fozzy');
