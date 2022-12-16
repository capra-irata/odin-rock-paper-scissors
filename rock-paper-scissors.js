/*
PSEUDOCODE

Get choice input from player (rock, paper, or scissors).
  Make input case insensitive.
Randomly get choice from computer.
Determine whether player wins or loses.
Print win or loss declaration on screen with results of choices.
Repeat game for 5 rounds.
  Keep score of total rounds won and lost by player.
  Report whether the player wins or loses the overall game.

OUTLINE

function getPlayerChoice()
function getComputerChoice()
function printResults()
function playRound()
function game()
*/

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
      return `error`;
  }
}

function getPlayerChoice() {
  let invalidEntry = true;

  // Keep prompting until we get a valid entry of "rock", "paper", or
  // "scissors"
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
  // Return if result is a tie
  if (computerSelection === playerSelection) {
    return `You both chose ${playerSelection}! Go again!`;
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
        `Something went wrong with processing the player's selection.`
      );
  }

  if (winner === `player`) {
    return `You won! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lost! ${computerSelection} beats ${playerSelection}.`;
  }
}