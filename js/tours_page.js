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

//Navbar toggle
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
    //optional: stop event from bubbling to document click listeners
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
