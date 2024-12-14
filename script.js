// let swiper;

// function initializeSwiper() {
//     if (window.innerWidth > 1024) {
//         if (!swiper) {
//             swiper = new Swiper('.card-wrapper', {
//                 loop: true,
//                 spaceBetween: 30,
//                 pagination: {
//                     el: '.swiper-pagination',
//                     clickable: true,
//                     dynamicBullets: true,
//                 },
//                 navigation: {
//                     nextEl: '.swiper-button-next',
//                     prevEl: '.swiper-button-prev',
//                 },
//                 breakpoints: {
//                     0: {
//                         slidesPerView: 1,
//                     },
//                     768: {
//                         slidesPerView: 2,
//                     },
//                     1024: {
//                         slidesPerView: 3,
//                     },
//                 },
//             });
//         }
//     } else {
//         if (swiper) {
//             swiper.destroy(true, true);
//             swiper = null;
//         }
//     }
// }

// function toggleSwiperButtons() {
//     const nextButton = document.querySelector('.swiper-button-next');
//     const prevButton = document.querySelector('.swiper-button-prev');

//     if (nextButton && prevButton) {
//         if (window.innerWidth <= 768) {
//             // Oculta os botões de navegação em telas menores
//             nextButton.style.display = 'none';
//             prevButton.style.display = 'none';
//         } else {
//             // Mostra os botões de navegação em telas maiores
//             nextButton.style.display = '';
//             prevButton.style.display = '';
//         }
//     }
// }

// // Inicializa o Swiper e ajusta os botões ao carregar a página
// initializeSwiper();
// toggleSwiperButtons();

// // Atualiza configurações ao redimensionar a janela
// window.addEventListener('resize', () => {
//     initializeSwiper();
//     toggleSwiperButtons();
// });

// // Configuração do menu de navegação
// const menuIcon = document.querySelector('#menu-icon');
// const navbar = document.querySelector('.navbar');

// menuIcon.addEventListener('click', () => {
//     navbar.classList.toggle('active'); // Alterna o menu visível
//     menuIcon.classList.toggle('active'); // Pode adicionar animação ou mudança de ícone aqui
// });

// // Fechar o menu ao clicar em um link
// document.querySelectorAll('.navbar a').forEach(link => {
//     link.addEventListener('click', () => {
//         navbar.classList.remove('active');
//         menuIcon.classList.remove('active');
//     });
// });

let swiper;

function initializeSwiper() {
    if (window.innerWidth > 1024) {
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
        if (swiper) {
            swiper.destroy(true, true);
            swiper = null;
        }
    }
}

function toggleSwiperButtons() {
    const nextButton = document.querySelector('.swiper-button-next');
    const prevButton = document.querySelector('.swiper-button-prev');

    if (nextButton && prevButton) {
        if (window.innerWidth <= 768) {
            // Oculta os botões de navegação em telas menores
            nextButton.style.display = 'none';
            prevButton.style.display = 'none';
        } else {
            // Mostra os botões de navegação em telas maiores
            nextButton.style.display = '';
            prevButton.style.display = '';
        }
    }
}

// Função para manter o ícone do menu visível
function keepMenuIconVisible() {
    const menuIcon = document.querySelector('#menu-icon');

    if (window.innerWidth <= 768) {
        // Mantém o ícone do menu fixo na parte inferior direita
        menuIcon.style.position = 'fixed';
        menuIcon.style.bottom = '20px';
        menuIcon.style.right = '20px';
    } else {
        // Retorna o ícone ao estado padrão
        menuIcon.style.position = '';
        menuIcon.style.bottom = '';
        menuIcon.style.right = '';
    }
}

initializeSwiper();
toggleSwiperButtons();
keepMenuIconVisible();

window.addEventListener('resize', () => {
    initializeSwiper();
    toggleSwiperButtons();
    keepMenuIconVisible();
});

// Configuração do menu de navegação
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Alterna o menu visível
    menuIcon.classList.toggle('active'); // Pode adicionar animação ou mudança de ícone aqui
});

// Fechar o menu ao clicar em um link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('active');
    });
});
