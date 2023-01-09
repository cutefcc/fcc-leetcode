/*
 * @lc app=leetcode id=215 lang=typescript
 *
 * [215] Kth Largest Element in an Array
 *
 * https://leetcode.com/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (65.78%)
 * Likes:    12883
 * Dislikes: 645
 * Total Accepted:    1.6M
 * Total Submissions: 2.5M
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * Given an integer array nums and an integer k, return the k^th largest
 * element in the array.
 *
 * Note that it is the k^th largest element in the sorted order, not the k^th
 * distinct element.
 *
 * You must solve it in O(n) time complexity.
 *
 *
 * Example 1:
 * Input: nums = [3,2,1,5,6,4], k = 2
 * Output: 5
 * Example 2:
 * Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
 * Output: 4
 *
 *
 * Constraints:
 *
 *
 * 1 <= k <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 *
 *
 */

// @lc code=start
function findKthLargest(nums: number[], k: number): number {
  // 求数组中的第K个最大元素，转化为排序，求倒数第k个元素
  function getMask(a: number[], startIndex: number, endIndex: number) {
    let povit = a[startIndex]; // 取第一个元素为基准值
    let mask: number = startIndex; // 单边循环指针
    for (let i = startIndex + 1; i <= endIndex; i++) {
      // 如果判断比基准值小，就做两件事情（1. 指针++ 2. 指针所在值和当前值交换）
      if (a[i] < povit) {
        mask++;
        let temp = a[mask];
        a[mask] = a[i];
        a[i] = temp;
      }
    }
    // 最后再将指针所在位置 与基准值交换（让基准值处于中间位置）
    a[startIndex] = a[mask];
    a[mask] = povit;
    // 最后记得返回基准值的索引位置
    return mask;
  }
  function quickSort(arr: number[], startIndex: number, endIndex: number) {
    if (startIndex >= endIndex) {
      return;
    }
    // 得到基准值索引，同时将小于基准值的放在左边，大于基准值的放在右边（升序）
    let mask = getMask(arr, startIndex, endIndex);
    quickSort(arr, startIndex, mask - 1);
    quickSort(arr, mask + 1, endIndex);
  }
  quickSort(nums, 0, nums.length - 1);
  return nums[nums.length - k];
}
// @lc code=end
