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

// Swiper settings
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,

    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});

// Navbar toggle for mobile (sidebar)
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Toggle 'active' class on click to show/hide the sidebar
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
