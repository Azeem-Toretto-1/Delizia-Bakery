/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Show menu */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Hide menu */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav_link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== HOME SWIPER ===============*/
const swiperHome = new Swiper(".home_swiper", {
  loop: true,
  grabCursor: true,
  speed: 800,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: ["-120%", 0, -500],
      rotate: [0, 0, -45],
      opacity: 0,
    },
    next: {
      translate: ["120%", 0, -500],
      rotate: [0, 0, 45],
      opacity: 0,
    },
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);

/*=============== PRODUCTS SWIPER ===============*/
const swiperTabs = new Swiper(".product_tabs", {
  slidesPerView: "auto",
});

const swiperProducts = new Swiper(".product_content", {
  loop: true,
  spaceBetween: 32,
  thumbs: {
    swiper: swiperTabs,
  },
});

/*=============== NEW SWIPER ===============*/
const swiperNew = new Swiper(".new_swiper", {
  loop: true,
  grabCursor: true,
  centeredSlides: "auto",
  slidesPerView: "auto",
  speed: 600,
  effect: "creative",
  creativeEffect: {
    limitProgress: 2,
    prev: {
      translate: ["-32%", 0, 0],
      scale: 0.58,
    },
    next: {
      translate: ["32%", 0, 0],
      scale: 0.58,
    },
  },

  navigation: {
    nextEl: ".new .swiper-button-next",
    prevEl: ".new .swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // Add the .scroll-header class if the bottom scroll of the viewport is greater than 350
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

// Link the ID of each section (section id="home") to each link (a href="#home")
// and activate the link with the class .active-link
const scrollActive = () => {
  // We get the position by scrolling down
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const id = section.id, // id of each section
      top = section.offsetTop - 50, // Distance from the top edge
      height = section.offsetHeight, // Element height
      link = document.querySelector(".nav_menu a[href*=" + id + "]"); // id nav link

    if (!link) return;

    link.classList.toggle(
      "active-link",
      scrollY > top && scrollY <= top + height,
    );
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 1500,
  delay: 300,
  easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  //reset: true, //Animation repeat
})

sr.reveal(`.home_title`, {origin: 'top'})
sr.reveal(`.home_description`, {delay: 600, origin: 'top'})
sr.reveal(`.home_data .button`, {delay: 900, distance: 0, scale: 0, origin: 'top'})
sr.reveal(`.home_base`, {delay: 900})
sr.reveal(`.home_swiper`, {delay: 1200, origin: 'top'})
sr.reveal(`.home_blob`, {delay: 1500, scale: 0})
sr.reveal(`.home_data img`, {delay: 2100, distance: 0, interval: 200, scale: 0})
sr.reveal(`.home_leaf-1, .home_leaf-2, .home_sticker-3, .home_sticker-4`, {delay: 2400, distance: 0, interval: 200, scale: 0})

sr.reveal(`.about_cupcake-1, .about_cupcake-2`, {rotate: {x: 0, y:0, z: 120}})
sr.reveal(`.about_data .section_title`, {delay: 900})
sr.reveal(`.about_description`, {delay: 1200})
sr.reveal(`.about_data .button`, {delay: 1500, distance: 0, scale: 0})
sr.reveal(`.about_blob`, {delay: 1800, origin: 'right'})
sr.reveal(`.about_img`, {delay: 2100, origin: 'left'})
sr.reveal(`.about_leaf, .about_cupcake-3`, {delay: 2700, distance: 0, interval: 200, scale: 0})
sr.reveal(`.about_data img`, {delay: 3000, distance: 0, interval: 200, scale: 0})

sr.reveal(`.product .section_title`, {})
sr.reveal(`.product_button`, {delay: 600, interval: 100})
sr.reveal(`.product_content`, {delay: 900})

sr.reveal(`.new_data .section_title`, {})
sr.reveal(`.new_description`, {delay: 600})
sr.reveal(`.new_data .button`, {delay: 900})
sr.reveal(`.new_swiper`, {delay: 1200})
sr.reveal(`.new_leaf-1, .new_leaf-2, .new_leaf-3`, {delay: 1500, distance: 0, interval: 200, scale: 0})
sr.reveal(`.new_titles`, {delay: 1800, scale: 0})

sr.reveal(`.contact_content .section_title`, {})
sr.reveal(`.contact_info`, {delay: 600, interval: 100})
sr.reveal(`.contact_map`, {delay: 900, origin: 'top'})
sr.reveal(`.contact_data img`, {delay: 1500, distance: 0, interval: 200, scale: 0})

sr.reveal(`.footer_container`, {})
sr.reveal(`.footer_leaf-1, .footer_leaf-2`, {delay: 600, interval: 200})
sr.reveal(`.footer_blob`, {delay: 600})
