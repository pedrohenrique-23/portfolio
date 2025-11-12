document.addEventListener("DOMContentLoaded", () => {
  // ===== ScrollSpy =====
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar a");

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -70% 0px",
    threshold: 0,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;

        navLinks.forEach((link) => link.classList.remove("active"));

        const activeLink = document.querySelector(
          `.navbar a[href*='${sectionId}']`
        );
        if (activeLink) activeLink.classList.add("active");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  sections.forEach((section) => observer.observe(section));

  // ===== Menu fixo no mobile =====
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

  keepMenuIconVisible();
  window.addEventListener("resize", keepMenuIconVisible);

  // ===== Menu mobile =====
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

  // ===== Tema claro/escuro =====
  const themeToggleBtn = document.getElementById("theme-toggle");
  const body = document.body;
  const currentTheme = localStorage.getItem("theme");

  const updateThemeIcon = (isLight) => {
    const icon = themeToggleBtn.querySelector("i");
    if (isLight) {
      icon.classList.remove("bx-sun");
      icon.classList.add("bx-moon");
    } else {
      icon.classList.remove("bx-moon");
      icon.classList.add("bx-sun");
    }
  };

  if (currentTheme) {
    body.classList.add(currentTheme);
    updateThemeIcon(currentTheme === "light-theme");
  } else {
    body.classList.remove("light-theme");
    updateThemeIcon(false);
  }

  themeToggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-theme");
    const isLight = body.classList.contains("light-theme");
    updateThemeIcon(isLight);
    localStorage.setItem("theme", isLight ? "light-theme" : "dark-theme");
  });

  // ===== Modal de detalhes do projeto =====
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
    const detailsLink = card.querySelector(".project-details-link");

    if (detailsLink) {
      detailsLink.addEventListener("click", (event) => {
        event.preventDefault();

        // Pega os dados do card clicado
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

        // Preenche o modal
        modalImg.src = imgSrc;
        modalTitle.innerText = title;
        modalDescription.innerText = description;

        if (repoLinkElement) {
          modalRepoLink.href = repoLinkElement.href;
          modalRepoLink.style.display = "inline-block";
        } else modalRepoLink.style.display = "none";

        if (projectLinkElement) {
          modalProjectLink.href = projectLinkElement.href;
          modalProjectLink.style.display = "inline-block";
        } else modalProjectLink.style.display = "none";

        // Tags de tecnologias
        modalTechTags.innerHTML = "";
        if (techString) {
          const technologies = techString.split(",").map((t) => t.trim());
          technologies.forEach((tech) => {
            const tag = document.createElement("span");
            tag.className = "tech-tag";
            tag.innerText = tech;
            modalTechTags.appendChild(tag);
          });
        }

        // Exibe o modal
        modalOverlay.style.display = "flex";
        document.body.style.overflow = "hidden"; // bloqueia scroll ao abrir
      });
    }
  });

  // ===== Fechamento do modal =====
  const closeModal = () => {
    modalOverlay.style.display = "none";
    document.body.style.overflow = ""; // libera scroll
  };

  modalCloseBtn.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) closeModal();
  });

  // ===== Animações com IntersectionObserver =====
  const timelineItems = document.querySelectorAll(".timeline-item");
  const skillBoxes = document.querySelectorAll(".services-box");
  const projectBoxes = document.querySelectorAll(".portfolio-box");

  const animObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { root: null, threshold: 0.3 }
  );

  [...timelineItems, ...skillBoxes, ...projectBoxes].forEach((el) =>
    animObserver.observe(el)
  );
});
