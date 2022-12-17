/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (32.34%)
 * Likes:    22972
 * Dislikes: 2097
 * Total Accepted:    2.4M
 * Total Submissions: 7.4M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an integer array nums, return all the triplets [nums[i], nums[j],
 * nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] +
 * nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 * Explanation:
 * nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 * nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 * nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 * The distinct triplets are [-1,0,1] and [-1,-1,2].
 * Notice that the order of the output and the order of the triplets does not
 * matter.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0,1,1]
 * Output: []
 * Explanation: The only possible triplet does not sum up to 0.
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 * Explanation: The only possible triplet sums up to 0.
 *
 *
 *
 * Constraints:
 *
 *
 * 3 <= nums.length <= 3000
 * -10^5 <= nums[i] <= 10^5
 *
 *
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
  // 第一能想到的是利用n个两数之和去解决，这种方法会存在二维数组重复的问题
  // a + b + c =
  // 用双指针
  let res: number[][] = [];
  // 升序排列
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    // 如果当前数已经>0了，结果肯定都是>0 了，直接返回
    if (nums[i] > 0) {
      return res;
    }
    // 对 a 去重
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    // 左指针
    let l = i + 1;
    // 右指针
    let r = nums.length - 1;
    while (l < r) {
      // 三数之和
      let flag = nums[i] + nums[l] + nums[r];
      if (flag < 0) {
        l++;
      } else if (flag > 0) {
        r--;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        // 对b去重
        while (nums[l] === nums[l + 1] && l < r) {
          l++;
        }
        // 对c去重
        while (nums[r] === nums[r - 1] && l < r) {
          r--;
        }
        l++;
        r--;
      }
    }
  }
  return res;
}
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// @lc code=end
