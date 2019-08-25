function factorize(n) {
  const result = [];
  while (n%2 === 0) {
    result.push(2);
    n /= 2;
  }
  if (n === 3) {
    result.push(3);
  }
  return result;
}

export default factorize;
