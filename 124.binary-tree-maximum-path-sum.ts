/*
 * @lc app=leetcode id=124 lang=typescript
 *
 * [124] Binary Tree Maximum Path Sum
 *
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
 *
 * algorithms
 * Hard (38.48%)
 * Likes:    13278
 * Dislikes: 621
 * Total Accepted:    926.2K
 * Total Submissions: 2.4M
 * Testcase Example:  '[1,2,3]'
 *
 * A path in a binary tree is a sequence of nodes where each pair of adjacent
 * nodes in the sequence has an edge connecting them. A node can only appear in
 * the sequence at most once. Note that the path does not need to pass through
 * the root.
 *
 * The path sum of a path is the sum of the node's values in the path.
 *
 * Given the root of a binary tree, return the maximum path sum of any
 * non-empty path.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,3]
 * Output: 6
 * Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 =
 * 6.
 *
 *
 * Example 2:
 *
 *
 * Input: root = [-10,9,20,null,null,15,7]
 * Output: 42
 * Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 +
 * 7 = 42.
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 3 * 10^4].
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

function maxPathSum(root: TreeNode | null): number {
  if (!root) return 0;
  // 二叉树 - 求最大路径和
  let res: number = Number.NEGATIVE_INFINITY; // 最大路径和
  helper(root);
  return res;

  function helper(node: TreeNode | null): number {
    // 递归退出条件 - 递归到叶子节点了
    if (!node) {
      return 0;
    }
    // 为什么要加Math.max，如果左 or 右子树算出来的最大路径 < 0 就舍弃掉，也就是加上你我越来越小了，不如舍弃掉
    let left: number = Math.max(helper(node.left), 0); // 节点node：不包含当前节点node  的左节点最大路径
    let right: number = Math.max(helper(node.right), 0); // 节点node：不包含当前节点node  的右节点最大路径
    res = Math.max(res, left + right + node.val); // 更新最大路径和 - 当前节点的最大路径（left + right + node.val） 和 res之间取较大的一个
    return Math.max(left, right) + node.val; // 返回的是当前节点左右节点之中 较大的一条路径的 路径和
  }
}
// @lc code=end
