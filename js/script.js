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
var mailList = ['michau@me.com', 'marco@lanci.it', 'dart@vader.gal', 'miao']

// richiesta mail
var userEmail = prompt('Inserire mail per effettuare accesso!', 'michau@me.com');

console.log('Email inserita: ', userEmail);


//Validation
if (userEmail.length < 1 || !userEmail.includes('@')) {
    alert('Email non valida!!')

} else {

    //control
    var granted = false;

    for (i = 0; i < mailList.length; i++) {

        if (userEmail == mailList[i]) {
            granted = true; 
        } else {
        }
    }
    if (granted) {
        //execute game if granted
        console.log('Granted: ', userEmail);
        displayAccess.innerHTML = '<i class="fas fa-check-circle"></i>accesso consentito: ' + '<strong>' + userEmail + '</strong>';

        //DADI

        var displayDice = document.getElementById('result');
        var displayNumberHooman = document.getElementById('hooman');
        var displayNumberMachine = document.getElementById('machine');


        //generate number from 1 to 6 

        //Cpu
        var numberCpu = Math.floor((Math.random() * 6) + 1);
        displayNumberMachine.innerHTML = 'Machine throws: ' + numberCpu;
        console.log('Number CPU: ', numberCpu);

        //Hooman
        var numberHuman = Math.floor((Math.random() * 6) + 1);
        displayNumberHooman.innerHTML = 'Human throws: ' + numberHuman;
        console.log('Number Human: ' , numberHuman);


        //NOW FIGHT 
        if (numberCpu > numberHuman) {
            console.log('The machine won!');
            displayDice.innerHTML = '<i class="fas fa-robot fa-spin"></i>The Machine Won!<i class="fas fa-robot fa-spin"></i>'
        }
        else if (numberCpu < numberHuman) {
            console.log('Hooman won!');
            displayDice.innerHTML = '<i class="fas fa-child"></i>The Hooman Won!<i class="fas fa-child"></i>'

        } else {
            console.log('Tie! Fight Again!');
            displayDice.innerHTML = '<i class="fas fa-meh"></i>Tie!!! Fight again!<i class="fas fa-meh"></i>'
        }
    } else {
        console.log('Denied: ', userEmail);
        displayAccess.innerHTML = '<i class="fas fa-times-circle"></i>accesso negato: ' + userEmail;
        alert('No mail no game! ')
    }
}








// soluzione ti piace vincere facile XD
// if (mailList.includes(userEmail)) {
    //     console.log('email verificata: ', userEmail);
    //     console.log('accesso consentito');
    //     displayAccess.innerHTML = '<i class="fas fa-check-circle"></i>accesso consentito: ' + '<strong>' + userEmail + '</strong>';

    // } else {
        //     console.log('accesso non consentito');
        //     displayAccess.innerHTML = '<i class="fas fa-times-circle"></i>accesso negato: ' + userEmail;
        //     alert('No mail no game! ')

// }















