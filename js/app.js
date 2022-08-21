function getPin(){
    const pin = generatePin();
    const pinString = pin + "";
    if(pinString.length === 4){
        return pin;
    }
    else{
        // console.log("pin not 4 digit found", pin);
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}


document.getElementById("generate-pin-btn").addEventListener("click", function(){
    const pin = getPin();
    // display pin
    const displayPinField = document.getElementById("generate-pin");
    displayPinField.value = pin;
});

document.getElementById("calculator").addEventListener("click", function(event){
    const calcNumber = event.target.innerText;
    const typedNumberField = document.getElementById("typed-numbers");
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(calcNumber)){
        if(calcNumber === "C"){
            typedNumberField.value = "";
        }
        else if(calcNumber === "<"){
            const digits = previousTypedNumber.split("");
            digits.pop();
            const restDigits = digits.join("");
            typedNumberField.value = restDigits;
        }
    }
    else {
        const newTypedNumber = previousTypedNumber + calcNumber;
        typedNumberField.value = newTypedNumber;
    }
});

document.getElementById("submit-pin-btn").addEventListener("click", function(){
    const displayPinField = document.getElementById("generate-pin");
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById("typed-numbers");
    const typedNumbers = typedNumberField.value;

    const pinSuccessMessage = document.getElementById("pin-success");
    const pinFailureMessage = document.getElementById("pin-failure");
    
    if(currentPin === typedNumbers){
        // alert("valid pin");
        pinSuccessMessage.style.display = "block";
        pinFailureMessage.style.display = "none";
    }
    else {
        // alert("invalid pin");
        pinFailureMessage.style.display = "block";
        pinSuccessMessage.style.display = "none";
    }
});