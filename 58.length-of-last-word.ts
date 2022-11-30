/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 *
 * https://leetcode.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (40.97%)
 * Likes:    2223
 * Dislikes: 134
 * Total Accepted:    949.3K
 * Total Submissions: 2.3M
 * Testcase Example:  '"Hello World"'
 *
 * Given a string s consisting of words and spaces, return the length of the
 * last word in the string.
 *
 * A word is a maximal substring consisting of non-space characters only.
 *
 *
 * Example 1:
 *
 *
 * Input: s = "Hello World"
 * Output: 5
 * Explanation: The last word is "World" with length 5.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "   fly me   to   the moon  "
 * Output: 4
 * Explanation: The last word is "moon" with length 4.
 *
 *
 * Example 3:
 *
 *
 * Input: s = "luffy is still joyboy"
 * Output: 6
 * Explanation: The last word is "joyboy" with length 6.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^4
 * s consists of only English letters and spaces ' '.
 * There will be at least one word in s.
 *
 *
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  // 解法1 用trim  + split
  //   const arr = s.trim().split(" ");
  //   return arr[arr.length - 1].length;

  // 解法2 从后面开始遍历字符串的每一个字符，找最后一个有效单词
  let res = 0;
  let right = s.length - 1;
  let f = false; // 是否遇到有效字符
  while (right >= 0) {
    if (s[right] === " ") {
      // 还没有遇到第一个有效字符
      if (!f) {
        right--;
      } else {
        // 遇到有效字符后，还遇到' ' 就该退出了
        break;
      }
    } else {
      // 有效字符
      res++; // 计数 +1
      right--; // 指针左移
      f = true; // 标识置为true
    }
  }
  return res;
}
// @lc code=end
