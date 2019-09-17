let numSquares = 6;
let pickedColor;
let colors = [];
const squares = document.querySelectorAll(".square");
const messageDisplay = document.querySelector("#message");
const header = document.querySelector("#header");
const colorDisplay = document.querySelector("#color-display");
const resetButton = document.querySelector("#reset");
const modeButtons = document.querySelectorAll(".mode");


//setup initial game
init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

//game mode selection 
function setupModeButtons(){
	for(let i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(let i = 0; i < squares.length; i++){
	//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			let clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColors(clickedColor);
				header.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "black";
				messageDisplay.textContent = "Try Again"
			}
		});
	}
}


//reset game functionality
function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	//change colors of squares
	for(let i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	header.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	//loop through all squares
	for(let i = 0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

//picking "gaming" color functionality
function pickColor(){
	const random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//generate random colors for squares
function generateRandomColors(num){
	const arr = []
	//repeat num times
	for(let i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

//randon rgb creation
function randomColor(){
	//pick a "red" from 0 - 255
	const r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	const g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	const b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

