const magicBtn = document.querySelector('.js-magic-btn');
/*
 * Интерфейс classList
 * - add(класс)
 * - remove(класс)
 * - toggle(класс)
 * - replace(старыйКласс, новыйКЛасс)
 * - contains(класс)
 */

magicBtn.addEventListener('click', () => {
    const navEl = document.querySelector('.site-nav');
    console.log('navEl', navEl.classList);

    // добавить класс
    navEl.classList.add('new-cls', 'qwe');

    // удалить класс
    navEl.classList.remove('site-nav');
});

const btnToggle = document.querySelector('.js-btn-toggle');

btnToggle.addEventListener('click', () => {
    const navEl = document.querySelector('.site-nav');

    navEl.classList.toggle('js-link');
});

const btnReplace = document.querySelector('.js-btn-replace');

btnReplace.addEventListener('click', () => {
    const navEl = document.querySelector('.site-nav');
    navEl.classList.replace('site-nav', 'site-nav-new');

    console.log(navEl.classList.contains('site-nav'));
});

const currentPage = '/about';

const linkEl = document.querySelector(`.site-nav__link[href='${currentPage}']`);
console.log(linkEl);

linkEl.classList.add('site-nav__link--current');
