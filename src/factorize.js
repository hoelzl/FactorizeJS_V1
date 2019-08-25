function factorize(n) {
  const result = [];
  for (let i = 2; i <= n; i++) {
    while (n % i === 0) {
      result.push(i);
      n /= i;
    }
  }
  return result;
}

export default factorize;
