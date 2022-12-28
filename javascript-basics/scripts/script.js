function isPrime(number) {
  for (let i = number - 1; i > 1; i--) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function getPrimeNumbers(range) {
  const primeNumbers = [];
  for (let i = 2; i <= range; i ++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers;
}

console.log(getPrimeNumbers(10));