// Compute the computer's choice
let getComputerChoice = function() {
  let rand = Math.ceil(Math.random() * 3);
  if (rand == 1) return 'rock';
  else if (rand == 2) return 'paper';
  else return 'scissors';
}

console.log(getComputerChoice());