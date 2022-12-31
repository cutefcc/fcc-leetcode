/*
 * @lc app=leetcode id=77 lang=typescript
 *
 * [77] Combinations
 *
 * https://leetcode.com/problems/combinations/description/
 *
 * algorithms
 * Medium (66.27%)
 * Likes:    5491
 * Dislikes: 174
 * Total Accepted:    624.2K
 * Total Submissions: 939.5K
 * Testcase Example:  '4\n2'
 *
 * Given two integers n and k, return all possible combinations of k numbers
 * chosen from the range [1, n].
 *
 * You may return the answer in any order.
 *
 *
 * Example 1:
 *
 *
 * Input: n = 4, k = 2
 * Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
 * Explanation: There are 4 choose 2 = 6 total combinations.
 * Note that combinations are unordered, i.e., [1,2] and [2,1] are considered
 * to be the same combination.
 *
 *
 * Example 2:
 *
 *
 * Input: n = 1, k = 1
 * Output: [[1]]
 * Explanation: There is 1 choose 1 = 1 total combination.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 20
 * 1 <= k <= n
 *
 *
 */

// @lc code=start
function combine(n: number, k: number): number[][] {
  // 利用回溯算法，也算暴力求解
  let resArr: number[][] = [];
  // 递归函数
  function backTracking(
    n: number,
    k: number,
    startIndex: number,
    tempArr: number[]
  ): void {
    if (tempArr.length === k) {
      resArr.push(tempArr.slice());
      return;
    }
    for (let i = startIndex; i <= n - k + 1 + tempArr.length; i++) {
      tempArr.push(i);
      backTracking(n, k, i + 1, tempArr);
      tempArr.pop();
    }
  }
  backTracking(n, k, 1, []);
  return resArr;
}
// @lc code=end
