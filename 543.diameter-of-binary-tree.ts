/*
 * @lc app=leetcode id=543 lang=typescript
 *
 * [543] Diameter of Binary Tree
 *
 * https://leetcode.com/problems/diameter-of-binary-tree/description/
 *
 * algorithms
 * Easy (56.09%)
 * Likes:    10196
 * Dislikes: 650
 * Total Accepted:    935.2K
 * Total Submissions: 1.7M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Given the root of a binary tree, return the length of the diameter of the
 * tree.
 *
 * The diameter of a binary tree is the length of the longest path between any
 * two nodes in a tree. This path may or may not pass through the root.
 *
 * The length of a path between two nodes is represented by the number of edges
 * between them.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,3,4,5]
 * Output: 3
 * Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,2]
 * Output: 1
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 10^4].
 * -100 <= Node.val <= 100
 *
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  // 理解题意：返回二叉树的最长路径（任意两个节点之间的距离），这个路径可以不经过root
  // 第一想到的是递归
  // 最长路径，这一颗树里 只能有一个转折节点，不能回头
  let max = 0;
  function fn(h: TreeNode | null) {
    if (!h) {
      return -1;
    }
    const l = fn(h.left) + 1;
    const r = fn(h.right) + 1;
    // 当h作为转折点时，取max 和 h的左右之和最大的一个
    max = Math.max(max, l + r);
    // 当h不作为转折点，只能取单边最大
    return Math.max(l, r);
  }
  fn(root);
  return max;
}
// @lc code=end
