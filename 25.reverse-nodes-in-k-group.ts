/*
 * @lc app=leetcode id=25 lang=typescript
 *
 * [25] Reverse Nodes in k-Group
 *
 * https://leetcode.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (53.73%)
 * Likes:    10041
 * Dislikes: 558
 * Total Accepted:    641.3K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given the head of a linked list, reverse the nodes of the list k at a time,
 * and return the modified list.
 *
 * k is a positive integer and is less than or equal to the length of the
 * linked list. If the number of nodes is not a multiple of k then left-out
 * nodes, in the end, should remain as it is.
 *
 * You may not alter the values in the list's nodes, only nodes themselves may
 * be changed.
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,4,5], k = 2
 * Output: [2,1,4,3,5]
 *
 *
 * Example 2:
 *
 *
 * Input: head = [1,2,3,4,5], k = 3
 * Output: [3,2,1,4,5]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the list is n.
 * 1 <= k <= n <= 5000
 * 0 <= Node.val <= 1000
 *
 *
 *
 * Follow-up: Can you solve the problem in O(1) extra memory space?
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let size = 0,
    cur = head;
  while (cur) {
    size++;
    cur = cur.next;
  }
  let dummyHead = new ListNode(-1),
    nums = Math.floor(size / k);
  dummyHead.next = head;
  let prev = dummyHead,
    start = dummyHead.next;
  while (nums) {
    let count = k,
      tail = start,
      p = start,
      q = start.next;
    while (--count) {
      let next = q.next;
      q.next = p;
      p = q;
      q = next;
    }
    prev.next = p;
    start = q;
    tail.next = start;
    prev = tail;
    nums--;
  }
  return dummyHead.next;
}
// @lc code=end
