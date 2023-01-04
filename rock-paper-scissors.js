function getComputerChoice() {
  // Generate a random integer inclusively between 0 and 2
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return `rock`;
    case 1:
      return `paper`;
    case 2:
      return `scissors`;
    default:
      console.error(
        `Something went wrong when randomly generating the computer's choice.`
      );
  }
}

function displayWinner(computerSelection, playerSelection, winner) {
  switch (winner) {
    case `player`:
      results.textContent = `You won! ${playerSelection} beats ${computerSelection}.`;
      break;
    case `computer`:
      results.textContent = `You lost! ${playerSelection} loses to ${computerSelection}.`;
      break;
    default:
      results.textContent = `You both chose ${playerSelection}! Go again!`;
      break;
  }
}

function playRound(e) {
  const computerSelection = getComputerChoice();
  const playerSelection = e.target.textContent.toLowerCase();
  let winner = ``;

  switch (playerSelection) {
    case `rock`:
      if (computerSelection === `scissors`) winner = `player`;
      else if (computerSelection === `paper`) winner = `computer`;
      break;
    case `paper`:
      if (computerSelection === `rock`) winner = `player`;
      else if (computerSelection === `scissors`) winner = `computer`;
      break;
    case `scissors`:
      if (computerSelection === `paper`) winner = `player`;
      else if (computerSelection === `rock`) winner = `computer`;
      break;
  }

  displayWinner(computerSelection, playerSelection, winner);
}

const options = document.querySelectorAll(`.options`);
options.forEach((option) => {
  option.addEventListener(`click`, playRound);
});

/*
function startGame() {
  let roundsPlayed = 0;
  let playerWins = 0;

  while (roundsPlayed < 5) {
    // playRound() returns -1 in event of a tie. Otherwise,
    // returns 1 if the player wins and 0 if the player loses
    const RESULT = playRound(getComputerChoice(), getPlayerChoice());

    if (RESULT === -1) {
      continue;
    } else {
      playerWins += RESULT;
      roundsPlayed++;
    }
  }

  if (playerWins >= 3) {
    console.log(
      `Congratulations! You won the match! The final score was
      ${playerWins}-${Math.abs(playerWins - 5)}.`
    );
  } else {
    console.log(
      `You lost the match, better luck next time! The final score was
      ${playerWins}-${Math.abs(playerWins - 5)}.`
    );
  }
}
*/
