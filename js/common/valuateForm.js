export function valuateLoginForm(email, password, emailError, passwordError) {
  
  let validateConfirm = true;

  if(emailCheck(email)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
    validateConfirm = false;
  }

  if(inputLength(password, 4)) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "block";
    validateConfirm = false;
  }

  return validateConfirm;
}


export function valuateBookForm(title, author, price, description, titleError, authorError, priceError, priceError2, descriptionError) {

  let validateConfirm = true;

  if (inputLength(title, 0)) {
    titleError.style.display = "none";
  } else {
    titleError.style.display = "block";
    validateConfirm = false;
  }

  if (inputLength(author, 1) && isNaN(author)) {
    authorError.style.display = "none";
  } else {
    authorError.style.display = "block";
    validateConfirm = false;
  }

  if (inputLength(price, 0)) {
    priceError.style.display = "none";
  } else {
    priceError.style.display = "block";
    validateConfirm = false;
  }

  if (!isNaN(price)) {
    priceError2.style.display ="none";
  } else {
    priceError2.style.display = "block";
    validateConfirm = false;
  }

  if (inputLength(description, 19)) {
    descriptionError.style.display = "none";
  } else {
    descriptionError.style.display = "block";
    validateConfirm = false;
  }

  return validateConfirm;
}


export function emailCheck(email) {
  const regex = /\S+@\S+\.\S+/;
  const emailTest = regex.test(email);
  return emailTest;
};

export function inputLength(password, len) {
  if (password.length > len) {
    return true;
  } else {
    return false;
  }
};