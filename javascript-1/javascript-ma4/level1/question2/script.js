// name the URL
var url = "https://jsonplaceholder.typicode.com/todos";

// name new XHR object
var request = new XMLHttpRequest();

// use open() method, HTTP method GET, specify url
request.open('GET', url);

// set type to JSON so XHR knows to convert to JS object
request.responseType = "json";

// send the request
request.send();

// when request has loaded run fuction
request.onload = function() {
  // name the response
  var todos = request.response;

  // set innerHTML through functions
  showTodos(todos);
}

function showTodos(jsonObj) {
  var cards = document.getElementById("cards");

  // Iterate through all todos
  for(i=0;i<jsonObj.length;i++) {
    var card = document.createElement("li");
    var user = document.createElement("h1");
    var task = document.createElement("p");
    var taskName = document.createElement("p");
    var statusIs = document.createElement("p");
    user.classList.add("user");
    task.classList.add("task");
    taskName.classList.add("taskname");
    statusIs.classList.add("status");
    var completed = jsonObj[i].completed;

    // Set content of HTML
    user.textContent = "User: " + jsonObj[i].userId;
    task.textContent = "Task " + jsonObj[i].id + ": ";
    taskName.textContent += jsonObj[i].title;
    if(completed) {
      statusIs.textContent += "completed";
      statusIs.classList.add("green");
    } else {
      statusIs.textContent += "not finished";
      statusIs.classList.add("red");
    }

    // Add to HTML
    cards.appendChild(card);
    card.appendChild(user);
    card.appendChild(task);
    card.appendChild(taskName);
    card.appendChild(statusIs);
  }
}