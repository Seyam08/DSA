// Time Complexity O(n)
// Space Complexity O(1)

export function isPrime(n: number): boolean {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
