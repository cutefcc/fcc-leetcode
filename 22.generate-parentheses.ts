/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (71.99%)
 * Likes:    16577
 * Dislikes: 649
 * Total Accepted:    1.3M
 * Total Submissions: 1.8M
 * Testcase Example:  '3'
 *
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 *
 *
 * Example 1:
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 * Example 2:
 * Input: n = 1
 * Output: ["()"]
 *
 *
 * Constraints:
 *
 *
 * 1 <= n <= 8
 *
 *
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
  // 组合问题 - n 对合法括号
  // leftRem: 左括号剩余数
  // rightRem: 右括号剩余数
  function r(arr: string[], str: string, leftRem: number, rightRem: number) {
    // 左括号使用量超过 n
    // 以及右括号使用数超过左括号，都是不合法的。
    if (leftRem < 0 || rightRem < leftRem) return;
    if (leftRem === 0 && rightRem === 0) {
      arr.push(str);
      return;
    }
    r(arr, str + "(", leftRem - 1, rightRem);
    r(arr, str + ")", leftRem, rightRem - 1);
  }
  const arr: string[] = [];
  r(arr, "", n, n);
  return arr;
}

// @lc code=end
