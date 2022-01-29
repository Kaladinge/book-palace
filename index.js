import { heroBanner } from "./js/data/strapiArrays.js";
import { showBookList } from "./js/common/showBookList.js";
import { books } from "./js/data/strapiArrays.js";
import { getNav } from "./js/common/getNav.js";

getNav();
const bannerContainer = document.querySelector(".banner-container");
const header = document.querySelector(".featured-books");

header.innerHTML = "Featured Books";

bannerContainer.innerHTML = `<div>
                              <span class="banner" role="img" style="background-image: url('${heroBanner.Hero_banner.url}')" aria-label="${heroBanner.Hero_banner_alt_text}">
                                <div class="banner__text">
                                  <div class="row justify-content-around">
                                    <div class="banner__header col-md-6">Sharing Books and Sharing Stories</div>
                                    <div class="banner__info col-md-5 align-self-center">At book palace we love to read and so do our customers. We want everyone to be able to read a good story at a reasonable price. That's why we buy books from you
                                      and sell them to another happy reader. We think stories are meant to be shared and book palace makes it easier and cheaper than ever. 
                                    </div>
                                  </div>
                                </div>
                              </span>
                            </div>`;

showBookList(books);


















