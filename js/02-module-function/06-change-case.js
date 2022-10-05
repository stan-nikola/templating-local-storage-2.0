
/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

const changeCase = function (string) {
    //  const letters = string.split('');
    // let invertedString = '';
    // for (const letter of letters) {
    //     if (letter === letter.toLocaleLowerCase()) {
    //         // перебираем нижний регистр
           
    //         invertedString += letter.toUpperCase();
    //     } else {
          
    //         // перезаписываем нижний в нижний
    //         invertedString += letter.toLowerCase();
    //     }
    // } return invertedString;

    const letters = string.split('');
    let invertedString = '';

    for (const letter of letters) {
        const isItLowerCase = letter === letter.toLowerCase();

        invertedString += isItLowerCase ? letter.toUpperCase() : letter.toLowerCase();
    } return invertedString;
}


console.log(changeCase('qweRTY')); // QWErty
console.log(changeCase('mAnGo')); // MaNgO
console.log(changeCase('AjAx')); // aJaX


