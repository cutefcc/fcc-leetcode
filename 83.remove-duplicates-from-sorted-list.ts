/*
 * @lc app=leetcode id=83 lang=typescript
 *
 * [83] Remove Duplicates from Sorted List
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (49.97%)
 * Likes:    6332
 * Dislikes: 221
 * Total Accepted:    1M
 * Total Submissions: 2.1M
 * Testcase Example:  '[1,1,2]'
 *
 * Given the head of a sorted linked list, delete all duplicates such that each
 * element appears only once. Return the linked list sorted as well.
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,1,2]
 * Output: [1,2]
 *
 *
 * Example 2:
 *
 *
 * Input: head = [1,1,2,3,3]
 * Output: [1,2,3]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the list is in the range [0, 300].
 * -100 <= Node.val <= 100
 * The list is guaranteed to be sorted in ascending order.
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  // 已排序好的 单链表移除重复的节点
  if (head === null) return null;
  let root = head;
  while (root) {
    if (root.next) {
      // 如果下一个节点和当前节点 值相同 则删除下一个节点
      if (root.val === root.next.val) {
        // root.next 是最后一个节点
        if (root.next.next === null) {
          root.next = null;
        } else {
          // root.next 不是最后一个节点
          root.next = root.next.next;
        }
      } else {
        // root.next 是最后一个节点
        if (root.next.next === null) {
          break;
        } else {
          root = root.next;
        }
      }
    } else {
      break;
    }
  }
  return head;
}
// @lc code=end
