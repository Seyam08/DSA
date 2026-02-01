export function climbStairs(n: number): number {
  let noOfWays = [1, 2];
  for (let index = 2; index < n; index++) {
    noOfWays[index] = noOfWays[index - 1] + noOfWays[index - 2];
  }
  return noOfWays[n - 1];
}
