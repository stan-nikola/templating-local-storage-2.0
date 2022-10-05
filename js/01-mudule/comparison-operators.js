// оператор сравнения

console.log(7 > 5);
console.log(7 >= 7);
console.log(5 > 7);

// приведение (преобразование) типов к числу
// оператор ><= приведит операнды к числу (строку, булевое значение)

console.log('5' > 4);
console.log(true < 4);

// преторы сравнения == и ===
// ✅ ВСЕГДА ИСПОЛЬЗУЕМ  строгое равенство === и не равенство !===

// пример не строгого равенства
const isEqual = 5 == '5';
console.log(isEqual);

// пример  строгого равенства
const isEqualStrict = 5 === '5';
const isNotEqualStrict = 5 !== '5';
console.log(isEqualStrict);
console.log(isNotEqualStrict);



