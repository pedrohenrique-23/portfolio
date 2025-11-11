document.addEventListener("DOMContentLoaded", () => {

  const sections = document.querySelectorAll("section[id]");

  const navLinks = document.querySelectorAll(".navbar a");

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -70% 0px",
    threshold: 0
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        const sectionId = entry.target.id;


        navLinks.forEach(link => {
          link.classList.remove("active");
        });


        const activeLink = document.querySelector(`.navbar a[href*='${sectionId}']`);
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  };


  const observer = new IntersectionObserver(observerCallback, observerOptions);


  sections.forEach(section => {
    observer.observe(section);
  });
});

// let swiper;

// function initializeSwiper() {
//   if (window.innerWidth > 1024) {
//     if (!swiper) {
//       swiper = new Swiper(".card-wrapper", {
//         loop: true,
//         spaceBetween: 30,
//         pagination: {
//           el: ".swiper-pagination",
//           clickable: true,
//           dynamicBullets: true,
//         },
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//         breakpoints: {
//           0: {
//             slidesPerView: 1,
//           },
//           768: {
//             slidesPerView: 2,
//           },
//           1024: {
//             slidesPerView: 3,
//           },
//         },
//       });
//     }
//   } else {
//     if (swiper) {
//       swiper.destroy(true, true);
//       swiper = null;
//     }
//   }
// }

// function toggleSwiperButtons() {
//   const nextButton = document.querySelector(".swiper-button-next");
//   const prevButton = document.querySelector(".swiper-button-prev");

//   if (nextButton && prevButton) {
//     if (window.innerWidth <= 768) {
//       nextButton.style.display = "none";
//       prevButton.style.display = "none";
//     } else {
//       nextButton.style.display = "";
//       prevButton.style.display = "";
//     }
//   }
// }

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

// initializeSwiper();
// toggleSwiperButtons();
// keepMenuIconVisible();

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

const portfolioBoxes = document.querySelectorAll(".portfolio-box");
const modalOverlay = document.getElementById("project-modal-overlay");
const modalCloseBtn = document.getElementById("modal-close-btn");

const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalRepoLink = document.getElementById("modal-repo-link");
const modalProjectLink = document.getElementById("modal-project-link");
const modalTechTags = document.getElementById("modal-tech-tags");

portfolioBoxes.forEach((card) => {
  // 1. Encontra o link de "Ver detalhes" ESPECÍFICO deste card
  const detailsLink = card.querySelector(".project-details-link");

  // 2. *** AQUI ESTÁ A CORREÇÃO ***
  // Só adicione o listener SE o 'detailsLink' foi encontrado
  if (detailsLink) {
    
    detailsLink.addEventListener("click", () => {
      // 3. O resto da lógica é o mesmo...
      const imgSrc = card.querySelector(".card-img").src;
      const title = card.querySelector(".portfolio-layer h4").innerText;
      const description = card.querySelector(".portfolio-layer p").innerText;

      const repoLinkElement = card.querySelector(
        ".portfolio-layer a:nth-of-type(1)"
      );
      const projectLinkElement = card.querySelector(
        ".portfolio-layer a:nth-of-type(2)"
      );

      const techString = card.dataset.tech;

      modalImg.src = imgSrc;
      modalTitle.innerText = title;
      modalDescription.innerText = description;

      if (repoLinkElement) {
        modalRepoLink.href = repoLinkElement.href;
        modalRepoLink.style.display = "inline-block";
      } else {
        modalRepoLink.style.display = "none";
      }

      if (projectLinkElement) {
        modalProjectLink.href = projectLinkElement.href;
        modalProjectLink.style.display = "inline-block";
      } else {
        modalProjectLink.style.display = "none";
      }

      modalTechTags.innerHTML = "";

      if (techString) {
        const technologies = techString.split(",").map((tech) => tech.trim());
        technologies.forEach((techName) => {
          const tagElement = document.createElement("span");
          tagElement.className = "tech-tag";
          tagElement.innerText = techName;
          modalTechTags.appendChild(tagElement);
        });
      }

      modalOverlay.style.display = "flex";
    });

  } // <-- FIM DO IF
});

const closeModal = () => {
  modalOverlay.style.display = "none";
};

modalCloseBtn.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-item");

  const skillBoxes = document.querySelectorAll(".services-box");
  const projectBoxes = document.querySelectorAll(".portfolio-box");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        entry.target.classList.add("is-visible");

        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);


  timelineItems.forEach(item => {
    observer.observe(item);
  });
});