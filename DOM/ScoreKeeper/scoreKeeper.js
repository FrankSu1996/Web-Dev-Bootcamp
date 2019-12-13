var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var p1Score = 0;
var p1Display = document.querySelector("#p1Score");
var p2Score = 0;
var p2Display = document.querySelector("#p2Score");
var gameLimit = 5;
var gameScoreDisplay = document.querySelector("p span");
var gameOver = false;

//add event listeners to buttons
p1Button.addEventListener("click", function() {
    if (!gameOver) {
        p1Score++;
        p1Display.textContent = p1Score;
        if(p1Score === gameLimit) {
            p1Display.classList.add("winner");
            alert("Player 1 Won!!");
            gameOver = true;
        }
    }
});

function p2Click(button) {
    button.addEventListener("click", function() {
        if (!gameOver) {
            p2Score++;
            p2Display.textContent = p2Score;
            if(p2Score === gameLimit) {
                p2Display.classList.add("winner");
                alert("Player 2 Won!!");
                gameOver = true;
            }
        }
    });
}
p2Click(p2Button);
/*p2Button.addEventListener("click", function() {
    if (!gameOver) {
        p2Score++;
        p2Display.textContent = p2Score;
        if(p2Score === gameLimit) {
            p2Display.classList.add("winner");
            alert("Player 2 Won!!");
            gameOver = true;
        }
    }
});*/

function reset() {
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
}

resetButton.addEventListener("click", reset);

numInput.addEventListener("change", function() {
    gameScoreDisplay.textContent = this.value;
    gameLimit = Number(this.value);
    reset();
})