import { url } from "../data/endpoint.js";
import { cart, getCart, saveLocalStorage } from "../data/localStorage.js";
import { displayMessage } from "../common/displayMessage.js";

export function deleteBook(id, token) {

  (async function deleteAuthorization() {

    const deleteUrl = url + "products/" + id;

    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    };

    const confirmDelete = confirm("Are you sure you want to delete this entry?");

    if(confirmDelete) {
      try {
      displayMessage(".form__message-container__delete", "", "Processing...");
      const response = await fetch(deleteUrl, options);
      deleteFromCart(id);
      document.location.href = "products.html";
      
      } catch(error) {
        displayMessage(".form__message-container__delete", "red-error", "Something went wrong!");
      }
    }
  })();
}

export function deleteFromCart(id) {
  
  const cartArray = getCart();

  const alreadyInCart = cartArray.find((book) => book.id === id);
  
  if (alreadyInCart) {
    const newArray = cartArray.filter((book) => book.id !== id);

    saveLocalStorage(cart, newArray);
    
    const cartNumber = document.querySelector(".nav-link__cartnumber");
    const cartCircle = document.querySelector(".nav-link__cartcircle");
    const cartLength = getCart().length;
    cartNumber.innerHTML = cartLength;

    if(cartLength === 0) {
      cartCircle.style.display = "none";
    }
  }
}