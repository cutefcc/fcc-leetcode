/*
 * @lc app=leetcode id=144 lang=typescript
 *
 * [144] Binary Tree Preorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Easy (64.86%)
 * Likes:    5424
 * Dislikes: 146
 * Total Accepted:    1.1M
 * Total Submissions: 1.8M
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given the root of a binary tree, return the preorder traversal of its nodes'
 * values.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,null,2,3]
 * Output: [1,2,3]
 *
 *
 * Example 2:
 *
 *
 * Input: root = []
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: root = [1]
 * Output: [1]
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
 *
 * Follow up: Recursive solution is trivial, could you do it iteratively?
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

function preorderTraversal(root: TreeNode | null): number[] {
  // 二叉树前序遍历，题目说递归是微不足道的，你能改进嘛？ ，就不用递归，用栈吧
  let stack: TreeNode[] = [];
  let res: number[] = [];
  let cur = root;

  while (cur || stack.length > 0) {
    while (cur) {
      res.push(cur.val); // 遍历
      stack.push(cur); // 入栈
      cur = cur.left;
    }
    cur = stack.pop();
    cur = cur.right;
  }
  return res;
}
// @lc code=end
