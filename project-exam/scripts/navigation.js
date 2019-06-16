// Preloader
const preloader = document.getElementById("preloader");
const enter = document.getElementById("enter");
const skip = document.getElementById("skip");
const intrologo = document.getElementById("intrologo");
const prelude = document.getElementById("prelude");

// Gallery
const nasaUrl = "https://images-api.nasa.gov/search?q=mars";
const gallerySection = document.getElementById("gallery");
const gallery = document.getElementById("the-gallery");
const historicBtn = document.getElementById("historic");
const next = document.getElementById("next");
const previous = document.getElementById("previous");

// Modals
const rover = document.getElementById("rover-modal");
const colony = document.getElementById("colony-modal");
const spacetourism = document.getElementById("spacetourism-modal");
const moon = document.getElementById("moon-modal");

// Navigation
const h = document.getElementById("hamburger");
const logo = document.getElementById("top-logo");
const nav = document.getElementById("top-nav");
const close = document.getElementById("close");
const marsBtn = document.querySelectorAll("#mars-cards a");
const topNav = document.getElementById("top-nav");

var galleryStart = 0;
var galleryLimit = 1;
var mars, li, image;

// Toggle menu on hamburger click
h.onclick = function() {
    nav.classList.add("toggled");
    document.body.classList.add("noscroll");
}
close.onclick = function() {
    nav.classList.remove("toggled");
    document.body.classList.remove("noscroll");
}

// Sticky top menu on scroll
var stick = getDistance();

function getDistance() {
    var topDist = h.offsetTop;
    return topDist;
}
window.onscroll = function(e) {
    let navStick = topNav.classList.contains("sticky");
    var distance = getDistance() - window.pageYOffset;
    var offset = window.pageYOffset;
    if ((distance <= 0) && !navStick) {
        topNav.classList.toggle("sticky");
    } else if (navStick && (offset <= stick)) {
        topNav.classList.toggle("sticky");
    }
}

// Toggle menu on hamburger click
h.onclick = function() {
    nav.classList.toggle("toggled");
    close.onclick = function() {
        nav.classList.toggle("toggled");
    }
}