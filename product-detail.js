import { url } from "./js/data/endpoint.js";
import { displayMessage } from "./js/common/displayMessage.js";
import { mainHeader } from "./js/common/getMainheader.js";
import { getNav } from "./js/common/getNav.js";
import { showBook } from "./js/common/showBook.js";

getNav();
const header = mainHeader("Book detail");
header.innerHTML = ` / <a href="products.html">Books</a> / <a> Book Detail </a>`;

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

(async function getBook() {
  const bookUrl = url + "products/" + id;

  try {
    const response = await fetch(bookUrl);
    const book = await response.json();
    const title = document.querySelector("title");
    title.innerHTML = "Book Palace | " + book.title;

    showBook(book);

  } catch(error) {
    displayMessage(".form__message-container", "red-error", "Something went wrong!");
  }
})();