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

function playRound(e) {
  const computerSelection = getComputerChoice();
  const playerSelection = e.target.textContent.toLowerCase();
  const results = document.querySelector(`#results`);

  // Return early if result is a tie
  if (computerSelection === playerSelection) {
    results.textContent = `You both chose ${playerSelection}! Go again!`;
    return -1;
  }

  // Winner set to player by default for more concise conditionals below
  let winner = `player`;

  switch (playerSelection) {
    case `rock`:
      if (computerSelection === `paper`) {
        winner = `computer`;
      }
      break;
    case `paper`:
      if (computerSelection === `scissors`) {
        winner = `computer`;
      }
      break;
    case `scissors`:
      if (computerSelection === `rock`) {
        winner = `computer`;
      }
      break;
    default:
      console.error(
        `Something went wrong with processing the player's choice.`
      );
  }

  if (winner === `player`) {
    results.textContent = `You won! ${playerSelection} beats ${computerSelection}.`;
    return 1;
  } else {
    results.textContent = `You lost! ${computerSelection} beats ${playerSelection}.`;
    return 0;
  }
}

const options = document.querySelectorAll(`.options`);
options.forEach((option) => {
  option.addEventListener(
    `click`,
    playRound
  );
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
