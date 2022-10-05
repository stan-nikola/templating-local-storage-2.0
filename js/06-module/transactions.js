import transactionHistory from '../data/transactions.js';
// console.log(transactionHistory);

{
    /* <tr>
    <td>ID транзакции</td>
    <td>Сумма</td>
    <td>Дата</td>
    <td>Кто</td>
    <td>Тип транзакции</td>
    <td>Имя счёта</td>
    <td>Номер счёта</td>
</tr>; */
}

const makeTransactionRowMarkup = ({
    id,
    amount,
    date,
    business,
    name,
    type,
    account,
}) => {
    return `
    <tr>
        <td>${id}</td>
        <td>${amount}</td>
        <td>${date}</td>
        <td>${business}</td>
        <td>${name}</td>
        <td>${type}</td>
        <td>${account}</td>
    </tr>
    `;
};

console.log(makeTransactionRowMarkup(transactionHistory[0]));

const makeTransactionTableRow = transactionHistory
    .map(makeTransactionRowMarkup)
    .join('');
console.log('makeTransactionTableRow', makeTransactionTableRow);

const transactionTableContainer = document.querySelector(
    '.js-transaction-table',
);

transactionTableContainer.insertAdjacentHTML(
    'beforeend',
    makeTransactionTableRow,
);

//tbody добавляет само
