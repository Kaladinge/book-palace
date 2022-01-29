import { displayMessage } from "../common/displayMessage.js";

export function addBook(title, featured, author, price, description, image, token) {
  
  const request = new XMLHttpRequest();

  const formData = new FormData();

  const data = {};
  data["title"] = title;
  data["featured"] = featured;
  data["author"] = author;
  data["price"] = price;
  data["description"] = description;

  try {
    displayMessage(".form__message-container", "", "Processing...");
    
  if (image.files.length > 0) {
    const file = image.files[0];
    formData.append(`files.image`, file, file.name);
  }
  formData.append('data', JSON.stringify(data));

  request.open('POST', `https://infinite-hollows-34081.herokuapp.com/products`);
  request.setRequestHeader('authorization', `Bearer ${token}`);
  request.send(formData);
 
  request.onreadystatechange = function() {
    if (request.statusText === "OK") {
      displayMessage(".form__message-container", "success", "Book was added successfully!");
    } else {
      displayMessage(".form__message-container", "red-error", "Something went wrong!");
    }
  }

  } catch(error) {
    displayMessage(".form__message-container", "red-error", "Something went wrong!");
  }
}