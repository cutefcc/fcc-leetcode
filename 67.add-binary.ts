/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 *
 * https://leetcode.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (51.40%)
 * Likes:    6336
 * Dislikes: 665
 * Total Accepted:    980.9K
 * Total Submissions: 1.9M
 * Testcase Example:  '"11"\n"1"'
 *
 * Given two binary strings a and b, return their sum as a binary string.
 *
 *
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 * Example 2:
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 *
 *
 * Constraints:
 *
 *
 * 1 <= a.length, b.length <= 10^4
 * a and b consist only of '0' or '1' characters.
 * Each string does not contain leading zeros except for the zero itself.
 *
 *
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  // 理解题目：二进制的加法，输出也是二进制 string 表示
  // 解法：用数组模拟二进制加法
  let i = a.length - 1; // a 的指针，从右边开始
  let j = b.length - 1; // b 的指针，从右边开始
  let carry = false; // 是否有进位 标志，初始无进位
  let res: number[] = []; // 结果
  // 继续循环计算的边界：a 或者 b任意一个没有计算完 或者 还有进位
  while (i >= 0 || j >= 0 || carry) {
    let sum =
      (i >= 0 ? Number(a[i]) : 0) +
      (j >= 0 ? Number(b[j]) : 0) +
      (carry ? 1 : 0);
    if (sum === 0 || sum === 1) {
      res.push(sum);
      carry = false; // 本次加法没有产生进位
    } else if (sum === 2) {
      res.push(0);
      carry = true; // 进位
    } else if (sum === 3) {
      res.push(1);
      carry = true; // 进位
    }
    // 指针左移
    i--;
    j--;
  }
  return res.reverse().join("");
}
// @lc code=end
