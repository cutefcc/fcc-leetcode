/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 *
 * https://leetcode.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (69.40%)
 * Likes:    8579
 * Dislikes: 283
 * Total Accepted:    1.1M
 * Total Submissions: 1.5M
 * Testcase Example:  '5'
 *
 * Given an integer numRows, return the first numRows of Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it as shown:
 *
 *
 * Example 1:
 * Input: numRows = 5
 * Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * Example 2:
 * Input: numRows = 1
 * Output: [[1]]
 *
 *
 * Constraints:
 *
 *
 * 1 <= numRows <= 30
 *
 *
 */

// @lc code=start
function generate(numRows: number): number[][] {
  // 按照规则（下面的数 = 上面相邻的两个之和）生成一个三角形的二维数组
  // 根据题目，抽象一个通用函数：写一个辅助函数，根据一个输入的数组 得到 其下一个数组
  function getNextArr(a: number[]): number[] {
    if (a.length === 1) return [1, 1];
    let len = a.length;
    // 根据规律，下一个数组两边都是1，中间需要计算的次数是：len - 1, 可以用双指针法
    let res: number[] = [];
    let left = 0;
    let right = len - 1;
    while (left < right) {
      res[left] = a[left] + a[left + 1];
      res[right - 1] = a[right] + a[right - 1];
      left++;
      right--;
    }
    return [1, ...res, 1];
  }
  let res: number[][] = [[1]];
  // 循环numRows - 1次，每次往res里push一个 计算好的数组
  for (let i = 0; i < numRows - 1; i++) {
    res.push(getNextArr(res[i]));
  }
  return res;
}
// @lc code=end
