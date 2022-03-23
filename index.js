#!/usr/bin/env node
//tells operating system to execute code with node.js version installed on their system

import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer'
import { newBoardWithTwoShips } from './createBoard.js'
import { coordinates } from './createBoard.js';


//variables
let 
board = newBoardWithTwoShips,
message = "",
guesses = 20,
hits = 0
const
ship1 = [coordinates[0], coordinates[1]],
ship2 = [coordinates[2], coordinates[3]]

console.log(`ship 1: ${ship1} ship 2 : ${ship2}`)

//Exits player from game once all 20 guesses are used up
const handleGuesses = () => {
  if (guesses === 0) {
    console.log(`Sorry, you've run out of guesses!`);
    process.exit(1);
  }
};

//Winning condition: executed when both ships are hit
const handleWin = () => {
  console.log("Congratulations, you've won!");
};

//Removes ship from board after a hit
export const removeShip = (gameBoard, x, y) => {
  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[y].length; j++) {
      gameBoard[y][x] = ["x"];
    }
  }
};

//Tracks the number of hits, triggers handleWin when 2 hits are reached
const handleHits = (x, y) => {
  if (hits === 1) {
    askCoordinates();
    removeShip(board, x, y);
  } else if (hits === 2) {
    removeShip(board, x, y);
    handleWin();
  }
};

//Takes in input from user, executes functions that track guesses, hits, and winning/losing.
const handleAnswer = () => {
  if (
    message === "Getting cooler, try again!" ||
    message === "Getting warmer!" ||
    message === "Getting hot!"
  ) {
    askCoordinates();
  } else if (message === "Direct hit") {
    handleHits();
  }
};

const askCoordinates = async () => {
  const question = [
    {
      type: "input",
      name: "x-coordinate",
      message: "Please enter the first of two coordinates (any number from 0 up to 7)",
    },
    {
      type: "input",
      name: "y-coordinate",
      message: "Please enter the last coordinate (any number from 0 up to 7)",
    },
  ];

  let xCoordinate;
  let yCoordinate;

  inquirer.prompt(question).then((answers) => {
    xCoordinate = answers["x-coordinate"];
    yCoordinate = answers["y-coordinate"];

    const distToShip1 =
      Math.abs(xCoordinate - ship1[0]) + Math.abs(yCoordinate - ship1[1]);
    const distToShip2 =
      Math.abs(xCoordinate - ship2[0]) + Math.abs(yCoordinate - ship2[1]);

    if (distToShip1 == 0 || distToShip2 == 0) {
      message = "Direct hit!";
      hits += 1;
      handleHits(xCoordinate, yCoordinate);
    } else if (
      distToShip1 == 2 ||
      distToShip1 == 1 ||
      distToShip2 == 2 ||
      distToShip2 == 1
    ) {
      message = "Getting hot!";
    } else if (
      distToShip1 == 4 ||
      distToShip1 == 3 ||
      distToShip2 == 4 ||
      distToShip2 == 3
    ) {
      message = "Getting warmer!";
    } else if (distToShip1 > 4 || distToShip2 > 4) {
      message = "Getting cooler, try again!";
    }
    console.log(message);
    guesses -= 1;
    handleGuesses();
    handleAnswer();
  });
};

//welcome function. renders rainbow text.
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r,ms));

const welcome = async () => {
  const title = chalkAnimation.rainbow(
    ' 🚢 Welcome to Battleships! 🚢 \n' 
  )
  await sleep()
  title.stop()
}

//executes game
await welcome()
await askCoordinates()












