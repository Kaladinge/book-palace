import { url } from "../data/endpoint.js";
import { displayMessage } from "../common/displayMessage.js";

export async function editBook(form, title, featured, author, price, description, image, id, tokenkey) {
  
  const bookUrl = url + "products/" + id;

  const data = JSON.stringify({ title: title, featured: featured, author: author, price: price, description: description});

  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenkey}`
    }
  }

  try {

    displayMessage(".form__message-container__edit", "", "Processing...");

    const response = await fetch(bookUrl, options);
    const edit = await response.json();

    if (image.dataset.added === "yes") {
      editImage(form, url, tokenkey);
    }

    if (edit.id) {
      displayMessage(".form__message-container__edit", "success", "Book was edited successfully!");
    }

    if (edit.error) {
      displayMessage(".form__message-container__edit", "red-error", "Something went wrong!");
    }

  } catch (error) {
    displayMessage(".form__message-container__edit", "red-error", "Something went wrong!");
  }
}


function editImage(form, url, token) {

  const request = new XMLHttpRequest();

  request.open('POST', url + 'upload', { headers: { Authorization: `Bearer ${token}`}});
  request.send(new FormData(form));
}