/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

// можно так
// const input = document.querySelector('.js-input');
// const nameLabel = document.querySelector('.js-button > span');
// const licenseCheckbox = document.querySelector('.js-license');
// const btn = document.querySelector('.js-button');

// можно * Паттерн «Объект ссылок», проще читать и находить элементы
const refs = {
    input: document.querySelector('.js-input'),
    nameLabel: document.querySelector('.js-button > span'),
    licenseCheckbox: document.querySelector('.js-license'),
    btn: document.querySelector('.js-button'),
};

// получил фокус
// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);

// при снятии фокуса для радиокнопок и чекбоксов
// refs.input.addEventListener('change', onInputChange);
// при каждом изменении ввода выдает значения
// refs.input.addEventListener('input', onInputChange);

// // потерял фокус
// function onInputFocus() {
//     console.log('Инпут получил фокус');
// }

// function onInputBlur() {
//     console.log('Инпут потерял фокус');
// }

// function onInputChange(event) {
//     console.log(event.currentTarget.value);
// }
// function onInputChangeInput(event) {
//     console.log(event.currentTarget.value);
// }
// =============================================
// Задача: при вводе в инпут информации вывести ее в спан и сделать кнопку сабмит активной
refs.input.addEventListener('input', onInputChangeInput);

function onInputChangeInput(event) {
    // console.log(event.currentTarget.value);
    refs.nameLabel.textContent = event.currentTarget.value;
}
refs.licenseCheckbox.addEventListener('change', onLicenseChange);
function onLicenseChange(event) {
    console.log('change', event.currentTarget.checked);
    refs.btn.disabled = !event.currentTarget.checked;
}
