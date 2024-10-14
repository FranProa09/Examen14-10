const esCapicua = (cadena) => {
    const cadenaReversa = cadena.split('').reverse().join(''); 
    return cadena === cadenaReversa; 
  }; 

  const letrasCapicuas = (arrayCad) => {
    return arrayCad
      .filter(esCapicua)
      .reduce((total, cadena) => total + cadena.length, 0); 
  };

const cadenas = ['neuquen', 'caminar', 'reconocer', 'palabra', 'radar'];
const totalLetras = letrasCapicuas(cadenas);
  
console.log(totalLetras);