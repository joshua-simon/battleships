import { removeShip } from './index.js'
import { initialBoardState } from './createBoard.js'

const board = [
    [['x'],['x'],['x'],['x'],['x'],['x'],['x'],['x']],
    [['x'],['O'],['x'],['x'],['x'],['x'],['x'],['x']],
    [['x'],['x'],['x'],['x'],['x'],['x'],['x'],['x']],
    [['x'],['x'],['x'],['x'],['x'],['x'],['x'],['x']],
    [['x'],['x'],['x'],['x'],['x'],['x'],['x'],['x']],
    [['x'],['x'],['x'],['x'],['x'],['x'],['x'],['x']],
    [['x'],['x'],['x'],['x'],['x'],['x'],['x'],['x']],
    [['x'],['x'],['x'],['x'],['x'],['x'],['x'],['x']]
]

test('that ship is removed', () => {
    expect(removeShip(board,1,1)).toBe(initialBoardState)
})