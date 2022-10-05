/*
 * Знакомство  с массивами
 * - Объявление
 * - Индексация
 * - Длина
 * - Индекс последнего элемента
 * - Переопределение
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// // console.table(friends);


// // индекс последнего элемента
// const lastIndex = friends.length -1;

// // console.log(lastIndex);

// // вывод элемента массива по номеру
// console.log(friends[2]);
// console.log(friends[0]);

// // перезаписать значение в массив

// friends[1] = 'Vasyl';
// friends[3] = 'Peter';
// // console.table(friends);

//  /* Передача по ссылке и по значению
//  * - Примитивы и сложные типы
//  * - Ссылочное равенство (referential equality)
//  */

// //  Передача по значению

// let a = 10;
// // при изменении а в b не перезапишет
// let b = a;

// console.log(a);
// console.log(b);

// a = 20;

// console.log(a);
// console.log(b);

// // Передача по ссылке

// let c = [1, 2, 3];
// let d = c;

// console.log(c);
// console.log(d);
// // при изменении c в d  ПЕРЕЗАПИШЕТ

// c[1] = 500;

// console.log(c);
// console.log(d);

// // false // одинаковые массивы не будут равны, тк это не одни и те-же ссылки
// console.log([1, 2, 3] === [1, 2, 3]);

// // true // будут равны, тк это одни и те-же ссылки
// console.log(c === d);


/*
 * Перебор (итерация) массива
 * - for - если нужен индекс или нужно изменить элемент массива
 * - for...of - если индекс не нужен и в массиве ничего менять не нужно
 */

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// Перебор (итерация) массива с помощью циклов for
// const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1){
    
// // обращаемся к каждому элемента массива на итерации friends[i]

//     console.log(friends[i]);

//     // можно изменить элементы массива
//     friends[i] += '-member';
// }
//  console.table(friends);

// Перебор (итерация) массива с помощью циклов for...of

for (const friend of friends) {
    console.log(friend);

}