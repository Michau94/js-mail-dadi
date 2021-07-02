// Mail

// Chiedi all’utente la sua email,
//     controlla che sia nella lista di chi può accedere,
//         stampa un messaggio appropriato sull’esito del controllo.


// STEP

// 1 - PROMPT con richiesta della mail (store in var)
// 1a - validazione eventuale per non permettere campi vuoti
// 2- passare in un for loop valore dato da utente 
// 3a - all'interno del for loop mettere if per riprodurre alert se mail inserita corrisponde  

// Gioco dei dadi

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto e stampare il risultato.

// 1- creare due variabili che generano entrambe un numero intero da 1 a 6 con math random 
// 2- if else if else per determinare vittoria - sconfitta parità;
// 3- Stampa risultato su sito; 




// MAIL
var displayAccess = document.getElementById('access');

// array consentiti
var mailList = ['michau@me.com', 'marco@lanci.it', 'dart@vader.gal']

// richiesta mail
var userEmail = prompt('Inserire mail per effettuare accesso!', 'michau@me.com');

console.log('Email inserita: ', userEmail);

//control


for (i = 0; i <= mailList.length; i++){
    
    if (userEmail === mailList[i]){
        console.log('email verificata: ', userEmail); 
        console.log('accesso consentito');
        displayAccess.innerHTML = 'accesso consentito: ' + userEmail; 
    }
}



//DADI

var displayDice = document.getElementById('result');
var displayNumberHooman = document.getElementById('hooman');
var displayNumberMachine = document.getElementById('machine');


//generate number from 1 to 6 

//Cpu
var numberCpu = Math.floor((Math.random() * 6) + 1);
displayNumberMachine.innerHTML = 'Machine throws: ' + numberCpu;
console.log(numberCpu);

//Hooman
var numberHuman = Math.floor((Math.random() * 6) + 1); 
displayNumberHooman.innerHTML = 'Human throws: ' +  numberHuman;

console.log(numberHuman);

if (numberCpu > numberHuman){
    console.log('The machine won!');
    displayDice.innerHTML = 'The Machine Won!'
}
else if( numberCpu < numberHuman){
    console.log('Hooman won!');
    displayDice.innerHTML = 'The Hooman Won!'

}else{
    console.log('Tie! Fight Again!');
    displayDice.innerHTML = 'Tie!!! Fight again!'
}





















 


