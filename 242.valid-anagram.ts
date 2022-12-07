/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (62.79%)
 * Likes:    7658
 * Dislikes: 249
 * Total Accepted:    1.8M
 * Total Submissions: 2.9M
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * Given two strings s and t, return true if t is an anagram of s, and false
 * otherwise.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a
 * different word or phrase, typically using all the original letters exactly
 * once.
 *
 *
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length, t.length <= 5 * 10^4
 * s and t consist of lowercase English letters.
 *
 *
 *
 * Follow up: What if the inputs contain Unicode characters? How would you
 * adapt your solution to such a case?
 *
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  // 理解题意：字谜，两个string，如果其中一个经过字符的位置替换，和另一个string相同，就返回true
  // Anagram: 字母组成一样，但是结构不一样
  // 也就是说对两个string 都进行排序，如果得到相同的一个字符串，则返回true，否则返回false
  // 解法1:下面是可以的，利用js自己的sort api
  //   return s.split("").sort().join("") === t.split("").sort().join("");
  // 解法2: 将两个string 都转为 assic，再快排（这种可以针对非字母的字符），再比较，单纯想手写下快排
  //   function stringToAssic(s: string): number[] {
  //     const res: number[] = [];
  //     for (let i = 0; i < s.length; i++) {
  //       res.push(s[i].charCodeAt(0));
  //     }
  //     return res;
  //   }
  //   function getMark(a: number[], startIndex: number, endIndex: number) {
  //     let mark = startIndex;
  //     const temp = a[startIndex];
  //     for (let i = startIndex + 1; i <= endIndex; i++) {
  //       if (a[i] > temp) {
  //         mark++;
  //         let t = a[i];
  //         a[i] = a[mark];
  //         a[mark] = t;
  //       }
  //     }
  //     a[startIndex] = a[mark];
  //     a[mark] = temp;
  //     return mark;
  //   }
  //   function quickSort(a: number[], startIndex: number, endIndex: number) {
  //     if (startIndex >= endIndex) {
  //       return;
  //     }
  //     const mark = getMark(a, startIndex, endIndex);
  //     quickSort(a, startIndex, mark - 1);
  //     quickSort(a, mark + 1, endIndex);
  //   }
  //   let sArr = stringToAssic(s);
  //   let tArr = stringToAssic(t);
  //   quickSort(sArr, 0, sArr.length - 1);
  //   quickSort(tArr, 0, tArr.length - 1);
  //   return sArr.join("") === tArr.join("");
  // 解法3: 注意到题目说了 s 和 t只包含小写字母，就26个
  // 我们可以建立一个长度为26的数组，遍历第一个字符串遇到a就在第0位 ++，遍历第二个字符串遇到a 就--
  // 最后判断这个长度为26位的数组是不是 全是 0 就ok  这样看空间复杂度是O(1) 时间复杂度是O(n)
  if (s.length !== t.length) return false;
  let res: number[] = [];
  res.length = 26;
  res.fill(0);
  for (let i = 0; i < s.length; i++) {
    let index = s[i].charCodeAt(0) - 97;
    res[index] += 1;
  }
  for (let i = 0; i < t.length; i++) {
    let index = t[i].charCodeAt(0) - 97;
    res[index] -= 1;
  }
  return res.every((item) => item === 0);
}
// @lc code=end
