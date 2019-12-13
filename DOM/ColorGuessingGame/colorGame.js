var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            removeSelected();
            this.classList.add("selected");
            //update numsquares based on difficulty mode
            if(this.textContent === "Easy") {
                numSquares = 3;
            }
            else if (this.textContent === "Hard") {
                numSquares = 6;
            }
            else if (this.textContent === "Very Hard") {
                numSquares = 9;
            }
            else {
                numSquares = 12;
            }
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function() {
            //get color of clicked square
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}

function reset() {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

//when reset, new random colors are selected for squares
resetButton.addEventListener("click", function() {
    reset();
})

//function to change all squares to color parameter
function changeColors(color) {
    //loop through all squares, change to match color var
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

//function to pick random color from color array
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//function to generate array of random colors
//input = length of array
function generateRandomColors(num) {
    //make an array, add num random colors
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

//function to generate random color
function randomColor() {
    var redVal = Math.floor(Math.random() * 256);
    var greenVal = Math.floor(Math.random() * 256);
    var blueVal = Math.floor(Math.random() * 256);
    return "rgb(" + redVal + ", " + greenVal + ", " + blueVal + ")";
}

function removeSelected() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].classList.remove("selected");
    }
}