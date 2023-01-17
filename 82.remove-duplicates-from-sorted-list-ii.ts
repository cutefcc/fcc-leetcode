/*
 * @lc app=leetcode id=82 lang=typescript
 *
 * [82] Remove Duplicates from Sorted List II
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/
 *
 * algorithms
 * Medium (45.53%)
 * Likes:    7140
 * Dislikes: 187
 * Total Accepted:    569.8K
 * Total Submissions: 1.2M
 * Testcase Example:  '[1,2,3,3,4,4,5]'
 *
 * Given the head of a sorted linked list, delete all nodes that have duplicate
 * numbers, leaving only distinct numbers from the original list. Return the
 * linked list sorted as well.
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,3,4,4,5]
 * Output: [1,2,5]
 *
 *
 * Example 2:
 *
 *
 * Input: head = [1,1,1,2,3]
 * Output: [2,3]
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
  if (head === null || head.next === null) {
    return head;
  }

  let next: ListNode = head.next;
  //如果是这种情况
  //      1 --> 1 --> 1 --> 2 --> 3
  //     head  next
  //1.则需要移动next直到出现与当前head.value不相等的情况（含null）
  //2.并且此时的head已经不能要了，因为已经head是重复的节点
  //--------------else-------------
  //      1 --> 2 --> 3
  //     head  next
  //3.如果没有出现1的情况，则递归返回的节点就作为head的子节点
  if (head.val === next.val) {
    //1
    // 找到重复的最后一个
    while (next !== null && head.val === next.val) {
      next = next.next;
    }
    //2
    // head 也是重复的元素，不能要了
    head = deleteDuplicates(next);
  } else {
    //3
    head.next = deleteDuplicates(next);
  }
  return head;
}
// @lc code=end
