const TILE_WIDTH  = 75
const TILE_HEIGHT = 75

const DARK_TILE_COLOR  = 'black'
const LIGHT_TILE_COLOR = 'white'

const canvas = document.getElementById('myCanvas')
const ctx    = canvas.getContext('2d')

canvas.width  = TILE_WIDTH * 8
canvas.height = TILE_HEIGHT * 8
canvas.style.border = '1px solid black'


function createImage(x, y) {
    let img = new Image()
    img.width  = TILE_WIDTH  * 0.8
    img.height = TILE_HEIGHT * 0.8
    img.src    = 'heart.png'
    img.onload = function() {
        ctx.drawImage(img, x, y)
    }
    return img
}

class Board {
    constructor() {
        this.init()
        this.placeFigures()
    }

    placeFigures() {
        for (const [i, tileRow] of this.tiles.entries()) {
            if (i !== 0 && i !== 1 && i !== 6 && i !== 7) { continue }

            for (const tile of tileRow) {
                tile.setFigure(new Rook(this))
            }
        }
    }

    init() {
        this.tiles = []
        for (let row = 0; row < 8; row++) {
            let tileRow = []
            for (let col = 0; col < 8; col++) {
                let color = (row + col) % 2 === 0 ? LIGHT_TILE_COLOR : DARK_TILE_COLOR
                tileRow.push(new Tile(col * TILE_WIDTH, row * TILE_HEIGHT, color))
            }
            this.tiles.push(tileRow)
        }
        console.log(this.tiles)
    }

    draw() {
        for (const tileRow of this.tiles) {
            for (const tile of tileRow) {
                tile.draw()
            }
        }
    }
}

class Tile {
    constructor(x, y, color) {
        this.x = x
        this.y = y
        this.color = color
    }

    draw() {
        ctx.beginPath()
        ctx.fillStyle = this.color
        ctx.rect(this.x, this.y, TILE_WIDTH, TILE_HEIGHT)
        if (this.figure) {
            ctx.drawImage(this.figure.img, this.x, this.y)
        }
        ctx.fill()

    }

    setFigure(figure) {
        this.figure = figure
    }
}

class Figure {

    constructor(board) {
        this.board = board
        this.img = null
    }

    moveTo(row, col) {
        let tile = this.board.tiles[row][col]
        if (!tile.figure) {
            tile.setFigure(this)
        }
    }
}

class Rook extends Figure {
    constructor(board) {
        super(board)
        this.img = createImage()
    }
}

let board = new Board()
board.draw()