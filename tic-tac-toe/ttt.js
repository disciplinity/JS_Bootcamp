const CELLS_VERTICALLY     = 3
const CELLS_HORIZONTALLY   = 3
const EMPTY_TILE_SYMBOL    = ' ' 
const FIRST_PLAYER_SYMBOL  = 'X'
const FIRST_PLAYER_COLOR   = 'red'
const SECOND_PLAYER_SYMBOL = 'O'
const SECOND_PLAYER_COLOR  = 'blue'
 
let gameBoard = []

let isPlayerTurn = true

window.onload = function() {
    initializeBoard()
}

function initializeBoard() {
    gameBoard = []
    for (let row = 0; row < CELLS_VERTICALLY; row++) {
        let gameBoardRow = []
        for (let col = 0; col < CELLS_HORIZONTALLY; col++) {
            gameBoardRow.push(EMPTY_TILE_SYMBOL)
        }
        gameBoard[row] = gameBoardRow
    }
}

function makeMove(col, row) {
    let tile = gameBoard[row][col]

    if (tile === EMPTY_TILE_SYMBOL) {
        let button = document.getElementById('b' + col + row)
        if (isPlayerTurn) {
            button.innerText    = FIRST_PLAYER_SYMBOL
            button.style.color  = FIRST_PLAYER_COLOR
            gameBoard[row][col] = FIRST_PLAYER_SYMBOL
        } else {
            button.innerText    = SECOND_PLAYER_SYMBOL
            button.style.color  = SECOND_PLAYER_COLOR
            gameBoard[row][col] = SECOND_PLAYER_SYMBOL
        }

        if (gameOver()) {
            let gameResult = document.getElementById('gameResult')
            if (isPlayerTurn) {
                gameResult.innerHTML = `<span style='color: ${FIRST_PLAYER_COLOR}'>Player</span> has won!`
            } else {
                gameResult.innerHTML = `<span style='color: ${SECOND_PLAYER_COLOR}'>Enemy</span> has won!`
            }
            let gameBoard = document.getElementById('gameBoard')
            gameBoard.style.pointerEvents = 'none'
            return
        }
        isPlayerTurn = !isPlayerTurn

        if (!isPlayerTurn && isThereAnEmptyCell()) {
            randomComputerMove()
        }
    }
}

function randomComputerMove() {
    let randomRow  = Math.floor(Math.random() * CELLS_VERTICALLY)
    let randomCol  = Math.floor(Math.random() * CELLS_HORIZONTALLY)
    let randomTile = gameBoard[randomRow][randomCol]

    while (randomTile !== EMPTY_TILE_SYMBOL) {
        randomRow  = Math.floor(Math.random() * CELLS_VERTICALLY)
        randomCol  = Math.floor(Math.random() * CELLS_HORIZONTALLY)
        randomTile = gameBoard[randomRow][randomCol] 
    }
    makeMove(randomCol, randomRow)
}
 
function isThereAnEmptyCell() {
    for (let row = 0; row < gameBoard.length; row++) {
        let currentRow = gameBoard[row]
        for (let col = 0; col < currentRow.length; col++) {
            let tile = gameBoard[row][col]
            if (tile === EMPTY_TILE_SYMBOL) {
                return true
            }
        }
    }
    return false
}

function gameOver() {
    return isHorizontalWin() || isVerticalWin() || isDiagonalWin()
}

function isHorizontalWin() {

    let playerValue =  1
    let enemyValue  = -1

    for (let row = 0; row < gameBoard.length; row++) {
        let currentRow = gameBoard[row]
        let rowSum = 0
        for (let col = 0; col < currentRow.length; col++) {
            let tile = currentRow[col]
            if (tile === FIRST_PLAYER_SYMBOL) { rowSum += playerValue }
            else if (tile === SECOND_PLAYER_SYMBOL) { rowSum += enemyValue  }
        }

        if (rowSum === playerValue * CELLS_HORIZONTALLY || rowSum === enemyValue * CELLS_HORIZONTALLY) {
            return true
        }
    }
    return false
}


function isVerticalWin() {

    let playerValue =  1
    let enemyValue  = -1

    for (let col = 0; col < CELLS_VERTICALLY; col++) {
        let colSum = 0
        for (let row = 0; row < gameBoard.length; row++) {
            let tile = gameBoard[row][col]
            if (tile === FIRST_PLAYER_SYMBOL) { colSum += playerValue }
            else if (tile === SECOND_PLAYER_SYMBOL) { colSum += enemyValue }
        }

        if (colSum === playerValue * CELLS_VERTICALLY || colSum === enemyValue * CELLS_VERTICALLY) {
            return true
        }
    }
    return false
}

function isDiagonalWin() {

    let playerValue =  1
    let enemyValue  = -1

    let firstDiagSum  = 0
    let secondDiagSum = 0
    for (let row = 0, col = 0, rowEnd = CELLS_VERTICALLY - 1;
        row < CELLS_VERTICALLY && col < CELLS_HORIZONTALLY;
        row++, col++, rowEnd--) {

        let tile = gameBoard[row][col]
        if (tile === FIRST_PLAYER_SYMBOL) { firstDiagSum += playerValue }
        else if (tile === SECOND_PLAYER_SYMBOL) { firstDiagSum += enemyValue }

        tile = gameBoard[rowEnd][col]
        if (tile === FIRST_PLAYER_SYMBOL) { secondDiagSum += playerValue }
        else if (tile === SECOND_PLAYER_SYMBOL) { secondDiagSum += enemyValue }

    }
    return firstDiagSum === 3 || firstDiagSum === -3 || secondDiagSum === 3 || secondDiagSum === -3
}

function resetBoard() {
    initializeBoard()
    
    for (let row = 0; row < CELLS_VERTICALLY; row++) {
        for (let col = 0; col < CELLS_HORIZONTALLY; col++) {
            let button = document.getElementById('b' + col + row)
            button.innerText = ''
        }
    }

    let gameResult = document.getElementById('gameResult')
    gameResult.innerText = 'Tic Tac Toe'

    let gameBoard = document.getElementById('gameBoard')
    gameBoard.style.pointerEvents = 'auto'
    isPlayerTurn = true
}
