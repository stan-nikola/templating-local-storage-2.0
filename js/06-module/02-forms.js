/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    // предотвратить реакцию браузера по умолчанию(не перезагружает по дефолту)
    event.preventDefault();
    // console.dir(event.currentTarget.elements.email.value);
    // console.dir(event.currentTarget.elements.password.value);
    // console.log('Это сабмит формы');

    // вытягивать по одному значению
    // const formElements = event.currentTarget.elements;

    // const email = formElements.email.value;
    // const password = formElements.password.value;
    // const subscription = formElements.subscription.value;

    // const formData = {
    //     email,
    //     password,
    //     subscription,
    // };

    // собираем все данные сразу

    const formData = new FormData(event.currentTarget);

    // будет пустой массив, но он не пустой. можно отправлять в таком виде
    console.log(formData);

    // что бы увидеть данные
    formData.forEach((value, name) => {
        console.log(name, value);
    });
}
