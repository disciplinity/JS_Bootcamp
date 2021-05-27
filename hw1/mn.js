let firstName = prompt('Please enter your name: ')
let lastName = prompt('Please enter your surname: ')
let willPlay = prompt('Hello, ' + firstName + ' ' + lastName + '. ' + 'Do you want to play a video game? (YES) or (NO)')

let game = ''
if (willPlay === 'YES') {
    alert('Excellent, I don`t have many video games, but I will tell you your game options.')
    game = prompt(firstName + ', You have to choose which video game you would like to play - Basketball (B), Football (F), Hockey (H) or non of them (NaN) please choose one.')
} else {
    alert('Sorry to hear that, enjoy your free time, go outside and do real-life activities. Have a great day ' + firstName + ' ' + lastName + '!')
}

if (game === 'B') {
    let basketballGame = prompt('Which video game - Euroleague (A) or NBA (B) or (NaN)?')
    if (basketballGame === 'A') {
        alert('Good choice, good luck ' + firstName + ' and let`s play Euroleague basketball!')
    } else if (basketballGame === 'B') {
        alert('Good choice, good luck ' + firstName + ' and let`s play NBA basketball!')
    } else {
        alert('Sorry, I don`t have other basketball video games that you would like.')
    }
} else if (game === 'F') {
    let basketballGame = prompt('Which video game - Premier League (A) or Bundesliga (B) or (NaN)?')
    if (basketballGame === 'A') {
        alert('Good choice, good luck ' + firstName + ' and let`s play Premier League football!')
    } else if (basketballGame === 'B') {
        alert('Good choice, good luck ' + firstName + ' and let`s play Bundesliga football!')
    } else {
        alert('Sorry, I don`t have other football video games that you would like.')
    }
} else if (game === 'H') {
    let basketballGame = prompt('Which video game - NHL (A) or Canadas WHL (B) or (NaN)?')
    if (basketballGame === 'A') {
        alert('Good choice, good luck ' + firstName + ' and let`s play NHL hockey!')
    } else if (basketballGame === 'B') {
        alert('Good choice, good luck ' + firstName + ' and let`s play Canadas WHL hockey!')
    } else {
        alert('Sorry, I don`t have other hockey video games that you would like.')
    }
} else  if (game === 'NaN') {  // NAN - Not A Number, could do an else block instead
    alert('Sorry, I don`t have other types of video games that you would like.')
}