let board = [];
let isCrossTurn = true;
let gameOver = false

const CELLS_HORIZONTALLY = 3;
const CELLS_VERTICALLY   = 3;
const CIRCLE_MARKER = -1
const CROSS_MARKER  =  1
const EMPTY_MARKER  =  0
const WIN_POINTS_FOR_CROSS  =  3
const WIN_POINTS_FOR_CIRCLE = -3

window.onload = function() {
    initializeBoard(CELLS_HORIZONTALLY, CELLS_VERTICALLY);
}

function initializeBoard() {
    board = []
    let boardRow;
    for (let _ = 0; _ < CELLS_VERTICALLY; _++) {
        boardRow = []
        for (let __ = 0; __ < CELLS_HORIZONTALLY; __++) {
            boardRow.push(EMPTY_MARKER)
        }
        board.push(boardRow)
    }
}

function resetBoard() {
    gameOver = false
    isCrossTurn = true
    initializeBoard()
    let button = null
    for (let r = 0; r < CELLS_VERTICALLY; r++) {
        for (let c = 0; c < CELLS_HORIZONTALLY; c++) {
            button = document.getElementById('b' + c + r)
            button.innerText = ''
        }
    }
    let title = document.getElementById('title')
    title.innerText = 'Tic-Tac-Toe'
    title.style.color = 'black'
}

function makeMove(col, row) {
    if (!gameOver) {
        if (board[row][col] === EMPTY_MARKER) {
            let button = document.getElementById('b' + col + row)
            if (isCrossTurn) { 
                board[row][col] = CROSS_MARKER
                button.innerText = 'X'
                button.style.color = 'red'
            } else { 
                board[row][col] = CIRCLE_MARKER
                button.innerText = 'O'
                button.style.color = 'blue'
            }
    
            if (isGameOver()) {
                gameOver = true
                let title = document.getElementById('title')
                if (isCrossTurn) { 
                    title.innerText = 'Cross won!'
                    title.style.color = 'red'
                }
                else {
                    title.innerText = 'Circle won!'
                    title.style.color = 'blue'
                }
    
            }
            isCrossTurn = !isCrossTurn
        }
    }

}


function isGameOver() {
    return isHorizontalWin() || isVerticalWin() || isDiagonalWin()
}

function isEnoughPointsForWin(points) {
    return points === WIN_POINTS_FOR_CIRCLE || points === WIN_POINTS_FOR_CROSS
}

function isHorizontalWin() {
    let gameOver = false;
    let rowTotalCellValue, cellValue;

    for (let rowIndex = 0; rowIndex < CELLS_VERTICALLY; rowIndex++) {
        rowTotalCellValue = 0;
        for (let colIndex = 0; colIndex < CELLS_HORIZONTALLY; colIndex++) {
            cellValue = board[rowIndex][colIndex]
            rowTotalCellValue += cellValue
        }

        if (isEnoughPointsForWin(rowTotalCellValue)) {
            gameOver = true
            break
        }
    }
    return gameOver
}

function isVerticalWin() {
    let gameOver = false;
    let colTotalCellValue, cellValue;

    for (let colIndex = 0; colIndex < CELLS_HORIZONTALLY; colIndex++) {
        colTotalCellValue = 0;
        for (let rowIndex = 0; rowIndex < CELLS_VERTICALLY; rowIndex++) {
            cellValue = board[rowIndex][colIndex]
            colTotalCellValue += cellValue
        }
        if (isEnoughPointsForWin(colTotalCellValue)) {
            gameOver = true
            break
        }
    }
    return gameOver
}

function isDiagonalWin() {
    let gameOver = false;
    let cellValFirstDiag, cellValSecondDiag;
    let firstDiagTotalCellValue  = 0;
    let secondDiagTotalCelLValue = 0;
    for (let rs = 0, cs = 0, re = CELLS_VERTICALLY - 1;
         rs < CELLS_VERTICALLY && cs < CELLS_HORIZONTALLY && re >= 0;
         rs++, cs++, re--) {

        cellValFirstDiag  = board[rs][cs]
        cellValSecondDiag = board[re][cs]

        firstDiagTotalCellValue += cellValFirstDiag
        secondDiagTotalCelLValue += cellValSecondDiag

        if (isEnoughPointsForWin(firstDiagTotalCellValue) || isEnoughPointsForWin(secondDiagTotalCelLValue)) {
            gameOver = true
            break
        }
    }
    return gameOver
}

