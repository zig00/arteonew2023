



//Expertise row
var processcol = document.querySelector("processcol")
$(document).ready(function () {
    $('.pinner-teckstack .header li').click(function () {
        $('.pinner-teckstack .header li').removeClass("active");
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
$(document).ready(function () {
    $('.item-holder .item-description').hide();
    $(".item-holder:gt(4)").hide();
    $('.faq-button').click(function () {
        $(".item-holder:gt(4)").show();
    })
    $(".item-holder").on('click', function () {
        var _is_expanded = $(this).hasClass('active');
        $(".faq-col1").removeClass('active');
        $(".item-holder").removeClass('active');
        $('.item-holder .item-description').slideUp();
        if (_is_expanded == false) {
            $(this).addClass('active');
            $(".faq-col1").addClass('active');
            $(this).find('.item-description').slideDown();
        }

    });
});





// header book a call animation

var body = document.getElementById("body")






// var body = document.querySelector('body');
// var scrollcontainer = document.getElementById("scrollcontainer")
// var isvisiblecontainer = false;

// function bodyscrollfunc() {
//     let scroll = this.scrollY;
//     console.log(scroll)
//     if (scroll > 30) {
//         alert("ola")
//     } else {
//     }
//     var isvisiblee = isScrolledIntoView(numbercont)

//     if (isvisiblee && !isvisiblecontainer) {
//         isvisiblecontainer = true;
//         console.log("vashli")

//     }
//     // if (!isvisiblee && isvisiblecontainer) {
//     //     isvisiblecontainer = false;
//     //     console.log("atami")

//     // }



// }
// window.onscroll = function (e) {
//     var vertical_position = 0;
    
//     if (scrollY)//usual
//       vertical_position = scrollY;
//     else if (document.documentElement.clientHeight)//ie
//       vertical_position = document.documentElement.scrollTop;
//     else if (document.body)//ie quirks
//       vertical_position = document.body.scrollTop;
  
//     var your_div = document.getElementById('scrollcontainer');
//     your_div.style.top = (vertical_position - 730) + 'px';
  
    
//   }

$(document).ready(function(){

    
    var top=  $('#scrollcontainer').offset().top
    var left=  $('#scrollcontainer').offset().left
    const offset = top-100
    $(window).scroll(function(){
        var n = (1000-($(document).height()-($(window).scrollTop() + $(window).height())))

        if($(document).scrollTop() > offset) {
            var newPos = $(document).scrollTop()-offset;
            $('#scrollcontainer').css( {position:'fixed',left,top:top-offset,bottom:'auto','margin-left':0});
        }
        else {
            $('#scrollcontainer').css( {position:'relative',left:'auto',bottom:'auto',top:'auto','margin-left':40});
        }

        if(n>=0) {
            $('#scrollcontainer').css( {position:'fixed',left,bottom:n+60,top:'auto','margin-left':0});
        }
    })
})

// $(document).ready(function () {
//     if ($(window).width() > 580) {
//         window.addEventListener('scroll', bodyscrollfunc)


//     }
// });
// var numbercont = document.getElementById("numberscountcont")




// function isScrolledIntoView(el) {
//     var rect = el.getBoundingClientRect();
//     var elemTop = rect.top;
//     var elemBottom = rect.bottom;

//     // Only completely visible elements return true:
//     var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
//     // Partially visible elements return true:
//     //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
//     return isVisible;
// }




// function animateText(elementid, max, milliseconds = 50) {
//     var text = document.getElementById(elementid)


//     var current = 0;

//     var interval = setInterval(x => {
//         current++;
//         text.innerHTML = current

//         if (current === max) {
//             clearInterval(interval)
//         }
//     }, milliseconds)
// }