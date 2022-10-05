/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */
// =========Выбрать один тег по клике на кнопку и вывести =========
// const tagContainer = document.querySelector('.js-tags');

// tagContainer.addEventListener('click', onTagContainerClick);
// let selectedTag = 'null';

// function onTagContainerClick(evt) {
//     if (evt.target.nodeName !== 'BUTTON') {
//         return;
//     }
//     // console.log(evt.target);

//     const activeClassBtn = document.querySelector('.tags__btn--active');

//     // проверяем если на activeClassBtn есть класс. Если нет = null,
//     // проверка не выполняется, если есть класс проверка его удаляет
//     // if (activeClassBtn) {
//     //     activeClassBtn.classList.remove('tags__btn--active');
//     // }

//     // новый синтаксис ES6 проверки activeClassBtn выше (не обязательное свойство)
//     // ТОЛЬКО ПРИ ДОСТУПЕ К СВОЙСТВУ
//     activeClassBtn?.classList.remove('tags__btn--active');

//     const nextActiveBtn = evt.target;
//     // задаем класс на выбранную кнопку
//     nextActiveBtn.classList.add('tags__btn--active');
//     // console.log('onTagContainerClick => nextActiveBtn', nextActiveBtn);

//     // выводим дата атрибут
//     selectedTag = nextActiveBtn.dataset.value;
//     console.log('selectedTag', selectedTag);
// }

// ===========Выбрать несколько тегов по клику на кнопку и вывести==

const tagContainer = document.querySelector('.js-tags');

tagContainer.addEventListener('click', onTagContainerClick);

// new Set() как массив, но не добавляет  значения которые уже были записаны
const selectedTags = new Set();
function onTagContainerClick(evt) {
    if (evt.target.nodeName !== 'BUTTON') {
        return;
    }
    const btn = evt.target;
    const tag = btn.dataset.value;
    const isActiveBtn = btn.classList.contains('tags__btn--active');

    if (isActiveBtn) {
        selectedTags.delete(tag);
    } else {
        selectedTags.add(btn.dataset.value);
    }

    // ТЕРНАРНИКОМ ТУТ НЕЛЬЗЯ
    // тернарник для записи значения по условию, а не для вызова функции по условию
    // isActiveBtn
    //     ? selectedTags.delete(tag)
    //     : selectedTags.add(btn.dataset.value);

    btn.classList.toggle('tags__btn--active');

    console.log([...selectedTags]);
}
