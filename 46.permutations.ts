/*
 * @lc app=leetcode id=46 lang=typescript
 *
 * [46] Permutations
 *
 * https://leetcode.com/problems/permutations/description/
 *
 * algorithms
 * Medium (74.91%)
 * Likes:    14255
 * Dislikes: 240
 * Total Accepted:    1.5M
 * Total Submissions: 1.9M
 * Testcase Example:  '[1,2,3]'
 *
 * Given an array nums of distinct integers, return all the possible
 * permutations. You can return the answer in any order.
 *
 *
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 * Example 2:
 * Input: nums = [0,1]
 * Output: [[0,1],[1,0]]
 * Example 3:
 * Input: nums = [1]
 * Output: [[1]]
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * All the integers of nums are unique.
 *
 *
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  // 全排列 - 回溯
  const res: number[][] = [],
    path: number[] = [];
  backtracking(nums, nums.length, []);
  return res;
  function backtracking(n: number[], k: number, used: boolean[]) {
    if (path.length === k) {
      res.push(Array.from(path));
    }
    for (let i = 0; i < k; i++) {
      if (used[i]) continue;
      path.push(n[i]);
      used[i] = true;
      backtracking(n, k, used);
      path.pop();
      used[i] = false;
    }
  }
}
permute([1, 2, 3]);
// @lc code=end
