"use strict";

let spaces = document.getElementsByClassName('space');
let message = document.getElementById('message');
let symbols = ['O', 'X'];
let turn = 0;

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    document.getElementById('restartButton').onclick = startGame;
    startGame();
  }
};

function gameOver() {
  // Spaces:
  //  0  1  2
  //  3  4  5
  //  6  7  8
  // Is this the last turn? If so, and no win, then game is over and its a draw
  return checkLineForWin([0, 1, 2]) || checkLineForWin([3, 4, 5]) || checkLineForWin([6, 7, 8]) || checkLineForWin([0, 3, 6]) || checkLineForWin([1, 4, 7]) || checkLineForWin([2, 5, 8]) || checkLineForWin([0, 4, 8]) || checkLineForWin([2, 4, 6]);
}

function checkLineForWin(line) {
  let first = spaces[line[0]].innerHTML;

  if (first != '' && first == spaces[line[1]].innerHTML && first == spaces[line[2]].innerHTML) {
    return true;
  }

  return false;
}

function startGame() {
  // TODO: as we develop the game, we are probably going to
  // update this function to clear variables and reset state
  turn = 0;
  message.innerHTML = "It is X's turn!";

  for (let i = 0; i < spaces.length; i++) {
    spaces[i].addEventListener('click', takeSpace);
    spaces[i].innerHTML = '';
  }
}

function takeSpace() {
  turn++; // These console statements highlight the difference between "this" and the event that calls the function
  // console.log(this);
  // console.log(event);

  this.innerHTML = symbols[turn % 2];
  this.removeEventListener('click', takeSpace);

  if (gameOver()) {
    console.log("GAME IS OVER!");
  } else {}

  message.innerHTML = "It is " + symbols[(turn + 1) % 2] + "'s turn!";
}