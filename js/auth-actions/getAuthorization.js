import { url } from "../data/endpoint.js";
import { saveLocalStorage } from "../data/localStorage.js";
import { token, user } from "../data/localStorage.js";
import { displayMessage } from "../common/displayMessage.js";

export async function getAuthorization(email, password) {

  const authUrl = url + "auth/local";
  const data = JSON.stringify({identifier: email, password: password});

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    displayMessage(".form__message-container", "", "Processing...");
    const response = await fetch(authUrl, options);
    const authorization = await response.json();

    if (authorization.jwt) {
      saveLocalStorage(token, authorization.jwt);
      saveLocalStorage(user, authorization.user);
      displayMessage(".form__message-container", "success", "You logged in successfully!");
      location.href = "index.html";
    }

    if (authorization.error) {
      displayMessage(".form__message-container", "red-error", "Email or Password is incorrect");
    }

  } catch(error) {
    displayMessage(".form__message-container", "red-error", "Something went wrong when fetching!");
  }
}