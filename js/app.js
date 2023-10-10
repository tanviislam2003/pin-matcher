function getpin() {
  const pin = genaratePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    console.log("pin not 3 digit found", pin);
    return getpin();
  }
}

function genaratePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}
document.getElementById("genarate-pin").addEventListener("click", function () {
  const pin = getpin();

  const dispalypinField = document.getElementById("dispaly-pin");
  dispalypinField.value = pin;
});
document.getElementById("calculator").addEventListener("click", function (event) {
  const number = event.target.innerText;
  const typedNumberField = document.getElementById("typed-numbers");
  const previousTypedNumber = typedNumberField.value;
  if(isNaN(number)){
    if(number === 'C'){
      typedNumberField.value = '';
    }
    else if(number === '<'){
      const digits =previousTypedNumber.split('');
      digits.pop();
      const remainingDigits=digits.join('');
      typedNumberField.value=remainingDigits;
    }

  }
  else{
    const newTypedNumber = previousTypedNumber + number;
    typedNumberField.value = newTypedNumber;
  }
  })
  document.getElementById('verify-pin').addEventListener('click',function(){
    const dispalypinField=document.getElementById('dispaly-pin');
    const currentpin=dispalypinField.value;

    const typedNumberField=document.getElementById('typed-numbers');
    const typedNumber=typedNumberField.value;

    const pinSuccessMassage=document.getElementById("pin-success");
    const pinFailureMassage=document.getElementById("pin-failure");

    if(typedNumber === currentpin){
    
      pinSuccessMassage.style.display='block';
      pinFailureMassage.style.display='none';
    }
    else{
      const pinFailureMassage=document.getElementById("pin-failure");
      pinFailureMassage.style.display='block';
      pinSuccessMassage.style.display='none';
     
    }
  })
