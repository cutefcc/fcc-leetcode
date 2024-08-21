/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 *
 * https://leetcode.com/problems/sqrtx/description/
 *
 * algorithms
 * Easy (37.09%)
 * Likes:    5346
 * Dislikes: 3711
 * Total Accepted:    1.3M
 * Total Submissions: 3.5M
 * Testcase Example:  '4'
 *
 * Given a non-negative integer x, return the square root of x rounded down to
 * the nearest integer. The returned integer should be non-negative as well.
 *
 * You must not use any built-in exponent function or operator.
 *
 *
 * For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: x = 4
 * Output: 2
 * Explanation: The square root of 4 is 2, so we return 2.
 *
 *
 * Example 2:
 *
 *
 * Input: x = 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since we round it down
 * to the nearest integer, 2 is returned.
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= x <= 2^31 - 1
 *
 *
 */

// @lc code=start
function mySqrt(x: number): number {
  if (x === 0 || x === 1) return x;

  let left = 1;
  let right = x;
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === x) {
      return mid; // 精确匹配
    } else if (square < x) {
      left = mid + 1;
      result = mid; // 保存最近的符合条件的整数
    } else {
      right = mid - 1;
    }
  }

  return result;
}

// 测试用例
console.log(mySqrt(4)); // 输出: 2
console.log(mySqrt(8)); // 输出: 2
console.log(mySqrt(16)); // 输出: 4
console.log(mySqrt(1)); // 输出: 1
console.log(mySqrt(0)); // 输出: 0

/*
代码解释：
特殊情况处理：

如果 x 是 0 或 1，直接返回 x，因为它们的平方根就是它们自身。
二分查找算法：

定义左右边界 left 和 right，初始分别为 1 和 x。
在每次循环中，计算中间值 mid，并计算其平方值。
如果 mid 的平方等于 x，直接返回 mid。
如果 mid 的平方小于 x，说明结果在右半边，将 left 移动到 mid + 1，同时记录当前 mid 作为最近的符合条件的整数。
如果 mid 的平方大于 x，说明结果在左半边，将 right 移动到 mid - 1。
返回结果：

最终返回记录下来的符合条件的整数 result。
这种算法的时间复杂度是 O(log n)，其中 n 是输入的数字。这种方式非常适合于大范围数字的平方根计算，并且不会溢出。

*/
// @lc code=end
