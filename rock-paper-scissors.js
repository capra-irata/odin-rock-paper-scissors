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
    case 0: return `Rock`;
    case 1: return `Paper`;
    case 2: return `Scissors`;
    default: return `Error`;
  }
}