/*
 * @lc app=leetcode id=199 lang=typescript
 *
 * [199] Binary Tree Right Side View
 *
 * https://leetcode.com/problems/binary-tree-right-side-view/description/
 *
 * algorithms
 * Medium (61.24%)
 * Likes:    9251
 * Dislikes: 554
 * Total Accepted:    889.4K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,2,3,null,5,null,4]'
 *
 * Given the root of a binary tree, imagine yourself standing on the right side
 * of it, return the values of the nodes you can see ordered from top to
 * bottom.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,3,null,5,null,4]
 * Output: [1,3,4]
 *
 *
 * Example 2:
 *
 *
 * Input: root = [1,null,3]
 * Output: [1,3]
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

function rightSideView(root: TreeNode | null): number[] {
  // 理解题意：输出二叉树右视图
  // 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
  // 思路：层序遍历，每一次收集最右边的元素
  let res: number[] = []; // 结果数组
  if (root === null) {
    return res;
  }
  let queue: TreeNode[] = []; // 定义一个队列
  queue.push(root);
  while (queue.length > 0) {
    let size: number = queue.length;
    for (let i = 0; i < size; i++) {
      let node: TreeNode = queue.shift()!;
      if (node.left !== null) {
        queue.push(node.left); // 入队
      }
      if (node.right !== null) {
        queue.push(node.right); // 入队
      }
      // 关键点：识别当前层的最后一个节点
      if (i === size - 1) {
        //将当前层的最后一个节点放入结果列表
        res.push(node.val);
      }
    }
  }
  return res;
}
// @lc code=end
