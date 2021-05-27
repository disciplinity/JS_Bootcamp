let name = prompt('What is your name?')
alert('Hello, ' + name + '!')
let Gender = prompt('What is your gender? Male(M) or Female (F)')
// alert('Happy you are here, ' + gender + name + '!')

let FamilyStatus = prompt('Choose your marital status. Married (M) or Single (S)')

let Children = prompt('Do you have children? Yes (Y) or No (N)')

let allAnswers = Gender + FamilyStatus + Children

let tired = true

if(allAnswers === 'MMY' || allAnswers === 'FMY' || allAnswers === 'MSY' || allAnswers === 'FSY') {
    alert( name + 'You deserve some good rest and vacation!')
} else {
    alert(name + ', ' + 'You are doing great!')
    tired = false
} 

if(!tired) { // here
    alert('Maybe it is time to have a baby or a cat? :)') 
    let BabyOrCat = prompt('Do you want to have a child or a cat? Child (Ch) Cat (C)?')
   
    // BabyOrCat = prompt('Where do you like to be? Near the sea (S) or to walk into the woods (W)?')
    if(BabyOrCat === 'Ch'){
        alert('Great choice! Happy for you!')
    } else {
        alert('Lets find one fury miracle that will make your life brighter!')
    }

}
    
    