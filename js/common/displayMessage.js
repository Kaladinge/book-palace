export function displayMessage(container, category, message) {
  
  const messageContainer = document.querySelector(container);

  messageContainer.innerHTML = `<div class="${category}">${message}</div>`
}