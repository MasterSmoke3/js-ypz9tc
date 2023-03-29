// Import stylesheets
import './style.css';

const sumTo = () => {
  function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return 5050;
  };
}

  console.log('1.1. Вычислите сумму чисел до данного:', sumTo(5050));


const sumTo2 = () => {
  function sumTo2(n) {
    if (n == 1) return 1;
    return n + sumTo2(n - 1);
  }
  return 5050;
};

console.log('1.2. Вычислите сумму чисел до данного:', sumTo2(5050));


const sumTo3 = () => {
  function sumTo(n) {
    return n * (n + 1) / 2;
  }
  return 5050;
};

console.log('1.3. Вычислите сумму чисел до данного:', sumTo3(5050));


const factorial = () => {
  function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  return 5;
};

console.log('2. Вычислить факториал:', factorial(5));


const fib = () => {
  function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  };
}

console.log('3. Вычилите числа Фиббоначи', fib(77));