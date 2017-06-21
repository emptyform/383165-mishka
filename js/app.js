var menustock = document.querySelector(".nav-top__menu");

var btnclose = document.querySelector(".nav-top__btn-close");

var btnopen = document.querySelector(".nav-top__btn-open");

var orderbtn = document.querySelector(".order-product__btn");

var ordermodal = document.querySelector(".order-modal");

var orderclose = document.querySelector(".order-modal__btn");

var iconcart = document.querySelector(".catalog-item__icon");

var map = document.querySelector(".contacts__map");

var mapinter = document.querySelector(".contacts-map-interactive");

// скрипт меню навигации

if (menustock) {
  menustock.classList.remove("nav-top__menu--no-js");
}

if (btnclose) {
  btnclose.classList.add("nav-top__btn--hidden");
}

if (btnopen) {
  btnopen.classList.remove("nav-top__btn--hidden");
}

btnopen.addEventListener("click", function(event) {
  event.preventDefault();
  menustock.classList.remove("nav-top__menu--hidden");
  btnopen.classList.add("nav-top__btn--hidden");
  btnclose.classList.remove("nav-top__btn--hidden");
});

btnclose.addEventListener("click", function(event) {
  event.preventDefault();
  menustock.classList.add("nav-top__menu--hidden");
  btnclose.classList.add("nav-top__btn--hidden");
  btnopen.classList.remove("nav-top__btn--hidden");
});

// скрипт для модального окна

orderbtn.addEventListener("click", function(event) {
  event.preventDefault();
  ordermodal.classList.add("order-modal--show");
});

orderclose.addEventListener("click", function(event) {
  event.preventDefault();
  ordermodal.classList.remove("order-modal--show");
});

iconcart.addEventListener("click", function(event) {
  event.preventDefault();
  ordermodal.classList.add("order-modal--show");
});

// скрипт карты

map.addEventListener("click", function(event) {
  event.preventDefault();
  mapinter.classList.add("contacts-map-interactive--show");
});
