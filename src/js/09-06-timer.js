import '../css/common.css';

const refs = {
    startBtn: document.querySelector('button[data-action-start]'),
    stopBtn: document.querySelector('button[data-action-stop]'),
    clockface: document.querySelector('.js-clockface'),
};

class Timer {
    constructor({ onTic }) {
        this.intervalId = null;
        this.isActive = false;
        this.onTic = onTic;
        this.init();
    }
    init() {
        const time = this.getTimeComponents(0);
        this.onTic(time);
    }
    start() {
        if (this.isActive) {
            return;
        }
        const startTime = Date.now();
        this.isActive = true;

        this.intervalId = setInterval(() => {
            // console.log('start => startTime', startTime);
            const currentTime = Date.now();
            // console.log('setInterval => currentTime', currentTime);
            const deltaTime = currentTime - startTime;
            const time = this.getTimeComponents(deltaTime);
            this.onTic(time);
        }, 1000);
    }
    stop() {
        const time = this.getTimeComponents(0);
        this.onTic(time);
        this.isActive = false;
        clearInterval(this.intervalId);
    }
    getTimeComponents(time) {
        const hours = this.pad(
            Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        );
        const mins = this.pad(
            Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
        );
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { hours, mins, secs };
    }
    pad(value) {
        return String(value).padStart(2, '0');
    }
}
const timer = new Timer({ onTic: updateClockFace });

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateClockFace({ hours, mins, secs }) {
    refs.clockface.textContent = `${hours}:${mins}:${secs} `;
}

// const timer = {
//     intervalId: null,
//     isActive: false,
//     start() {
//         if (this.isActive) {
//             return;
//         }
//         const startTime = Date.now();
//         this.isActive = true;

//         this.intervalId = setInterval(() => {
//             // console.log('start => startTime', startTime);
//             const currentTime = Date.now();
//             // console.log('setInterval => currentTime', currentTime);
//             const deltaTime = currentTime - startTime;
//             const time = getTimeComponents(deltaTime);
//             updateClockFace(time);
//         }, 1000);
//     },
//     stop() {
//         this.isActive = false;
//         clearInterval(this.intervalId);
//     },
// };

// /*
//  * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
//  */
// function pad(value) {
//     return String(value).padStart(2, '0');
// }

// /*
//  * - Принимает время в миллисекундах
//  * - Высчитывает сколько в них вмещается часов/минут/секунд
//  * - Возвращает обьект со свойствами hours, mins, secs
//  * - Адская копипаста со стека 💩
//  */
// function getTimeComponents(time) {
//     const hours = pad(
//         Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//     );
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { hours, mins, secs };
// }

// /*
//  * - Принимает время в миллисекундах
//  * - Высчитывает сколько в них вмещается часов/минут/секунд
//  * - Рисует интерфейс
//  */
// function updateClockFace({ hours, mins, secs }) {
//     refs.clockface.textContent = `${hours}:${mins}:${secs} `;
// }
