import { addBook } from "./js/auth-actions/addBook.js";
import { getTokenKey, getUsername } from "./js/data/localStorage.js";
import { displayMessage } from "./js/common/displayMessage.js";
import { mainHeader } from "./js/common/getMainheader.js";
import { getNav } from "./js/common/getNav.js";
import { valuateBookForm } from "./js/common/valuateForm.js";

const user = getUsername();
if(!user) {
  document.location.href = "index.html";
};

getNav();
const header = mainHeader("Add book");
header.innerHTML = ` / <a>Add Book</a>`;

const form = document.querySelector(".form");
const bookTitle = document.getElementById("title");
const featured = document.getElementById("featured");
const bookTitleError = document.getElementById("title__error");
const author = document.getElementById("author");
const authorError = document.getElementById("author__error");
const price = document.getElementById("price");
const priceError = document.getElementById("price__error");
const priceError2 = document.getElementById("price__error2");
const description = document.getElementById("description");
const descriptionError = document.getElementById("description__error");
const imageInput = document.querySelector(".files");
const imageOutput = document.getElementById("output");


function submitForm(event) {

  event.preventDefault();

  const tokenKey = getTokenKey();

  const titleInput = bookTitle.value.trim();
  const featuredInput = featured.checked;
  const authorInput = author.value.trim();
  const priceInput = price.value.trim();
  const descriptionInput = description.value.trim();
  
  if (valuateBookForm(titleInput, authorInput, priceInput, descriptionInput, bookTitleError, authorError, priceError, priceError2, descriptionError) === false) {
    displayMessage(".form__message-container", "warning", "One of the above fields were not filled out correctly!");
    return false;
  }

  addBook(titleInput, featuredInput, authorInput, priceInput, descriptionInput, imageInput, tokenKey);
  
  form.reset();
}


function loadImage(event) {
  imageOutput.src = URL.createObjectURL(event.target.files[0]);
}


imageInput.addEventListener("change", loadImage);
form.addEventListener("submit", submitForm);

