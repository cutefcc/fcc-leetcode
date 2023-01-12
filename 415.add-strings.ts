/*
 * @lc app=leetcode id=415 lang=typescript
 *
 * [415] Add Strings
 *
 * https://leetcode.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (52.59%)
 * Likes:    4111
 * Dislikes: 623
 * Total Accepted:    540K
 * Total Submissions: 1M
 * Testcase Example:  '"11"\n"123"'
 *
 * Given two non-negative integers, num1 and num2 represented as string, return
 * the sum of num1 and num2 as a string.
 *
 * You must solve the problem without using any built-in library for handling
 * large integers (such as BigInteger). You must also not convert the inputs to
 * integers directly.
 *
 *
 * Example 1:
 *
 *
 * Input: num1 = "11", num2 = "123"
 * Output: "134"
 *
 *
 * Example 2:
 *
 *
 * Input: num1 = "456", num2 = "77"
 * Output: "533"
 *
 *
 * Example 3:
 *
 *
 * Input: num1 = "0", num2 = "0"
 * Output: "0"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= num1.length, num2.length <= 10^4
 * num1 and num2 consist of only digits.
 * num1 and num2 don't have any leading zeros except for the zero itself.
 *
 *
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  // 字符串 相加
  let arr1: string[] = num1.split("");
  let arr2: string[] = num2.split("");
  // 是否有进位
  let flag = false;
  let res: number[] = [];
  while (arr1.length > 0 || arr2.length > 0 || flag) {
    let s1 = arr1.pop();
    let s2 = arr2.pop();
    let sum: number =
      (s1 ? Number(s1) : 0) + (s2 ? Number(s2) : 0) + (flag ? 1 : 0);
    if (sum >= 10) {
      sum = sum % 10;
      res.unshift(sum);
      flag = true;
    } else {
      flag = false;
      res.unshift(sum);
    }
  }
  return res.join("");
}
// @lc code=end
