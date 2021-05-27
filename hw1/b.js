let age = prompt("How old are you?")
let entered = false

console.log(age)

if (age <18) {
    alert("You are not old enough to enter this site!")
} else {
    alert("Let's have a drink!")
    entered = true
}   

if (entered) {
    let drinkChoice = prompt("Would you like some wine (A) or beer (B)?")
    if (drinkChoice === "A") {
        prompt("White (A), red (B) or sparkling (C)?")
        let wine = prompt("Bottle (A) or glass (B)?")
        if (wine === "A"){
            alert("It will be 20Eur")
            entered = true
        }else if (wine === "B") {
            alert("It will be 2Eur")
            entered = true
        }else {
            alert("Sorry, we don't serve that!")
        }
    if (entered) {
        console.log("Thank you for your purchase! Have a nice day and drink again!")
    }
    } else if (drinkChoice === "B") {
        let beer = prompt("Lager (A), PaleAle (B) or dark (C)?")
        if (beer === "A" || beer === "B" || beer === "C") {  // here
            let volume     
            do  {
                volume = prompt("Would you like a bottle (A), case of 24 bottles (B) or a keg (C)?")
                if (volume === "A") {             
                    alert("It will not be enough for you, I'm sure!")
                }
            } while (volume === "A")
            if (volume === "B") {
                alert("It will be 24 euros for a case")
            }
            else if (volume === "C") {
                let cooler = prompt("Do you want a cooler? (Yes), (No) ") 
                if (cooler === "Yes") {
                    alert("You have chosen cooler and keg!")
                }else if (cooler === "No") {
                    alert("Good choice! Drink warm beer")
                }else {
                    alert("Wrong answer!")
                }
            }else {
                alert("You have chosen not to drink beer from our selection! Too bad!")
            }

        }else {
            alert("Sorry, we dont serve that!")
        }
        
    }
    else {
        alert("Drink water")
    }
}