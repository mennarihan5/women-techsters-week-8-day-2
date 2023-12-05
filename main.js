// Factorial Function
function factorial(num) {
    let factNum = 1;
      if (num > 1) {
        for (let i = num; i >= 1; i--) {
        factNum *= i;
      }
      return factNum;
      }
      return `Please enter a number greater than 1`;
  }
  factorial(6);