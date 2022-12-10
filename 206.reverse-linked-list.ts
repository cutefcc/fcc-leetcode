/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
 *
 * https://leetcode.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (72.59%)
 * Likes:    15815
 * Dislikes: 263
 * Total Accepted:    2.7M
 * Total Submissions: 3.8M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Given the head of a singly linked list, reverse the list, and return the
 * reversed list.
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 *
 *
 * Example 2:
 *
 *
 * Input: head = [1,2]
 * Output: [2,1]
 *
 *
 * Example 3:
 *
 *
 * Input: head = []
 * Output: []
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the list is the range [0, 5000].
 * -5000 <= Node.val <= 5000
 *
 *
 *
 * Follow up: A linked list can be reversed either iteratively or recursively.
 * Could you implement both?
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

function reverseList(head: ListNode | null): ListNode | null {
  // 引入额外空间数组
  let listArr: ListNode[] = [];
  let root = head;
  if (!head) return null;
  while (root) {
    listArr.push(root);
    root = root.next;
  }
  for (let i = 0; i < listArr.length; i++) {
    if (i === 0) {
      listArr[i].next = null;
    } else {
      listArr[i].next = listArr[i - 1];
    }
  }
  return listArr[listArr.length - 1];
  //   不引入额外数组
}
// @lc code=end
