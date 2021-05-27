alert('Hello! Lets play a game! I say color, you say which and I will say how do you feel today!')
let name = prompt('What is your name?')
alert('Hello, ' + name + '!' + ' ' + 'Lets start!')
let firstColorChoose = prompt('Choose one of the colors Red (R) or Yellow (Y)')

let secondColorChoose = prompt('Choose one of the colors Blue (B) or Green (G)')

let thirdColorChoose = prompt('Choose one of the colors Grey (E) or White (W)')
let colorCombo = firstColorChoose + secondColorChoose + thirdColorChoose
let isHappy = false

if(colorCombo === 'YGW' || colorCombo === 'YGE' || colorCombo === 'YBW' || colorCombo === 'RGW') {
    alert( name + 'Its looks like you feel calm and happy today. Keep it up!')
    isHappy = true
} else {
    // (colorCombo === 'RBE' || colorCombo === 'RBW' || colorCombo === 'RGE' || colorCombo === 'YBE') {
        alert(name + ' ' + 'Its looks like today you feel stressful')
    } 
if(!isHappy){
    alert('Let me help you!') 
   let meHelpYou = prompt('Where do you like to be? Near the sea (S) or to walk into the woods (W)?')
    while(!(meHelpYou === 'S' || meHelpYou === 'W')) {
        meHelpYou = prompt('Where do you like to be? Near the sea (S) or to walk into the woods (W)?')
    }
    if(meHelpYou === 'S'){
        alert('Welcome to the sea! \n Feel the smell of the sea breeze, breathe deep and take your vitamin-sea!')
       
    } else {
            alert('Welcome in to the woods! \n Walk slowly, close your eyes, breath deep and listen to the sounds of birds!')
        }
    let stillFeel = prompt('Still feel stressful? (Yes!) (No!)')
    while(!(stillFeel === 'Yes' || stillFeel === 'No')) {
        stillFeel = prompt('Still feel stressful? (Yes!) (No!)')
    }
    if(stillFeel === 'No'){
        alert('Good job, have a nice day!')
    } else {
            alert('Then make warm tea and just jump into the bed, switch on your favorite tv series and feel free to watch all season at one evening :)')
        }
    }
    