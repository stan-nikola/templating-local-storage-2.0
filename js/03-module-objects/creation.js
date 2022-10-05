/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

// const playlist = {
//     name: 'My Playlist',
//     rating: 5,
//     tracks: ['track - 1',' track - 2', 'track - 3'],
//     trackCount:3,

// }
// console.log(playlist);


/*
 * Доступ к свойству
 * - obj.key
 * - obj['key']
 * - Отсутствующие свойства
 */
const playlist = {
    name: 'My Playlist',
    rating: 5,
    tracks: ['track - 1',' track - 2', 'track - 3'],
    trackCount:3,

}

// добавить свойство в объект
playlist.position = 10;

// перезаписать свойство в объекте
playlist.rating = 15;


// console.log(playlist);

// console.log(playlist.trackCount);
// console.log(playlist.rating);

// одинаковый вывод 
// console.log(playlist.name);
// console.log(playlist['name']);

//  если будет добавлено новое свойство
// как вывести ее в лог если она не в области видимости

const propertyName = 'tracks';

//вернет  playlist undefined, значение будет не определено
// console.log(playlist.propertyName);

// выведет Отсутствующие свойства
// console.log(playlist[propertyName]);


/*
 * Короткая запись свойств
// если имя ключа совпадает с названием переменной
 */
const username = 'Mango';
const email = 'mango@mail.com';

const signupData = {
    // userName: username,
    // email: email,
    username,
    email,
}




// console.log(signupData);


/*
 * Вычисляемые свойства
 */

//  <input name="color" value="tomato" >

const inputName = 'color-1';
const inputValue = 'tomato';

const colorData = {
    
    // значение переменной станет ключом
    [inputName]: inputValue,
    
}
// console.log(colorData);


/*
 * Ссылочный тип {} === {}
// обьекты будут равны если они имеют одинаковую ссылку на объект,
//  как у массивов
 */

console.log({ a: 1 } === { a: 1 });
console.log([] === []);

const a = { x: 1, y: 2 };
const b = a;

// console.log(b === a);

a.hello = 100;
b.hello = 150;

// console.log(a);
// console.log(b);


/*
 * Массивы и функции это объекты
 */

// const a = [1, 2, 3];

// a.hello = ':)';

// console.log(a);

// const fn = function () {
//   console.log('hello');
// };

// fn.hello = ';)';

// console.dir(fn.hello);