/*
 * @lc app=leetcode id=257 lang=typescript
 *
 * [257] Binary Tree Paths
 *
 * https://leetcode.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (60.72%)
 * Likes:    5207
 * Dislikes: 223
 * Total Accepted:    580.2K
 * Total Submissions: 954.9K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * Given the root of a binary tree, return all root-to-leaf paths in any
 * order.
 *
 * A leaf is a node with no children.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,3,null,5]
 * Output: ["1->2->5","1->3"]
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1]
 * Output: ["1"]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 100].
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

function binaryTreePaths(root: TreeNode | null): string[] {
  // 理解题意：求二叉树的所有路径
  // 这题和 球有没有一条路径的和 等于 给定target 是差不多的
  if (!root) return [];
  if (!root.left && !root.right) {
    return [String(root.val)];
  } else if (!root.left && root.right) {
    return [...binaryTreePaths(root.right).map((i) => `${root.val}->${i}`)];
  } else if (root.left && !root.right) {
    return [...binaryTreePaths(root.left).map((i) => `${root.val}->${i}`)];
  } else if (root.left && root.right) {
    return [
      ...binaryTreePaths(root.left).map((i) => `${root.val}->${i}`),
      ...binaryTreePaths(root.right).map((i) => `${root.val}->${i}`),
    ];
  }
}
// @lc code=end
