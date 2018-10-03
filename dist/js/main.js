"use strict";

let spaces = document.getElementsByClassName('space');
let message = document.getElementById('message');
let symbols = ['O', 'X'];
let turn = 0;

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    document.getElementById('restartButton').onclick = startGame;

    for (let i = 0; i < spaces.length; i++) {
      spaces[i].addEventListener('click', takeSpace);
    }
  }
};

function startGame() {// TODO: as we develop the game, we are probably going to
  // update this function to clear variables and reset state
}

function takeSpace() {
  turn++; // These console statements highlight the difference between "this" and the event that calls the function
  // console.log(this);
  // console.log(event);

  this.innerHTML = symbols[turn % 2];
  this.removeEventListener('click', takeSpace);
  message.innerHTML = 'Now it\'s turn ' + turn;
}