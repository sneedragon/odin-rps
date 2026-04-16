let humanScore = 0;
let computerScore = 0;
let rounds = 0;
const MAX_ROUNDS = 5;
const scoreboard = () => {
    return `Human: ${humanScore}, CPU: ${computerScore}`;
};


function getComputerChoice() {
    let rng = Math.random();
    if (rng < 0.33) {
        return "rock";
    } else if (rng < 0.66) {
        return "paper";
    } 
    return "scissors";
}

const buttons = document.querySelector(".button-container");

buttons.addEventListener('click', (event) => {
    playRound(event.target.id, getComputerChoice())
});

function playRound(humanChoice, computerChoice) {
    rounds++;
    
    if (humanChoice === computerChoice) {
        showRoundResult("draw");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        showRoundResult("win");
    } else {
        computerScore++;
        showRoundResult("lose");
    }
}


const gameText = document.querySelector(".game-text");
const scoreText = document.querySelector(".score-text");


function showRoundResult(result) {
    console.log(result);

    if (isGameFinished()) {
        announceGameResult(getGameResult());
        return;
    }

    gameText.textContent = `You ${result} round ${(rounds)}!`;
    scoreText.textContent = `${scoreboard()}`;
}

function isGameFinished() {
    if (rounds == MAX_ROUNDS) {
        return true;
    } return false;
}

function getGameResult () {
        if (humanScore === computerScore) {
            return "DRAW"
        } else if (humanScore > computerScore) {
            return "WIN"
        }
        return "LOSE"
}

function announceGameResult(result) {
    gameText.textContent = `GAME OVER! YOU ${result}!`;
    scoreText.textContent = `Final Score: ${scoreboard()}`;
    resetGame();
}

function resetGame() {
    rounds = 0;
    humanScore = 0;
    computerScore = 0;
}
/* ---------------------------- */
