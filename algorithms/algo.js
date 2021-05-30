const LABYRINTH = '##########\n\
                   #E###  # #\n\
                   #  ###   #\n\
                   ##  #  ###\n\
                   # # # # ##\n\
                   #        #\n\
                   # ###  # #\n\
                   #   #  ###\n\
                   # # ##S###\n\
                   ##########'

let canvas = document.getElementById('myCanvas')
let ctx    = canvas.getContext('2d')

class Board {
    constructor() {
        this.tiles    = []
        
        this.labSplit = LABYRINTH.split('\n')
        console.log(this.labSplit)
        this.nrOfRows = this.labSplit.length
        this.nrOfCols = this.labSplit[0].trim().length
        console.log(this.nrOfRows)
        console.log(this.nrOfCols)
        this.initBoard()
    }

    initBoard() {
        const TILE_WIDTH  = canvas.width  / this.nrOfRows
        const TILE_HEIGHT = canvas.height / this.nrOfCols
    
        for (let i = 0; i < this.nrOfRows; i++) {
            const row = []
            for (let j = 0; j < this.nrOfCols; j++) {
                let labRow = this.labSplit[i].trim()
                let isWall = labRow[j] === '#'
                let color =  isWall ? 'red' : labRow[j]  === 'S' ? 'green' : 'orange'
                row.push(new Tile(j * TILE_WIDTH, i * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT, color, isWall))
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
    constructor(x, y, width, height, color, isWall) {
        this.x = x
        this.y = y
        this.width  = width
        this.height = height
        this.isWall = isWall
        this.isWall ? ctx.fillStyle = color : ctx.strokeStyle = color
    }

    draw() {
        ctx.beginPath()
        ctx.rect(this.x, this.y, this.width, this.height)
        ctx.lineWidth = 1
        this.isWall ? ctx.fill() : ctx.stroke()
        ctx.stroke()
    }
}

let board  = new Board()

window.onload = function() {
    board.draw()
}

