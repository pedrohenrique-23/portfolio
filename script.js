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

// --- LÓGICA DO MODAL DE PROJETOS ---

// Seleciona todos os elementos necessários
const portfolioBoxes = document.querySelectorAll(".portfolio-box");
const modalOverlay = document.getElementById("project-modal-overlay");
const modalCloseBtn = document.getElementById("modal-close-btn");

// Seleciona os elementos dentro do modal que serão preenchidos
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalRepoLink = document.getElementById("modal-repo-link");
const modalProjectLink = document.getElementById("modal-project-link");

// Adiciona um evento de clique a cada card de projeto
portfolioBoxes.forEach((card) => {
  card.addEventListener("click", () => {
    // Pega as informações do card clicado (do layer escondido)
    const imgSrc = card.querySelector(".card-img").src;
    const title = card.querySelector(".portfolio-layer h4").innerText;
    const description = card.querySelector(".portfolio-layer p").innerText;
    const repoLink = card.querySelector(".portfolio-layer a:nth-of-type(1)").href;
    const projectLink = card.querySelector(".portfolio-layer a:nth-of-type(2)").href;

    // Preenche o modal com as informações
    modalImg.src = imgSrc;
    modalTitle.innerText = title;
    modalDescription.innerText = description;
    modalRepoLink.href = repoLink;
    modalProjectLink.href = projectLink;

    // Mostra o modal
    modalOverlay.style.display = "flex";
  });
});

// Função para fechar o modal
const closeModal = () => {
  modalOverlay.style.display = "none";
};

// Adiciona eventos para fechar o modal
modalCloseBtn.addEventListener("click", closeModal);

// Fecha o modal se o usuário clicar fora do conteúdo
modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) {
    closeModal();
  }
});