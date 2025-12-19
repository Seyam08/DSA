// Time Complexity O(log n)
// Space Complexity O(1)

export function isPowerOfTwo(num: number): boolean {
  if (num < 1) {
    return false;
  }

  for (let i = num; i > 1; i = i / 2) {
    if (i % 2 !== 0) {
      return false;
    }
  }
  return true;
}
