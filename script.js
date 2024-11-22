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

initializeSwiper();
window.addEventListener('resize', initializeSwiper);

// const menuIcon = document.querySelector('#menu-icon');
// const navbar = document.querySelector('.navbar');

// menuIcon.addEventListener('click', () => {
//     navbar.classList.toggle('active');
// });

// const navLinks = document.querySelectorAll('.navbar a'); 

// navLinks.forEach(link => {
//     link.addEventListener('click', function () {
//         navLinks.forEach(item => item.classList.remove('active'));

//         this.classList.add('active');
//     });
// });

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