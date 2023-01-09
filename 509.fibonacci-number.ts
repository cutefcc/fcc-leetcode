/*
 * @lc app=leetcode id=509 lang=typescript
 *
 * [509] Fibonacci Number
 *
 * https://leetcode.com/problems/fibonacci-number/description/
 *
 * algorithms
 * Easy (69.24%)
 * Likes:    5681
 * Dislikes: 302
 * Total Accepted:    1.1M
 * Total Submissions: 1.7M
 * Testcase Example:  '2'
 *
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the
 * Fibonacci sequence, such that each number is the sum of the two preceding
 * ones, starting from 0 and 1. That is,
 *
 *
 * F(0) = 0, F(1) = 1
 * F(n) = F(n - 1) + F(n - 2), for n > 1.
 *
 *
 * Given n, calculate F(n).
 *
 *
 * Example 1:
 *
 *
 * Input: n = 2
 * Output: 1
 * Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 3
 * Output: 2
 * Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
 *
 *
 * Example 3:
 *
 *
 * Input: n = 4
 * Output: 3
 * Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= n <= 30
 *
 *
 */

// @lc code=start
function fib(n: number): number {
  // F(n) = F(n - 1) + F(n - 2) 首先想到递归
  // if (n === 0) return 0;
  // if (n === 1) return 1;
  // return fib(n - 1) + fib(n - 2);
  // 动态规划
  // 1. 确定dp数组以及下标的含义 - dp[i]的定义为：第i个数的斐波那契数值是dp[i]
  // 2. 确定递推公式 - 状态转移方程 dp[i] = dp[i - 1] + dp[i - 2];
  // 3. dp数组如何初始化 - dp[0] = 0; dp[1] = 1;
  // 4. 确定遍历顺序 - 从递归公式dp[i] = dp[i - 1] + dp[i - 2];中可以看出，dp[i]是依赖 dp[i - 1] 和 dp[i - 2]，那么遍历的顺序一定是从前到后遍历的
  // 5. 举例推导dp数组 - 当N为10的时候，dp数组应该是如下的数列：0 1 1 2 3 5 8 13 21 34 55 如果代码写出来，发现结果不对，就把dp数组打印出来看看和我们推导的数列是不是一致的
  // 下面是动态规划的解法，时间复杂度是O(n) 空间复杂度也是 O(n)
  // let arr: number[] = [];
  // arr[0] = 0;
  // arr[1] = 1;
  // if (n === 0 || n === 1) {
  //   return arr[n];
  // }
  // for (var k = 2; k <= n; k++) {
  //   arr[k] = arr[k - 1] + arr[k - 2];
  // }
  // return arr[k - 1];
  // 优化为时间复杂度是O(n) 空间复杂度也是 O(1)
  let arr: number[] = [];
  arr[0] = 0;
  arr[1] = 1;
  if (n === 0 || n === 1) {
    return arr[n];
  }
  for (var k = 2; k <= n; k++) {
    let sum = arr[0] + arr[1];
    arr[0] = arr[1];
    arr[1] = sum;
  }
  return arr[1];
}
// @lc code=end
