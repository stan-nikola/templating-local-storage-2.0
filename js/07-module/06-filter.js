const tech = [
    { label: 'HTML' },
    { label: 'CSS' },
    { label: 'JavaScript' },
    { label: 'Node.js' },
    { label: 'React' },
    { label: 'Vue' },
    { label: 'Next.js' },
    { label: 'Mobx' },
    { label: 'Redux' },
    { label: 'React Router' },
    { label: 'GraphQl' },
    { label: 'PostgreSQL' },
    { label: 'MongoDB' },
];

/*
 * 1. Рендерим разметку элементов списка
 * 2. Слушаем изменение фильтра
 * 3. Фильтруем данные и рендерим новые элементы
 */

// FUSE.js SEARCH  для поиска по символам Пушистый поиск

const refs = {
    list: document.querySelector('.js-list'),
    input: document.querySelector('#filter'),
};
const listItemsMarkup = createListItemMarkup(tech);
populateList(listItemsMarkup);

// refs.input.addEventListener('input', _.throttle(onFilterChange, 300));
refs.input.addEventListener('input', _.debounce(onFilterChange, 300));

function createListItemMarkup(items) {
    return items.map(item => `<li>${item.label}</li>`).join('');
}

function onFilterChange(evt) {
    // console.log(evt.target.value);
    // переводим в нижний регистр вводимые значения
    const filter = evt.target.value.toLowerCase();

    // фильтруем массив с помощью filter НЕ ТРОГАЯ ОРИГИНАЛЬНЫЙ МАССИВ
    const filtered = tech.filter(t => t.label.toLowerCase().includes(filter));
    // console.log('onFilterChange => filtered', filtered);

    // вызываем функцию на отфильтрованном массив
    const filterMarkup = createListItemMarkup(filtered);
    // console.log('onFilterChange => filterMarkup', filterMarkup);

    // добавляем в разметку отфильтрованный массив

    populateList(filterMarkup);
}
// функция по добавлению в разметку
function populateList(markup) {
    refs.list.innerHTML = markup;
}
