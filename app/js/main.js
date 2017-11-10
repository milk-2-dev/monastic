var owl = $(".owl-carousel").owlCarousel({
    items: 1,
    slideSpeed: 500,
    autoplay: true,
    autoplayTimeout: 4500,
    loop: false,
    mouseDrag: true,
    singleItem: true,
    dots: true,
    margin: 0,
    nav: true,
    navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
    ],
}).data('owlCarousel');