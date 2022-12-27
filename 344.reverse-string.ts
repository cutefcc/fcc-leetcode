/*
 * @lc app=leetcode id=344 lang=typescript
 *
 * [344] Reverse String
 *
 * https://leetcode.com/problems/reverse-string/description/
 *
 * algorithms
 * Easy (76.26%)
 * Likes:    6628
 * Dislikes: 1035
 * Total Accepted:    1.9M
 * Total Submissions: 2.5M
 * Testcase Example:  '["h","e","l","l","o"]'
 *
 * Write a function that reverses a string. The input string is given as an
 * array of characters s.
 *
 * You must do this by modifying the input array in-place with O(1) extra
 * memory.
 *
 *
 * Example 1:
 * Input: s = ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 * Example 2:
 * Input: s = ["H","a","n","n","a","h"]
 * Output: ["h","a","n","n","a","H"]
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^5
 * s[i] is a printable ascii character.
 *
 *
 */

// @lc code=start
/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  // 不能额外空间， 想到双指针吧
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    let temp: string = s[l];
    s[l++] = s[r];
    s[r--] = temp;
  }
}
// @lc code=end
