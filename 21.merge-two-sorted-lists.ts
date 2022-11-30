/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
 *
 * https://leetcode.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (61.95%)
 * Likes:    16119
 * Dislikes: 1416
 * Total Accepted:    2.8M
 * Total Submissions: 4.5M
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 *
 * Merge the two lists in a one sorted list. The list should be made by
 * splicing together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 *
 *
 * Example 1:
 *
 *
 * Input: list1 = [1,2,4], list2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 *
 * Example 2:
 *
 *
 * Input: list1 = [], list2 = []
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: list1 = [], list2 = [0]
 * Output: [0]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in both lists is in the range [0, 50].
 * -100 <= Node.val <= 100
 * Both list1 and list2 are sorted in non-decreasing order.
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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  function insert(head: ListNode, val: number) {
    const target = new ListNode(val, null);
    let root = head;
    const pre = head;
    // 首位插入
    if (head.val >= val) {
      target.next = head;
      return target;
    }
    // 中间插入 or 尾部插入
    while (root) {
      if (!root.next && root.val <= val) {
        root.next = target;
        return head;
      }
      if (root.next) {
        if (root.val <= val && root.next.val >= val) {
          let temp = root.next;
          root.next = target;
          target.next = temp;
          return head;
        } else {
          root = root.next;
        }
      }
    }
  }
  if (!list1 && !list2) return null;
  if (!list1 && list2) return list2;
  if (list1 && !list2) return list1;
  let root = list1;
  let res = list2;
  while (root) {
    res = insert(res, root.val);
    root = root.next;
  }
  return res;
}
// @lc code=end
