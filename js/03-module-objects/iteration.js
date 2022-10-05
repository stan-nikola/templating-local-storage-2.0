/*
 * Перебор через for...in и Object.keys|values|entries
 */

const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;

// =======возвращаем массив ключей
// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys) {
//     console.log(key,feedback[key]);
//     // console.log(feedback[key]);

//     totalFeedback += feedback[key];
// }

// возвращаем массив значений

const values = Object.values(feedback);
console.log(values);
for (const value of values) {
  totalFeedback += value;
}

console.log('Total feedbacks:', totalFeedback);
