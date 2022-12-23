/*
 * @lc app=leetcode id=704 lang=typescript
 *
 * [704] Binary Search
 *
 * https://leetcode.com/problems/binary-search/description/
 *
 * algorithms
 * Easy (55.09%)
 * Likes:    7521
 * Dislikes: 162
 * Total Accepted:    1.4M
 * Total Submissions: 2.6M
 * Testcase Example:  '[-1,0,3,5,9,12]\n9'
 *
 * Given an array of integers nums which is sorted in ascending order, and an
 * integer target, write a function to search target in nums. If target exists,
 * then return its index. Otherwise, return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 10^4
 * -10^4 < nums[i], target < 10^4
 * All the integers in nums are unique.
 * nums is sorted in ascending order.
 *
 *
 */

// @lc code=start
function search(nums: number[], target: number): number {
  // 二分查找 - 左闭右闭 [] 写法
  //   let l = 0;
  //   let r = nums.length - 1;
  //   while (l <= r) {
  //     let midd = Math.floor((l + r) / 2);
  //     if (nums[midd] > target) {
  //       r = midd - 1;
  //     } else if (nums[midd] < target) {
  //       l = midd + 1;
  //     } else {
  //       return midd;
  //     }
  //   }
  //   return -1;
  // 二分查找 - 左闭右开 [)
  let l = 0;
  let r = nums.length;
  while (l < r) {
    let midd = Math.floor((l + r) / 2);
    if (nums[midd] > target) {
      r = midd;
    } else if (nums[midd] < target) {
      l = midd + 1;
    } else {
      return midd;
    }
  }
  return -1;
}
// @lc code=end
