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
}

function game() {
  humanScore = 0;
  computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(computerSelection, humanSelection);
  }
  if (humanScore > computerScore) {
    console.log(`You win! ${humanScore} - ${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`You lose! ${humanScore} - ${computerScore}`);
  } else {
    console.log(`It's a tie! ${humanScore} - ${computerScore}`);
  }
}

game();
