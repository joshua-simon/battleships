#!/usr/bin/env node
//tells operating system to execute code with node.js version installed on their system

import inquirer from 'inquirer'
import { newBoardWithTwoShips } from './createBoard.js'
import { coordinates } from './createBoard.js';

const ship1 = [coordinates[0],coordinates[1]]
const ship2 = [coordinates[2],coordinates[3]]


// write a function that takes in user coordinates
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
     const hitOrMiss = () => {
        let message = ''

        const distToShip1 = Math.abs(xCoordinate-ship1[0]) + Math.abs(yCoordinate-ship1[1])
        const distToShip2 = Math.abs(xCoordinate-ship2[0]) + Math.abs(yCoordinate-ship2[1])
    
        if(distToShip1 >4 && distToShip2 >4 ){
            message = 'Getting cooler, try again!'
        }else if((distToShip1 == 4 || distToShip1 == 3) || (distToShip2 == 4 || distToShip2 == 3)){
           message = 'Getting warmer!'
        }else if((distToShip1 == 2 || distToShip1 == 1) || (distToShip2 == 2 || distToShip2 == 1) ){
           message = 'Getting hot!'
        } else if(distToShip1 == 0 || distToShip2 == 0 ){
            message = 'Direct hit!'
        }

        console.log(message)
    }
    hitOrMiss()
  });










