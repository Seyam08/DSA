// Time Complexity O(n^2)
// Space Complexity O(1)

// it is the optimal solution for bubble sort

export function bubbleSort(arr: Array<number>): Array<number> {
  let swapped: boolean;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}
