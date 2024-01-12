$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    navText: ["<img class='mx-auto' src='../assets/icons/left.svg'>", "<img class='mx-auto' src='../assets/icons/right.svg'>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3
        }
    }
});


// Responsive header
function menuToggle() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("h-auto");
    menu.classList.toggle("h-0");
}
