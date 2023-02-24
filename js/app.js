
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