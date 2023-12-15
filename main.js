document.querySelector('#scrollable').addEventListener('wheel', preventScroll, { passive: false });

function preventScroll(e) {
    e.preventDefault();
    e.stopPropagation();

    return false;
}

$(document).ready(function () {
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


var processSpan = document.getElementById("processSpan")
var li1 = document.getElementById("li1")
var li2 = document.getElementById("li2")
var li3 = document.getElementById("li3")
var li4 = document.getElementById("li4")
var li5 = document.getElementById("li5")
var li6 = document.getElementById("li6")
$(document).ready(function () {
    $('.theprocess-inner li').click(function () {
        $('.theprocess-inner li').removeClass("active");
        $(this).addClass("active");
        if (li1.classList.contains("active")) {
            processSpan.style.transform = "translateY(0px)"
        }

        if (li2.classList.contains("active")) {
            processSpan.style.transform = "translateY(100px)"
        }
        if (li3.classList.contains("active")) {
            processSpan.style.transform = "translateY(200px)"
        }
        if (li4.classList.contains("active")) {
            processSpan.style.transform = "translateY(300px)"
        }
        if (li5.classList.contains("active")) {
            processSpan.style.transform = "translateY(400px)"
        }
        if (li6.classList.contains("active")) {
            processSpan.style.transform = "translateY(500px)"
        }

    });
});


//Expertise row
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

var body = document.querySelector('body');
var isvisiblecontainer = false;
var numbercont = document.getElementById("numberscountcont")


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
window.addEventListener('scroll', numberscounterfunc)
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

var numbercont = document.getElementById("numberscountcont")




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