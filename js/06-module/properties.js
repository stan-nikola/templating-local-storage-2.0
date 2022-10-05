const magicBtn = document.querySelector('.js-magic-btn');

/*
 * Свойства элемента (hero)
 * - Изображение
 * - Текст и textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

magicBtn.addEventListener('click', () => {
    const heroImg = document.querySelector('.hero__image');
    // console.log('heroImg', heroImg);
    // console.log(heroImg.alt);
    heroImg.src = 'https://klike.net/uploads/posts/2018-10/1539499416_1.jpg';
    heroImg.alt = 'Это новый котик';

    const heroTitleEl = document.querySelector('.hero__title');
    console.log(heroTitleEl);
    heroTitleEl.textContent = 'Я сладкий пирожочек!';
});

/*
 * Атрибуты
 * - get(имя-атрибута)
 * - set(имя-атрибута)
 * - remove(имя-атрибута)
 * - has(имя-атрибута)
 */

const heroPic = document.querySelector('.hero__image');
// console.log(heroPic.getAttribute('src'));
// console.log(heroPic.src);
// console.log(heroPic.hasAttribute('src'));
// heroPic.remove('src');

/*
 * Data-атрибуты
 */

const action = document.querySelectorAll('.js-actions button');
console.log('action', action[0].dataset.action);
console.log('action', action[2].dataset.action);

magicBtn.addEventListener('click', () => {
    const inputEl = document.querySelector('.js-input');
    console.log(inputEl.value);
    inputEl.value = 'qwee';
});
