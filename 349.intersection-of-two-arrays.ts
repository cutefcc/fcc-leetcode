/*
 * @lc app=leetcode id=349 lang=typescript
 *
 * [349] Intersection of Two Arrays
 *
 * https://leetcode.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (70.38%)
 * Likes:    4009
 * Dislikes: 2044
 * Total Accepted:    779.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * Given two integer arrays nums1 and nums2, return an array of their
 * intersection. Each element in the result must be unique and you may return
 * the result in any order.
 *
 *
 * Example 1:
 *
 *
 * Input: nums1 = [1,2,2,1], nums2 = [2,2]
 * Output: [2]
 *
 *
 * Example 2:
 *
 *
 * Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * Output: [9,4]
 * Explanation: [4,9] is also accepted.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums1.length, nums2.length <= 1000
 * 0 <= nums1[i], nums2[i] <= 1000
 *
 *
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  // 题目理解：返回两个数组的交集
  let res: number[] = [];
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i]) && !res.includes(nums1[i])) {
      res.push(nums1[i]);
    }
  }
  return res;
}
// @lc code=end
