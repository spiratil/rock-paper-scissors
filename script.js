let humanScore = 0;
let computerScore = 0;

let getComputerChoice = function() {
  // Generate a random number between 1 and 3
  let rand = Math.ceil(Math.random() * 3);
  // Return the appropriate choice
  if (rand == 1) return 'rock';
  else if (rand == 2) return 'paper';
  else return 'scissors';
}

let getHumanChoice = function(again = false) {
  // Check that the user is not being prompted a second 
  // time and prompt the user with an appropriate message
  let choice;
  if (again) {
    choice = prompt('The previous choice was invalid!\n\nPlease enter Rock, Paper or Scissors');
  }
  else {
    choice = prompt('Please enter Rock, Paper or Scissors');
  }

  // Check that a choice was provided
  if (!choice) getHumanChoice(true);
  
  // Convert the choice to lowercase
  choice = choice.toLowerCase();

  // Check that the choice is valid
  if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
    return choice;
  }
  // Prompt the user again if the choice is not valid
  else return getHumanChoice(true);
}

// Convert the first character of a string to a capital
let firstCharToCap = function(string) {
  let first = string.charAt(0).toUpperCase();
  let remainder = string.slice(1);
  return first + remainder;
}

function playRound(humanChoice, computerChoice) {
  // Check if both choices are the same
  if (humanChoice === computerChoice) {
    humanChoice = firstCharToCap(humanChoice);
    console.log(`DRAW - Both players chose ${humanChoice}!`);
  }
  // If the player wins
  else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'scissors' && computerChoice === 'paper' || humanChoice === 'paper' && computerChoice === 'rock') {
    humanScore++;
    humanChoice = firstCharToCap(humanChoice);
    computerChoice = firstCharToCap(computerChoice);
    console.log(`YOU WON - The Computer chose ${computerChoice} but you played ${humanChoice}!`);
  }
  // If the computer wins
  else {
    computerScore++;
    humanChoice = firstCharToCap(humanChoice);
    computerChoice = firstCharToCap(computerChoice);
    console.log(`YOU LOST - You chose ${humanChoice} but the Computer played ${computerChoice}!`);
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(),getComputerChoice());
    console.log(`SCORE - Computer ${computerScore} : Player ${humanScore}`);
  }
  console.log(`FINAL SCORE - Computer ${computerScore} : Player ${humanScore}`);
  if (humanScore === computerScore) console.log('Both players are tied!')
  else if (humanScore > computerScore) console.log('The Player wins this time!');
  else console.log('The Computer wins this time!');
}

playGame();