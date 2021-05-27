alert('Welcome to Latvia!')
let name = prompt('What is your name?');
alert('Hello, ' + name + '!')
let natureOrCity = prompt('Would you like to visit nature (N) or city (C)?')
let siguldaOrKoknese
let rigaOrJurmala

while(!(natureOrCity === 'N' || natureOrCity === 'C')) {
    natureOrCity = prompt('Would you like to visit nature (N) or city (C)?')
}
if(natureOrCity === 'N') {
    alert('Welcome to nature!')
    siguldaOrKoknese = prompt('Would you like to visit Sigulda (S) or Koknese (K)?')
    while(!(siguldaOrKoknese === 'S' || siguldaOrKoknese === 'K')) {
        siguldaOrKoknese = prompt('Would you like to visit Sigulda (S) or Koknese (K)?')
    }
   if(siguldaOrKoknese == 'S') {
       alert('Welcome to Sigulda!')
   } else {
       alert('Welcome to Koknese!')
   }
} else {
    alert('Welcome to city!')
    // IDENTATION
    while(!(rigaOrJurmala === 'R' || rigaOrJurmala === 'J')) {
        rigaOrJurmala = prompt('Would you like to visit Riga (R) or Jurmala (J)?')
    }

}
// THIS SHOULD BE INSIDE ELSE BLOCK
if(rigaOrJurmala == 'R') {
    alert('Welcome to Riga!')
} else {
    alert('Welcome to Jurmala!')
}
