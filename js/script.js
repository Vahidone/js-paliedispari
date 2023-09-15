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






