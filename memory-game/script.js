let rows = 3;
let cols = 6;
let colors = []

let mainContainer = document.getElementById('main-container')

let gameStarted = false
let chosenCard = null

let gameCards = []

function init() {

    for (let i = 0; i < rows; i++) {
        let rowDiv = document.createElement('div')
        rowDiv.classList.toggle('gameRow')

        // Creating cards
        for (let j = 0; j < cols; j++) {
            let cardDiv = document.createElement('div')
            cardDiv.classList.toggle('card')
            cardDiv.classList.toggle('not-chosen')
            rowDiv.appendChild(cardDiv)
        }

        mainContainer.appendChild(rowDiv)
    }
}

init()

function generateColors() {
    colors = []
    let colorCount = Math.floor(rows * cols / 2)
    let hex = '0123456789ABCDEF'

    for (let i = 0; i < colorCount; i++) {
        let color = '#'
        for (let j = 0; j < 6; j++) {
            let ri = Math.floor(Math.random() * hex.length);
            color += hex[ri]
        }
        colors.push(color)
    }
}

function assignColorsToCards() {

    let cards = document.querySelectorAll('.card.not-chosen')
    while (cards.length > 0) {
        
        let rc1 = null
        let rc2 = null
        let ri1 = null
        let ri2 = null
        do {
            ri1 = Math.floor(Math.random() * cards.length)
            rc1 = cards[ri1]
            ri2 = Math.floor(Math.random() * cards.length)
            rc2 = cards[ri2]
        } while (rc1 == rc2)

        let rci = Math.floor(Math.random() * colors.length)
        let rc = colors[rci]
        colors = colors.filter((el) => { return el !== rc})
        rc1.style.backgroundColor = rc
        rc2.style.backgroundColor = rc
        rc1.classList.toggle('not-chosen')
        rc2.classList.toggle('not-chosen')

        cards = document.querySelectorAll('.card.not-chosen')
    }
}

function resetCards() {
    let cards = document.querySelectorAll('.card')
    for (const card of cards) {
        if (!card.classList.contains('not-chosen')) {
            card.style.backgroundColor = 'transparent'
            card.classList.toggle('not-chosen')
        }
    }
}

function createGameCards() {
    const cards = document.querySelectorAll('.card')
    for (const card of cards) {
        gameCards.push({ card: card, color: card.style.backgroundColor })
    }
}

function makeCardsClickable() {
    const cards = document.querySelectorAll('.card')
    for (const [i, card] of cards.entries()) {
        card.addEventListener('click', () => {
            if (gameStarted) {
                if (!chosenCard) {
                    card.style.backgroundColor = gameCards[i].color
                    chosenCard = {card: card, color: gameCards[i].color}
                } else {
                    let currCard = gameCards[i]
                    console.log(`FIRST CARD COLOR: ${chosenCard.color}; SECOND CARD COLOR: ${currCard.color}`)
                    if (chosenCard.color == currCard.color) {
                        chosenCard.card.style.backgroundColor = 'black'
                        currCard.card.style.backgroundColor = 'black'
                    } else {
                        chosenCard.card.classList.toggle('not-chosen')
                    }
                    chosenCard.card.style.backgroundColor = ''
                    currCard.card.style.backgroundColor = ''
                    chosenCard = null

                }
            }
        })
    }

}


function play() {
    gameStarted = true
    generateColors()
    resetCards()
    assignColorsToCards()
    createGameCards()
    makeCardsClickable()
    setTimeout(() => { 
        resetCards(); 
        const cards = document.querySelectorAll('.card')
        for (const card of cards) {
            card.style.backgroundColor = ''
        }
    } , 1000)
}

let a = document.createElement('div')
a.style.backgroundColor = 'red'

let b = document.createElement('div')
b.style.backgroundColor = 'red'

console.log("HERE")
console.log(a.isEqualNode(b))
