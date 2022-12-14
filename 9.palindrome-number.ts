/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 *
 * https://leetcode.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (52.98%)
 * Likes:    7948
 * Dislikes: 2360
 * Total Accepted:    2.7M
 * Total Submissions: 5.1M
 * Testcase Example:  '121'
 *
 * Given an integer x, return true if x is a palindrome, and false
 * otherwise.
 *
 *
 * Example 1:
 *
 *
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 *
 *
 * Example 2:
 *
 *
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it
 * becomes 121-. Therefore it is not a palindrome.
 *
 *
 * Example 3:
 *
 *
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a
 * palindrome.
 *
 *
 *
 * Constraints:
 *
 *
 * -2^31 <= x <= 2^31 - 1
 *
 *
 *
 * Follow up: Could you solve it without converting the integer to a string?
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  // 是否回文
  // 解法1，转为string，在反转，和最初进行比较
  //   if (x < 0) return false;
  //   return Number(x.toString().split("").reverse().join("")) === x;
  // 解法2，利用中间数组将x的每一位存储起来，在利用双指针判断前后是否相等
  // 负数都判定为非回文
  if (x < 0) return false;
  let temp: number[] = [];
  while (x) {
    let last: number = x % 10;
    temp.push(last);
    x = (x - last) / 10;
  }
  let left = 0,
    right = temp.length - 1;
  while (left <= right) {
    if (temp[left++] !== temp[right--]) {
      return false;
    }
  }
  return true;
}
// @lc code=end
