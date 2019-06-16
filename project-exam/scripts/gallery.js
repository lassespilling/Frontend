// Gallery api NASA
function get(url) {
    return new Promise(function(resolve, reject) { // Return a new promise.
        let req = new XMLHttpRequest(); // New XHR request
        req.open("GET", url); // Open using GET
        req.responseType = "json"; // Set type to JSON
        req.onload = function() { // On load >
            if (req.status == 200) { // IF status is success >
                resolve(req.response); // resolve the promise with the response text
            } else { // IF status is not success
                reject(Error(req.statusText)); // reject promise, show error
            }
        };
        req.onerror = function() { // IF network error occurs >
            reject(Error("Network Error")); // reject promise, show error
        };
        req.send(); // Send request
    });
}

// Run API function
get(nasaUrl).then(function(response) { // Run GET function, pass api parameter
    let mars = response.collection.items.slice(galleryStart, galleryLimit); // Set response to card child array
    loadGallery(mars); // Run show card function
}, function(error) {
    console.error("Failed: ", error); // Show errror in console
    loadError = document.createElement("h3");
    loadError.textContent = "Image could not be loaded.";
    gallery.appendChild(loadError); // Show error in HTML
});
previous.onclick = function() { // Previous image btn click
    gallery.innerHTML = "";
    galleryLimit--;
    let newLimit = galleryLimit;
    let newStart = newLimit - 1;
    get(nasaUrl).then(function(response) {
        let mars = response.collection.items.slice(newStart, newLimit);
        loadGallery(mars);
    }, function(error) {
        console.error("Failed: ", error);
        loadError = document.createElement("h3");
        loadError.textContent = "Image could not be loaded.";
        gallery.appendChild(loadError);
    });
}
next.onclick = function() { // Next image btn click
    gallery.innerHTML = "";
    galleryLimit++;
    let newLimit = galleryLimit + 2;
    let newStart = newLimit - 1;
    get(nasaUrl).then(function(response) {
        let mars = response.collection.items.slice(newStart, newLimit);
        loadGallery(mars);
    }, function(error) {
        console.error("Failed: ", error);
        loadError = document.createElement("h3");
        loadError.textContent = "Image could not be loaded.";
        gallery.appendChild(loadError);
    });
}

function loadGallery(api) {
    for (let i = 0; i < api.length; i++) {

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

historicBtn.onclick = function() {
    gallerySection.classList.toggle("historic");
}