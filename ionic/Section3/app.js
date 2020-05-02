const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelButton = document.querySelector("#btn-cancel");
const confirmButton = document.querySelector("#btn-confirm");
const expensesList = document.querySelector("#expenses-list");
const totalExpensesOutput = document.querySelector("#total-expenses");


let totalExpenses = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

const setExpenses = () => {
    totalExpensesOutput.textContent = totalExpenses;
}


setExpenses();
confirmButton.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (
        enteredReason.trim().length <= 0 || 
        enteredAmount <= 0 || 
        enteredAmount.trim().length <= 0
        ) {
            const alert = document.createElement('ion-alert');
            alert.message = 'Please enter valid reason and amount!',
            alert.header = 'Invalid inputs',
            alert.buttons = ['Okay']
            document.body.appendChild(alert);
            alert.present();
            return;
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;
    totalExpenses += +enteredAmount;

    expensesList.appendChild(newItem);
    setExpenses();
    clear();
});

cancelButton.addEventListener('click', clear);