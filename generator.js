console.log('JS Ok');   //istruzione che serve per verificare che il file js esterno sia stato collegato correttamente al file html, inserire sempre questa verifica

//costante che serve per memorizzare il nome richiesto all'utente tramite prompt() (usare la convenzione camel case per i nomi composti)
const nomeUtente = prompt('Inserisci il tuo nome:');   /* dichiaro ed assegno il valore alla costante chiedendo all'utente di inserire il valore;
                                                           per una costante non è possibile separare la fase di dichiarazione da quella di inizializzazione*/
                                                          

//attenzione che prompt() restituisce,indipendentemente dal tipo di dato inserito, sempre un valore di tipo stringa



//costante che serve per memorizzare il cognome richiesto all'utente tramite prompt() (usare la convenzione camel case per i nomi composti)
const cognomeUtente = prompt('Inserisci il tuo cognome:');

//costante che serve per memorizzare il colore preferito richiesto all'utente tramite prompt() (usare la convenzione camel case per i nomi composti)

const colorePreferito  = prompt('Inserisci il nome del tuo colore preferito:');

document.writeln('Password generata per l\'utente:');   //notare il carattere di escape \' per poter inserire il singolo apice così da scrivere l'apostrofo
document.writeln(nomeUtente + cognomeUtente + colorePreferito + 21); //istruziopne che serve per stampare sul documento html
                                                                     /*il numero 21 è trattato come una stringa in quanto
                                                                      nell'argomento di writeln vi sono stringhe e quindi
                                                                       il numero è automaticamente trattato come stringa*/


document.getElementById('commento').innerHTML = 'Conservare <strong>fuori</strong> dalla portata degli altri utenti';

