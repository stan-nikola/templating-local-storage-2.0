/*
 * Делегирование событий
 * - общий слушатель
 * - фильтр цели клика nodeName
 */

const container = document.querySelector('.js-container');

container.addEventListener('click', onClick);

function onClick(event) {
    // фильтруем клик только по кнопке гард клоуз
    if (event.target.nodeName !== 'BUTTON') {
        return;
    }
    // console.log(event.target);
    console.log(event.target.textContent);
    console.log(event.target.nodeName);
}

/*
 * Код добавления кнопок
 */
const addBtn = document.querySelector('.js-add-btn');
let labelCounter = 6;

addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
    const btn = document.createElement('button');
    btn.textContent = `Кнопка ${labelCounter}`;
    btn.type = 'button';

    container.appendChild(btn);
    labelCounter += 1;
}
