// name the URL
let url = "https://jsonplaceholder.typicode.com/todos";

// name new XHR object
let request = new XMLHttpRequest();

// use open() method, HTTP method GET, specify url
request.open('GET', url);

// set type to JSON so XHR knows to convert to JS object
request.responseType = "json";

// send the request
request.send();

// when request has loaded run fuction
request.onload = function() {
  // name the response
  let todos = request.response;

  // set innerHTML through functions
  showTodos(todos);
}

function showTodos(jsonObj) {
  let cards = document.getElementById("cards");

  // Iterate through all todos
  for(i=0;i<jsonObj.length;i++) {
    let card = document.createElement("li");
    let user = document.createElement("h1");
    let task = document.createElement("p");
    let taskName = document.createElement("p");
    let statusIs = document.createElement("p");
    user.classList.add("user");
    task.classList.add("task");
    taskName.classList.add("taskname");
    statusIs.classList.add("status");
    let completed = jsonObj[i].completed;

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