// приведение к булю на примере Boolean(value)

//  6 ложных зачений false: 0, NaN, null, undefined, пустая строка и false
// все остальные к true

// console.log(Boolean('false'));
// console.log(Boolean(''));

// логическое И оператор && на лжи (на первом false)

// console.log(5 && 6 && 8 && 'HI');

// возвращает операнду до первого false или последнюю операнду
// console.log(5 && false && 8 && 'HI');

// логическое ИЛИ оператор || запинается на равде (на первом true),
//  или отдает последнюю операнду

// console.log(5 || false || 0 || 'HI');
// console.log(0 || false || 0 || 'HI');

// логическое НЕ оператор ! (инверсия)

// console.log(!false);
// console.log(!true);


// ЗАДАЧА!
// =============================================================
// напиши скрипт который проверяет вхождение числа
// в отрезок обозначений x1 и x2
// до  x1
// после x2
// от x1 до x2
// от x1 или после x2

// const x1 = 10;
// const x2 = 30;
// const number = 40;

// // 40<10 false
// // 40>30 true
// // 40>10 true && 40<30 false  --- false
// // 40<10 false || 40>30 true --- true

// console.log(`Число ${number} попадает в отрезок до ${x1}`, number < x1);
// console.log(`Число ${number} попадает в отрезок после ${x2}`, number > x2);
// console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2} `, number > x1 && number < x2);
// console.log(`Число ${number} попадает ли в отрезок от ${x1} либо после  ${x2} `, number < x1 || number > x2 );

// ЗАДАЧА!
// напиши скрипт который проверяет возможность открыть чат спользователем
// для этого пользователь должен быть
// -другом
// -онлайн
// -без режима не беспокоить

const isFriend = true;
const isOnine = true;
const isDnd = false;

const canOpenChat = isFriend && isOnine && !isDnd;
    // console.log(`Можно ли открыть чат:`, canOpenChat);

    // ЗАДАЧА 
    // напиши скрипт проверки подписки  пользователя при доступе к контенту
    // есть 3 типа подписки free, pro, vip
    // получить подписку могут только пользователи  pro, vip
    
const subscription = 'Vip';
    // если пользователь pro или vip тогда есть доступ

 const canAccessContent =  subscription.toLowerCase() === 'pro' ||  subscription.toLowerCase() === 'vip';
// console.log(`Есть ли доступ к контенту: `, canAccessContent);


