/*
 * @lc app=leetcode id=541 lang=typescript
 *
 * [541] Reverse String II
 *
 * https://leetcode.com/problems/reverse-string-ii/description/
 *
 * algorithms
 * Easy (50.54%)
 * Likes:    1385
 * Dislikes: 2935
 * Total Accepted:    181.6K
 * Total Submissions: 359.2K
 * Testcase Example:  '"abcdefg"\n2'
 *
 * Given a string s and an integer k, reverse the first k characters for every
 * 2k characters counting from the start of the string.
 *
 * If there are fewer than k characters left, reverse all of them. If there are
 * less than 2k but greater than or equal to k characters, then reverse the
 * first k characters and leave the other as original.
 *
 *
 * Example 1:
 * Input: s = "abcdefg", k = 2
 * Output: "bacdfeg"
 * Example 2:
 * Input: s = "abcd", k = 2
 * Output: "bacd"
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^4
 * s consists of only lowercase English letters.
 * 1 <= k <= 10^4
 *
 *
 */

// @lc code=start
function reverseStr(s: string, k: number): string {
  // 根据提供的 [开始位置,结束位置] 反转字符串
  function reverseStrByIndex(str: string, start: number, end: number): string {
    let res: string[] = str.split("");
    while (start < end) {
      let temp: string = res[start];
      res[start++] = str[end];
      res[end--] = temp;
    }
    return res.join("");
  }
  let ln = s.length;
  let m = Math.floor(ln / (k * 2));
  let n = ln - m * (k * 2);
  // 先将有2k的情况处理了
  for (let i = 0; i < m; i++) {
    let l = i * 2 * k; // 需要反转的开始索引位置
    let r = l + k - 1; // 需要反转的结束索引位置
    s = reverseStrByIndex(s, l, r);
  }
  // 处理剩余部分
  if (n < k) {
    let l = m * 2 * k;
    let r = l + n - 1;
    s = reverseStrByIndex(s, l, r);
  } else {
    let l = m * 2 * k;
    let r = l + k - 1;
    s = reverseStrByIndex(s, l, r);
  }
  return s;
}
// @lc code=end
