// Time Complexity O(n)
// Space Complexity O(1)

// it is the optimal solution

function Search(
  arr: number[],
  target: number,
  leftIndex: number,
  rightIndex: number
): number {
  if (leftIndex > rightIndex) {
    return -1;
  }
  const midIndex = Math.floor((leftIndex + rightIndex) / 2);
  const midValue = arr[midIndex];

  if (midValue === target) {
    return midIndex;
  } else if (midValue < target) {
    return Search(arr, target, midIndex + 1, rightIndex);
  } else {
    return Search(arr, target, leftIndex, midIndex - 1);
  }
}

export function RecursiveBinary(arr: number[], target: number): number {
  const leftIndex = 0;
  const rightIndex = arr.length - 1;
  return Search(arr, target, leftIndex, rightIndex);
}
