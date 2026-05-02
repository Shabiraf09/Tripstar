const hamburger = document.getElementById('hamburger');
const mobileMenu = document.querySelector("#nav");
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});



