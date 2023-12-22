
    $('.clientslider-wrapper').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        infinite: true,
        rows: 1,
        swipeToSlide: true,
        arrows: false,
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


$(document).ready(function () {
    $('.serviceswrapperslider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 500,
        infinite: true,
        rows: 1,
        swipeToSlide: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1445,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
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


$(document).ready(function () {
    $('.avards-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 500,
        infinite: false,
        dots:true,
        rows: 1,
        swipeToSlide: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
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
$(document).ready(function () {
    $('.ourworks-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 500,
        infinite: false,
        dots:true,
        rows: 1,
        swipeToSlide: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    centermode:false,
                },
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
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
//Expertise row
var processcol = document.querySelector("processcol")
$(document).ready(function () {
    $('.Expertise-main .header li').click(function () {
        $('.Expertise-main .header li').removeClass("active");
        $(this).addClass("active");
    });
});

$(document).ready(function () {
    $('.engagementmodels-main .header li').click(function () {
        $('.engagementmodels-main .header li').removeClass("active");
        $(this).addClass("active");
    });
});

var r1 = document.getElementById("r1")
function openrow1() {
    r2.style.display = "none"
    r3.style.display = "none"
    r4.style.display = "none"
    r5.style.display = "none"
    r1.style.display = "grid"
    r1.style.animation = "openopacityanim 2s"
}
var r2 = document.getElementById("r2")
function openrow2() {
    r1.style.display = "none"
    r3.style.display = "none"
    r4.style.display = "none"
    r5.style.display = "none"
    r2.style.display = "grid"
    r2.style.animation = "openopacityanim 2s"
}
var r3 = document.getElementById("r3")
function openrow3() {
    r2.style.display = "none"
    r4.style.display = "none"
    r5.style.display = "none"
    r1.style.display = "none"
    r3.style.display = "grid"
    r3.style.animation = "openopacityanim 2s"
}
var r4 = document.getElementById("r4")
function openrow4() {
    r2.style.display = "none"
    r3.style.display = "none"
    r1.style.display = "none"
    r5.style.display = "none"
    r4.style.display = "grid"
    r4.style.animation = "openopacityanim 2s"
}
var r5 = document.getElementById("r5")
function openrow5() {
    r2.style.display = "none"
    r3.style.display = "none"
    r4.style.display = "none"
    r1.style.display = "none"
    r5.style.display = "grid"
    r5.style.animation = "openopacityanim 2s"
}

//faq
$(document).ready(function(){
	$('.item-holder .item-description').hide();
	$( ".item-holder:gt(4)" ).hide();
	$('.faq-button').click(function(){
		$( ".item-holder:gt(4)" ).show();
	})
    $(".item-holder").on('click',function(){
    	var _is_expanded = $(this).hasClass('active');
    	 $(".faq-col1").removeClass('active');
         $(".item-holder").removeClass('active');
    	 $('.item-holder .item-description').slideUp();
    	 if( _is_expanded == false) {
    	 	$(this).addClass('active');
             $(".faq-col1").addClass('active');
    	 	$(this).find('.item-description').slideDown();
    	 }
    	 	
    });
});


var body = document.querySelector('body');
var isvisiblecontainer = false;
var numbercont = document.getElementById("numberscountcont")
var numbercont2 = document.getElementById("numberscountcont")


var elementVisible = 250;

var revealfunc = reveal();

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;


        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// header book a call animation
window.addEventListener('scroll', numberscounterfunc,numberscounterfunc2)
var body = document.getElementById("body")


var body = document.querySelector('body');
var isvisiblecontainer = false;

function animateText(elementid, max, milliseconds = 50) {
    var text = document.getElementById(elementid)


    var current = 0;

    var interval = setInterval(x => {
        current++;
        text.innerHTML = current

        if (current === max) {
            clearInterval(interval)
        }
    }, milliseconds)
}

function numberscounterfunc() {
    let scroll = this.scrollY;
    var isvisiblee = isScrolledIntoView(numbercont)

    if (isvisiblee && !isvisiblecontainer) {
        isvisiblecontainer = true;
        animateText("count1", 40, 30)
        animateText("count2", 35, 30)
        animateText("count3", 4, 350)

    }
    // if (!isvisiblee && isvisiblecontainer) {
    //     isvisiblecontainer = false;
    //     console.log("atami")

    // }
}
function numberscounterfunc2() {
    let scroll = this.scrollY;
    var isvisiblee = isScrolledIntoView(numbercont2)

    if (isvisiblee && !isvisiblecontainer) {
        isvisiblecontainer = true;
        animateText("count11", 40, 30)
        animateText("count22", 35, 30)
        animateText("count33", 4, 350)

    }
}






function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Only completely visible elements return true:
    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}
