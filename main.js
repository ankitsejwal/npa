function init() {
    // clear form input onload
    document.getElementById('rupee-value').value = "";
}

function calculate() {
    // implement main function
    const dollar    = 68;           // dollar to ruppee value
    const crore     = 10000000;
    const million   = 1000000;
    const billion   = 100000000;

    let rupee = document.getElementById('rupee-value').value;
    let result = (rupee * crore)/dollar;
    let displayResult = `$ ${Math.round(result)}`
    document.getElementById('result').innerHTML = displayResult;
    console.log(result);
}

function enteredValue(){
    let value = document.getElementById('rupee-value').value;
    let valueNumeric = `(${value * 10000000})`;   // convert to crore
    document.getElementById('rs-value-numeric').innerHTML = valueNumeric;
    document.getElementById('rs-value').innerHTML = value;
    // console.log(value);
}

// trigger calculate() on ENTER press
document.getElementById('rupee-value').onkeydown = (evt) => {
    if (evt.which === 13) {
        calculate();
    }
}