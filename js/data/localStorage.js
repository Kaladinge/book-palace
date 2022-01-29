export const token = "token";
export const user = "user";
export const cart = "cart";

export function getTokenKey() {

  const tokenKey = localStorage.getItem(token);

  if (!tokenKey) {
    return null;
  } else {
    return JSON.parse(tokenKey);
  }
}

export function getUsername() {

  const userArray = localStorage.getItem(user);
  const parsedUser = JSON.parse(userArray);

  if(!userArray) {
    return null;
  } else {
    return parsedUser.username;
  }
}

export function getCart() {

  const cartArray = localStorage.getItem(cart);

  if (!cartArray) {
    return [];
  } else {
    return JSON.parse(cartArray);
  }
}

export function saveLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function clearUser() {
  localStorage.removeItem(token);
  localStorage.removeItem(user);
  return [];
}