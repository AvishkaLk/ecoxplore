//Preloader (When the webpage finishes loading, this function hides the preloader.)
// Wait until the whole page fully loads
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");

  // Smooth fade-out animation
  preloader.style.transition = "opacity 0.6s ease";
  preloader.style.opacity = "0";

  // Remove preloader from screen completely
  setTimeout(() => {
    preloader.style.display = "none";
  }, 600);
});

//Dropdown menu (Shows the dropdown when the "Dropdown" button is hovered.)
const dropdownParent = document.querySelector('.dropdown_button');
const dropdownMenu = document.querySelector('#dropdownmenu');

if (dropdownParent && dropdownMenu) {
  dropdownParent.addEventListener('click', (event) => {
    event.preventDefault();
    dropdownMenu.style.display =
      dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });

  document.addEventListener('click', (event) => {
    if (!dropdownParent.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.style.display = 'none';
    }
  });
} else {

  if (!dropdownParent) console.debug('dropdownParent not found (#links li a[href="contact"])');
  if (!dropdownMenu) console.debug('dropdownMenu not found (#dropdownmenu)');
}

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login_link');
const registerLink = document.querySelector('.register_link');

//Switching inside login form
registerLink.addEventListener('click', () => wrapper.classList.add('active'));
loginLink.addEventListener('click', () => wrapper.classList.remove('active'));

//Open correct tab based on URL hash
window.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash === '#register') {
    wrapper.classList.add('active'); //show register
  } else {
    wrapper.classList.remove('active'); //show login
  }
});

//Mobile navbar toggle
const toggleBtn = document.getElementById('toggle_btn');
const navbarLinks = document.getElementById('links');

if (!toggleBtn) {
  console.debug('#toggle_btn not found.');
}
if (!navbarLinks) {
  console.debug('#links not found.');
}

if (toggleBtn && navbarLinks) {
  toggleBtn.addEventListener('click', (e) => {

    e.stopPropagation();
    navbarLinks.classList.toggle('active');
    console.log('Navbar toggle clicked — active:', navbarLinks.classList.contains('active'));
  });

  //close menu when clicking outside (mobile)
  document.addEventListener('click', (event) => {

    if (navbarLinks.classList.contains('active') &&
      !navbarLinks.contains(event.target) &&
      !toggleBtn.contains(event.target)) {
      navbarLinks.classList.remove('active');
      console.log('Navbar closed by outside click');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navbarLinks.classList.remove('active');
      console.log('Navbar reset on resize to desktop');
    }
  });
}
