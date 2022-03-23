#!/usr/bin/env node
//tells operating system to execute code with node.js version installed on their system

import inquirer from 'inquirer'
import { newBoardWithTwoShips } from './createBoard.js'
import { coordinates } from './createBoard.js';

//variables
let board = newBoardWithTwoShips;
const ship1 = [coordinates[0], coordinates[1]];
const ship2 = [coordinates[2], coordinates[3]];
let message = "";
let guesses = 20;
let hits = 0;

console.log(`ship 1: ${ship1} ship 2 : ${ship2}`)

const handleGuesses = () => {
  if (guesses === 0) {
    console.log(`Sorry, you've run out of guesses!`);
    process.exit(1);
  }
};

const handleWin = () => {
  console.log("Congratulations, you've won!");
  console.log(board);
};

const removeShip = (gameBoard, x, y) => {
  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[y].length; j++) {
      gameBoard[y][x] = ["x"];
    }
  }
};

const handleHits = (x, y) => {
  if (hits === 1) {
    askCoordinates();
    removeShip(board, x, y);
  } else if (hits === 2) {
    removeShip(board, x, y);
    handleWin();
  }
};

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
      message: "Please enter the first of two coordinates",
    },
    {
      type: "input",
      name: "y-coordinate",
      message: "Please enter the last coordinate",
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

console.log('Welcome to Battleships!')
await askCoordinates()












