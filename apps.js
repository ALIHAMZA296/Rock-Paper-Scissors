// Rock Paper Scissors Game

let userScore = 0;
let compScore = 0;

// Get elements from HTML
const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const msg = document.querySelector("#msg");

const resetBtn = document.querySelector("#resetbtn");
const newGameBtn = document.querySelector("#newbtn");


// Computer choices
const choicesArray = ["rock", "paper", "scissors"];


// Generate computer choice
const genCompChoice = () => {
    const randomIndex = Math.floor(Math.random() * 3);

    return choicesArray[randomIndex];
};


// Draw game
const drawGame = () => {
    msg.innerText = "Game was a Draw! Play Again.";
};


// Show winner
const showWinner = (userWin, userChoice, compChoice) => {

    if (userWin) {

        userScore++;

        userScorePara.innerText = userScore;

        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;

    } else {

        compScore++;

        compScorePara.innerText = compScore;

        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;

    }
};


// Play game
const playGame = (userChoice) => {

    console.log("User choice:", userChoice);

    // Generate computer choice
    const compChoice = genCompChoice();

    console.log("Computer choice:", compChoice);


    // Check draw
    if (userChoice === compChoice) {

        drawGame();

        return;
    }


    // Check winner
    let userWin = true;

    if (userChoice === "rock") {

        // Rock beats Scissors
        userWin = compChoice === "scissors";

    } 
    
    else if (userChoice === "paper") {

        // Paper beats Rock
        userWin = compChoice === "rock";

    } 
    
    else if (userChoice === "scissors") {

        // Scissors beats Paper
        userWin = compChoice === "paper";

    }


    // Show result
    showWinner(userWin, userChoice, compChoice);
};


// Add click event to each choice
choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        const userChoice = choice.getAttribute("id");

        playGame(userChoice);

    });

});


// Reset game function
const resetGame = () => {

    userScore = 0;
    compScore = 0;

    userScorePara.innerText = "0";
    compScorePara.innerText = "0";

    msg.innerText = "Play Your Move";

};


// Reset button
resetBtn.addEventListener("click", resetGame);


// New Game button
newGameBtn.addEventListener("click", resetGame);