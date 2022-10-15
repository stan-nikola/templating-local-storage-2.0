import '../css/common.css';

const horses = [
    'Secretariat',
    'Eclipse',
    'West Australian',
    'Flying Fox',
    'Seabiscuit',
];

const refs = {
    startBtn: document.querySelector('.js-start-race'),
    winnerField: document.querySelector('.js-winner'),
    progressField: document.querySelector('.js-progress'),
    tableBody: document.querySelector('.js-results-table > tbody'),
};

refs.startBtn.addEventListener('click', onStart);
let raceCounter = 0;
function onStart() {
    raceCounter += 1;
    const promises = horses.map(run);
    updateWinnerField('');
    updateProgressField('🐎🐎🐎Заезд начался, ставки не принимаются');
    determineHorse(promises);
    waitForAll(promises);
}
function determineHorse(horsePromises) {
    Promise.race(horsePromises).then(({ horse, time }) => {
        updateWinnerField(`🐎Horse ${horse} 🥇WIN in ${time} time`);
        updateResultsTable({ horse, time, raceCounter });
    });
}
function waitForAll(horsePromises) {
    Promise.all(horsePromises).then(() => {
        updateProgressField('🥁🥁🥁Заезд окончен,  принимаются ставки');
    });
}
function updateWinnerField(message) {
    refs.winnerField.textContent = message;
}
function updateProgressField(message) {
    refs.progressField.textContent = message;
}

function updateResultsTable({ horse, time, raceCounter }) {
    const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;
    refs.tableBody.insertAdjacentHTML('beforeend', tr);
}
function run(horse) {
    return new Promise(resolve => {
        const time = getRandomTime(2000, 3500);
        setTimeout(() => {
            resolve({ horse, time });
        }, time);
    });
}

function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
 * Promise.race([]) для ожидания первого выполнившегося промиса
 */
// Promise.race(promises).then(({ horse, time }) => {
//     console.log(`%c 🐎Horse ${horse} 🥇WIN in ${time} time`, 'color:green');
// });

/*
 * Promise.all([]) для ожидания всех промисов
 */

// Promise.all(promises).then(x => {
//     console.log(x);
// });
