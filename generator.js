console.log('JS Ok');

//costante che serve per memorizzare il nome richiesto all'utente tramite prompt() (usare la convenzione camel case per i nomi composti)
const nomeUtente; //dichiaro la costante

nomeUtente = prompt('Inserisci il tuo nome:');   //assegno il valore alla costante chiedendo all'utente di inserire il valore

//attenzione che prompt() restituisce,indipendentemente dal tipo di dato inserito, sempre un valore di tipo stringa

//costante che serve per memorizzare il cognome richiesto all'utente tramite prompt() (usare la convenzione camel case per i nomi composti)
const cognomeUtente;    //dischiaro la costante

cognomeUtente = prompt('Inserisci il tuo cognome:');

const colorePreferito;

const colorePreferito = prompt('Inserisci il nome del tuo colore preferito:');

document.writeln(nomeUtente + cognomeUtente + colorePreferito);


