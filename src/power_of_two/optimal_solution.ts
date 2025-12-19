// Time Complexity O(1)
// Space Complexity O(1)

export function isPowerOfTwo(num: number): boolean {
  if (num < 1) {
    return false;
  }
  return (num & (num - 1)) === 0;
}
