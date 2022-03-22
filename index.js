#!/usr/bin/env node
//tells operating system to execute code with node.js version installed on their system
import inquirer from 'inquirer'


// initialBoardState is a variable that describes the initial state of the game board,
//ie, a blank 8x8 board with no "ships"
const initialBoardState = [
    [['zero'],['x'],['x'],['x'],['x'],['x'],['x'],['x']],
    [['1'],['x'],['x'],['x'],['x'],['x'],['x'],['x']],
    [['2'],['x'],['x'],['x'],['x'],['x'],['x'],['x']],
    [['3'],['x'],['x'],['x'],['x'],['x'],['x'],['x']],
    [['4'],['x'],['x'],['x'],['x'],['x'],['x'],['x']],
    [['5'],['x'],['x'],['x'],['x'],['x'],['x'],['x']],
    [['6'],['x'],['x'],['x'],['x'],['x'],['x'],['x']],
    [['7'],['x'],['x'],['x'],['x'],['x'],['x'],['x']]
]

//generateBoard: A function that generates a game board with two single cell "ships",
//denoted by 'O'
const generateBoard = (board) => {
  const xRandomValue = Math.floor(Math.random() * 8);
  const yRandomValue = Math.floor(Math.random() * 8);

  for (let i = 0; i < board.length; i++) {
    if (i === yRandomValue) {
      for (let j = 0; j < board[yRandomValue].length; j++) {
        if (j === xRandomValue) {
          board[yRandomValue][xRandomValue] = ["O"];
        }
      }
    }
  }
  return board;
};

generateBoard(initialBoardState)