import { books } from "./js/data/strapiArrays.js";
import { mainHeader } from "./js/common/getMainheader.js";
import { getNav } from "./js/common/getNav.js";
import { showBookList } from "./js/common/showBookList.js";

getNav();
const header = mainHeader("Books");
const searchContainer = document.querySelector(".search-container");

header.innerHTML = ` / <a>Books</a>`;

searchContainer.innerHTML = `<label for="book-search">Search by title or description: </label>
                             <input type="text" id="book-search" name="book-search" placeholder="Your search...">`;

const input = document.getElementById("book-search");

showBookList(books);


function searchBook() {

  const inputValue = input.value.trim().toLowerCase();

  const searchedBooks = books.filter(function(book) {
    const titleValue = book.title.toLowerCase();
    const descriptionValue = book.description.toLowerCase();
    if (titleValue.includes(inputValue) || (descriptionValue.includes(inputValue))) {
      return true;
    }
  })
  showBookList(searchedBooks);
};
   
input.addEventListener("keyup", searchBook);








