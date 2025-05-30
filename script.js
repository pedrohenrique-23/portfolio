let swiper;

function initializeSwiper() {
  if (window.innerWidth > 1024) {
    if (!swiper) {
      swiper = new Swiper(".card-wrapper", {
        loop: true,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
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
    }
  } else {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
  }
}

function toggleSwiperButtons() {
  const nextButton = document.querySelector(".swiper-button-next");
  const prevButton = document.querySelector(".swiper-button-prev");

  if (nextButton && prevButton) {
    if (window.innerWidth <= 768) {
      nextButton.style.display = "none";
      prevButton.style.display = "none";
    } else {
      nextButton.style.display = "";
      prevButton.style.display = "";
    }
  }
}

function keepMenuIconVisible() {
  const menuIcon = document.querySelector("#menu-icon");

  if (window.innerWidth <= 768) {
    menuIcon.style.position = "fixed";
    menuIcon.style.bottom = "20px";
    menuIcon.style.right = "20px";
    menuIcon.style.zIndex = "9999";
  } else {
    menuIcon.style.position = "";
    menuIcon.style.bottom = "";
    menuIcon.style.right = "";
    menuIcon.style.zIndex = "";
  }
}

initializeSwiper();
toggleSwiperButtons();
keepMenuIconVisible();

window.addEventListener("resize", () => {
  initializeSwiper();
  toggleSwiperButtons();
  keepMenuIconVisible();
});

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuIcon.classList.toggle("active");
});

document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menuIcon.classList.remove("active");
  });
});

const themeToggleBtn = document.getElementById("theme-toggle");
const body = document.body;

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  body.classList.add(currentTheme);
  if (currentTheme === "light-theme") {
    themeToggleBtn.querySelector("i").classList.remove("bx-sun");
    themeToggleBtn.querySelector("i").classList.add("bx-moon");
  } else {
    themeToggleBtn.querySelector("i").classList.remove("bx-moon");
    themeToggleBtn.querySelector("i").classList.add("bx-sun");
  }
} else {
  body.classList.remove("light-theme");
  themeToggleBtn.querySelector("i").classList.remove("bx-moon");
  themeToggleBtn.querySelector("i").classList.add("bx-sun");
}

themeToggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-theme");

  const icon = themeToggleBtn.querySelector("i");
  if (body.classList.contains("light-theme")) {
    icon.classList.remove("bx-sun");
    icon.classList.add("bx-moon");
    localStorage.setItem("theme", "light-theme");
  } else {
    icon.classList.remove("bx-moon");
    icon.classList.add("bx-sun");
    localStorage.setItem("theme", "dark-theme");
  }
});
