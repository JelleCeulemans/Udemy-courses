const task3Element = document.getElementById('task-3');

const alertWithNoParam = () => {
    alert('This is a function without parameters');
}

const nameAlert = (name) => {
    alert(name);
}

alertWithNoParam();
nameAlert('Jelle Ceulemans');

task3Element.addEventListener('click', alertWithNoParam);

const concatStrings = (string1, string2, string3) => {
    return `${string1} ${string2} ${string3}`;
}

alert(concatStrings('Jelle', 'Ceulemans', '<3 Emmy'));