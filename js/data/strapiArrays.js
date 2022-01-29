import { displayMessage } from "../common/displayMessage.js";
import { url } from "./endpoint.js";

const products = "products";
const home = "home";

async function getArray(category) {
  
  const contentUrl = url + category;

  try {

    const response = await fetch(contentUrl);
    const result = await response.json();
    return result;

  } catch (error) { 
    displayMessage(".form__message-container", "red-error", "Something went wrong!");
  }
};

export const books = await getArray(products);
export const heroBanner = await getArray(home);