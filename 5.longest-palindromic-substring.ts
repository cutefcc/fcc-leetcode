/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (32.42%)
 * Likes:    22879
 * Dislikes: 1328
 * Total Accepted:    2.2M
 * Total Submissions: 6.8M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "cbbd"
 * Output: "bb"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 1000
 * s consist of only digits and English letters.
 *
 *
 */

// @lc code=start
function longestPalindrome(s: string): string {
  function Palindrome(str) {
    let len = str.length;
    let left = 0;
    let right = len - 1;
    let flg = true;
    while (left < right) {
      if (str[left] === str[right]) {
        left++;
        right--;
      } else {
        flg = false;
        break;
      }
    }
    return flg;
  }
  for (let i = s.length - 1; i >= 0; i--) {
    let left = 0;
    let right = i;
    while (right < s.length) {
      // 判断窗口内是否是回文的
      let temp: string = s.slice(left, right + 1);
      if (Palindrome(temp)) {
        return temp;
      } else {
        left++;
        right++;
      }
    }
  }
  return "";
}
// @lc code=end
