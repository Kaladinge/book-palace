import { getCart } from "../data/localStorage.js";
import { addToCart } from "./addToCart.js";

export function showBookList(bookArray) {
  const bookContainer = document.querySelector(".book-container");

  bookContainer.innerHTML = "";

  bookArray.forEach(function(book) {

    if(document.location.pathname !== "/index.html") {
      getContent(bookContainer, book);
      
    } else {

      if (book.featured) {
      getContent(bookContainer, book);       
      }
    }
  })
};


function getContent(container, book) {

  const cartArray = getCart();
  
  let buttonText = "Add to cart";
  let buttonColor = "btn-secondary";

  const alreadyInCart = cartArray.find(function(item) {
    if(book.title === item.title) {
      buttonText = "Remove from cart";
      buttonColor = "btn-primary";
      return true;
    }
  })

  let bookImage = "images/no-image-logo.png";
  let dataImage = bookImage;
  if (book.image) {
    bookImage = book.image.url;
    dataImage = bookImage;
  }

  container.innerHTML += `<div class="col col-sm-6 col-lg-4  col-xl-3 d-flex align-items-stretch mb-2">
                            <div class="card" style="width: 16rem">
                              <a href="product-detail.html?id=${book.id}" class="card-link">
                                <img src="${bookImage}" class="card-img-top" alt="book cover image"/>
                                <div class="card-body mb-1">
                                  <h5 class="card-title">${book.title}</h5>
                                  <h6 class="card-author">${book.author}</h6>
                                  <p class="price card-price">${book.price},-</p>
                                </div>
                              </a>
                              <button type="button" class="btn cart-button ${buttonColor}" id="cart-button" data-id="${book.id}" data-title="${book.title}" data-author="${book.author}" data-price="${book.price}" data-image="${dataImage}">${buttonText}</button>
                            </div>
                          </div>`
}

function getElement(target) {
  document.getElementById(target).addEventListener('click', addToCart);
};

getElement("book-container");

