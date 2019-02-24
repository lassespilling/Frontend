var btn = document.getElementById("btn");
btn.addEventListener('click', function(e){
    alert("You have clicked the button!");
    e.stopPropagation;
});