import { getAuthorization } from "./js/auth-actions/getAuthorization.js";
import { displayMessage } from "./js/common/displayMessage.js";
import { mainHeader } from "./js/common/getMainheader.js";
import { getNav } from "./js/common/getNav.js";
import { valuateLoginForm } from "./js/common/valuateForm.js";

getNav();
const header = mainHeader("Log In to My Pages");
const form = document.querySelector(".form");
const email = document.getElementById("email");
const emailError = document.getElementById("email__error");
const password = document.getElementById("password");
const passwordError = document.getElementById("password__error");

header.innerHTML = ` / <a>Log In</a>`;


function submitForm(event) {

  event.preventDefault();

  const emailInput = email.value.trim();
  const passwordInput = password.value.trim();
  
  if (valuateLoginForm(emailInput, passwordInput, emailError, passwordError) === false) {
    displayMessage(".form__message-container", "warning", "Email or password was not filled out correctly!");
    return false;
  }

  getAuthorization(emailInput, passwordInput);
}

form.addEventListener("submit", submitForm);



