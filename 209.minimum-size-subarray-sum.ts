/*
 * @lc app=leetcode id=209 lang=typescript
 *
 * [209] Minimum Size Subarray Sum
 *
 * https://leetcode.com/problems/minimum-size-subarray-sum/description/
 *
 * algorithms
 * Medium (44.55%)
 * Likes:    8423
 * Dislikes: 235
 * Total Accepted:    641.2K
 * Total Submissions: 1.4M
 * Testcase Example:  '7\n[2,3,1,2,4,3]'
 *
 * Given an array of positive integers nums and a positive integer target,
 * return the minimal length of a subarray whose sum is greater than or equal
 * to target. If there is no such subarray, return 0 instead.
 *
 *
 * Example 1:
 *
 *
 * Input: target = 7, nums = [2,3,1,2,4,3]
 * Output: 2
 * Explanation: The subarray [4,3] has the minimal length under the problem
 * constraint.
 *
 *
 * Example 2:
 *
 *
 * Input: target = 4, nums = [1,4,4]
 * Output: 1
 *
 *
 * Example 3:
 *
 *
 * Input: target = 11, nums = [1,1,1,1,1,1,1,1]
 * Output: 0
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= target <= 10^9
 * 1 <= nums.length <= 10^5
 * 1 <= nums[i] <= 10^4
 *
 *
 *
 * Follow up: If you have figured out the O(n) solution, try coding another
 * solution of which the time complexity is O(n log(n)).
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  // 用滑动窗口的解法
  let res = nums.length + 1; // 输出结果初始化，这里是 >= nums.length + 1 都行
  let i = 0; // 开始指针
  let sum = 0; // 窗口内元素的和
  // 这层循环表示的是 结束指针
  for (let j = 0; j <= nums.length - 1; j++) {
    // 求滑动窗口内的sums
    sum += nums[j];
    // let sum = nums.slice(i, j + 1).reduce((pre, cur) => pre + cur);// 这一步有点耗时，改为上面那一行
    while (sum >= target && i <= j) {
      res = Math.min(res, j - i + 1);
      sum = sum - nums[i];
      i++;
    }
  }
  return res === nums.length + 1 ? 0 : res;
}
// @lc code=end
