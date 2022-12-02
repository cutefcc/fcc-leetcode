/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
 *
 * https://leetcode.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (53.03%)
 * Likes:    11677
 * Dislikes: 261
 * Total Accepted:    1.5M
 * Total Submissions: 2.7M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * Given the root of a binary tree, check whether it is a mirror of itself
 * (i.e., symmetric around its center).
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,2,3,4,4,3]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,2,2,null,3,null,3]
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 1000].
 * -100 <= Node.val <= 100
 *
 *
 *
 * Follow up: Could you solve it both recursively and iteratively?
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
function isSymmetric(root: TreeNode | null): boolean {
  // 看 1223443 这个例子的第三层 能想到双向队列，两边进 出
  let queue = [root.left, root.right];
  while (queue.length) {
    let left = queue.shift();
    let right = queue.pop();
    if (left && right) {
      if (left.val !== right.val) {
        return false;
      } else {
        queue.unshift(left.left, left.right);
        queue.push(right.left, right.right);
      }
    }
    if ((left && !right) || (!left && right)) {
      return false;
    }
  }
  return true;
}
// @lc code=end
