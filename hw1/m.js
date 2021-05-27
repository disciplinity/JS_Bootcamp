let playerName = prompt ('Welcome to Fun Fact Cafe, how should I call you?')
let introduction = 'Hello, ' + playerName + '!'
alert (introduction)

let wouldDrink = prompt ('Would you like to have a drink?\n Yes or No')
let hereIs = 'Here is your '
let FunFact = ' and some fun fact about it '
let enjoy = '\nEnjoy your drink, '+ playerName + '!'

wouldDrink = wouldDrink.toLowerCase()
let drink = ''
if (wouldDrink === 'yes') { // here
    drink = prompt('Great! Would you like to have tea, cofee or water? T, C or W')
    if (drink == 'T') {
        alert ('Really tea?')
        let teaChoise = prompt ('Ok, we have Black Tea (BT), Green Tea (GT) or Herbal Tea (HT)?\n Which tea would you like?  BT, GT or HT?')
        if (teaChoise == 'BT') {
            alert (hereIs + 'Black tea' + FunFact + '-\n"Black tea has a stronger flavor than the other ones."' + enjoy)
        } else if (teaChoise == 'GT'){
            alert (hereIs + 'Green tea' + FunFact + '-\n"Green tea comes from the same plant that produces black tea and oolong tea."' + enjoy)
        } else {
            alert (hereIs + 'Herbal tea' + FunFact + '-\n"Dating back to Ancient Egypt and Ancient China, herbal tea has been used for hundreds of years for its health benefits and great taste."' + enjoy)
        }
    } else if (drink == 'C'){
        alert ('Cofee always tastes good!')
        let cofeeChoise = prompt ('Would you like to have Espresso(E), Americano(A) or Cappuccino(C)? E, A or C?')
        if (cofeeChoise == 'E') {
            alert (hereIs + 'Espresso' + FunFac + '- \n"The Italian word espresso translates into English as: “to express”. Espresso should be pronounced "es-press-so", but is often incorrectly pronounced as "ex-press-so"."' + enjoy)
        } else if (cofeeChoise == 'A') {
            alert (hereIs + 'Americano' + FunFact + '- \n"The term "caffe Americano" specifically is Italian for "American coffee". There is a popular, but unconfirmed, belief that the name has its origins in World War II when American G.I.s in Italy would dilute espresso with hot water to approximate the coffee to which they were accustomed."' + enjoy)
        } else {
            alert (hereIs + 'Cappuccino' + FunFact + '- \n"In Italy, people only drink cappuccino at breakfast before 11 a.m. Cappuccino normally should be half liquid and a half milk foam!"' + enjoy)
        }
    } else {
        alert ('So just water, right?')
        let waterChoise = prompt ('OK, would you like to have sparkling water (SP) or still(ST)?\n SP or ST?')
        if (waterChoise == 'SP') {
            alert (hereIs + 'Sparkling water' + FunFact + '- \n"Many have claimed that carbonated water is a potent stain remover. However, it\'s been ruled that regular water works just as well. If you\'re looking to use bubbly water for cleaning purposes, soapy water is a better choice."' + enjoy)
        } else {
            alert (hereIs + 'Still water' + FunFact + '- \n"Approximately 80% of your brain tissue is made of water (about the same percentage of water found in a living tree - maybe is this why people hit their heads and say "knock on wood"?)"' + enjoy)
        }
    }


} else {
    alert('Ok, I will be here, if you change your mind.\nHere is some Fun Fact about cafe - \n"The term "cafe" comes from French, and means "coffee"."')
    alert ('Enjoy your day, ' + playerName + '!')
}
