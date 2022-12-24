/*
 * @lc app=leetcode id=203 lang=typescript
 *
 * [203] Remove Linked List Elements
 *
 * https://leetcode.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (44.95%)
 * Likes:    6515
 * Dislikes: 194
 * Total Accepted:    854.9K
 * Total Submissions: 1.9M
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * Given the head of a linked list and an integer val, remove all the nodes of
 * the linked list that has Node.val == val, and return the new head.
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,6,3,4,5,6], val = 6
 * Output: [1,2,3,4,5]
 *
 *
 * Example 2:
 *
 *
 * Input: head = [], val = 1
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: head = [7,7,7,7], val = 7
 * Output: []
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the list is in the range [0, 10^4].
 * 1 <= Node.val <= 50
 * 0 <= val <= 50
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (head === null) {
    return null;
  }
  const root = new ListNode(0, head); // 在head前面添加一个辅助节点
  let pre = root;
  let curr = pre.next;
  while (curr) {
    if (curr.val === val) {
      pre.next = curr.next; // 删除节点
      curr = pre.next; // 改变curr
    } else {
      pre = curr; // pre 后移
      curr = curr.next; // curr 后移
    }
  }
  return root.next;
}
// @lc code=end
