// Time Complexity O(2n)
// Space Complexity O(n)

// it is the optimal solution for recursive function

export function getNthItemOfFibonacci(nth: number): number {
  if (nth < 2) {
    return nth;
  }

  return getNthItemOfFibonacci(nth - 1) + getNthItemOfFibonacci(nth - 2);
}
