let firstNumber   = null
let secondNumber  = null
let operation     = null

function enterNumber(nr) {
    if (!firstNumber) { firstNumber = nr }
    else if (firstNumber && !operation) { firstNumber = firstNumber.toString() + nr }
    else if (firstNumber && operation)

    document.getElementById()
}

function operator(op) {
    switch (op) {
        case '+':
            if (firstNumber) {
                operation = '+'
            }

            if (firstNumber && secondNumber) {
                firstNumber = firstNumber + secondNumber
                secondNumber = null
            }
            break
    }
}