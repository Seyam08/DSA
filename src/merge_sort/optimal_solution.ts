// Time Complexity O(n log n)
// Space Complexity O(n)

// it is the optimal solution for insertion sort

export function mergeSort(array: Array<number>): Array<number> {
  if (array.length < 2) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const leftArr = array.slice(0, mid);
  const rightArr = array.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr: Array<number>, rightArr: Array<number>): Array<number> {
  const sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      sortedArr.push(leftArr.shift()!);
    } else {
      sortedArr.push(rightArr.shift()!);
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}
