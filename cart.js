import { deleteFromCart } from "./js/auth-actions/deleteBook.js";
import { getCart } from "./js/data/localStorage.js";
import { mainHeader } from "./js/common/getMainheader.js";
import { getNav } from "./js/common/getNav.js";

getNav();
const header = mainHeader("Your Cart");
const cartContainer = document.querySelector(".cart-container");
const totalPriceContainer = document.querySelector(".price-total-container");

header.innerHTML = ` / <a>Your Cart</a>`;

function showCart() {
  const cartArray = getCart();
  const cartLength = cartArray.length;

  let totalPrice = 0;
  
  if (cartArray.length === 0) {
    cartContainer.innerHTML = "There are currently no books in your cart";
    totalPriceContainer.style.display = "none";
  }
  else {
    cartArray.forEach(function(book) {

      cartContainer.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-start cart">
                                    <div class="ms-2 me-auto">
                                      <div class="row">
                                        <div class="col-12 col-md-3 cart__column">
                                          <img src="${book.image}" class="cart__image" alt="image of product in cart">
                                        </div>
                                        <div class="col-md-9 cart__column">
                                            <h4 class="cart__title">${book.title}</h4>
                                            <h6 class="cart__author">${book.author}</h6>
                                            <p class="cart__price price">${book.price},-</p>
                                            <i class="fas fa-minus-square" id="cart-remove" data-id="${book.id}"></i>
                                            <a href="product-detail.html?id=${book.id}" class="cart__link">Read More About The Book</a>
                                        </div>
                                      </div>
                                    </div>
                                  </li>`
                                                  
      totalPrice += parseInt(book.price);
      totalPriceContainer.style.display = "block";
    })
  }
  totalPriceContainer.innerHTML = `<div class="price-total__info">Price of ${cartLength} books: ${totalPrice} dollars</div>
                                  <button class="btn btn-secondary w-100" disabled>To checkout</button>`;
};

showCart();


function getElement(target) {
  document.getElementById(target).addEventListener('click', removeFromCart);
};

getElement("cart-container");


function removeFromCart(event) {

  if(event.target.id === "cart-remove") {

    const id = event.target.dataset.id;

    deleteFromCart(id);
    cartContainer.innerHTML = "";
    showCart();
  }
}
  
  



                            