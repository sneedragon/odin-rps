function getComputerChoice() {
    let rng = Math.random();
    if (rng < 0.33) {
        return "rock"
    } else if (rng < 0.66) {
        return "paper"
    } 
    return "scissors"
}