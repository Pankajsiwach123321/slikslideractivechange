$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    fade: true,
    centerMode: true,
    dots: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '10px',
    autoplay:true,
    // variableWidth:true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                dots: false,
                slidesToShow: 3,

            }
        },
        {
            breakpoint: 992,
            settings: {
                autoplay: false,
                dots: false,
                slidesToShow: 1,
                centerMode: true,
            }
        }
    ]
});
setTimeout(() => {
    document.getElementById("preloder").classList.add("d-none");
    document.body.classList.remove("overflow-hidden");
}, 2000);