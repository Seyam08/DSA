// Time Complexity O(n)
// Space Complexity O(1)

// it is the optimal solution

export function binarySearch(arr: number[], target: number): number {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    const midIndex = Math.floor((leftIndex + rightIndex) / 2);
    const midValue = arr[midIndex];
    if (midValue === target) {
      return midIndex;
    } else if (midValue < target) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }

  return -1;
}
