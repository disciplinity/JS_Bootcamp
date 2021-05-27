const AVAILABLE_wordToGuessS = ['qualification', 'reactor',
                         'electricity', 'concide', 'japan', 'breeze', 'sakura']


const KEYBOARD_TOP = 'QWERTYUIOP'
const KEYBOARD_MID = 'ASDFGHJKL'
const KEYBOARD_BOT = 'ZXCVBNM'

const MAX_HP = 5

let hp = MAX_HP
let wordToGuess = null

window.onload = function() {
    play()
}


function play() {
    wordToGuess = generateRandomwordToGuess().toUpperCase()

    hp = MAX_HP
    document.getElementById('healthContainer').innerHTML = ''
    document.getElementById('mid').innerHTML = ''
    document.getElementById('bot').innerHTML = ''
    document.getElementById('bot').style.pointerEvents = 'auto'
    document.body.style.backgroundColor = 'white'

    displayHealthPoints()
    displayGuesswordToGuess()
    displayVirtualKeyboard()
}

function displayHealthPoints() {
    let healthContainer = document.getElementById('healthContainer')

    for (let _ = 0; _ < MAX_HP; _++) {
        let img = document.createElement('img')
        img.className = 'healthPoint'
        img.src = 'heart.png'
        healthContainer.appendChild(img)
    }
}

function generateRandomwordToGuess() {
    let ri = Math.floor(Math.random() * AVAILABLE_wordToGuessS.length)
    return AVAILABLE_wordToGuessS[ri]
}

function displayGuesswordToGuess() {
    let mid = document.getElementById('mid')

    let middleLetters = document.createElement('div')
    middleLetters.id = 'middleLetters'
    middleLetters.className = 'guessWord'
    mid.appendChild(middleLetters)
    
    for (let i = 0; i < wordToGuess.length; i++) {
        let emptyLetter = document.createElement('div')
        emptyLetter.className = 'letterContainer'
        emptyLetter.style.color = 'transparent'
        emptyLetter.innerText = wordToGuess[i]
        middleLetters.appendChild(emptyLetter)
    }

    makeFirstAndLastVisible(middleLetters)
}

function makeFirstAndLastVisible(middleLetters) {
    let firstLetter = wordToGuess[0]
    let lastLetter  = wordToGuess[wordToGuess.length - 1]

    let letters = middleLetters.children
    for (letter of letters) {
        if (letter.innerText === firstLetter || letter.innerText === lastLetter) {
            letter.style.color = 'black'
        }
    }
}

function displayVirtualKeyboard() {
    let keyboard    = document.createElement('div')
    let bot = document.getElementById('bot')
    bot.appendChild(keyboard)
    
    displayKeyboardRow(keyboard, KEYBOARD_TOP)
    displayKeyboardRow(keyboard, KEYBOARD_MID)
    displayKeyboardRow(keyboard, KEYBOARD_BOT)


}

function displayKeyboardRow(keyboardContainer, keyboardRowLetters) {

    let keyboardRowContainer = document.createElement('div')
    keyboardRowContainer.className = 'keyboardRow'

    for (const char of keyboardRowLetters) {
        let letterContainer = document.createElement('div')
        letterContainer.className = 'letterContainer keyboardLetter'
        letterContainer.innerText = char

        let firstLetter = wordToGuess[0]
        let lastLetter  = wordToGuess[wordToGuess.length - 1]
        if (char === firstLetter || char === lastLetter) {
            letterContainer.style.pointerEvents   = 'none'
            letterContainer.style.backgroundColor = 'darkgrey'
        }

        letterContainer.onclick = () => { handleKeyboardButtonClick(letterContainer, char)  }

        keyboardRowContainer.appendChild(letterContainer)
    }

    keyboardContainer.appendChild(keyboardRowContainer)
}


function handleKeyboardButtonClick(letterContainer, char) {
    let guessWordLetterIndex = wordToGuess.indexOf(char)
    if (guessWordLetterIndex !== -1) {
        let middleLetters = document.getElementById('middleLetters').children
        letterContainer.style.backgroundColor = 'green'

        let openLetterCounter = 0
        for (ml of middleLetters) {
            if (ml.innerText === char) {
                ml.style.color = 'black'
            }

            if (ml.style.color === 'black') { openLetterCounter++ }
        }

        if (openLetterCounter === wordToGuess.length) {
            disableKeyboard()
            document.body.style.backgroundColor = '#9fc98b'
        }
    } else {
        letterContainer.style.backgroundColor = 'red'
        let healthContainer = document.getElementById('healthContainer')
        let hpToRemove = healthContainer.lastElementChild
        healthContainer.removeChild(hpToRemove)
        hp--

        if (hp === 0) {
            disableKeyboard()
            document.body.style.backgroundColor = '#dea49e'
        }
    }
    letterContainer.style.pointerEvents = 'none'
}

function disableKeyboard() {
    let bot = document.getElementById('bot')
    bot.style.pointerEvents = 'none'
    bot.style.userSelect    = 'none'
}