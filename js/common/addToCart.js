import { cart, getCart, saveLocalStorage } from "../data/localStorage.js";

export function addToCart(event) {

  if (event.target.id === "cart-button") {
  
  const cartArray = getCart();

  const id = event.target.dataset.id;
  const title = event.target.dataset.title;
  const author = event.target.dataset.author;
  const price = event.target.dataset.price;
  const image = event.target.dataset.image;

  const bookObject = {
    id: id,
    title: title,
    author: author,
    price: price,
    image: image
  };

  event.target.classList.toggle("btn-secondary");
  event.target.classList.toggle("btn-primary");

  const alreadyInCart = cartArray.find((book) => book.title === title);

  if (alreadyInCart) {
    const newArray = cartArray.filter((book) => book.title !== title);
    event.target.innerHTML = "Add to cart";
    saveLocalStorage(cart, newArray);
    displayCartMessage(title, "removed from");

  } else {
    cartArray.push(bookObject);
    event.target.innerHTML = "Remove from cart";
    saveLocalStorage(cart, cartArray);
    displayCartMessage(title, "added to");
    }

    const cartLength = getCart().length;
    const cartNumber = document.querySelector(".nav-link__cartnumber");
    const cartCircle = document.querySelector(".nav-link__cartcircle");

    cartCircle.style.display = cartLength > 0 ? "block" : "none";
    cartNumber.innerHTML = cartLength;
  }

  function displayCartMessage(title,state) {

    const messageContainer = document.querySelector(".cart-message");
    messageContainer.style.display = "block";
    messageContainer.innerHTML = `<div class="uphere">
                                    ${title} has been ${state} your cart
                                  </div>`

    setTimeout(function() {messageContainer.style.display = "none"}, 2000);
  }
}