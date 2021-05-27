let firstName = prompt('Enter your name:')
let lastName = prompt('Enter your surname:')
let age = prompt('Enter your age:')

/*Once enterd age is below 18, the code still continues with the next qestion.
 Same is true for the next two sections: code does not stop when logically user has reached dead-end. */ 

if (age >= 18) {
    alert('Welcome, ' + ' ' + firstName + ' ' + lastName + '!')
} else {
    alert('Unfortunately, you are too young to travel such a long distance.')
    // here
    throw new Error("This is your custom error message");
}

let placeToTravel = prompt('We currently offer destinations to (M) Mars, (J) Jupiter, (V) Venus or to stay on (E) Earth. Please enter your desired destination.')
    if (placeToTravel === 'M') {
        alert('Mars it is!')
    } else if(placeToTravel === 'J') {
        alert('Jupiter it is!')
    } else if(placeToTravel === 'V') {
        alert('Venus it is!')
    } else if (placeToTravel === 'E') {
        alert('No worries, tickets are quite pricey. There is no place like home!')

    }

let ticketLimit = 3

if (numberOfTickets <= ticketLimit) {
    alert('ALLOWED')
} else {
    alert('TOO MANY')
}

alert ('Thank you, safe travels!')


//Tried to put the same functionality in a For loop, but I not know how to proceed further.
  
// for (let ticket = 1; ticket <= 3; ticket++) {
//     console.log(ticket)
// }