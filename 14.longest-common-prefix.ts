/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (40.83%)
 * Likes:    11498
 * Dislikes: 3552
 * Total Accepted:    2M
 * Total Submissions: 5M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 *
 * Example 1:
 *
 *
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 *
 * Example 2:
 *
 *
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lowercase English letters.
 *
 *
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";
  const strsLengths: number[] = strs.map((item) => item.length);
  const minLen: number = Math.min(...strsLengths);
  let temp: string = strs[0].slice(0, minLen);
  while (temp) {
    if (strs.every((item) => item.startsWith(temp))) {
      return temp;
    }
    temp = temp.slice(0, temp.length - 1);
  }
  return "";
}
// @lc code=end
