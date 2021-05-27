alert ("Welcome, we are glad to welcome you on our website ")
let languages = prompt ('Which programming language do you want to learn? Please choose one of them HTML (H), Java (J), Javascript (JSc), Python (P)') 
if (languages === "H") {
 alert ('Great, You choose HTML')
} else if (languages === "J") {
 alert ("Great, You choose Java")
}else if (languages === "JSc") {
   alert ("Great, You choose Javascript")
} else {
   alert ("Great, You choose Python")
}

let days = prompt("what working days are suit you best? Please choose - Monday and Wednesday (MW) or Tuesday and Friday (TF)")

let lang = ''
if (languages === 'H') lang = 'HTML'
else if (languages === 'J') lang = 'Java'
else if (languages === 'JSc') lang = 'Javascript'
else lang = 'Python'

let d = ''
if (days === 'MW') d = 'Monday and Wednesday'
else if (days === 'TF') d = 'Tuesday and Friday'

console.log("Nice, your choice is - " + lang +  " studies on " + d)

alert ("Thanks for your time, we will contact with you during the next working day!")