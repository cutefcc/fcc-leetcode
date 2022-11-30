/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 *
 * https://leetcode.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (43.41%)
 * Likes:    5930
 * Dislikes: 4598
 * Total Accepted:    1.5M
 * Total Submissions: 3.4M
 * Testcase Example:  '[1,2,3]'
 *
 * You are given a large integer represented as an integer array digits, where
 * each digits[i] is the i^th digit of the integer. The digits are ordered from
 * most significant to least significant in left-to-right order. The large
 * integer does not contain any leading 0's.
 *
 * Increment the large integer by one and return the resulting array of
 * digits.
 *
 *
 * Example 1:
 *
 *
 * Input: digits = [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * Incrementing by one gives 123 + 1 = 124.
 * Thus, the result should be [1,2,4].
 *
 *
 * Example 2:
 *
 *
 * Input: digits = [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 * Incrementing by one gives 4321 + 1 = 4322.
 * Thus, the result should be [4,3,2,2].
 *
 *
 * Example 3:
 *
 *
 * Input: digits = [9]
 * Output: [1,0]
 * Explanation: The array represents the integer 9.
 * Incrementing by one gives 9 + 1 = 10.
 * Thus, the result should be [1,0].
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= digits.length <= 100
 * 0 <= digits[i] <= 9
 * digits does not contain any leading 0's.
 *
 *
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  // 1 <= digits.length <= 100  排除转为数字 再加1 再转为数组的办法，超出表达界限
  let right = digits.length - 1;
  while (right >= 0) {
    let temp = digits[right] + 1; // 加1
    if (temp !== 10) {
      // 不等于10 没有进位
      digits[right] = temp;
      break;
    } else {
      // 处理进位
      if (right === 0) {
        // 第一位了，置0 后 需要插入一个1
        digits[right] = 0;
        digits.unshift(1);
        break;
      } else {
        // 不是第一位 置0，指针左移，继续上一位取加1
        digits[right] = 0;
        right--;
      }
    }
  }
  return digits;
}
// @lc code=end
