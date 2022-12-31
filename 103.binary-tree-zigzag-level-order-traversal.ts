/*
 * @lc app=leetcode id=103 lang=typescript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (55.24%)
 * Likes:    7838
 * Dislikes: 207
 * Total Accepted:    849.4K
 * Total Submissions: 1.5M
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given the root of a binary tree, return the zigzag level order traversal of
 * its nodes' values. (i.e., from left to right, then right to left for the
 * next level and alternate between).
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[3],[20,9],[15,7]]
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  // 理解题意，和上一题层序遍历很像
  // Z 字型遍历
  if (!root) return [];
  let queue = [root]; // 队列
  let res: number[][] = []; // 结果数组
  // 记录是第几层，偶数层0  2  4  是从左向右
  // 基数是从右往左
  let k: number = 0;
  while (queue.length > 0) {
    let temp: number[] = [];
    let len: number = queue.length; // 当前队列有多少元素？ 决定下面for循环的次数
    for (let i = 0; i < len; i++) {
      // 偶数
      if (k % 2 === 0) {
        let pop = queue.shift();
        temp.push(pop.val);
        if (pop.left) {
          queue.push(pop.left);
        }
        if (pop.right) {
          queue.push(pop.right);
        }
      } else {
        let pop = queue.pop();
        temp.push(pop.val);
        if (pop.right) {
          queue.unshift(pop.right);
        }
        if (pop.left) {
          queue.unshift(pop.left);
        }
      }
    }
    k++;
    res.push(temp);
  }
  return res;
}
// @lc code=end
