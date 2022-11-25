

// Header on scroll color change
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('shadow', window.scrollY > 0);
});

//Menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

//Remove menu on click of any menu link
window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

//Scroll reveal animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  //reset: true
})

sr.reveal('.home-text, .buds-text',{origin: 'left'})
sr.reveal('.home-img, .buds-img',{origin: 'right'})
sr.reveal('.heading',{delay: '200'})
sr.reveal('.specs-details .box',{origin: 'left', interval: '100'})
sr.reveal('.specs-img',{delay: '600'})
sr.reveal('.shop-container .box, .footer .logo, .footer .footer-box',{interval: '150'})
