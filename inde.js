


function validatePhoneNumber(phoneNumber) {

    const delExtraNum = phoneNumber.replace(/\D/g, '');
  
  
    if ( delExtraNum.length !== 11 & delExtraNum.length !== 10  ) {
      return false;
    }
  
    if (delExtraNum.charAt(0) === '0')  {
      return false;
    }
  
    return true;
  }
  
  
  console.log(validatePhoneNumber(""));
  