let humanScore = 0;
let computerScore = 0;
let roundPlayed = 0;
const maxRounds = 5;
choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice [rock, paper, scissors]");
  if (!choices.includes(humanChoice.toLowerCase())) {
    console.log("Invalid choice. Please enter rock, paper or scissors");
    return getHumanChoice();
  }
  return humanChoice.toLowerCase();
}

function playRound(ComputerChoice, humanChoice) {
  if (ComputerChoice == "paper" && humanChoice == "rock") {
    console.log(`You lose! ${ComputerChoice} beats ${humanChoice}`);
    computerScore += 1;
  } else if (ComputerChoice == "rock" && humanChoice == "scissors") {
    console.log(`You lose! ${ComputerChoice} beats ${humanChoice}`);
    computerScore += 1;
  } else if (ComputerChoice == "scissors" && humanChoice == "paper") {
    console.log(`You lose! ${ComputerChoice} beats ${humanChoice}`);
    computerScore += 1;
  } else if (humanChoice == "scissors" && ComputerChoice == "paper") {
    console.log(`You win! ${humanChoice} beats ${ComputerChoice}`);
    humanScore += 1;
  } else if (humanChoice == "rock" && ComputerChoice == "scissors") {
    console.log(`You win! ${humanChoice} beats ${ComputerChoice}`);
    humanScore += 1;
  } else if (humanChoice == "paper" && ComputerChoice == "rock") {
    console.log(`You win! ${humanChoice} beats ${ComputerChoice}`);
    humanScore += 1;
  } else {
    console.log(`It's a tie! Both chose ${humanChoice}`);
  }

  roundPlayed += 1;
  updateScore();
}

function updateScore() {
  let result = document.querySelector(".result");
  let score = document.querySelector(".human");
  let tie = document.querySelector(".tie");
  let computer = document.querySelector(".computer");

  score.innerText = `Human: ${humanScore}`;
  computer.innerText = `Computer: ${computerScore}`;
  tie.innerText = `Ties: ${roundPlayed - humanScore - computerScore}`;

  if (roundPlayed >= maxRounds) {
    if (humanScore > computerScore) {
      result.innerText = `You win! ${humanScore} - ${computerScore}`;
    } else if (humanScore < computerScore) {
      result.innerText = `You lose! ${humanScore} - ${computerScore}`;
    } else {
      result.innerText = `It's a tie! ${humanScore} - ${computerScore}`;
    }
  }
}
function game() {
  let btn_rock = document.getElementById("rock");
  let btn_paper = document.getElementById("paper");
  let btn_scissors = document.getElementById("scissors");

  btn_rock.addEventListener("click", () => {
    if (roundPlayed < maxRounds) {
      let computerSelection = getComputerChoice();
      playRound(computerSelection, "rock");
    }
  });
  btn_paper.addEventListener("click", () => {
    if (roundPlayed < maxRounds) {
      let computerSelection = getComputerChoice();
      playRound(computerSelection, "paper");
    }
  });
  btn_scissors.addEventListener("click", () => {
    if (roundPlayed < maxRounds) {
      let computerSelection = getComputerChoice();
      playRound(computerSelection, "scissors");
    }
  });
}

game();
