
// check 4 digit pin
function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4)  {
        return pin;
    }
    else {
        return getPin();
    }
}

//generate Pin
function generatePin() {
    const random = Math.round(Math.random()*10000);

    return random;
}


document.getElementById('btn-generate-pin').addEventListener('click', function() {
    const pin = getPin();
    // display pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;

});


document.getElementById('calculator').addEventListener('click', function(event) {
    const clickedNumber = event.target.innerText;    // catch clicked number value
    const typedNumberField = document.getElementById('typed-number'); // get input field value
    const previousTypedNumber = typedNumberField.value; // get previous typed number

    //check if isn't a number
    if(isNaN(clickedNumber)) {
        // clear the input filed if clicked C
        if(clickedNumber === 'C') {
            typedNumberField.value = ''; 
        }
        else if(clickedNumber === '<') { // remove last number
            const digits = previousTypedNumber.split(''); //convert string to array
            digits.pop(); // remove last array
            const remainingDigits = digits.join(''); // join array to string
            typedNumberField.value = remainingDigits; // set updated string
        }
    }else {       
        const newTypedNumber = previousTypedNumber + clickedNumber; // concat previous and new number (It's like a string data so don't need to convert)
        typedNumberField.value = newTypedNumber; // set clicked value to input field
    }

   
});


document.getElementById('verify-pin').addEventListener('click', function() {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;


    const typedNumberField = document.getElementById('typed-number'); // get input field value
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinUnsuccessMessage = document.getElementById('pin-unsuccess');


    if(typedNumber === currentPin) {     
        pinSuccessMessage.style.display = 'block';
        pinUnsuccessMessage.style.display = 'none';
    }else {        
         pinUnsuccessMessage.style.display = 'block';
         pinSuccessMessage.style.display = 'none';
    }
});
