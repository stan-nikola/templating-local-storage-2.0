/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 *      В ПРОЕКТЕ ВЫБИРАЕМ ОДИН ИЗ ЭТИХ ИменованиЙ
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click', handleTargetBtnClick);

//  - handle*: handleSubjectEvent
function handleTargetBtnClick() {
    console.log('Click');
}

//  - *Handler: subjectEventHandler
function targetBtnClickHandler() {
    console.log('Click');
}

//  - on*: onSubjectEvent
// function onTargetBtnClick() {
//     console.log('Click');
// }

addListenerBtn.addEventListener('click', event => {
    console.log(event);
    console.log('Добавили слушателя на целевую кнопку');
    targetBtn.addEventListener('click', onTargetBtnClick);
});

removeListenerBtn.addEventListener('click', () => {
    console.log('Удалили слушателя на целевой кнопке');
    targetBtn.removeEventListener('click', onTargetBtnClick);
});

// выносим в отдельную функцию, т.к. две одинаковые функции не равны. Передаем по ссылке
function onTargetBtnClick(event) {
    console.log('Клик по целевой кнопке');
}
