function factorize(n) {
  const result = [];
  while (n % 2 === 0) {
    result.push(2);
    n /= 2;
  }
  while (n % 3 === 0) {
    result.push(3);
    n /= 3;
  }
  return result;
}

export default factorize;
