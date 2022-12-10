/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (33.80%)
 * Likes:    30713
 * Dislikes: 1321
 * Total Accepted:    4.1M
 * Total Submissions: 12.1M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string s, find the length of the longest substring without repeating
 * characters.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not
 * a substring.
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= s.length <= 5 * 10^4
 * s consists of English letters, digits, symbols and spaces.
 *
 *
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  // 解法2 滑动窗口
  let r = -1; // 右指针
  let max = 0; // 最长无重复子串
  let set = new Set(); // 用于存放不重复的字符
  for (let i = 0; i < s.length; i++) {
    // 移动左指针时需要移除set 字符
    if (i !== 0) {
      set.delete(s.charAt(i - 1));
    }
    // 不断移动右指针
    while (r + 1 < s.length && !set.has(s.charAt(r + 1))) {
      set.add(s.charAt(r + 1));
      r++;
    }
    // 更新max
    max = Math.max(max, r - i + 1);
  }
  return max;
}
// @lc code=end
