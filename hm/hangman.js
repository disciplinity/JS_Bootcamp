const HEART_IMG_FILE = 'heart.png'

const words = ['qualification', 'back', 'killer','reactor','guarantee','conscience',
             'memory','promise','body','beach','important','employee','silver','episode',
             'disorder','abbey','nail','coincide','admission','key','strip','knock',
             'exploration','fog','breeze']
             
const KEYBOARD_TOP_CHARACTERS = 'QWERTYUIOP'
const KEYBOARD_MID_CHARACTERS = 'ASDFGHJKL'
const KEYBOARD_BOT_CHARACTERS = 'ZXCVBNM'

// COLORS
const BAD_GUESS_COLOR       = '#d13b3b'
const GOOD_GUESS_COLOR      = '#229934'
const OPEN_BY_DEFAULT_COLOR = 'darkgrey'
const BACKGROUND_COLOR      = '#eec795'
const WIN_BACKGROUND_COLOR  = '#a6d984'
const LOSS_BACKGROUND_COLOR = '#d98484'

// CSS CLASS NAMES
const LETTER_CSS_CLASS_NAME = 'letter'
const VIRTUAL_KEYBOARD_LETTER_CSS_CLASS_NAME = 'vkbLetter'
const LETTER_ROW_CSS_CLASS_NAME = 'letterRow'

const MAX_HP = 5
let healthPoints = MAX_HP
let wordToGuess  = null

function startNewGame() {

    wordToGuess = getRandomWord().toUpperCase()
    resetHealth()
    setBackgroundColor(document.body, BACKGROUND_COLOR)

    let guessWordContainer = document.getElementById('guessWord')
    let keyboardTop = document.getElementById('top')
    let keyboardMid = document.getElementById('mid')
    let keyboardBot = document.getElementById('bot')

    clearContainers(guessWordContainer, keyboardTop, keyboardMid, keyboardBot)
    createHiddenLetters(guessWordContainer)
    createVirtualKeyboard(keyboardTop, keyboardMid, keyboardBot)
}

function getRandomWord() {
    let ri = Math.floor(Math.random() * words.length)
    return words[ri]
}

function createHiddenLetters(guessWordContainer) {
    for (let i = 0; i < wordToGuess.length; i++) {
        let letterContainer = createEmptyLetterContainer()
        revealLetterIfFirstOrLast(letterContainer, wordToGuess[i], false)
        guessWordContainer.appendChild(letterContainer)
    }
}

function clearContainers(...containers) {
    for (con of containers) {
        con.innerHTML = ''
    }
}

function createVirtualKeyboard(keyboardTopContainer, keyboardMidContainer, keyboardBotContainer) {
    createVirtualKeyboardRow(keyboardTopContainer, KEYBOARD_TOP_CHARACTERS)
    createVirtualKeyboardRow(keyboardMidContainer, KEYBOARD_MID_CHARACTERS)
    createVirtualKeyboardRow(keyboardBotContainer, KEYBOARD_BOT_CHARACTERS)
}

function createVirtualKeyboardRow(virtualKeyboardRow, lettersToDisplay) {
    for (const letter of lettersToDisplay) {
        let virtualKeyboardLetter = createVirtualKeyboardLetter(letter)
        virtualKeyboardRow.appendChild(virtualKeyboardLetter)
    }
}

function createVirtualKeyboardLetter(letter) {
    let letterContainer = createEmptyLetterContainer()
    letterContainer.classList.add(VIRTUAL_KEYBOARD_LETTER_CSS_CLASS_NAME)
    letterContainer.innerText = letter

    revealLetterIfFirstOrLast(letterContainer, letter)
    letterContainer.onclick = handleVirtualKeyboardClick
    return letterContainer
}

function revealLetterIfFirstOrLast(letterContainer, letter, virtualKeyboardContext=true) {
    let firstLetter = wordToGuess[0]
    let lastLetter  = wordToGuess[wordToGuess.length - 1]
    if (letter === firstLetter || letter === lastLetter) {
        if (virtualKeyboardContext) {
            setBackgroundColor(letterContainer, OPEN_BY_DEFAULT_COLOR)
            letterContainer.style.pointerEvents = 'none'
        } else {
            letterContainer.innerText = letter
        }
    }
}

function createEmptyLetterContainer() {
    let letterContainer = document.createElement('div')
    letterContainer.className = LETTER_CSS_CLASS_NAME
    return letterContainer
}

function handleVirtualKeyboardClick() {
    let guessWordContainer = document.getElementById('guessWord')
    let healthContainer = document.getElementById('health')

    this.style.pointerEvents = 'none'
    let correctGuess = false

    for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] === this.innerText) {
            let guessedLetterContainer = guessWordContainer.childNodes[i]
            guessedLetterContainer.innerText = this.innerText
            correctGuess = true
        }
    }

    if (correctGuess) { 
        setBackgroundColor(this, GOOD_GUESS_COLOR)
    }
    else { 
        setBackgroundColor(this, BAD_GUESS_COLOR)
        healthPoints--
        healthContainer.removeChild(healthContainer.lastElementChild)
    }

    if (isGameOver()) {
        disableKeyboard()
        if (healthPoints === 0) { setBackgroundColor(document.body, LOSS_BACKGROUND_COLOR) }
        else { setBackgroundColor(document.body, WIN_BACKGROUND_COLOR) }
    }
}

function isGameOver() {
    return healthPoints === 0 || isEveryLetterGuessed()
}

function isEveryLetterGuessed() {
    let guessWordContainer = document.getElementById('guessWord')
    let everyLetterGuessed = true
    for (letterContainer of guessWordContainer.children) {
        if (letterContainer.innerText === '') {
            everyLetterGuessed = false
            break
        }
    }
    return everyLetterGuessed
}

function disableKeyboard() {
    let keyboard = [document.getElementById('top'),
                    document.getElementById('mid'),
                    document.getElementById('bot')]

    for (keyboardRow of keyboard) {
        for (keyboardLetter of keyboardRow.children) {
            keyboardLetter.style.pointerEvents = 'none'
        }
    }
}

function resetHealth() {
    healthPoints = MAX_HP
    let healthContainer = document.getElementById('health')
    healthContainer.innerHTML = ''
    for (let i = 0; i < MAX_HP; i++) {
        let a = createHeartImg()
        healthContainer.appendChild(a)
    }
}

function createHeartImg() {
    let img = document.createElement('img')
    img.src = HEART_IMG_FILE
    img.style.width  = '90px'
    img.style.height = '100%'
    return img
}

function setBackgroundColor(element, color) {
    element.style.backgroundColor = color
}

