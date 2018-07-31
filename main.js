function init() {
    // clear form input onload
    document.getElementById('rupee-value').value = "";
}


// get current dollar rates through api
function getRates(){    
    const SECRET_KEY = config.SECRET_KEY;
    const apiURI    = `http://data.fixer.io/api/latest?access_key=${SECRET_KEY}&format=1&base=EUR&symbols=usd,inr`;
    let data = '';
    $.ajax({
        url: apiURI,
        dataType: 'json',
        async: false,
        success: function(result) {
            // console.log(data)
            data = result;
        }
      });
      return data;
}


// implement main calculations
function calculate() {
    const getRate   = getRates();
    const USD       = getRate.rates.USD;
    const INR       = getRate.rates.INR;
    const dollar    = INR/USD;           // dollar to ruppee value
    const crore     = 10000000;

    let rupee = getRupeeValue();
    let result = (rupee * crore)/dollar;
    let displayResult = `= $ ${Math.round(result)} ($ ${fnum(result)})`
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


// get input value
function getRupeeValue(){
    let value = document.getElementById('rupee-value').value;
    return value;
}


function typedValue(value){
    document.getElementById('typed-value').innerHTML = value;
}


// Give user typing feedback
function enteredValue(){
    let value       = getRupeeValue();
    let valueRupees = `Rs. ${value} crore `
    let valueCrore  = `(${value * 10000000})`;      // convert to crore
    const getRate   = getRates();
    const USD       = getRate.rates.USD;
    const INR       = getRate.rates.INR;
    const dollar    = INR/USD;                      // dollar to ruppee value

    document.getElementById('typed-value').innerHTML = value;
    // prevent 0 from being printed
    if (value != '')
        typedValue(`${valueRupees} | USD: ${dollar.toFixed(2)}`);
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


{   // self executing function - to animate text
    word = "Welcome. Enter a number.";
    let string = '';
    for(let i=0; i < word.length; i++) {
        {
            setTimeout(() => {
                string += word[i];
                document.getElementById('heading').innerHTML = string;
            }, 80 * i);
        }
    }
}


// trigger calculate() on ENTER press
document.getElementById('rupee-value').onkeyup = (evt) => {
    if (evt.which === 13) {
        calculate();
    }
}
