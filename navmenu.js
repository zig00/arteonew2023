var navmenu = document.getElementById("navmenu")
var navmenubtn = document.getElementById("navmenubtn")
var navmenudropdownlink = document.getElementById("navmenudropdownlink")
var navmenudropdowninner = document.getElementById("navmenudropdowninner")
var navmenuimg = document.getElementById("navmenuimg")
var navmenudropdownlink2 = document.getElementById("navmenudropdownlink2")
var navmenudropdowninner2 = document.getElementById("navmenudropdowninner2")
var body = document.getElementById("body")

navmenubtn.addEventListener("click", () => {
    if (navmenu.style.display != "flex" || navmenu.style.display == "") {
        navmenu.style.display = "flex"
        navmenu.style.animation = "openopacityanim 1s"
        $('body, html').css('overflow' , 'hidden');
        navmenuimg.style.filter = "brightness(0)"
    }
    else {

        navmenu.style.animation = "closeopacityanim 1s"
        document.body.style.overflowY = "scroll";
        navmenuimg.style.filter = "brightness(1)"
        navmenudropdowninner.style.display = "none"
        setTimeout(() => {
            navmenu.style.display = "none"
            document.body.style.overflowY = "scroll";

        }, 800);
    }

})
navmenudropdownlink.addEventListener("click", () => {
    if (navmenudropdowninner.style.display != "flex" || navmenudropdowninner.style.display == "")
    {
        navmenudropdowninner.style.display = "flex"
        navmenudropdowninner.style.animation = "openopacityanim 1s"
        navmenudropdowninner2.style.display = "none"
    }
    else{
        navmenudropdowninner.style.animation = "closeopacityanim 4s"
        setTimeout(() => {
            navmenudropdowninner.style.display = "none"

        }, 800);
    }

})

navmenudropdownlink2.addEventListener("click", () => {
    if (navmenudropdowninner2.style.display != "flex" || navmenudropdowninner2.style.display == "")
    {
        navmenudropdowninner2.style.display = "flex"
        navmenudropdowninner.style.display = "none"
        navmenudropdowninner2.style.animation = "openopacityanim 1s"
    }
    else{
        navmenudropdowninner2.style.animation = "closeopacityanim 1s"
        setTimeout(() => {
            navmenudropdowninner2.style.display = "none"

        }, 800);
    }

})