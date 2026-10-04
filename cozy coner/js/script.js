 /* ================= HERO SLIDER ================= */
const heroSwiper = new Swiper(".heroSwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* ================= PRODUCTS SLIDER ================= */
const productsSwiper = new Swiper('.products-slider', {
  slidesPerView: 5,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 4 },
    1200: { slidesPerView: 5 }
  }
});

/* ================= MOBILE MENU ================= */
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    const icon = menuIcon.querySelector("i");

    if (icon) {
      if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
      } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
      }
    }
  });
} 
const testimonialsSwiper = new Swiper('.testimonialsSwiper', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.test-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.test-next',
    prevEl: '.test-prev',
  },
});
const openBtn = document.getElementById('openMapBtn');
const closeBtn = document.getElementById('closeMapBtn');
const modal = document.getElementById('mapModal');

openBtn.onclick = function() {
  modal.style.display = 'flex';
}

closeBtn.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
}
 
 document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-icon');
  const navbar = document.querySelector('.navbar');

  if (menuIcon && navbar) {
    menuIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      navbar.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
        navbar.classList.remove('active');
      }
    });
  }
});
 