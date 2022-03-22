#!/usr/bin/env node
//tells operating system to execute code with node.js version installed on their system

import inquirer from 'inquirer'
import { newBoardWithTwoShips } from './createBoard.js'


//write a function that takes in user coordinates
const question1 = [
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

  inquirer.prompt(question1).then((answers) => {
    let xCoordinate = answers["x-coordinate"];
    let yCoordinate = answers["y-coordinate"];
    console.log(
      `You have entered [${xCoordinate}, ${yCoordinate}] as your coordinates`
    );
  });








