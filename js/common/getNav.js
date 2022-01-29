import { clearUser, getCart, getUsername } from "../data/localStorage.js";

export function getNav() {

  const navContainer = document.querySelector(".navbar");
  const userName = getUsername();
  const currentPage = document.location.pathname;
  
  let addBookNav = "";
  if (userName) {
    addBookNav = `<a class="nav-link" href="add-book.html" id="${currentPage === "/add.html" ? "active" : ""}">Add book</a>`;
  }

  let loginNav = `<a class="nav-link" href="login.html"><i class="fas fa-user" id="${currentPage === "/login.html" ? "active" : ""}"></i></a>`;
  if (userName) {
    loginNav = `<button class="btn btn-danger" id="logout">Log Out</button>`;
  }

  let cartLength = getCart().length;

  const cartNumber = `<div class="nav-link__cartcircle" id="${cartLength === 0 ?"non-visible" : "visible"}">
                        <p class="nav-link__cartnumber">${cartLength}</p>
                      </div>`
  
  navContainer.innerHTML = `<div class="container-fluid">
                              <a class="navbar-brand d-lg-none" href="index.html"><img src="images/book-logo-mobile.png" alt="book palace desktop logo" id="mobile-logo"/></a>
                              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                              </button>
                              <div class="collapse navbar-collapse flex-column flex-lg-row justify-content-between" id="navbarSupportedContent">
                                <a class="navbar-brand d-none d-lg-block" href="index.html"><img src="images/book-logo-desktop.png" alt="book palace mobile logo" id="desktop-logo"/></a>
                                <ul class="navbar-nav mb-2 mb-lg-0">
                                  <li class="nav-item mx-4">
                                    ${addBookNav}
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link mx-4" href="products.html" id="${currentPage === "/products.html" ? "active" : ""}">Books</a>
                                  </li>
                                  <li class="nav-item">
                                    <a class="nav-link mx-4" href="cart.html">
                                      <i class="fas fa-shopping-cart" id="${currentPage === "/cart.html" ? "active" : ""}">
                                        ${cartNumber}
                                      </i>
                                    </a>
                                  </li>
                                  <li class="nav-item mx-4">
                                    ${loginNav}
                                  </li>
                                </ul>
                              </div>
                            </div>`

  const logoutButton = document.getElementById("logout");
  if (logoutButton) {
    logoutButton.addEventListener("click", logOut);
  }
}


function logOut() {
  const confirmLogout = confirm("Are you sure you want to log out?");
  if (confirmLogout) {
    clearUser();
    location.href = "/index.html"
  }
}