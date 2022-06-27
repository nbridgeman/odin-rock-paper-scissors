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
            return "You lose! Paper beats rock."
        } else { // scissors
            return "You win! Rock beats scissors."
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats rock."
        } else { //scissors
            return "You lose! Scissors beats paper."
        }
    } else if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection == "rock") {
            return "You lose! Rock beats scissors."
        } else { // paper
            return "You win! Scissors beats paper."
        }
    }
}

function game() {
  const buttons = document.querySelectorAll('button')
  var user_score = 0;
  var comp_score = 0;
  buttons.forEach(button => button.addEventListener('click', () => {
    winner = playRound(button.getAttribute('data-move'), computerPlay());
    document.getElementById('results').textContent = winner;
    if (winner.includes("win")) {
        user_score += 1;
    } else if (winner.includes("lose")) {
        comp_score += 1;
    }
    document.getElementById('score').textContent = user_score + ' - ' + comp_score;
    if (user_score == 5 || comp_score == 5) {
      if (user_score == 5) {alert("You win!")}
      if (comp_score == 5) {alert("You lose!")}
      user_score = 0;
      comp_score = 0;
      document.getElementById('results').textContent = "Let's play rock, paper, scissors!";
      document.getElementById('score').textContent = user_score + ' - ' + comp_score;
    }
    }));
}

game();
