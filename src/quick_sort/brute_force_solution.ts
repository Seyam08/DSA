// Time Complexity
// Best Case / Average Case O(n log n)
// Worst Case  O(n^2)
// Space Complexity
// Best / Average O(log n)
// Worst  O(n)

// it is the optimal solution for quick sort

export function quickSort(array: Array<number>): Array<number> {
  if (array.length < 2) {
    return array;
  }
  const pivot = array[array.length - 1];
  let left = [];
  let right = [];

  for (let index = 0; index < array.length - 1; index++) {
    if (array[index] < pivot) {
      left.push(array[index]);
    } else {
      right.push(array[index]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
