/*
 * @lc app=leetcode id=111 lang=typescript
 *
 * [111] Minimum Depth of Binary Tree
 *
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (43.69%)
 * Likes:    5123
 * Dislikes: 1044
 * Total Accepted:    870.2K
 * Total Submissions: 2M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, find its minimum depth.
 *
 * The minimum depth is the number of nodes along the shortest path from the
 * root node down to the nearest leaf node.
 *
 * Note: A leaf is a node with no children.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: root = [2,null,3,null,4,null,5,null,6]
 * Output: 5
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 10^5].
 * -1000 <= Node.val <= 1000
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

function minDepth(root: TreeNode | null): number {
  // 计算一颗二叉树的最小深度：定义为根节点 到 最近的一个叶子节点
  // 上面做了一个计算一棵树的深度，这题也想到递归 分治
  if (!root) return 0;
  // root 左右孩子都不存在
  if (!root.left && !root.right) return 1; // root 是叶子结点
  // root 右 节点不存在，就递归左节点
  if (root.left && !root.right) {
    return 1 + minDepth(root.left);
  }
  // root 左 节点不存在，就递归右节点
  if (root.right && !root.left) {
    return 1 + minDepth(root.right);
  }
  // root 左右孩子都存在时，取最小的一个
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}
// @lc code=end
