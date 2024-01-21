var navmenu = document.getElementById("navmenu")
var navmenubtn = document.getElementById("navmenubtn")
var navmenudropdownlink = document.getElementById("navmenudropdownlink")
var navmenudropdowninner = document.getElementById("navmenudropdowninner")
var navmenuimg = document.getElementById("navmenuimg")
var navmenudropdownlink2 = document.getElementById("navmenudropdownlink2")
var navmenudropdowninner2 = document.getElementById("navmenudropdowninner2")
var body = document.getElementById("body")
var artt1 = document.getElementById("artt1")
var artt2 = document.getElementById("artt2")
var foragenciesnavbtn = document.getElementById("foragenciesnavbtn")
var artttelogo = document.getElementById("artttelogo")


navmenubtn.addEventListener("click", () => {
    if (navmenu.style.display != "flex" || navmenu.style.display == "" && artt1 !== null && artt2 !== null && foragenciesnavbtn !== null && artttelogo !== null ) {
        navmenu.style.display = "flex"
        navmenu.style.animation = "none"
        document.getElementById("navmenubtnimage").src = "/images/x.svg";
        $('body, html').css('overflow' , 'hidden');
        document.getElementById("artttelogo").src = "/images/Layer 2.svg"
        document.getElementById("artt1").style.color = "#2a3342"
        document.getElementById("artt2").style.color = "#7a8597"
       
    }
    else {

        navmenu.style.animation = "none"
        document.getElementById("artttelogo").src = "/images/whitelogo.svg"
        foragenciesnavbtn.src = "/images/whitebars.png"
        artt1.style.color = "#fff"
        artt2.style.color = "#fff"

      
        navmenudropdowninner.style.display = "none"
        setTimeout(() => {
            navmenu.style.display = "none"
            $('body, html').css('overflow' , 'scroll');
        }, 100);
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