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

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
