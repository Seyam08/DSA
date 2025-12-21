// Time Complexity O(n)
// Space Complexity O(1)

// it is the optimal solution

export function getNthItemOfFibonacci(nth: number): number {
  if (nth < 2) {
    return nth;
  }

  let firstElement = 0;
  let secondElement = 1;

  for (let i = 2; i <= nth; i++) {
    const newSecond = firstElement + secondElement;
    firstElement = secondElement;
    secondElement = newSecond;
  }
  return secondElement;
}
