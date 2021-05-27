let firstNumber = null
let secondNumber = null
let operator = null


function setValue(nr) {
    let res = document.getElementById('displayResult')
    if (!firstNumber) {
        firstNumber = nr
        res.value = nr
    } else if (firstNumber) {
        if (!operator) {
            firstNumber = firstNumber.toString() + nr.toString()
            res.value = firstNumber
        } else {
            if (!secondNumber) { 
                secondNumber = nr 
                res.value = secondNumber
             } else { 
                secondNumber = secondNumber.toString() + nr.toString() 
                res.value = secondNumber
              
              }
        }
    }
}

function setOperator(op) {
    let res = document.getElementById('displayResult')

    if (firstNumber && secondNumber && operator) {
        let result = doOperation()
        firstNumber = result
        secondNumber = null
        res.value = firstNumber
    }
    operator = op; 
}

function doOperation() {
    let fn = parseInt(firstNumber)
    let sn = parseInt(secondNumber)
    
    switch(operator) {
        case '+':
            return fn + sn
        case '-':
            return fn - sn
        case '/': 
            return fn / sn
        case '*':
            return fn * sn
        case '=':
            if (sn) {
              return sn
            }
    }
} 


function erase() {
  let res = document.getElementById('displayResult')
  res.value = ' '
}