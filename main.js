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
    // check if rupee is not a number
    if (isNaN(rupee)){
        typedValue('Please enter a valid number')
        console.log('Enter valid number.')
        return
    }
    if (rupee === ""){
        displayResult = '';
        typedValue('Please enter a value ...');
        return
    }
    document.getElementById('result').innerHTML = displayResult;
    console.log(displayResult);
    console.log(fnum(result));
}

function getRupeeValue(){
    let value = document.getElementById('rupee-value').value;
    return value;
}

function typedValue(value){
    document.getElementById('typed-value').innerHTML = value;
}

function enteredValue(){
    console.log('entered value triggered');
    let value       = getRupeeValue();
    let valueRupees = `Rs. ${value} `
    let valueCrore  = `(${value * 10000000})`;   // convert to crore

    document.getElementById('typed-value').innerHTML = value;
    // prevent 0 from being printed
    if (value != '')
        typedValue(valueRupees + valueCrore);
        console.log(value);

    if (isNaN(value))
        typedValue('Please only use numerals ...');
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

function animate(){
    word = "Welcome. Enter a number.";
    let string = '';
    for(let i=0; i < word.length; i++) {
        {
            setTimeout(() => {
                string += word[i];
                console.log(string);
                document.getElementById('heading').innerHTML = string;
            }, 80 * i);
        }
    }
}

animate();

// trigger calculate() on ENTER press
document.getElementById('rupee-value').onkeyup = (evt) => {
    if (evt.which === 13) {
        calculate();
    }
}