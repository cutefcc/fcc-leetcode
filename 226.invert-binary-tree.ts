/*
 * @lc app=leetcode id=226 lang=typescript
 *
 * [226] Invert Binary Tree
 *
 * https://leetcode.com/problems/invert-binary-tree/description/
 *
 * algorithms
 * Easy (73.39%)
 * Likes:    10450
 * Dislikes: 146
 * Total Accepted:    1.3M
 * Total Submissions: 1.8M
 * Testcase Example:  '[4,2,7,1,3,6,9]'
 *
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [4,2,7,1,3,6,9]
 * Output: [4,7,2,9,6,3,1]
 *
 *
 * Example 2:
 *
 *
 * Input: root = [2,1,3]
 * Output: [2,3,1]
 *
 *
 * Example 3:
 *
 *
 * Input: root = []
 * Output: []
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 100].
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

function invertTree(root: TreeNode | null): TreeNode | null {
  // 理解题意：反转二叉树，相当于把这颗树转了180度，抽象下就是每个节点的左孩子 和  右孩子都交换一下
  // 好像又是可以简化，分治的 - 递归
  if (!root) return null;
  // 递归的退出条件
  if (!root.left && !root.right) {
    return root;
  } else if (root.left && !root.right) {
    root.right = invertTree(root.left);
    root.left = null;
  } else if (!root.left && root.right) {
    root.left = invertTree(root.right);
    root.right = null;
  } else if (root.left && root.right) {
    let tempL = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(tempL);
  }

  return root;
}
// @lc code=end
