#!/usr/bin/env node
//tells operating system to execute code with node.js version installed on their system

import inquirer from 'inquirer'
import { newBoardWithTwoShips } from './createBoard.js'
import { coordinates } from './createBoard.js';

const ship1 = [coordinates[0],coordinates[1]]
const ship2 = [coordinates[2],coordinates[3]]
console.log(`ship 1: ${ship1} ship 2 : ${ship2}`)

// write a function that takes in user coordinates

let message = "";

const handleAnswer = () => {
  if(message === "Getting cooler, try again!" || message ==="Getting warmer!" || message === "Getting hot!"){
    askCoordinates()
  } else if(message === "Direct hit"){
    console.log('Direct hit')
  }
}

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

      if(distToShip1 == 0 || distToShip2 == 0 ){
        message = "Direct hit!"
      }else if((distToShip1 == 2 || distToShip1 == 1) || (distToShip2 == 2 || distToShip2 == 1)){
        message = "Getting hot!"
      }else if((distToShip1 == 4 || distToShip1 == 3) || (distToShip2 == 4 || distToShip2 == 3)){
        message = "Getting warmer!"
      }else if(distToShip1 > 4 || distToShip2> 4){
        message = "Getting cooler, try again!"
      }
    console.log(message);
    handleAnswer()
  });
};



console.log('Battleships!')
await askCoordinates()












