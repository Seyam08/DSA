// Time Complexity O(n)
// Space Complexity O(1)

// it is the optimal solution

export function calculateFactorial(number: number): number {
  if (number < 0) {
    throw new Error("number must be positive value");
  }
  if (number === 0) {
    return 1;
  }
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result = result * i;
  }
  return result;
}
