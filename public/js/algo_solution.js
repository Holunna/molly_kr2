let result; // Определяем переменную глобально
let check = false; // Переменная для проверки состояния расчета

function verify() {
    let x = parseFloat(elementX.value);
    let y = parseFloat(elementY.value);
    let messageText = "Calculation results: ";

    if (x === 0 || y === 0) {
        result = "Error: X and Y must be non-zero.";
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = false;
        document.getElementById("send").disabled = true; // Деактивируем кнопку
    } else {
        let z = 1 / (x * y);
        result = `Z = 1 / (${x} * ${y}) = ${z}`;
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = true;
        document.getElementById("send").disabled = false; // Активируем кнопку
    }
}

function send() {
    if (check) {
        // Передаем описание задачи
        let textCondition = document.getElementsByTagName('p')[0].innerText;
        document.getElementsByName('formulation')[0].value = textCondition;
        // Устанавливаем значение результата в форму
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit(); // Отправляем форму
    } else {
        alert("There are issues. Please correct the input.");
    }
}

// Связываем элементы и события
const elementX = document.getElementById("x");
elementX.addEventListener('input', verify);

const elementY = document.getElementById("y");
elementY.addEventListener('input', verify);

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send);
