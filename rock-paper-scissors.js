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

function displayMatchWinner(winner) {
  const matchResults = document.querySelector(`#matchResults`);

  if (winner === `player`) {
    matchResults.textContent = `You won the match! Congratulations!`;
  } else {
    matchResults.textContent = `Your opponent won the match. Better luck next time!`;
  }

  // Remove the buttons so the game can no longer be played
  options.forEach((option) => option.remove());
}

function displayRoundWinner(computerSelection, playerSelection, winner) {
  const round = document.querySelector(`#round`);
  const playerScore = document.querySelector(`#playerScore`);
  const computerScore = document.querySelector(`#computerScore`);
  const roundResults = document.querySelector(`#roundResults`);

  switch (winner) {
    case `player`:
      playerScore.textContent = +playerScore.textContent + 1;
      roundResults.textContent = `You won! ${playerSelection} beats ${computerSelection}.`;
      break;
    case `computer`:
      computerScore.textContent = +computerScore.textContent + 1;
      roundResults.textContent = `You lost! ${playerSelection} loses to ${computerSelection}.`;
      break;
    default:
      roundResults.textContent = `You both chose ${playerSelection}! Go again!`;
  }

  if (+playerScore.textContent === 5 || +computerScore.textContent === 5) {
    displayMatchWinner(winner);
    return;
  }

  round.textContent = +round.textContent + 1;
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

  displayRoundWinner(computerSelection, playerSelection, winner);
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
