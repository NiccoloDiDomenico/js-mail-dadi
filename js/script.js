// MAIL

// ESECUZIONE LOGICA
// - Creo una lista di mail che può accedere;
// - Chiedo all'utente un email tramite un prompt;
// - Creo un ciclo for per ogni elemento nella lista;
//     - uso un'istruzione condizionale per verificare se la mail dell'utente è presente nella lista;
//         - se si {
//             scrivo messaggio di conferma controllo
//         }
//         - altrimenti {
//             scrivo messaggio di errore 
//         }

const mailList = ["topolino@gmail.com", "minnie@gmail.com", "paperino@gmail.com", "paperina@gmail.com", "pluto@gmail.com"]
const userMail = prompt("Inserisci la tua mail")
for (let i = 0; i < mailList.length; i++) {
    const currMail = mailList[i];
    if (userMail == currMail) {
        const message = `La mail inserita è corretta`
        console.log(message);
    } else {
        const message = `La mail inserita non è corretta`
        console.log(message);
    }
}


// DADI

// ESECUZIONE LOGICA
// - Genero due numeri random da 1 a 6;
// - Uso un'istruzione condizionale per verificare quale numero è più alto e di conseguenza ha vinto;
//     - se (numRandom1 > numRandom2) {
//         giocatore 1 vince
//     } altrimenti se (numRandom1 < numRandom2) {
//         giocatore 2 vince
//     } altrimenti {
//         pareggio
//     }

const numRandom1 = Math.floor(Math.random() * 6) +1;
const numRandom2 = Math.floor(Math.random() * 6) +1;
console.log(numRandom1, numRandom2);
if (numRandom1 > numRandom2) {
    const message = `Il giocatore 1 ha vinto`
    console.log(message);
} else if (numRandom1 < numRandom2) {
    const message = `Il giocatore 2 ha vinto`
    console.log(message);
} else {
    const message = `Pareggio`
    console.log(message);
}
