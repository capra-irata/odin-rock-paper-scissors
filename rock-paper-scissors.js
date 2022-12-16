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
    const playerChoice = prompt(
      `Enter rock, paper, or scissors:`
    ).toLowerCase();

    switch (playerChoice) {
      case `rock`:
      case `paper`:
      case `scissors`:
        invalidEntry = false;
        return playerChoice;
      default:
        alert(
          `ERROR: You entered your choice incorrectly. Check your spelling and
          make sure you didn't add any whitespace characters.`
        );
    }
  }
}