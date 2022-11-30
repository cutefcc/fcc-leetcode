/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (42.05%)
 * Likes:    10705
 * Dislikes: 504
 * Total Accepted:    1.8M
 * Total Submissions: 4.4M
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * Given a sorted array of distinct integers and a target value, return the
 * index if the target is found. If not, return the index where it would be if
 * it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 * nums contains distinct values sorted in ascending order.
 * -10^4 <= target <= 10^4
 *
 *
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  // 给一个已排好序的 无重复数字的数组，查找数字target，找到了就返回其索引，没找到就返回其应该被插入的索引
  // O(log n) 已排好序 无重复  就想到二分查找，没找到的话，left就是其该被插入的地方
  let left: number = 0;
  let right: number = nums.length - 1;
  while (left <= right) {
    // 计算中间值 向下取整
    let midd = Math.floor((left + right) / 2);
    if (nums[midd] === target) {
      return midd;
    } else if (nums[midd] > target) {
      right = midd - 1;
    } else if (nums[midd] < target) {
      left = midd + 1;
    }
  }
  return left;
}
// @lc code=end
