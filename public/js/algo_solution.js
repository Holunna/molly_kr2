function verify() {
    console.log("X, Y")
    let x = parseFloat(elementX.value);
    let y = parseFloat(elementY.value);
    console.log(x, y);

    let result;

    if (x === 0 || y === 0) {
        result = "Error: X and Y must be non-zero.";
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = false;
    } else {
        let z = 1 / (x * y);
        result = `Z = 1 / (${x} * ${y}) = ${z}`;
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;
        check = true;
    }
}

function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText;
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("There are issues. Please correct the input.");
    }
}

function verify_send() {
    verify();
    send();
}

let messageText = document.getElementById("result").innerText;
let check = false;

const elementX = document.getElementById("x");
elementX.addEventListener('input', verify);

const elementY = document.getElementById("y");
elementY.addEventListener('input', verify);

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send);
