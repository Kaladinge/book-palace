export function mainHeader(header) {
  const mainHeader = document.querySelector(".main-header");

  mainHeader.innerHTML = `<div class="container">
                            <a href="index.html">Home</a>
                            <div class="main-header__currentpage"></div>
                            <h1 class="main-header__text">${header}</h1>
                          </div>`
  
  mainHeader.style.backgroundImage = "url('images/header-background.jpg')";

  const currentPage = document.querySelector(".main-header__currentpage");
  return currentPage;
}
