/*
 * Свойство innerHTML
 * - чтение
 * - запись
 */

const titleEl = document.querySelector('.title');

// возвращает весь текстовый контент без тэгов
console.log(titleEl.textContent);

// возвращает весь текстовый контент с тегами итд
console.log(titleEl.innerHTML);

// //добавлять с += не нужно, уменьшает производительность
// titleEl.innerHTML += '<a href=/qwe> вставка с помощью innerHTML </a>';

// можно перезаписать
// titleEl.innerHTML = '<a href=/qwe> вставка с помощью innerHTML </a>';

// можно удалять
// titleEl.innerHTML = '';

/*
// ЧТОБЫ ДОБАВЛЯТЬ НОВОЕ ТОЛЬКО insertAdjacentHTML
 * Вставка разметки с insertAdjacentHTML() ====> не деструктивная операция
 * https://textbook.edu.goit.global/javascript-yk5evp/v2/docs/lesson-11/innerhtml#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-insertadjacenthtml
 */

// "beforebegin" - перед elem
// "afterbegin" - внутри elem, перед всеми детьми
// "beforeend" - внутри elem, после всех детей
// "afterend" - после elem

titleEl.insertAdjacentHTML(
    'beforeend',
    '<a href=/qwe class="title__link"> Ссылочка </a>',
);
titleEl.insertAdjacentHTML('afterend', '<a href=/qwe> Ссылочка </a>');
