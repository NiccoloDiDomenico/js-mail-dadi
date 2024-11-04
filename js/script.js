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