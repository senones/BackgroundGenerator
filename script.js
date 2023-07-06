// Select various elements from the HTML document
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector("#random");

// Set initial color input values
color1.value = "#ff0000";
color2.value = "#ffff00";

// Define a function to set the gradient color of the body and display the gradient CSS in the h3 tag
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}

// Define a function to generate a random RGB color
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// Add event listener to the random button
randomButton.addEventListener("click", function() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
});

// Set initial gradient
setGradient();

// Add event listeners to the color picker inputs
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
