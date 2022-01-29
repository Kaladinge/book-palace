import { cart, getCart, saveLocalStorage } from "../data/localStorage.js";

export function editCart(titleInput, authorInput, priceInput, imageOutput, id) {
 
  const cartArray = getCart();
  
  const thisItemIndex = cartArray.findIndex((book) => book.id === id);

  if (thisItemIndex  >= 0) {
  cartArray[thisItemIndex].title = titleInput;
  cartArray[thisItemIndex].price = priceInput;
  cartArray[thisItemIndex].author = authorInput;
  cartArray[thisItemIndex].image = imageOutput.src;
    
  saveLocalStorage(cart, cartArray);
  }
}