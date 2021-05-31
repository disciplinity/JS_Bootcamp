// function findSum(numbers) {
//     let sum = 0
//     // for (let i = 0; i < numbers.length; i++) {
//     //     sum += numbers[i]
//     // }
//     for (let nr of numbers) {
//         sum += nr
//     }
//     return sum
// }

// let nr = 8
// let shifted = nr << 1
// console.log(shifted)


// let arr = [1, 9, 5]
// arr.sort(function(a,b) {
//     return b - a
// })

// function greetEveryone(names) {
//     // for (let i = 0; i < names.length; i++) {
//     //     console.log('Hello ' + names[i])
//     // }
//     for (let name of names) {
//         console.log('Hello ' + name)
//     }
// }
// greetEveryone(['Indra', 'Elina', 'Anna'])

class Array {
    constructor() {
        this.collection = []
    }

    at(index) {
        return this.collection[index]
    }

    push(el) {
        this.collection.push(el)
    }

    selectionSort() {
        for (let i = 0; i < this.collection.length; i++) {
            let min = this.collection[i]
            let ri = -1
            for (let j = i + 1; j < this.collection.length; j++) {
                if (this.collection[j] < min) {
                    min = this.collection[j]
                    ri = j
                }
            }
            
            if (ri !== -1) {
                let replacable = this.collection[i]
                this.collection[i]  = min
                this.collection[ri] = replacable
            }
        }
    }

    // bubbleSort() {
    //     for (let _ = 0; this.collection.length - 1; _++) {
    //         for (let i = 0; i < this.collection.length - 1; i++) {
    //             if (this.collection[i] > this.collection[i + 1]) {
    //                 let original = this.collection[i]
    //                 this.collection[i] = this.collection[i + 1]
    //                 this.collection[i + 1] = original
    //             }
    //         }
    //     }
    // }
}

// let myArray = new Array()
// myArray.push(9)
// myArray.push(4)
// myArray.push(1)
// myArray.push(5)
// myArray.bubbleSort()
// console.log(myArray)


function subtract(a, b) {
    return a - b
}

function add(a, b) {
    return a + b
}

function calculate(mathematicalOperation, a, b) {
    return mathematicalOperation(a, b)
}


let r = calculate((a, b) => { return a / b }, 5, 10)
console.log(r)


console.log('Hello')





