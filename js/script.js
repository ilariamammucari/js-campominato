// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

// svolgimento esercizio:
// faccio due arrey vuote
var numeriPc = [];
var numeriUtente = [];

// aggiungo 16 numeri all'arrey del pc senza ripetizioni in un intervallo tra 1 e 100
while (numeriPc.length < 16){
  var nRandom = numeriRandom(1,100);
  // controllo che non ci siano doppioni con il metodo .includes (che mi restituisce un valore booleano) e aggiungo valori all'arrey
  if (!numeriPc.includes(nRandom)){
    numeriPc.push(nRandom);
  }
}
console.log(numeriPc);


// inserimento numeri per l'utente con una funzione
var numeroUtente = inserimentoUtente();
console.log(numeriUtente);

var tentativi = 'Hai perso al tentativo numero: ' + numeriUtente.length;
if (numeriUtente.length == 84){
  tentativi = 'Mi disopiace, hai raggiunto numero massimo di tentativi.';
}
console.log(tentativi);









// *****funzioni:

// genera numeri random
function numeriRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// per inserimento dei numeri dell'utente e controllo
function inserimentoUtente() {
  var sentinella = true;
  while (numeriUtente.length < 84 && sentinella){
    var nUtente = parseInt(prompt('inserisci un numero compreso tra 1 e 100'));
    if (!numeriPc.includes(nUtente)){
      numeriUtente.push(nUtente);
    } else {
      sentinella = false;
      alert('HAI PERSO');
    }
  }
  return nUtente;
}