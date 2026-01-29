// Time Complexity O(m * n^m)
// Space Complexity O(m)

export function cartesianProduct<T>(...arrays: T[][]): T[][] {
  if (arrays.length === 0) return [[]];
  const [first, ...rest] = arrays;
  const result: T[][] = [];
  for (const item of first) {
    for (const sub of cartesianProduct(...rest)) {
      result.push([item, ...sub]);
    }
  }
  return result;
}
