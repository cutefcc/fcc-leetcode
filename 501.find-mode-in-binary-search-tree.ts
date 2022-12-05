/*
 * @lc app=leetcode id=501 lang=typescript
 *
 * [501] Find Mode in Binary Search Tree
 *
 * https://leetcode.com/problems/find-mode-in-binary-search-tree/description/
 *
 * algorithms
 * Easy (48.76%)
 * Likes:    2667
 * Dislikes: 621
 * Total Accepted:    177.7K
 * Total Submissions: 364.3K
 * Testcase Example:  '[1,null,2,2]'
 *
 * Given the root of a binary search tree (BST) with duplicates, return all the
 * mode(s) (i.e., the most frequently occurred element) in it.
 *
 * If the tree has more than one mode, return them in any order.
 *
 * Assume a BST is defined as follows:
 *
 *
 * The left subtree of a node contains only nodes with keys less than or equal
 * to the node's key.
 * The right subtree of a node contains only nodes with keys greater than or
 * equal to the node's key.
 * Both the left and right subtrees must also be binary search trees.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,null,2,2]
 * Output: [2]
 *
 *
 * Example 2:
 *
 *
 * Input: root = [0]
 * Output: [0]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the tree is in the range [1, 10^4].
 * -10^5 <= Node.val <= 10^5
 *
 *
 *
 * Follow up: Could you do that without using any extra space? (Assume that the
 * implicit stack space incurred due to recursion does not count).
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

function findMode(root: TreeNode | null): number[] {
  // 理解题意：给一个BST(left <= root <= right)，返回一个数组（这个数组包含一个num，这个num是这个BST里出现次数最多的数（最多有多个，就返回多个元素）
  // 提示：能不使用额外的空间吗？
  // 最简单就去遍历这个BST，遍历一个节点就往一个map里存（如果map里没有，如果有就++），最后去map里吗最大的那个，但这个方法用了额外的空间，并且没有使用到BST的特性
  // 因为是BST 所以想到 整体是一个 中序遍历 左根右 刚好符合 中序BST特性
  // 有一些边界条件需要注意
  if (!root) return [];
  let frequent: number[] = [];
  let max = 1; // 出现的最多的 次数
  let count = 0; // 统计每个val 出现的次数
  let pre: TreeNode | null = null;
  let stack: TreeNode[] = [];
  let cur = root;
  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    if (pre === null || pre.val === cur.val) {
      // 相同的数 计数++
      count++;
      // 更新最大的数frequent，和 max
      if (count > max) {
        max = count;
        frequent = [cur.val];
      } else if (count === max) {
        // 有多个数 出现次数相同时，都要返回
        frequent.push(cur.val);
      }
    } else {
      count = 1;
      // 边界条件，都只出现一次时 max === 1时
      if (count === max) {
        frequent.push(cur.val);
      }
    }
    pre = cur;
    cur = cur.right;
  }
  return frequent;
}
// @lc code=end
