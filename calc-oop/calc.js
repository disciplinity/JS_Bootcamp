// Allowed operations
const OPERATION_DIVISION       = 'division'
const OPERATION_ADDITION       = 'addition'
const OPERATION_SUBTRACTION    = 'subtraction'
const OPERATION_MULTIPLICATION = 'multiplication'
const OPERATION_EQUALS         = 'equals'
const OPERATION_SQUAREROOT     = 'squareroot'
const OPERATION_SQUARE         = 'square'
const OPERATION_MODULO         = 'modulo'

const MAX_NUMBERS_AFTER_DECIMAL_POINT = 5
const MAX_INPUT_LENGTH = 15
const ERROR_MSG_INPUT_TOO_LONG = 'Too long!'

// State of the calculator
let firstNumber  = ''
let secondNumber = ''
let operation    = null
let repeatingOp  = null
let commaEnabled = false

let result = document.getElementById('result')

function setInputNumber(button) {

    if (tooLong(firstNumber) || tooLong(secondNumber)) {
        return
    }

    if (!operation) {
        if (firstNumber.length === 0 && button.innerText === '0') { return }
        firstNumber  += button.innerText
        result.innerText = firstNumber
    } else {
        if (secondNumber.length === 0 && button.innerText === '0') { return }
        secondNumber += button.innerText
        result.innerText = secondNumber
    }
}

function tooLong(input) {
    return input.length > MAX_INPUT_LENGTH
}

function setOperator(op) {

    if (repeatingOp && repeatingOp !== op) {
        startNewOperation(op)
        repeatingOp = null
        return
    }

    if (firstNumber.length > 0 && secondNumber.length > 0 && operation) {
        switch (operation) {
            case OPERATION_DIVISION:
                firstNumber = (parseFloat(firstNumber) / parseFloat(secondNumber)).toString()
                break;
            case OPERATION_ADDITION:
                firstNumber = (parseFloat(firstNumber) + parseFloat(secondNumber)).toString()
                break;
            case OPERATION_SUBTRACTION:
                firstNumber = (parseFloat(firstNumber) - parseFloat(secondNumber)).toString()
                break;
            case OPERATION_MULTIPLICATION:
                firstNumber = (parseFloat(firstNumber) * parseFloat(secondNumber)).toString()
                break;
            case OPERATION_SQUAREROOT:
                firstNumber = Math.sqrt(parseFloat(firstNumber))
                break;
            case OPERATION_SQUARE:
                firstNumber = Math.pow(parseFloat(firstNumber), 2)
                break;
            case OPERATION_MODULO:
                firstNumber = parseFloat(firstNumber) % parseFloat(secondNumber)
                break;
            default:
                alert('Unrecognizable operation: ' + operation)
        }
        firstNumber = parseFloat(firstNumber).toFixed(MAX_NUMBERS_AFTER_DECIMAL_POINT)
        result.innerText = firstNumber
    }

    if (op !== OPERATION_EQUALS) {
        startNewOperation(op)
    } else {
        repeatingOp = op
    }



    if (result.innerText === ERROR_MSG_INPUT_TOO_LONG) { return }
    if (tooLong(firstNumber) || tooLong(secondNumber)) {
        result.innerText = ERROR_MSG_INPUT_TOO_LONG
        return
    }

}

function setCommaEnabled(enabled) {
    if (enabled && !commaEnabled && result.innerText.indexOf('.') === -1) {
        result.innerText += '.'
        secondNumber.length === 0 ? firstNumber += '.' : secondNumber += '.'
    }
    commaEnabled = enabled
}

function startNewOperation(op) {
    operation = op
    secondNumber = ''
    setCommaEnabled(false)
}

function reset() {
    startNewOperation(null)
    firstNumber = ''
    result.innerText = '0'
}

