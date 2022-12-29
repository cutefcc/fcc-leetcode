/*
 * @lc app=leetcode id=1047 lang=typescript
 *
 * [1047] Remove All Adjacent Duplicates In String
 *
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/
 *
 * algorithms
 * Easy (70.34%)
 * Likes:    5263
 * Dislikes: 205
 * Total Accepted:    413.1K
 * Total Submissions: 588.6K
 * Testcase Example:  '"abbaca"'
 *
 * You are given a string s consisting of lowercase English letters. A
 * duplicate removal consists of choosing two adjacent and equal letters and
 * removing them.
 *
 * We repeatedly make duplicate removals on s until we no longer can.
 *
 * Return the final string after all such duplicate removals have been made. It
 * can be proven that the answer is unique.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "abbaca"
 * Output: "ca"
 * Explanation:
 * For example, in "abbaca" we could remove "bb" since the letters are adjacent
 * and equal, and this is the only possible move.  The result of this move is
 * that the string is "aaca", of which only "aa" is possible, so the final
 * string is "ca".
 *
 *
 * Example 2:
 *
 *
 * Input: s = "azxxzy"
 * Output: "ay"
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^5
 * s consists of lowercase English letters.
 *
 *
 */

// @lc code=start
function removeDuplicates(s: string): string {
  // 删除字符串中的所有相邻重复项
  // 用栈
  let stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    // 栈不为空
    if (stack.length > 0) {
      // 判断栈顶元素 和 当前元素是否相同
      if (stack[stack.length - 1] === s[i]) {
        // 移除栈顶元素
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    } else {
      // 栈为空，让当前元素入栈
      stack.push(s[i]);
    }
  }
  return stack.join("");
}
// @lc code=end
