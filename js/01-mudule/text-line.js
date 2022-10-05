// длинна строки свойство length

const message = 'В этой строке 24 символа';
// console.log(message.length);

// конкатенация строк

// const firstName = 'Corbin';
// const lastName = 'Dallas';
// const fullName = firstName + ' '+ lastName;

// console.log(fullName);

// ЗАДАЧА!
// напиши скрипт который выведет строку в формате
// гость x y поселяется в z номер  класса q
// подставив вместо xyzq значения переменных

const firstName = 'Corbin';
const lastName = 'Dallas';
const fullName = firstName + ' ' + lastName;
const room = 555;
const type = 'VIP';

// console.log('Гость ' + fullName + ' поселяется в номер ' + room + ' с классом ' + type);

// шаблонные строки  templateStrings- юзать такой вариант записи
const welcomeMsg = `Гость ${fullName} поселяется в номер ${room} с классом ${type}`;
// console.log(welcomeMsg);

// нормализация с методом toLoverCase() преобразование в нижний регистр
// что ищем?

// const brand = 'ACer';
// const normalazedBrand = brand.toLowerCase();

// let brand = prompt('Ведите бренд');
// brand = brand.toLowerCase();

//  выбрать определенный символ в строке
// console.log(brand[0])
let brand = 'Samsung';
// пример выбора первого символа + Слайс остальной части
// console.log(brand.slice(1).toLowerCase()) ;
brand = brand[0] + brand.slice(1).toLowerCase();

// console.log(brand);


// поиск строки с методом includes()
const blackListWord1 = 'sale';
const blackListWord2 = 'spam ';

const string1 = ' its new yea sale spam';
const string2 = ' sale today';
const string3 = ' its wonderful day to SALE';
// нормализируем 3ю строку
const normalizedString3 = string3.toLowerCase();

console.log(string1.includes(blackListWord1));
console.log(string2.includes(blackListWord2));
console.log(normalizedString3.includes(blackListWord1));