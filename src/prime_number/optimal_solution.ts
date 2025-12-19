// Time Complexity O(sqrt(n))
// Space Complexity O(1)

// it is the optimal solution

export function isPrime(n: number): boolean {
  if (n < 2) {
    return false;
  }
  const sqrtNum = Math.sqrt(n);
  for (let i = 2; i <= sqrtNum; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
