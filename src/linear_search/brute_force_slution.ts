// Time Complexity O(n)
// Space Complexity O(1)

// it is the optimal solution for linear search

export default function linearSearch(arr: number[], target: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
