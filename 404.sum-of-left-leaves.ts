/*
 * @lc app=leetcode id=404 lang=typescript
 *
 * [404] Sum of Left Leaves
 *
 * https://leetcode.com/problems/sum-of-left-leaves/description/
 *
 * algorithms
 * Easy (56.30%)
 * Likes:    4091
 * Dislikes: 265
 * Total Accepted:    404.4K
 * Total Submissions: 717.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given the root of a binary tree, return the sum of all left leaves.
 *
 * A leaf is a node with no children. A left leaf is a leaf that is the left
 * child of another node.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: 24
 * Explanation: There are two left leaves in the binary tree, with values 9 and
 * 15 respectively.
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1]
 * Output: 0
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 1000].
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

function sumOfLeftLeaves(root: TreeNode | null): number {
  // 理解题意：返回所有左叶子结点 val 的和
  // 叶子 leaf 节点就是没有左右孩子的节点，左叶子结点就是：它没有左右孩子，并它是另一个节点的左孩子
  // 想到用一个遍历 遍历所有的节点，判断这个节点的左节点（如果存在，切该左孩子没有左右孩子）
  // 前序遍历吧
  let stack: TreeNode[] = [];
  let cur = root;
  let sum = 0;
  while (cur || stack.length) {
    while (cur) {
      // 这里判断了是不是左叶子节点
      if (cur.left && !cur.left.left && !cur.left.right) {
        sum += cur.left.val;
      }
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    cur = cur.right;
  }
  return sum;
}
// @lc code=end
