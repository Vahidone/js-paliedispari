
// // **********************************************************************************************
// ESERCIZIO N1 ==>>>   PALINDROMA   <<<==
// *************************************************************************************************




const inputWord = document.querySelector('.input-word');
const btnVerify = document.getElementById('button-addon2');
const btnReset = document.querySelector('.btn-reset');
const printPlace = document.getElementById('print-result');


// punto 2 
function verifyWord () {

  const userWord = inputWord.value;

  //  punto 3
  const reversedWord = userWord.split('').reverse().join('');


  // punto 4 
  if (userWord === reversedWord) {
    printPlace.textContent = `la parola ${userWord} è una palindroma`;
    
  } else {
    printPlace.textContent = `la parola ${userWord} NON è una palindroma`;
    
  }
}

// punto 5
btnVerify.addEventListener('click', function(){
  verifyWord ();
});

// punto 6
btnReset.addEventListener('click', function(){
  printPlace.textContent = ' ';
  inputWord.value = ' ';
});



// // **********************************************************************************************
// ESERCIZIO N2 ==>>>   PARI E DISPARI   <<<==
// *************************************************************************************************

// punto 2
const rispostaPc = document.querySelector('.risposta-pc');
const stampaRisultato = document.getElementById('stampa-risultato');
const bottonVerifica = document.getElementById('button-verifica');
const bottoneReset = document.querySelector('.btn-annulla');


// punto 3
bottonVerifica.addEventListener('click', function () {
  const insertWord = document.querySelector('.insert-word').value; 
  const inputNumber = parseInt(document.querySelector('.input-number').value);
// punto 4 
  if (isNaN(inputNumber) || inputNumber < 1 || inputNumber > 5) {
    rispostaPc.textContent = 'Inserisci un numero da 1 a 5.';
  } else {
    const numeroCasuale = Math.floor(Math.random() * 5) + 1;
    const somma = inputNumber + numeroCasuale;
    const risultato = isPari(somma) ? 'pari' : 'dispari';

    function isPari(numero) {
      return numero % 2 === 0;
    }

    rispostaPc.textContent = `Il computer ha scelto ${numeroCasuale}. La somma del numero scelto da te e quello generato dal pc è ${somma}, che è un numero ${risultato}.`;
// punto 5
    if (insertWord === risultato) { 
      stampaRisultato.textContent = 'Hai vinto!';
    } else {
      stampaRisultato.textContent = 'Hai perso!';
    }
  }
});



// punto 6
bottoneReset.addEventListener('click', function () {
  document.querySelector('.input-number').value = '';
  document.querySelector('.insert-word').value = '';
  document.querySelector('.risposta-pc').textContent = '';
  document.getElementById('stampa-risultato').textContent = '';
});
