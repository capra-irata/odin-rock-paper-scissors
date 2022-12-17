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

function getPlayerChoice() {
  let invalidEntry = true;

  // Keep prompting until we get a valid entry of "rock", "paper",
  // or "scissors"
  while (invalidEntry) {
    const PLAYER_CHOICE = prompt(
      `Enter rock, paper, or scissors:`
    ).toLowerCase();

    switch (PLAYER_CHOICE) {
      case `rock`:
      case `paper`:
      case `scissors`:
        invalidEntry = false;
        return PLAYER_CHOICE;
      default:
        alert(
          `ERROR: You entered your choice incorrectly. Check your spelling and
            make sure you didn't add any whitespace characters.`
        );
    }
  }
}

function playRound(computerSelection, playerSelection) {
  // Return early if result is a tie
  if (computerSelection === playerSelection) {
    console.log(`You both chose ${playerSelection}! Go again!`);
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
    console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
    return 1;
  } else {
    console.log(`You lost! ${computerSelection} beats ${playerSelection}.`);
    return 0;
  }
}

function game() {
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
