let guestName = prompt("Hello there, what is your name?")

let introduction = "Hey, " + guestName + "!\n I am a virtual Travel Agent and I want to help you with choosing the best holiday!\n I do need your help, so let's do this together!"

alert(introduction);

let likesHotWeather = false
let likesNature = false
let likesActiveTime = false


let weather = prompt("So, " + guestName + ", " + "do you prefer your destination weather to be hot or cold?\n Type 'hot' or 'cold'")
  if (weather === "hot"){
    likesHotWeather = true
    alert("Great, don't forget your swimming suite and a sun lotion!")
  } else if (weather === "cold") {
    likeshotWeather = false
    alert ("Amazing, but don't forget to pack your mittens!")
  }

let natureOrCity = prompt("So, let's say you are in a " + weather + " country, would you rather exlpore a busy city, or a quite nature?\n Type 'city' or 'nature'")
  if (natureOrCity === "city") {
    likesNature = false
    alert("Great, it will be a nice city break!")
 } else if (natureOrCity === "nature") {
    likesNature = true 
    alert ("Great! I have an amazingly beautiful place on my mind already!")
 }


 let active = prompt("Do you want your vacation in the " + natureOrCity + " to be active, or relaxing?\n Type 'active' or 'relaxing'")
 if (active === "relaxing" || active === "relax") {
  likesActiveTime = false
  alert("You deserve a quite time to relax for sure!")
} else if (active === "active") {
  likesActiveTime = true 
  alert ("Yeeehaa! Time to move around and explore the world!")
} 

let summary = alert("So I have all the information I need to plan your vacation...")
alert("Okay, let's sum up, when you chose the travel destination, you said you want it to be " + weather + " country.\n You also mentioned that you prefer to spend your time in a " + active + " way. Also, you would rather visit a " + natureOrCity + " during your time off.\n Alrighty, so..")
let isReady = confirm("So, " + guestName + ", are you actually ready to know where you going?!");

function perfectPlace () {
  if (likesHotWeather && likesActiveTime && likesNature) {
    return "You are going to Recife in Brazil! Recife if famous for it's beaches, warm climate and surfing waves!"
  } else if (!likesHotWeather && likesActiveTime && likesNature) {
    return "You are going to the French Alps! I will book you a cozy chalet in ski resort!"
  } else if (likesHotWeather && !likesActiveTime && likesNature) {
    return "You are going to Tenerife in Canary Islands! Time to sunbathe!"
  } else if (likesHotWeather && likesActiveTime && !likesNature) {
    return "You are going to the Mexico City, it's famous for its night life!"
  } else if (!likesHotWeather && !likesActiveTime && likesNature) {
    return "You are going to Norway, to see the Norwegian Fjords!"
  } else if (likesHotWeather && !likesActiveTime && !likesNature) {
    return "You are going to Milan and try an authentic Italian eat pizza!"
  } else if (!likesHotWeather && likesActiveTime && !likesNature) {
    return "You are going to New York! Get your camera out!"
  } else if (!likesHotWeather && !likesActiveTime && !likesNature) {
    return "You are going to Vancouver"
    } else {
  return "You are going to the Moon!"
}}


alert(perfectPlace())