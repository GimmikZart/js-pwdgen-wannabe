
// variabile nome
var nome;


// variabile nomecognome

var cognome;

// variabile colorepreferito

var colorepreferito;


// Chiedi all’utente il suo nome

nome = prompt ("inserisci il tuo nome");


// chiedi il suo cognome

cognome = prompt ("inserisci il tuo cognome");


// chiedi il suo colore preferito

colorepreferito = prompt ("inserisci il tuo colore preferito");

// CALCOLO DELLA PASSOWRD

var password = nome + cognome + colorepreferito + 19;



// scrivi sulla pagina nomecognomecolorepreferito19

document.getElementById("password").innerHTML= "La tua password sarà: " + password
