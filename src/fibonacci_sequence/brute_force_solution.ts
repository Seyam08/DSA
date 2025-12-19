// Time Complexity O(n) - A single loop is running up to the input limit.
// Space Complexity O(n) - An array of size limit is being created to store the results.

// it is the optimal solution

export function fibonacci(limit: number): Array<number> {
  let sequence = [0, 1];
  let firstElement = 0;
  let secondElement = 1;

  if (limit <= 2) {
    return sequence;
  }

  for (let i = 2; i < limit; i++) {
    const newSecond = firstElement + secondElement;
    sequence.push(newSecond);
    firstElement = secondElement;
    secondElement = newSecond;
  }
  return sequence;
}
