

// ESERCIZIO  ==>>>   PALINDROMA   <<<==
// *************************************************************************************************

// punto 2
const inputWord = document.querySelector('.input-word');
const printPlace = document.getElementById('print-result');
const btnVerify = document.getElementById('button-addon2');
const btnReset = document.querySelector('.btn-reset');

// punto 3
function verifyWord() {
  const userWord = inputWord.value;
  const reversedWord = userWord.split('').reverse().join('');
  const isPalindrome = userWord === reversedWord;
  // punto 4
  const message = isPalindrome
    ? `La parola ${userWord} è una palindroma`
    : `La parola ${userWord} NON è una palindroma`;

  printPlace.textContent = message;
}

// punto 5
btnVerify.addEventListener('click', function() {
  verifyWord();
});

// punto 6
btnReset.addEventListener('click', function() {
  printPlace.textContent = '';
  inputWord.value = '';
});


// // **********************************************************************************************
// ESERCIZIO ==>>>   PARI E DISPARI   <<<==
// *************************************************************************************************


// punto  2 
const rispostaPc = document.querySelector('.risposta-pc');
const stampaRisultato = document.getElementById('stampa-risultato');
const bottonVerifica = document.getElementById('button-verifica');
const bottoneReset = document.querySelector('.btn-annulla');
const wordInput = document.querySelector('.insert-word');
const numberInput = document.querySelector('.input-number');

// punto 3
bottonVerifica.addEventListener('click', function() {
  const inputNumber = parseInt(numberInput.value);


// punto 4
  if (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 5) {
    rispostaPc.textContent = 'Inserisci un numero da 1 a 5.';
  } else {
    const numeroCasuale = Math.floor(Math.random() * 5) + 1;
    const somma = inputNumber + numeroCasuale;
    const risultato = isPari(somma);

    rispostaPc.textContent = `Il computer ha scelto ${numeroCasuale}. La somma è ${somma}, che è un numero ${risultato}.`;

  
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
});
  // punto  6 
bottoneReset.addEventListener('click', function() {
  numberInput.value = '';
  wordInput.value = '';
  rispostaPc.textContent = '';
  stampaRisultato.textContent = '';
});

function isPari(numero) {
  return numero % 2 === 0 ? 'pari' : 'dispari';
}
