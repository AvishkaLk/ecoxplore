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

document.addEventListener('DOMContentLoaded', () => {
  //Slider
  const slides = document.querySelectorAll('.slide');
  if (!slides || slides.length === 0) {
    console.warn('No .slide elements found. Slider will be skipped.');
  } else {
    let index = 0;
    const intervalTime = 4000;
    let slideInterval = null;

    function hideAll() {
      slides.forEach(slide => slide.style.display = 'none');
    }

    function showSlide(i) {
      hideAll();
      slides[i].style.display = 'block';
    }

    function changeSlide(step) {
      index = (index + step + slides.length) % slides.length;
      showSlide(index);
      resetAutoSlide();
    }

    function startAutoSlide() {
      slideInterval = setInterval(() => changeSlide(1), intervalTime);
    }

    function resetAutoSlide() {
      if (slideInterval) clearInterval(slideInterval);
      startAutoSlide();
    }

    /*Image slider (automatic + manual pre/next buttons)*/
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('preview');
    if (nextBtn) nextBtn.addEventListener('click', () => changeSlide(1));
    if (prevBtn) prevBtn.addEventListener('click', () => changeSlide(-1));

    showSlide(index);
    startAutoSlide();
    console.log(`Slider initialized with ${slides.length} slides.`);
  }

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

  //Announcement close button
  const closeBtn = document.getElementById('announcement_close');
  const announcement = document.querySelector('.announcements');
  if (closeBtn && announcement) {
    closeBtn.addEventListener('click', () => {
      announcement.style.display = 'none';
    });
  } else {
    if (!closeBtn) console.debug('announcement_close button not found.');
    if (!announcement) console.debug('.announcements element not found.');
  }

  //Mobile Navbar toggle (Shows and hides the navigation links when menu icon is clicked)
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
      // Toggle the 'active' class to show/hide menu for mobile view
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
});
