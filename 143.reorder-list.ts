/*
 * @lc app=leetcode id=143 lang=typescript
 *
 * [143] Reorder List
 *
 * https://leetcode.com/problems/reorder-list/description/
 *
 * algorithms
 * Medium (51.30%)
 * Likes:    7933
 * Dislikes: 277
 * Total Accepted:    618.3K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,3,4]'
 *
 * You are given the head of a singly linked-list. The list can be represented
 * as:
 *
 *
 * L0 → L1 → … → Ln - 1 → Ln
 *
 *
 * Reorder the list to be on the following form:
 *
 *
 * L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
 *
 *
 * You may not modify the values in the list's nodes. Only nodes themselves may
 * be changed.
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,4]
 * Output: [1,4,2,3]
 *
 *
 * Example 2:
 *
 *
 * Input: head = [1,2,3,4,5]
 * Output: [1,5,2,4,3]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the list is in the range [1, 5 * 10^4].
 * 1 <= Node.val <= 1000
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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  // 链表 - 重排序 L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
  let cur = head;
  let arr: ListNode[] = [];
  // O(n)
  while (cur) {
    arr.push(cur);
    cur = cur.next;
  }
  cur = head;
  let n: number = Math.floor(arr.length / 2);
  for (let i = 0; i < n; i++) {
    // 两个节点相临
    if (i === arr.length - 1 - i - 1) {
      arr[i].next = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i].next = null;
    } else {
      // 是否是最后一轮
      if (i === n - 1) {
        arr[i].next = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i].next = arr[i + 1];
        arr[i + 1].next = null; // 尾节点
      } else {
        arr[i].next = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i].next = arr[i + 1];
      }
    }
  }
  head = arr[0];
}
// @lc code=end
