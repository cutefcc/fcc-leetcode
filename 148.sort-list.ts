/*
 * @lc app=leetcode id=148 lang=typescript
 *
 * [148] Sort List
 *
 * https://leetcode.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (54.31%)
 * Likes:    9002
 * Dislikes: 274
 * Total Accepted:    590K
 * Total Submissions: 1.1M
 * Testcase Example:  '[4,2,1,3]'
 *
 * Given the head of a linked list, return the list after sorting it in
 * ascending order.
 *
 *
 * Example 1:
 *
 *
 * Input: head = [4,2,1,3]
 * Output: [1,2,3,4]
 *
 *
 * Example 2:
 *
 *
 * Input: head = [-1,5,3,4,0]
 * Output: [-1,0,3,4,5]
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
 * The number of nodes in the list is in the range [0, 5 * 10^4].
 * -10^5 <= Node.val <= 10^5
 *
 *
 *
 * Follow up: Can you sort the linked list in O(n logn) time and O(1) memory
 * (i.e. constant space)?
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

function sortList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  // 第一种方式，需要额外的空间
  let arr: ListNode[] = [];
  let cur: ListNode = head;
  while (cur) {
    arr.push(cur);
    cur = cur.next;
  }
  arr.sort((a, b) => a.val - b.val);
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      arr[i].next = null;
    } else {
      arr[i].next = arr[i + 1];
    }
  }
  return arr[0];
}
// @lc code=end
