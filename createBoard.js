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
let xRandomValue1;
let yRandomValue1;
let coordinates = [];

const generateBoard = (board) => {   
  for (var i=0; i<2;i++) { 
    const x = Math.floor(Math.random() * 8);     
    const y = Math.floor(Math.random() * 8);     
    board[y][x] = ['0']; 
    coordinates.push(x,y)
   }   
   return board; 
  }

export const newBoardWithTwoShips = generateBoard(initialBoardState)
export {coordinates}


