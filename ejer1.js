function divisible(a, b) {
    return a % b === 0;
  }
    const filtradoEn5 = (numeros) => {
    return numeros.filter(num => divisible(num, 5));
  };

const numeros = [20, 9, 35, 50, 1, 15, 11];
const divisiblesPor5 = filtradoEn5(numeros);
  
  console.log(divisiblesPor5);