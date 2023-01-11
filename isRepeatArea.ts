// 重叠区间，输入一个无序的二维数组如：[[1,3], [4，5], [2, 4]]，判断该二维数组是否存在重叠，存在的话返回true，没有重叠返回false
function isRepeatArea(arr: number[][]): boolean {
  arr.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] < arr[i - 1][1]) {
      return true;
    }
  }
  return false;
}
console.log(
  "isRepeatArea",
  isRepeatArea([
    [1, 3],
    [4, 5],
    [2, 4],
  ])
);
