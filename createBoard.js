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

//generateBoard: A function that generates a game board with 1 single cell "ship",
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

//Running the 'generateBoard' once on a blank board generates
//outputs a board with a single ship. If you pass that output
//through the 'generateBoard' function again, it will output
//a board with the requried two ships. 
const newBoardWithOneShip = generateBoard(initialBoardState)
export const newBoardWithTwoShips = generateBoard(newBoardWithOneShip)
