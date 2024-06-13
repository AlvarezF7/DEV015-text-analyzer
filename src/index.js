import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer` 
document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.querySelector('textarea[name="user-input"]');
  const wordCountElement = document.querySelector('[data-testid="word-count"]');
  const charactersCountElement = document.querySelector('[data-testid="character-count"]'); //eventos para contador de caracteres
  const countElement = document.querySelector('[data-testid="character-no-spaces-count"]');
  const numbersCountElement = document.querySelector('[data-testid="number-count"]');
  const numbersElement = document.querySelector('[data-testid="number-sum"]');
  const averageElement =document.querySelector('[data-testid="word-length-average"]');
   
  textarea.addEventListener('input', () => {
    const text = textarea.value;
    const wordCount = analyzer.getWordCount(text);
    wordCountElement.textContent = `Palabras: ${wordCount}`; // este es el q actualiza la etiqueta
    const charactersCount = analyzer.getCharacterCount(text);         //c
    charactersCountElement.textContent = `Caracteres: ${charactersCount}`; 
    const characterCount = analyzer.getCharacterCountExcludingSpaces(text); //es parte de excluye espacio
    countElement.textContent = `Caracteres sin espacios: ${characterCount}`;//es parte e excluye espacio
    const numbersCount = analyzer.getNumberCount(text); // es parte de numeros
    numbersCountElement.textContent = `Números: ${numbersCount}`; //es parte de contar numeros
    const numbers = analyzer.getNumberSum(text); // pertenece al sumar numeros
    numbersElement.textContent = `Sumar Números: ${numbers}`;
    const average = analyzer.getAverageWordLength(text);
    averageElement.textContent =`Promedio Longitud: ${average}`; 
      
  }); 
  //aqui esta el evento  y la funcion limpiar del btn 
  const clearbtn =  document.getElementById("reset-button");
  clearbtn.addEventListener('click', () => {
    textarea.value= ""; 
    wordCountElement.textContent ="Palabras:0";
    charactersCountElement.textContent = "Caracteres:0";
    countElement.textContent = "Caracteres sin espacios:0";
    numbersCountElement.textContent = "Números:0";
    numbersElement.textContent = "Sumar Números:0";
    averageElement.textContent ="Promedio Longitud:0"; 
  
  })

});
       
  


    



   






 