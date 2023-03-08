//Grab all the buttons, divs and form
const displayPin = document.getElementById("display-pin");
const form = document.querySelector("form");
const playAgainButton = document.querySelector("#play-again-button");
const tryAgainButton = document.querySelector("#try-again-button");
const messageDiv = document.querySelector("#message");
let correctPin = Math.floor(Math.random() * 9000 + 1000);
let triesLeft = 4;


// Clear the Game and restart
const resetGame = () => {
    triesLeft = 4;
    messageDiv.textContent = "";
    tryAgainButton.style.display = "none";
    displayPin.textContent = "";
    playAgainButton.textContent = "Play Again";
    playAgainButton.style.display = "none";
    correctPin = Math.floor(Math.random() * 9000 + 1000);
    
}

// add event listeners to give the buttons functionality
playAgainButton.addEventListener("click",resetGame);
tryAgainButton.addEventListener("click",resetGame);

form.addEventListener("submit", function(event) {
    event.preventDefault();

//get the pin entered by the user
const pinEntered = form.elements["pin"].value;

// check to see if the entered text has 4 digits and is a number and not a letter and doenst have 0 input
if(pinEntered.length === 0 || pinEntered.length !== 4 || isNaN(pinEntered)) {
    // display the warning message
    alert("Please enter a 4-digit number pin.");
    return; // Don't count this as and attempt
}

//check if the pin is correct
if(pinEntered === correctPin) {
    //display a message and show the try again button
    messageDiv.textContent = "Congratulations! You have won!";
    playAgainButton.style.display = "block";
} else {
    //decrement the number of tires left and display a message
    --triesLeft;
    messageDiv.textContent =  `Wrong pin. You have ${triesLeft} tries left`;

}

// if there are no triers left, display a message and show the try again button
if(triesLeft === 0) {
    messageDiv.textContent = "Game over. Please Try Again.";
    displayPin.textContent = `The correct pin was ${correctPin}`;
    tryAgainButton.style.display = "block";
}

// clear the pin input field
form.elements["pin"].value = "";

})