/*
 * - Создание элементов
 * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */

/*
 * Создаём заголовок
 */
const titleEl = document.createElement('h1');

titleEl.classList.add('hero__title');
titleEl.textContent = 'This is title :)';
console.log('titleEl', titleEl);

// appendChild добавляет в конец
// document.body.appendChild(titleEl);

const imageEl = document.createElement('img');

imageEl.src =
    'https://lifehacker.ru/wp-content/uploads/2018/12/Kak-fotografirovat-kotikov-19-sovetov-ot-professionala_1544744286.jpg';

// по умолчанию width = 0
imageEl.width = 320;
imageEl.alt = 'This is cat';

// добавляет в конец body или чего-то
// document.body.appendChild(imageEl);

// console.log('ImageEl', imageEl);

// создаем новый пункт в навигации
const navItemEl = document.createElement('li');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Other staff';
navLinkEl.href = '/other';

// console.log('navLinkEl', navLinkEl);

// добавляем a > li
navItemEl.appendChild(navLinkEl);

console.log('navItemEl', navItemEl);

// добавляем li c a  в ul

// находим ссылку на ul
const navItem = document.querySelector('.site-nav');
// добавляем в конец
// navItem.append(navItemEl);

// добавить перед всеми insertBefore
// navItem.insertBefore(navItemEl, navItem.firstElementChild);

// добавить перед последним lastElementChild
// navItem.insertBefore(navItemEl, navItem.lastElementChild);

// добавить перед третьим lastElementChild
navItem.insertBefore(navItemEl, navItem.children[1]);

// добавляем title and img in hero

const heroEl = document.querySelector('.hero');

// добавляем за 2 обращения к ДОМ дереву
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);

// добавляем за одну операцию append сколько угодно фрагментов (порядок передачи важен)
heroEl.append(titleEl, imageEl);

console.log('heroEl', heroEl);
