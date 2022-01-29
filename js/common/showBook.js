import { getCart, getUsername } from "../data/localStorage.js";
import { addToCart } from "./addToCart.js";

export function showBook(bookArray) {
  const bookContainer = document.querySelector(".book-container");

  let buttonText = "Add to cart";
  let buttonColor = "btn-secondary";

  const cartArray = getCart();
  const userName = getUsername();

  const alreadyInCart = cartArray.find(function(book) {
    if(bookArray.title === book.title) {
      buttonText = "Remove from cart";
      buttonColor = "btn-primary";
      return true;
    }
  })

  let bookImage = "images/no-image-logo.png";
  let dataImage = bookImage;
  if (bookArray.image) {
    bookImage = bookArray.image.url;
    dataImage = bookImage;
  }

  bookContainer.innerHTML = `<div class="col-12 col-md-5"><img src="${bookImage}" class="book-detail__image" alt="book cover image"></div>
                              <div class="col-12 col-md-5 book-detail__text">
                                <h2 class="book-detail__title">${bookArray.title}</h2>
                                <h3 class="book-detail__author">${bookArray.author}</h3>
                                <p class="book-detail__description">${bookArray.description}</p>
                                <div class="book-detail__flex">
                                  <h4 class="book-detail__price">${bookArray.price},-</h4>
                                  <button type="button" class="btn ${buttonColor}" id="cart-button" data-id="${bookArray.id}" data-title="${bookArray.title}" data-author="${bookArray.author}" data-price="${bookArray.price}" data-image="${dataImage}">${buttonText}</button>
                                </div>
                                <hr>
                                <div class="buttons-container"></div>
                              </div>`;

  if (userName) {

    const buttonsContainer = document.querySelector(".buttons-container");
    buttonsContainer.innerHTML = `<div>
                                    <a href="edit-book.html?id=${bookArray.id}" class="btn btn-primary w-100">Edit Book</>
                                  </div>`;
  }

  const btn = document.getElementById("cart-button");
  btn.addEventListener("click", addToCart);
}

