/*
 * @lc app=leetcode id=100 lang=typescript
 *
 * [100] Same Tree
 *
 * https://leetcode.com/problems/same-tree/description/
 *
 * algorithms
 * Easy (56.47%)
 * Likes:    7687
 * Dislikes: 162
 * Total Accepted:    1.3M
 * Total Submissions: 2.3M
 * Testcase Example:  '[1,2,3]\n[1,2,3]'
 *
 * Given the roots of two binary trees p and q, write a function to check if
 * they are the same or not.
 *
 * Two binary trees are considered the same if they are structurally identical,
 * and the nodes have the same value.
 *
 *
 * Example 1:
 *
 *
 * Input: p = [1,2,3], q = [1,2,3]
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: p = [1,2], q = [1,null,2]
 * Output: false
 *
 *
 * Example 3:
 *
 *
 * Input: p = [1,2,1], q = [1,1,2]
 * Output: false
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in both trees is in the range [0, 100].
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // 检测两个二叉树是不是相同的
  // 写一个非递归实现的前序遍历吧，再在上面去修改
  let cur1 = p;
  let cur2 = q;
  let stack1: TreeNode[] = [];
  let stack2: TreeNode[] = [];
  while (cur1 || cur2 || stack1.length > 0 || stack2.length > 0) {
    while (cur1 || cur2) {
      if ((cur1 && !cur2) || (!cur1 && cur2) || cur1.val !== cur2.val) {
        return false;
      }
      stack1.push(cur1);
      cur1 = cur1.left;
      stack2.push(cur2);
      cur2 = cur2.left;
    }

    cur1 = stack1.pop();
    cur2 = stack2.pop();
    cur1 = cur1.right;
    cur2 = cur2.right;
  }
  return true;
}
// @lc code=end
