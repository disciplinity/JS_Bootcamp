// let game = alert("Lets begin the game!")

let monster = {
    name: "Godzilla",
    healthPoints: 100,
}
let fighter = {
    name: "You",
    healthPoints: 100
}
let totalRounds = 0



let timer 
function counting() {
    
        let timeObject = document.getElementById("time");
        let time = timeObject.innerText;
        let timeSplit = time.split(":")

        let mm = parseInt(timeSplit[0])
        let ss = parseInt(timeSplit[1])

        ss++;
        if (ss === 60) {
            mm++
            ss = 0
        
        }
        if (ss < 10) { ss = "0" + ss }
        if (mm < 10) { mm = "0" + mm }
   
        timeObject.innerText = mm + ":" + ss 
}
     

    
function start() {
    let buttonObject = document.getElementById("start")
    if (!timer) {
       timer = setInterval(counting, 1000);  
       monster.healthPoints = 100
       fighter.healthPoints = 100
    }
}

function attack() {
    if (timer) {
        monster.healthPoints -= 10
        randomButtons()

        if (monster.healthPoints >= 0) {
            let attackObject = document.getElementById("monsters-life")
            attackObject.innerText = monster.healthPoints   
        } else {
            clearInterval(timer)
            timer = null
        }
    }
}

function counter() {
    if (timer) {
        fighter.healthPoints -= 10
        randomButtons()
        
        if (fighter.healthPoints >= 0) {
            let counterObject = document.getElementById("your-life")
            counterObject.innerText = fighter.healthPoints
        } else {
            clearInterval(timer)
            timer = null
        }    
    }
}


function randomButtons() {
    let button1 = document.getElementById("attack")
    let button2 = document.getElementById("counter")
    let buttonContainer = document.getElementById("buttonContainer")
    buttonContainer.innerHTML = ""

    if (Math.random() > 0.5) {
         buttonContainer.append(button1)
         buttonContainer.append (button2)
    } else {
        buttonContainer.append (button2)
        buttonContainer.append(button1)
    }
}



