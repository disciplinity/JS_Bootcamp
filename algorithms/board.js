class Board {
    constructor(rows, cols) {
        this.tiles    = []
        this.nrOfRows = rows
        this.nrOfCols = cols
        this.initBoard()
    }

    initBoard() {
        const TILE_WIDTH  = canvas.width  / this.nrOfRows
        const TILE_HEIGHT = canvas.height / this.nrOfCols
    
        for (let i = 0; i < this.nrOfRows; i++) {
            const row = []
            for (let j = 0; j < this.nrOfCols; j++) {
                row.push(new Tile(j * TILE_WIDTH, i * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT))
            }
            this.tiles.push(row)
        }
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
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width  = width
        this.height = height
    }

    draw() {
        ctx.beginPath()
        ctx.rect(this.x, this.y, this.width, this.height)
        ctx.lineWidth = 1
        ctx.stroke()
    }
}

module.exports = Board