function displayValue(val) {
    document.getElementById("display").value = document.getElementById("display").value + val

}

function cleardisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    var userInput = document.getElementById("display").value;
    var result = eval(userInput);
    document.getElementById("display").value = result;

}

function redirectToAnotherPage() {
    window.location.href = 'black.html';
}

function redirectToAnotherPage1() {
    window.location.href = 'index.html';
}