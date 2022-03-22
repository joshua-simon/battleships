// initialBoardState is a variable that describes the initial state of the game board,
//ie, a blank 8x8 board with no "ships"
const initialBoardState = [
    [['x'],['x'],['x'],['x'],['x'],['x'],['x'],['x']],
    [['x'],['x'],['x'],['x'],['x'],['x'],['x'],['x']],
    [['x'],['x'],['x'],['x'],['x'],['x'],['x'],['x']],
    [['x'],['x'],['x'],['x'],['x'],['x'],['x'],['x']],
    [['x'],['x'],['x'],['x'],['x'],['x'],['x'],['x']],
    [['x'],['x'],['x'],['x'],['x'],['x'],['x'],['x']],
    [['x'],['x'],['x'],['x'],['x'],['x'],['x'],['x']],
    [['x'],['x'],['x'],['x'],['x'],['x'],['x'],['x']]
]

//generateBoard: A function that generates a game board with 1 single cell "ship",
//denoted by 'O'
let xRandomValue;
let yRandomValue;
let coordinates = [];

const generateBoard = (board) => {
   xRandomValue = Math.floor(Math.random() * 8);
   yRandomValue = Math.floor(Math.random() * 8);

  for (let i = 0; i < board.length; i++) {
    if (i === yRandomValue) {
      for (let j = 0; j < board[yRandomValue].length; j++) {
        if (j === xRandomValue) {
          board[yRandomValue][xRandomValue] = ["O"];
        }
      }
    }
  }
  coordinates.push(xRandomValue)
  coordinates.push(yRandomValue)
  return board;
};

//Running the 'generateBoard' once on a blank board generates
//outputs a board with a single ship. If you pass that output
//through the 'generateBoard' function again, it will output
//a board with the required two ships. 
const newBoardWithOneShip = generateBoard(initialBoardState)
export const newBoardWithTwoShips = generateBoard(newBoardWithOneShip)
export {coordinates}
