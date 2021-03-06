//1.
//A. Classes allow CSS and Javascript to select and access specific elements, they are used 
//to identify a group of elements.
//B. Ids allow CSS and Javascript to select and access one specific element.
//C. The class select group of elements, but Id just select only one.
//D. They can be used to apply the same style or functions to the elements 
//which have the same className or Id name.
//4. 
function each(array, callback) {
	for(var i = 0; i < array.length; i++) {
		callback(array[i], i);
	}
}

function modifyTextContent(element) {
	 element.textContent = "Hello World!";
}

var divs = document.getElementsByClassName("box");
var image = document.getElementsByTagName("img");

function modifyHeight(element) {
	element.style.height = "300px";
}

var lists = document.getElementsByTagName('li');

function modifyListContent(element, i) {
var cities = ['San Francisco', 'Cairo', 'Tokyo', 'Nairobi'];
if(i < cities.length)
	element.textContent = cities[i];
else
	element.remove();
}

function changeImageElement() {
var newElement = document.createElement('button');
	image[0].parentNode.replaceChild(newElement, image[0]);
}