/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
 *
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (59.85%)
 * Likes:    3330
 * Dislikes: 286
 * Total Accepted:    619.8K
 * Total Submissions: 1M
 * Testcase Example:  '3'
 *
 * Given an integer rowIndex, return the rowIndex^th (0-indexed) row of the
 * Pascal's triangle.
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it as shown:
 *
 *
 * Example 1:
 * Input: rowIndex = 3
 * Output: [1,3,3,1]
 * Example 2:
 * Input: rowIndex = 0
 * Output: [1]
 * Example 3:
 * Input: rowIndex = 1
 * Output: [1,1]
 *
 *
 * Constraints:
 *
 *
 * 0 <= rowIndex <= 33
 *
 *
 *
 * Follow up: Could you optimize your algorithm to use only O(rowIndex) extra
 * space?
 *
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
  // 这题和上一题118 非常的类似，只需要将上一题的二维数组的最后一个元素返回即可
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
  for (let i = 0; i < rowIndex; i++) {
    res.push(getNextArr(res[i]));
  }
  return res[res.length - 1];
}
// @lc code=end
