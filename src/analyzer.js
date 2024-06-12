const analyzer = {  
  getWordCount: (text) => {  // exprecion regular para contar palabra trim elimina espacio en blanco
    const words = text.split(/[^\p{L}]+/u).filter(word => word.trim() !== '');
    return words.length;
  },
  getCharacterCount: (text) => { 
    const characters = text.length; // devuelve la cantidad de caracteres de la cadena de texto ingresada
    return characters;
  },
  getCharacterCountExcludingSpaces: (text) => {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (/[a-zA-Z]/.test(char)) {  // Verificar si el carácter es una letra, usa regex
        count++; //cuenta el n° de letras que cumplen con mi condicion y excluye los espacios en blanco.
      }
    }
    return count;
  },
  getAverageWordLength: (text) => {    
    if(text === '') { 
      return 0;
    }
    const words = text.split(/\s+/).filter(word => word !== ''); //divide las palabras, filtra y elimina los vacios
    let totalLength = 0; 
    for(let i =0; i < words.length; i++){
      totalLength += words[i].length;
    }
    const average = totalLength / words.length; //esta calcula el promedio entre las dos variables definidas
    return +average.toFixed(2); 
  },
  getNumberCount: (text) => {
    let count = 0;
    const numbers = text.match(/\b\d+(\.\d+)?\b/g); // expresión regular, tiene N° enteros y N° decimales tmb el limite de palabras.
    if (numbers) {   
      for (let i = 0; i < numbers.length; i++) {
        count++;
      }
    }
    return count;
  },  
  getNumberSum: (text) =>  {
    let sum = 0;
    const numbers = text.match(/\d+(\.\d+)?\b/g);//exprecion regular para buscarnumero enteros y decimales.
    if (numbers){
      for(let i =0; i < numbers.length; i++){
        sum += parseFloat (numbers [i]);
      }
    }
    return sum;
  },
};

export default analyzer;

