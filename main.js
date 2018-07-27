function init() {
    // clear form input onload
    document.getElementById('rupee-value').value = "";
}

function calculate() {
    // implement main function
    const dollar    = 68;           // dollar to ruppee value
    const crore     = 10000000;
    const million   = 1000000;
    const billion   = 1000000000;

    let rupee = getRupeeValue();
    let result = (rupee * crore)/dollar;
    let displayResult = `= $ ${Math.round(result)}`
    if (rupee === ""){
        displayResult = '';
        document.getElementById('typed-value').innerHTML = 'Please enter a value ...';
    }
    document.getElementById('result').innerHTML = displayResult;
    console.log(displayResult);
    console.log(fnum(result));
}

function getRupeeValue(){
    let value = document.getElementById('rupee-value').value;
    return value;
}

function enteredValue(){
    let value       = getRupeeValue();
    let valueRupees = `Rs. ${value} `
    let valueCrore  = `(${value * 10000000})`;   // convert to crore

    // prevent 0 from being printed
    if (value != '')
    document.getElementById('typed-value').innerHTML = valueRupees + valueCrore;
}

function fnum(x){
    if (x < 1000000) {
        return (Math.round(x/1000) + ' Thousand');
    }
    if (x < 10000000) {
        return (Math.round(x/1000000).toFixed(2) + ' Million');
    }
    if (x < 1000000000) {
        return (Math.round(x/1000000) + ' Million');
    }
    if (x < 1000000000000) {
        return (Math.round(x/1000000000) + ' Billion');
    }
    if (x < 1000000000000000) {
        return (Math.round(x/1000000000000) + ' Trillion');
    }
}

// trigger calculate() on ENTER press
document.getElementById('rupee-value').onkeydown = (evt) => {
    if (evt.which === 13) {
        calculate();
    }
}