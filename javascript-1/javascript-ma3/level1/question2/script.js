//Console.log out elements in JSON file
var jsonData = {
	"video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Alejandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
			}]
		}
	}]
};
var array = jsonData.video;
var nestedarray = array[0].author.data;

// using for loop
for (var i = 0;i<array.length; i++) {
    console.log(array[i]);
}

/* optional second loop for nested array "author.data" 
for (var i = 0;i<nestedarray.length; i++) {
    console.log(nestedarray[i]);
}
*/

/* individually
console.log(array[0]);
console.log(array[0].id);
console.log(array[0].name);
console.log(array[0].url);
console.log(array[0].author);
console.log(array[0].author.data[0]);
console.log(array[0].author.data[0].name_author);
console.log(array[0].author.data[0].url);
console.log(array[0].author.data[0].type);
*/