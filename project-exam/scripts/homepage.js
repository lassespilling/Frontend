
// Preloader enter or skip
enter.onclick = function() {
    preloader.classList.toggle("preload");
    setTimeout(function() {
        prelude.currentTime = 0.4;
        prelude.play();
        preloader.classList.toggle("logoappear");
        
        setTimeout(function() {
            document.body.classList.add("fadeinbody");
            document.body.classList.remove("noscroll");
        }, 7000);
    }, 12000);
}
skip.onclick = function() {
    preloader.classList.toggle("skip");
    document.body.classList.toggle("fadeinbody");
    document.body.classList.remove("noscroll");
}

var openModal = function(modalname) {
    modalname.classList.add("active");
    document.body.classList.add("noscroll");
}
var closeModal = function(modalname) {
    modalname.classList.remove("active");
    document.body.classList.remove("noscroll");
}