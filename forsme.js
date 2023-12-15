$(document).ready(function () {
    $('.testimonial-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 500,
        infinite: false,
        rows: 1,
        swipeToSlide: true,
        arrows: true,
        prevArrow: "<button type='button' class='slbtn slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
        nextArrow: "<button type='button' class='slbtn slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },   
        ],
    });
});

//open engagement models
var engbox1 = document.getElementById("engbox1")
var engbox2 = document.getElementById("engbox2")
var engbox3 = document.getElementById("engbox3")
function openeng1() {
    if (engbox1.style.display != "flex" || engbox1.style.display == "") {
        engbox1.style.display = "flex"
        engbox2.style.display = "none"
        engbox3.style.display = "none"
        engbox1.style.animation = "openopacityanim 2s"
    }
}
function openeng2() {
    if (engbox2.style.display != "flex" || engbox2.style.display == "") {
        engbox2.style.display = "flex"
        engbox1.style.display = "none"
        engbox3.style.display = "none"
        engbox2.style.animation = "openopacityanim 2s"
    }
}
function openeng3() {
    if (engbox3.style.display != "flex" || engbox3.style.display == "") {
        engbox3.style.display = "flex"
        engbox2.style.display = "none"
        engbox1.style.display = "none"
        engbox3.style.animation = "openopacityanim 2s"
    }
}