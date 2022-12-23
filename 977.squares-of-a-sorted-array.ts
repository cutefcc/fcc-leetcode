/*
 * @lc app=leetcode id=977 lang=typescript
 *
 * [977] Squares of a Sorted Array
 *
 * https://leetcode.com/problems/squares-of-a-sorted-array/description/
 *
 * algorithms
 * Easy (71.92%)
 * Likes:    7032
 * Dislikes: 177
 * Total Accepted:    1.3M
 * Total Submissions: 1.8M
 * Testcase Example:  '[-4,-1,0,3,10]'
 *
 * Given an integer array nums sorted in non-decreasing order, return an array
 * of the squares of each number sorted in non-decreasing order.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 * Explanation: After squaring, the array becomes [16,1,0,9,100].
 * After sorting, it becomes [0,1,9,16,100].
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [-7,-3,2,3,11]
 * Output: [4,9,9,49,121]
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 * nums is sorted in non-decreasing order.
 *
 *
 *
 * Follow up: Squaring each element and sorting the new array is very trivial,
 * could you find an O(n) solution using a different approach?
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
  // 求数组元素的平方，并结果需要排序
  // 空间复杂度：O(n) 时间复杂度：O(n) 比 暴力解法（先做平方 再 排序）：O(n + nlog n)还是提升不少的
  let l = 0;
  let r = nums.length - 1;
  let res: number[] = [];
  while (l <= r) {
    if (Math.abs(nums[l]) > Math.abs(nums[r])) {
      res.unshift(nums[l] * nums[l]);
      l++;
    } else {
      res.unshift(nums[r] * nums[r]);
      r--;
    }
  }
  return res;
}
// @lc code=end
