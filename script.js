// // Swiper settings
// new Swiper('.card-wrapper', {
//     loop: true,
//     spaceBetween: 30,

//     // Pagination bullets
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//       dynamicBullets: true
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//     // Responsive breakpoints
//     breakpoints: {
//         0: {
//             slidesPerView: 1
//         },
//         768: {
//             slidesPerView: 2
//         },
//         1024: {
//             slidesPerView: 3
//         },
//     }
// });

// // Navbar toggle for mobile (sidebar)
// const menuIcon = document.querySelector('#menu-icon');
// const navbar = document.querySelector('.navbar');

// // Toggle 'active' class on click to show/hide the sidebar
// menuIcon.addEventListener('click', () => {
//     navbar.classList.toggle('active');
// });

// Função para inicializar ou destruir o Swiper
let swiper;

function initializeSwiper() {
    // Verifica a largura da tela
    if (window.innerWidth > 1024) {
        // Inicializa o Swiper apenas se ainda não estiver inicializado
        if (!swiper) {
            swiper = new Swiper('.card-wrapper', {
                loop: true,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
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
        // Destrói o Swiper se estiver inicializado
        if (swiper) {
            swiper.destroy(true, true);
            swiper = null; // Reseta a instância
        }
    }
}

// Chama a função para inicializar o Swiper
initializeSwiper();

// Adiciona um event listener para redimensionamento da janela
window.addEventListener('resize', initializeSwiper);

// Navbar toggle for mobile (sidebar)
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Toggle 'active' class on click to show/hide the sidebar
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
