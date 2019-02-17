//MODULE ASSIGNMENT 2 - LEVEL 1

// extra awesomeness
mainstyle="background: #c4e4e7;text-transform:uppercase; color: black; font-weight: bold;padding:0.2rem 0.5rem;margin-left:-2rem;font-size:1rem;",style="background: #e0edee; color: black; font-weight: bold;padding:0.2rem 0.5rem;margin-left:-2rem;",style2="background: orange; color: black; font-weight: bold;padding:0.2rem 0.5rem;margin-left:-2rem;";

//1. Create a function that displays prototypal inheritance
console.log("%c //1. Create a function that displays prototypal inheritance", style);

var forest = {
    type: "woodland",
    sunlight: "plenty",
    area: "open",
}
var oak = {
    density: 0.74 + "kg/m3",
    hasNuts: true,
};
console.log("Oak tree, in a forest:");
console.log("Own properties: " + JSON.stringify(oak));
oak.prototype = forest;
console.log("Inherited from forest: " + JSON.stringify(oak.prototype));
console.log(" ");

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
console.log("%c //2. Create an array of numbers from 1 - 10; slice the 5th number in the array", style);
var ten = ["1","2","3","4","5","6","7","8","9","10"];
console.log(ten.slice(4,5) + " has been sliced from the array.");
console.log(" ");

//3. Delete the last number in the array that you created above.
console.log("%c //3. Delete the last number in the array that you created above.", style);
console.log(ten.pop() + " has been deleted from the array.");
ten.pop();
console.log(" ");

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas:
console.log("%c // 4. Change strawberries to bananas in paragraph", style);
var paragraph = "Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.";
paragraph = paragraph.replace(/Strawberries/g, "Bananas");
paragraph = paragraph.replace(/strawberries/g, "bananas");
paragraph = paragraph.replace(/strawberry/g, "banana");
paragraph = paragraph.replace(/red/g, "yellow");
paragraph = paragraph.replace(/white/g, "yellow");
paragraph = paragraph.replace(/bushes/g, "trees");
paragraph = paragraph.replace(/berry/g, "fruit");
paragraph = paragraph.replace(/berries/g, "fruits");
paragraph = paragraph.replace(/ruby/g, "citrine");
console.log(paragraph);
console.log(" ");


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
console.log("%c // 5. Create football clubs array, on button click change to cars", style);
var footballClubs = ["Manchester United", "Liverpool", "Chelsea", "Tottenham"], luxuryCars = ["Ferrari","Lamborghini","Rolls Royce","Bentley"];
console.log(footballClubs);

function clickButton() {
    footballClubs = luxuryCars;
    console.log(" ");
    console.log("%c // 5. Changed to cars array: ", style2);
    console.log(footballClubs);
    return footballClubs = luxuryCars;
}
console.log(" ");


//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
console.log("%c // 6. Create array with 3 people, filter by a name", style)
var people = [
    {name: "Mito", from: "Malaysia", enjoys: "action movies"},
    {name: "Sinclair", from: "England"},
    {name: "Walter", from: "New Zealand"},
]
var byName = people.filter(function(person){
    return (person.name === "Mito");
})
console.log("Filtered by Mito: " + JSON.stringify(byName));
console.log(" ");


//7. Create a simple function that logs the date.
console.log("%c // 7. Create function that logs the date.", style)
var date = function() {
    var date = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    console.log("Today's date is: " + date.getDate() + " of " + months[date.getMonth()]);
}();
