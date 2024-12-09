let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick= ()=>{
    searchForm.classList.toggle('active')
    shoppingCart.classList.remove('active')
    form.classList.remove('active')
    navbar.classList.remove('active')
}

let shoppingCart = document.querySelector('.header .shopping-cart');
document.querySelector('#cart-btn').onclick= ()=>{
    shoppingCart.classList.toggle('active')
    searchForm.classList.remove('active')
    form.classList.remove('active')
    navbar.classList.remove('active')
}

let form = document.querySelector('#form');
document.querySelector('#user-btn').onclick= ()=>{
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    form.classList.toggle('active')
    navbar.classList.remove('active')
}

let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick= ()=>{
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    form.classList.remove('active')
}
window.onscroll = ()=>{
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    form.classList.remove('active')
}

var swiper = new Swiper(".product-slider", {
    loop : true,
    spaceBetween: 20,
    autoplay : {
         delay : 7500,
         disableOnInteraction : false,
    }, 
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop : true,
    spaceBetween: 20,
    autoplay : {
         delay : 7500,
         disableOnInteraction : false,
    }, 
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

var x = 10;
console.log(x);