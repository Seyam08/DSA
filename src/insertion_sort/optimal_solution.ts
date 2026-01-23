// Time Complexity O(n^2)
// Space Complexity O(1)

// it is the optimal solution for insertion sort

export function insertionSort(array: Array<number>): Array<number> {
  for (let index = 1; index < array.length; index++) {
    const temp = array[index];
    let j = index - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = temp;
  }

  return array;
}
