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
  xRandomValue = Math.floor(Math.random() * 8);
  yRandomValue = Math.floor(Math.random() * 8);
  xRandomValue1 = Math.floor(Math.random() * 8);
  yRandomValue1 = Math.floor(Math.random() * 8);

  for (let i = 0; i < board.length; i++) {
    if (i === yRandomValue) {
      for (let j = 0; j < board[yRandomValue].length; j++) {
        if (j === xRandomValue) {
          board[yRandomValue][xRandomValue] = ["O"];
        }
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    if (i === yRandomValue) {
      for (let j = 0; j < board[yRandomValue1].length; j++) {
        if (j === xRandomValue1) {
          board[yRandomValue1][xRandomValue1] = ["O"];
        }
      }
    }
  }
  coordinates.push(xRandomValue, yRandomValue, xRandomValue1, yRandomValue1);

  return board;
};

export const newBoardWithTwoShips = generateBoard(initialBoardState)
export {coordinates}
