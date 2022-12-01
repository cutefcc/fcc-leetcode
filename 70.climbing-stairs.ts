/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 *
 * https://leetcode.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (51.76%)
 * Likes:    15572
 * Dislikes: 466
 * Total Accepted:    2M
 * Total Submissions: 3.9M
 * Testcase Example:  '2'
 *
 * You are climbing a staircase. It takes n steps to reach the top.
 *
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can
 * you climb to the top?
 *
 *
 * Example 1:
 *
 *
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 *
 * Example 2:
 *
 *
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 45
 *
 *
 */

// @lc code=start
function climbStairs(n: number): number {
  // 计算爬楼梯一共有多少种爬法，每次只能爬1 或者 2步
  // 规律是C(n) = C(n-1) + C(n-2)
  // 下面的时间复杂度是 O(2^n) 会导致超时
  //   if (n === 1) return 1;
  //   if (n === 2) return 2;
  //   return climbStairs(n - 1) + climbStairs(n - 2);
  // 需要优化，定义一个map 将计算过的值存起来，得到一个时间复杂度 O(n) 空间复杂度O(n) 的算法
  let map = {};
  function climb(x: number, obj) {
    if (x <= 3) return x;
    if (!!obj[x]) {
      return obj[x];
    }
    let res = climb(x - 1, map) + climb(x - 2, map);
    obj[x] = res;
    return res;
  }
  return climb(n, map);
}
// @lc code=end
