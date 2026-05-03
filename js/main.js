/**
 * Highlights the current page link in the navigation bar
 */
function setActiveNav() {
  const currentPage = document.body.dataset.page || 
                     window.location.pathname.split('/').pop().split('.')[0] || 
                     'home';
  
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add('active');
    }
  });
}

/**
 * Initializes mobile menu toggle functionality
 */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('is-open');
      document.body.classList.toggle('no-scroll');
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  initMobileMenu();
});