// MAIL

// DATO 
// - Lista di email registrate
// - Chiedere all'utente un email

// ESECUZIONE LOGICA
// - Creo un ciclo for per ogni elemento "mail" nella lista;
//     - uso un'istruzione condizionale per verificare se la mail dell'utente è presente nella lista:
//         - se si {
//             login
//         }
//         - altrimenti {
//             !login
//         }

// OUTPUT
// Se il controllo è positivo {
//     stampa "accesso consentito"
// } else {
//     stampa "accesso negato"
// }

const mailList = ["topolino@gmail.com", "minnie@gmail.com", "paperino@gmail.com", "paperina@gmail.com", "pluto@gmail.com"]
const userMail = prompt("Inserisci la tua mail")

let control = false
for (let i = 0; i < mailList.length; i++) {
    const currMail = mailList[i];
    if (userMail === currMail) {
        control = true;
        break;
    } else {
        
    }
}
console.log(control);

if (control) {
    console.log(`La tua mail è corretta`);
} else {
    console.log(`La tua mail non è corretta`);
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

let message = "";
if (numRandom1 > numRandom2) {
    message = `Il giocatore 1 ha vinto`
} else if (numRandom1 < numRandom2) {
    message = `Il giocatore 2 ha vinto`
} else {
    message = `Pareggio`
}

console.log(message);

