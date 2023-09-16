

// ESERCIZIO  ==>>>   PALINDROMA   <<<==
// *************************************************************************************************

// punto 2
const inputWord = document.querySelector('.input-word');
const printPlace = document.getElementById('print-result');
const btnVerify = document.getElementById('button-addon2');
const btnReset = document.querySelector('.btn-reset');

// le funzioni ---------- 

// punto 3
function verifyWord() {
  const userWord = inputWord.value;
  const reversedWord = invertiNumero(userWord);
  const isPalindrome = userWord === reversedWord;
  // punto 4
  const message = isPalindrome
    ? `La parola ${userWord} è palindroma`
    : `La parola ${userWord} NON è palindroma`;

  printPlace.textContent = message;
}


// punto 5
btnVerify.addEventListener('click', bottonVerificaAzione);

// punto 6
btnReset.addEventListener('click', bottonResetAzione);

// le funzioni ------------------------- 



/**
 * 
 * @param {parola} parola 
 * @returns 
 */
function invertiNumero (parola){
  return parola.split('').reverse().join('');
}
function bottonVerificaAzione () {
  verifyWord();
  const verifyAudio = document.querySelector('.verify-audio');
  verifyAudio.play();
}

function bottonResetAzione (){
  printPlace.textContent = '';
  inputWord.value = '';
  const resetAudio = document.querySelector('.reset-audio');
  resetAudio.play();
}


// // **********************************************************************************************
// ESERCIZIO ==>>>   PARI E DISPARI   <<<==
// *************************************************************************************************

// punto 2
const wordInput = document.querySelector('.insert-word');
const numberInput = document.querySelector('.input-number');
const stampaRisultato = document.getElementById('stampa-risultato');
const rispostaPc = document.querySelector('.risposta-pc');
const bottoneReset = document.querySelector('.btn-annulla');
const bottonVerifica = document.getElementById('button-verifica');

// i bottoni 
bottonVerifica.addEventListener('click', verifyActionBtn);
bottoneReset.addEventListener('click', resetActionBtn);


// le FUNZIONI -----------------

// punto 3
function verifyActionBtn() {

  const inputNumber = parseInt(numberInput.value);
  const parolaUtente = wordInput.value.toLowerCase();
  const verifyAudio = document.querySelector('.verify-audio');
  verifyAudio.play();

  // punto 4
  if (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 5) {
    rispostaPc.textContent = 'Inserisci un numero da 1 a 5.';

  } else if (parolaUtente != 'pari' && parolaUtente != 'dispari') {
    rispostaPc.textContent = 'inserisci pari o dispari';
  }
  
  
  else {
    const numeroCasuale = generaNumeroRandom(1, 5);
    const somma = inputNumber + numeroCasuale; 
    const risultato = isPari(somma);

    rispostaPc.textContent = `Il computer ha scelto ${numeroCasuale}. La somma è 
    ${somma}, che è un numero ${risultato}.`;

    // punto 5
    if (wordInput.value === risultato) {
      stampaRisultato.textContent = 'Hai vintooooooo! :)';
      const winAudio = document.getElementById('win-audio');
      winAudio.play();
    } else {
      stampaRisultato.textContent = 'Oops! Hai perso! :(';
      const lostAudio = document.getElementById('lost-audio');
      lostAudio.play();
    }
  }
}

function generaNumeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isPari(numero) {
  return numero % 2 === 0 ? 'pari' : 'dispari';
}

// punto 6
function resetActionBtn() {
  const numberInput = document.querySelector('.input-number');
  const wordInput = document.querySelector('.insert-word');
  const stampaRisultato = document.getElementById('stampa-risultato');
  
  rispostaPc.textContent = '';
  numberInput.value = '';
  wordInput.value = '';
  stampaRisultato.textContent = '';
  const resetAudio = document.querySelector('.reset-audio');
  resetAudio.play();
}









