let humanScore = 0;
let computerScore = 0;

// Generate a random number between 1 and 3
let getComputerChoice = () => Math.ceil(Math.random() * 3);

let getHumanChoice = function(again = false) {
  // Check that the user is not being prompted a second 
  // time and prompt the user with an appropriate message
  if (again) alert('The previous choice was invalid!');
  let choice = prompt('Please enter Rock, Paper or Scissors');

  // Check that a choice was provided
  if (!choice) getHumanChoice(true);
  
  // Convert the choice to lowercase
  choice = choice.toLowerCase();

  // Check that the choice is valid and return
  if (choice === 'rock') return 1;
  else if (choice === 'paper') return 2;
  else if (choice === 'scissors') return 3;
  // Prompt the user again if the choice is not valid
  else return getHumanChoice(true);
}

// Convert the numbers back into words
let numberToWord = function(num) {
  if (num === 1) return 'Rock';
  else if (num === 2) return 'Paper';
  else return 'Scissors';
}

function playRound(humanChoice, computerChoice) {
  // Convert the choices back into words
  let humanWord = numberToWord(humanChoice);
  let computerWord = numberToWord(computerChoice);

  // Check if both choices are the same
  if (humanChoice === computerChoice) {
    console.log(`DRAW - Both players chose ${humanWord}!`);
  }
  // If the player wins
  else if (computerChoice === 1 && humanChoice === 2 || computerChoice === 2 && humanChoice === 3 || computerChoice === 3 && humanChoice === 1) {
    humanScore++;
    console.log(`YOU WON - The Computer chose ${computerWord} but you played ${humanWord}!`);
  }
  // If the computer wins
  else {
    computerScore++;
    console.log(`YOU LOST - You chose ${humanWord} but the Computer played ${computerWord}!`);
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