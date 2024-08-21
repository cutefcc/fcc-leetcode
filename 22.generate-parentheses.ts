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
  const result: string[] = [];

  const backtrack = (current: string, open: number, close: number) => {
    // 当生成的括号字符串长度达到 2 * n 时，将其添加到结果中
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }

    // 只要 "open" 的数量少于 n，就可以添加 "("
    if (open < n) {
      backtrack(current + "(", open + 1, close);
    }

    // 只要 "close" 的数量少于 "open"，就可以添加 ")"
    if (close < open) {
      backtrack(current + ")", open, close + 1);
    }
  };

  // 初始调用，生成空字符串、0 个 open 和 0 个 close
  backtrack("", 0, 0);

  return result;
}

// 示例
console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]

/*
代码解释：
递归函数 backtrack：
使用递归回溯的方法来实现
这个函数构建当前的括号字符串 current，并且记录已经放置的 open 和 close 的数量。
当 current.length === 2 * n 时，表示我们生成了一个完整的括号组合，将其添加到结果数组中。
递归调用：

如果当前的 open 数量少于 n，可以继续添加 "("，并递归调用 backtrack。
如果当前的 close 数量少于 open，可以继续添加 ")"，并递归调用 backtrack。
初始调用：

从空字符串开始，open 和 close 都为 0。
结果：
对于 n = 3，最终会生成 5 种不同的有效括号组合，输出为：
["((()))","(()())","(())()","()(())","()()()"]。

这个算法的时间复杂度大约是 O(4^n / sqrt(n))，因为每一个位置都可以选择 ( 或者 )，需要遍历所有可能的组合。
*/
// @lc code=end
