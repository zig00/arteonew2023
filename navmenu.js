var navmenu = document.getElementById("navmenu")
var navmenubtn = document.getElementById("navmenubtn")
var navmenudropdownlink = document.getElementById("navmenudropdownlink")
var navmenudropdowninner = document.getElementById("navmenudropdowninner")
var navmenuimg = document.getElementById("navmenuimg")

navmenubtn.addEventListener("click", ()=>{
    if(navmenu.style.display != "flex" || navmenu.style.display == "" )
    {
        navmenu.style.display = "flex"
        navmenu.style.animation = "openopacityanim 1s"
        document.body.style.overflowY = "hidden";
        navmenuimg.style.filter = "brightness(0)"
    }
    else{
        
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
navmenudropdownlink.addEventListener("click", ()=>{
    navmenudropdowninner.style.display = "flex"
    navmenudropdowninner.style.animation = "openopacityanim 1s"
})