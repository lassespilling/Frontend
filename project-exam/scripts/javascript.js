// Gallery
const nasaUrl = "https://images-api.nasa.gov/search?q=mars";
const gallerySection = document.getElementById("gallery");
const gallery = document.getElementById("the-gallery");
const historicBtn = document.getElementById("historic");
const next = document.getElementById("next");
const previous = document.getElementById("previous");

// Navigation
const h = document.getElementById("hamburger");
const logo = document.getElementById("top-logo");
const nav = document.getElementById("top-nav");
const close = document.getElementById("close");
const marsBtn = document.querySelectorAll("#mars-cards a");
const topNav = document.getElementById("top-nav");


// Modals
const rover = document.getElementById("rover-modal");
const colony = document.getElementById("colony-modal");
const spacetourism = document.getElementById("spacetourism-modal");
const moon = document.getElementById("moon-modal");


var galleryStart = 0;
var galleryLimit = 1;
var mars, li, image, rover, colony, spacetourism, moon;

// Toggle menu on hamburger click
h.onclick = function() {
    nav.classList.toggle("toggled");
    close.onclick = function() {
        nav.classList.toggle("toggled");
    }
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
  if ( (distance <= 0) && !navStick) {
    topNav.classList.toggle("sticky");
  } else if (navStick && (offset <= stick)){
    topNav.classList.toggle("sticky");
  }
}

// Gallery api NASA
function get(url) {
    return new Promise(function (resolve, reject) { // Return a new promise.
        let req = new XMLHttpRequest(); // New XHR request
        req.open("GET", url); // Open using GET
        req.responseType = "json";  // Set type to JSON
        req.onload = function () { // On load >
            if (req.status == 200) { // IF status is success >
                resolve(req.response); // resolve the promise with the response text
            } else { // IF status is not success
                reject(Error(req.statusText)); // reject promise, show error
            }
        };
        req.onerror = function () { // IF network error occurs >
            reject(Error("Network Error")); // reject promise, show error
        };
        req.send(); // Send request
    });
}

// Run API function
get(nasaUrl).then(function (response) { // Run GET function, pass api parameter
    let mars = response.collection.items.slice(galleryStart,galleryLimit); // Set response to card child array
    loadGallery(mars); // Run show card function
}, function (error) {
    console.error("Failed: ", error); // Show errror in console
    loadError = document.createElement("h3");
    loadError.textContent = "Image could not be loaded.";
    gallery.appendChild(loadError); // Show error in HTML
});
previous.onclick = function() { // Previous image btn click
    gallery.innerHTML="";
    galleryLimit--;
    let newLimit = galleryLimit;
    let newStart = newLimit-1;
    get(nasaUrl).then(function (response) {
        let mars = response.collection.items.slice(newStart,newLimit);
        loadGallery(mars);
    }, function (error) {
        console.error("Failed: ", error);
        loadError = document.createElement("h3");
        loadError.textContent = "Image could not be loaded.";
        gallery.appendChild(loadError);
    });
}
next.onclick = function() { // Next image btn click
    gallery.innerHTML="";
    galleryLimit++;
    let newLimit = galleryLimit+2;
    let newStart = newLimit-1;
    get(nasaUrl).then(function (response) {
        let mars = response.collection.items.slice(newStart,newLimit);
        loadGallery(mars);
    }, function (error) {
        console.error("Failed: ", error);
        loadError = document.createElement("h3");
        loadError.textContent = "Image could not be loaded.";
        gallery.appendChild(loadError);
    });
}
function loadGallery(api) {
for(let i = 0; i < api.length; i++) {

     // Create elements
    let galleryItem = document.createElement("li");
    let galleryImg = document.createElement("img");

    // Add classes
    galleryItem.id = "gallery-item";
    galleryImg.id = "gallery-img";

    // Add content
    let imgUrl = api[i].links[0].href;
    galleryImg.setAttribute("src", imgUrl);

    gallery.appendChild(galleryItem);
    galleryItem.appendChild(galleryImg);
}
}

// Fade in on scroll
var fadeIn = function() {
  var elements;
  var windowHeight;
  function init() {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var positionFromTop = elements[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elements[i].className = elements[i].className.replace(
          'hidden',
          'fade-in-element'
        );
      }
    }
  }
  return {
    init: init
  };
};
fadeIn().init();


historicBtn.onclick = function() {
    gallerySection.classList.toggle("historic");
}

var openModal = function(modalname) {
    modalname.classList.add("active");
    document.body.classList.add("noscroll");
}
var closeModal = function(modalname) {
    modalname.classList.remove("active");
    document.body.classList.remove("noscroll");
}




