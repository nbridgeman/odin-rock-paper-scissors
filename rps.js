function get_move(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

function computerPlay() {
    var moves = ["rock", "paper", "scissors"];
    return get_move(moves);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        return "It's a tie!"
    } else if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection == "paper") {
            return "You lose! Paper beats rock"
        } else { // scissors
            return "You win! Rock beats scissors"
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats rock"
        } else { //scissors
            return "You lose! Scissors beats paper"
        }
    } else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "rock") {
            return "You lose! Rock beats scissors"
        } else { // paper
            return "You win! Scissors beats paper"
        }
    }
}

function game() {
    var user_score = 0;
    var comp_score = 0;
    for (let i = 0; i < 5; i++) {
        var user_pick = prompt("Rock, paper, or scissors?")
        var winner = playRound(user_pick, computerPlay());
        if (winner.includes("win")) {
            user_score += 1;
        } else if (winner.includes("lose")) {
            comp_score += 1;
        }
        console.log(winner);
        console.log("Current score: " + user_score + " - " + comp_score);
    }
    if (user_score > comp_score) {
        console.log("You win!");
    } else if (comp_score > user_score) {
        console.log("You lose!")
    } else {
        console.log("You tied!")
    }
    console.log("Final score: " + user_score + " - " + comp_score);
}

game();