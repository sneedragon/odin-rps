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

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        return getHumanChoice();
    } 
}

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

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
}

/* ---------------------------- */

playGame();
alert(`Final Score: ${scoreboard}`);