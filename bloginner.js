var body = document.getElementById("body")
var scrollcard = document.getElementById("scrollcard")





var body = document.querySelector('body');
var isvisiblecontainer = false;

function bodyscrollfunc() {
    let scroll = this.scrollY;
    console.log(scroll)
    if (scroll > 270) {
        scrollcard.style.position = "fixed"
        scrollcard.style.top = "50px"
        scrollcard.style.right = "17.3%"

    } else {
        scrollcard.style.position = "static"
    }
}