let humanScore = 0;
let computerScore = 0;
let scoreboard = `Human: ${humanScore}, CPU: ${computerScore}.`

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
    if (humanChoice === computerChoice) {
        showGameResult("Draw");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        showGameResult("Win");
    } else {
        computerScore++;
        showGameResult("Lose");
    }
}

function showGameResult(result) {
    scoreboard = (`Human: ${humanScore}, CPU: ${computerScore}.`);
    alert(`${result}! ${scoreboard}`);
}

/* ---------------------------- */
