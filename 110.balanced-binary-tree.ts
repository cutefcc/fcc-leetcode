/*
 * @lc app=leetcode id=110 lang=typescript
 *
 * [110] Balanced Binary Tree
 *
 * https://leetcode.com/problems/balanced-binary-tree/description/
 *
 * algorithms
 * Easy (48.27%)
 * Likes:    7840
 * Dislikes: 439
 * Total Accepted:    985.7K
 * Total Submissions: 2M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, determine if it is height-balanced.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,2,2,3,3,null,null,4,4]
 * Output: false
 *
 *
 * Example 3:
 *
 *
 * Input: root = []
 * Output: true
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [0, 5000].
 * -10^4 <= Node.val <= 10^4
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

function isBalanced(root: TreeNode | null): boolean {
  // 判断一个二叉树是不是 height-balanced ？ 也就是每一个左右子数深度差不能 > 1
  // 想到递归计算左右子树，看两个数的深度 比较
  let head = root;
  if (!head) return true;
  // 计算一棵树的深度
  function maxDepth(m: TreeNode | null): number {
    if (!m) return 0; // 递归的退出条件
    return 1 + Math.max(maxDepth(m.left), maxDepth(m.right));
  }
  // 如果左右子树深度差 > 1  return false
  if (Math.abs(maxDepth(head.left) - maxDepth(head.right)) > 1) {
    return false;
  }
  // 递归判断左右节点是否满足条件
  return isBalanced(head.left) && isBalanced(head.right);
}
// @lc code=end
