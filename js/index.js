// $('.owl-carousel').owlCarousel({
//     loop: true,
//     margin: 20,
//     nav: true,
//     dots: false,
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 3
//         },
//         1000: {
//             items: 4
//         }
//     }
// });

function menuToggle() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("h-auto");
    menu.classList.toggle("h-0");
}