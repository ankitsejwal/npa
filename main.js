function calculate() {
    // implement calculate main function
    const dollar = 68; // dollar to ruppee value
    const crore = 10000000;
    const million = 1000000;
    const billion = 100000000;

    let rupee = document.getElementById('rupee-value').value;
    let result = (rupee * crore)/dollar;
    let displayResult = `$ ${result}`
    document.getElementById('result').innerHTML = displayResult;
    console.log(result);
}

function enteredValue(){
    let value = document.getElementById('rupee-value').value;
    let valueNumeric = `(${value * 10000000})`;   // convert to crore
    document.getElementById('rs-value-numeric').innerHTML = valueNumeric;
    document.getElementById('rs-value').innerHTML = value;
    console.log(value);
}