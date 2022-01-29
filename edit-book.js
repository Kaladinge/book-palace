import { url } from "./js/data/endpoint.js";
import { editBook } from "./js/auth-actions/editBook.js";
import { getTokenKey, getUsername } from "./js/data/localStorage.js";
import { getNav } from "./js/common/getNav.js";
import { deleteBook } from "./js/auth-actions/deleteBook.js";
import { valuateBookForm } from "./js/common/valuateForm.js";
import { mainHeader } from "./js/common/getMainheader.js";
import { displayMessage } from "./js/common/displayMessage.js";
import { editCart } from "./js/common/editCart.js";

const user = getUsername();
if(!user) {
  document.location.href = "index.html";
};

getNav();
const header = mainHeader("Edit Book");
header.innerHTML = ` / <a href="products.html">Books</a> / <a>Book Detail</a> / <a>Edit Book</a>`;

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const form = document.querySelector(".form");
const bookTitle = document.getElementById("title");
const bookTitleError = document.getElementById("title__error");
const featured = document.getElementById("featured");
const author = document.getElementById("author");
const authorError = document.getElementById("author__error");
const price = document.getElementById("price");
const priceError = document.getElementById("price__error");
const priceError2 = document.getElementById("price__error2");
const description = document.getElementById("description");
const descriptionError = document.getElementById("description__error");
const imageInput = document.querySelector(".files");
const imageOutput = document.getElementById("output");
const imageId = document.getElementById("refId");

const tokenKey = getTokenKey();

(async function showFields() {
  try{
    const response = await fetch(url + "products/" + id);
    const fieldData = await response.json();

    bookTitle.value = fieldData.title;
    featured.value = fieldData.featured;
    author.value = fieldData.author;
    price.value = fieldData.price;
    description.value = fieldData.description;
    imageId.value = id;

    if (fieldData.image) {
      imageOutput.src = fieldData.image.url;
      }

    if (featured.value === "true") {
      featured.checked = true;
    }

    const deleteButton = document.getElementById("delete-button");
    deleteButton.addEventListener("click", function(){deleteBook(id, tokenKey)});

  } catch(error) {
    displayMessage(".form__message-container", "red-error", "Something went wrong!");
  }
})()


function submitForm(event) {

  event.preventDefault();

  const titleInput = bookTitle.value.trim();
  const featuredInput = featured.checked;
  const authorInput = author.value.trim();
  const priceInput = price.value.trim();
  const descriptionInput = description.value.trim();
  
  if (valuateBookForm(titleInput, authorInput, priceInput, descriptionInput, bookTitleError, authorError, priceError, priceError2, descriptionError) === false) {
    displayMessage(".form__message-container__edit", "warning", "One of the above fields were not filled out correctly!");
    return false;
  }
  
  editBook(form, titleInput, featuredInput, authorInput, priceInput, descriptionInput, imageInput, id, tokenKey);
  editCart(titleInput, authorInput, priceInput, imageOutput, id);
}


function loadImage(event) {
  let reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);

  reader.onload = function() {
    imageOutput.src = reader.result;
    imageInput.dataset.added = "yes";
    return imageOutput.src;
  }
}

imageInput.addEventListener("change", loadImage);
form.addEventListener("submit", submitForm);


