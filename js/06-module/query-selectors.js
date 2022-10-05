const magicBtn = document.querySelector('.js-magic-btn');
/*
 * document.querySelector(selector) и document.querySelectorAll(selector)
 *   selector - любой валидный CSS-селектор
 *
 * Что возвращают?
 */

// const navEl = document.querySelector('ul');
// console.log(navEl);

// // если ничего не нашло NULL

// const navLink = document.querySelectorAll('.site-nav__link');
// console.log('navLink', navLink);

// если ничего не нашло пустой массив []

/*
 * Document.querySelector* и Element.querySelector*
 */

// const navIn = navEl.querySelectorAll('li');
// console.log('navIn', navIn);

//=============Результат по кнопке=============================
magicBtn.addEventListener('click', () => {
    const navEl = document.querySelector('ul');
    console.log(navEl);

    // если ничего не нашло NULL

    const navLink = document.querySelectorAll('.site-nav__link');
    console.log('navLink', navLink);

    // если ничего не нашло пустой массив []
});
