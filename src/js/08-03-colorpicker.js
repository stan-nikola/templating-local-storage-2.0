import colorCardTpl from '../templates/color-card.hbs';
import colorCardsTpl from '../templates/color-cards.hbs';
import colors from './colors.json';
import '../css/common.css';
import '../css/colorpicker.css';

console.log(colors);

const paletteContainer = document.querySelector('.js-palette');
const cardsMarkup = createColorCardsMarkup(colors);

// 1й вариант обращаться по свойству объекта
// console.log(colorCardsTpl({ colors ));

// 2й вариант обращаться к массиву
// console.log(colorCardsTpl(colors));

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

paletteContainer.addEventListener('click', onPaletteContainerClick);

function createColorCardsMarkup(colors) {
    // return colors.map(color => colorCardTpl(color)).join('');
    // передаем как функцию
    // return colors.map(colorCardTpl).join('');

    // используя
    // #each[https://handlebarsjs.com/guide/builtin-helpers.html#each:~:text=will%20render%20nothing.-,%23,%23each,-You%20can%20iterate]
    return colorCardsTpl(colors);
}

function onPaletteContainerClick(evt) {
    const isColorSwatchEl = evt.target.classList.contains('color-swatch');

    if (!isColorSwatchEl) {
        return;
    }

    const swatchEl = evt.target;
    const parentColorCard = swatchEl.closest('.color-card');

    removeActiveCardClass();
    addActiveCardClass(parentColorCard);
    setBodyBgColor(swatchEl.dataset.hex);
}

function setBodyBgColor(color) {
    document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
    const currentActiveCard = document.querySelector('.color-card.is-active');

    if (currentActiveCard) {
        currentActiveCard.classList.remove('is-active');
    }
}

function addActiveCardClass(card) {
    card.classList.add('is-active');
}
