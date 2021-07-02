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


















 


