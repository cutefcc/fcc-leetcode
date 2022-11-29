/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (40.62%)
 * Likes:    16906
 * Dislikes: 875
 * Total Accepted:    2.9M
 * Total Submissions: 7M
 * Testcase Example:  '"()"'
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "()"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: s = "()[]{}"
 * Output: true
 *
 *
 * Example 3:
 *
 *
 * Input: s = "(]"
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^4
 * s consists of parentheses only '()[]{}'.
 *
 *
 */

// @lc code=start
function isValid(s: string): boolean {
  // 用栈, 遇到开始括号，就将对应的右括号入栈，遇到右括号，就出栈对比(不相同就不是合法字符串)，最后再看栈的长度是否为0
  if (s.length === 0 || s.length % 2 !== 0) {
    return false;
  }
  const l = ["(", "[", "{"];
  const r = [")", "]", "}"];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let stack: Array<")" | "]" | "}"> = [];
  for (let i = 0; i < s.length; i++) {
    if (l.includes(s[i])) {
      stack.push(map[s[i]]);
    } else if (r.includes(s[i])) {
      if (stack.pop() !== s[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
// @lc code=end
