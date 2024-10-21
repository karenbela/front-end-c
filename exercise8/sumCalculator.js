//Modul sumCalculator
const addNumber = (a, b, c, d, e, f, g) => {
    let numbers = [a, b, c, d, e, f, g];
    let sum = 0;
    numbers.map((number) => sum += number);  
  };
  
  export { addNumber }; 
  