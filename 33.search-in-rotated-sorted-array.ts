/*
 * @lc app=leetcode id=33 lang=typescript
 *
 * [33] Search in Rotated Sorted Array
 *
 * https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (38.73%)
 * Likes:    19295
 * Dislikes: 1163
 * Total Accepted:    1.9M
 * Total Submissions: 4.8M
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * There is an integer array nums sorted in ascending order (with distinct
 * values).
 *
 * Prior to being passed to your function, nums is possibly rotated at an
 * unknown pivot index k (1 <= k < nums.length) such that the resulting array
 * is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]
 * (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3
 * and become [4,5,6,7,0,1,2].
 *
 * Given the array nums after the possible rotation and an integer target,
 * return the index of target if it is in nums, or -1 if it is not in nums.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 *
 * Example 1:
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 * Example 2:
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 * Example 3:
 * Input: nums = [1], target = 0
 * Output: -1
 *
 *
 * Constraints:
 *
 *
 * 1 <= nums.length <= 5000
 * -10^4 <= nums[i] <= 10^4
 * All values of nums are unique.
 * nums is an ascending array that is possibly rotated.
 * -10^4 <= target <= 10^4
 *
 *
 */

// @lc code=start
function search(nums: number[], target: number): number {
  function binSearch(nums: number[], target: number): number {
    // 二分查找 - 左闭右闭 [] 写法
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
      let midd = Math.floor((l + r) / 2);
      if (nums[midd] > target) {
        r = midd - 1;
      } else if (nums[midd] < target) {
        l = midd + 1;
      } else {
        return midd;
      }
    }
    return -1;
  }
  // 先找到旋转的位置
  let index: number = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[0] > nums[i]) {
      index++;
    } else {
      break;
    }
  }
  let nums1 = nums.slice(0, nums.length - index);
  let nums2 = nums.slice(nums.length - index);
  let resIndex = -1;

  if (nums1.length > 0) {
    if (target >= nums1[0]) {
      resIndex = binSearch(nums1, target);
    } else {
      if (nums2.length > 0) {
        let i = binSearch(nums2, target);
        resIndex = i === -1 ? -1 : nums1.length + i;
      } else {
        resIndex = -1;
      }
    }
  } else {
    resIndex = binSearch(nums2, target);
  }
  return resIndex;
}
// @lc code=end
