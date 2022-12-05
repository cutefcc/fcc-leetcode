/*
 * @lc app=leetcode id=530 lang=typescript
 *
 * [530] Minimum Absolute Difference in BST
 *
 * https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/
 *
 * algorithms
 * Easy (56.79%)
 * Likes:    2512
 * Dislikes: 134
 * Total Accepted:    185.8K
 * Total Submissions: 327.2K
 * Testcase Example:  '[4,2,6,1,3]'
 *
 * Given the root of a Binary Search Tree (BST), return the minimum absolute
 * difference between the values of any two different nodes in the tree.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [4,2,6,1,3]
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,0,48,null,null,12,49]
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [2, 10^4].
 * 0 <= Node.val <= 10^5
 *
 *
 *
 * Note: This question is the same as 783:
 * https://leetcode.com/problems/minimum-distance-between-bst-nodes/
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function getMinimumDifference(root: TreeNode | null): number {
  // 理解题意：BST，返回BST中任意两个不同节点 的差 的最小绝对值，如果有两个节点值相等 就返回0，否则返回差最小的
  // 因为时BST 所有 是中序遍历，每次去计算最小差值
  let stack: TreeNode[] = [];
  let cur: TreeNode = root;
  let min: number | null = null;
  let pre: TreeNode | null = null;
  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    if (pre !== null) {
      let temp: number = cur.val - pre.val;
      if (min === null) {
        min = temp;
      } else {
        min = temp < min ? temp : min;
      }
      // 遇到0可以提前退出
      if (min === 0) return 0;
    }
    pre = cur;
    cur = cur.right;
  }
  return min!;
}
// @lc code=end
