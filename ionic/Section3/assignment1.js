const inputName = document.querySelector("#input-name");
const inputRating = document.querySelector("#input-rating");
const buttonAdd = document.querySelector("#btn-add");
const listRating = document.querySelector("#list-rating");

buttonAdd.addEventListener('click', () => {

    const enteredName = inputName.value;
    const enteredRating = +inputRating.value;
   
    if (enteredName.trim().length <= 0 || enteredRating <= 0 || enteredRating > 5) {
        const alert = document.createElement('ion-alert');
        alert.message = 'Please enter valid name and rating!',
        alert.header = 'Invalid inputs',
        alert.buttons = ['Okay']
        document.body.appendChild(alert);
        alert.present();
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.innerHTML = `<b>${enteredName}:</b>&nbsp;${enteredRating}`;
    listRating.appendChild(newItem);
});