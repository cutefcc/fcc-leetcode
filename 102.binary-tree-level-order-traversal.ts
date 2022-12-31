/*
 * @lc app=leetcode id=102 lang=typescript
 *
 * [102] Binary Tree Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (63.41%)
 * Likes:    11892
 * Dislikes: 233
 * Total Accepted:    1.6M
 * Total Submissions: 2.6M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given the root of a binary tree, return the level order traversal of its
 * nodes' values. (i.e., from left to right, level by level).
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[9,20],[15,7]]
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1]
 * Output: [[1]]
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
 * The number of nodes in the tree is in the range [0, 2000].
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

function levelOrder(root: TreeNode | null): number[][] {
  // 理解题意：二叉树的层序遍历，输出为二维数组
  // 肯定要用到队列这种逻辑结构
  if (!root) return [];
  let queue = [root];
  let res: number[][] = [];
  while (queue.length > 0) {
    let temp: number[] = [];
    let len: number = queue.length; // 代表当前层有多少个节点
    for (let i = 0; i < len; i++) {
      let pop = queue.shift();
      temp.push(pop.val);
      if (pop.left) {
        queue.push(pop.left);
      }
      if (pop.right) {
        queue.push(pop.right);
      }
    }
    res.push(temp);
  }
  return res;
}
// @lc code=end
