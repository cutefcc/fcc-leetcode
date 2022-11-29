/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (49.09%)
 * Likes:    40578
 * Dislikes: 1303
 * Total Accepted:    8.4M
 * Total Submissions: 17M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers nums and an integer target, return indices of the
 * two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 *
 * You can return the answer in any order.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= nums.length <= 10^4
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * Only one valid answer exists.
 *
 *
 *
 * Follow-up: Can you come up with an algorithm that is less than O(n^2) time
 * complexity?
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  //  解法1:时间复杂度 O(n^2)，先拿第一个元素和后面的依次相加，再拿第二个元素和后面的依次相加
  //   for (let i = 0; i <= nums.length - 2; i++) {
  //     for (let j = i + 1; j <= nums.length - 1; j++) {
  //       if (nums[i] + nums[j] === target) {
  //         return [i, j];
  //       }
  //     }
  //   }
  //   return [];
  // 解法2: O(n) 利用map 保存每一个元素及其 index，再计算后面元素和目标元素直接的diff，再在map里面去找是否有这个diff
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    if (map.has(diff)) {
      return [<number>map.get(diff), i];
    }
    map.set(num, i);
  }
  return [];
}
// @lc code=end
