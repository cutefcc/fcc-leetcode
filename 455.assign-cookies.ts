/*
 * @lc app=leetcode id=455 lang=typescript
 *
 * [455] Assign Cookies
 *
 * https://leetcode.com/problems/assign-cookies/description/
 *
 * algorithms
 * Easy (50.44%)
 * Likes:    1959
 * Dislikes: 193
 * Total Accepted:    201.8K
 * Total Submissions: 401.2K
 * Testcase Example:  '[1,2,3]\n[1,1]'
 *
 * Assume you are an awesome parent and want to give your children some
 * cookies. But, you should give each child at most one cookie.
 *
 * Each child i has a greed factor g[i], which is the minimum size of a cookie
 * that the child will be content with; and each cookie j has a size s[j]. If
 * s[j] >= g[i], we can assign the cookie j to the child i, and the child i
 * will be content. Your goal is to maximize the number of your content
 * children and output the maximum number.
 *
 *
 * Example 1:
 *
 *
 * Input: g = [1,2,3], s = [1,1]
 * Output: 1
 * Explanation: You have 3 children and 2 cookies. The greed factors of 3
 * children are 1, 2, 3.
 * And even though you have 2 cookies, since their size is both 1, you could
 * only make the child whose greed factor is 1 content.
 * You need to output 1.
 *
 *
 * Example 2:
 *
 *
 * Input: g = [1,2], s = [1,2,3]
 * Output: 2
 * Explanation: You have 2 children and 3 cookies. The greed factors of 2
 * children are 1, 2.
 * You have 3 cookies and their sizes are big enough to gratify all of the
 * children,
 * You need to output 2.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= g.length <= 3 * 10^4
 * 0 <= s.length <= 3 * 10^4
 * 1 <= g[i], s[j] <= 2^31 - 1
 *
 *
 */

// @lc code=start
function findContentChildren(g: number[], s: number[]): number {
  // 理解题意：g.length 是小孩的个数，g 里面的每一个值是每一个小孩的胃口值
  // s.length 是饼干的个数，s 里面的每一个值是饼干的大小
  // 只有当 s[i] >= g[j] 时才表示这一块饼干是满足了这个小孩的胃口
  // 每一个小孩只能分一块饼干
  // 用贪心算法思想，局部最优 推出全局最优解
  // 每一步让最大的饼干优先去给胃口最大的小孩，这样尽量做到了不浪费饼干，能满足最多的小孩胃口

  g.sort((a, b) => a - b); // 小孩按照胃口进行升序排序
  s.sort((a, b) => a - b); // 饼干按照大小进行升序排序
  let res: number = 0; // 结果
  let sIndex = s.length - 1; // 最大饼干索引
  // 遍历小孩
  for (let i = g.length - 1; i >= 0; i--) {
    // 有饼干，且 饼干满足小孩胃口
    if (sIndex >= 0 && s[sIndex] >= g[i]) {
      res++;
      sIndex--;
    }
  }
  return res;
}
// @lc code=end
