/*
 * @lc app=leetcode id=23 lang=typescript
 *
 * [23] Merge k Sorted Lists
 *
 * https://leetcode.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (48.50%)
 * Likes:    15213
 * Dislikes: 573
 * Total Accepted:    1.5M
 * Total Submissions: 3.1M
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * You are given an array of k linked-lists lists, each linked-list is sorted
 * in ascending order.
 *
 * Merge all the linked-lists into one sorted linked-list and return it.
 *
 *
 * Example 1:
 *
 *
 * Input: lists = [[1,4,5],[1,3,4],[2,6]]
 * Output: [1,1,2,3,4,4,5,6]
 * Explanation: The linked-lists are:
 * [
 * ⁠ 1->4->5,
 * ⁠ 1->3->4,
 * ⁠ 2->6
 * ]
 * merging them into one sorted list:
 * 1->1->2->3->4->4->5->6
 *
 *
 * Example 2:
 *
 *
 * Input: lists = []
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: lists = [[]]
 * Output: []
 *
 *
 *
 * Constraints:
 *
 *
 * k == lists.length
 * 0 <= k <= 10^4
 * 0 <= lists[i].length <= 500
 * -10^4 <= lists[i][j] <= 10^4
 * lists[i] is sorted in ascending order.
 * The sum of lists[i].length will not exceed 10^4.
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  // 快排
  //   function quickSort(arr: ListNode[]) {
  //     if (arr.length == 0) {
  //       return [];
  //     }
  //     let reference = arr[0].val;
  //     let len = arr.length;
  //     let left: ListNode[] = [];
  //     let right: ListNode[] = [];
  //     for (let i = 1; i <= len - 1; i++) {
  //       if (arr[i].val < reference) {
  //         left.push(arr[i]);
  //       } else {
  //         right.push(arr[i]);
  //       }
  //     }
  //     return quickSort(left).concat(arr[0], quickSort(right));
  //   }
  // 将单链表数组打散成 一个元素一个元素的
  let len = lists.length,
    arr: ListNode[] = [];
  if (len === 0) return null; // 排除空数组
  for (let i = 0; i < len; i++) {
    let head = lists[i];
    while (head) {
      arr.push(head);
      head = head.next;
    }
  }
  if (arr.length === 0) return null; // 排除空数组套空链表
  arr.sort((a, b) => a.val - b.val); // quickSort(arr);
  let arrLen = arr.length;
  let head = arr[0];
  let curr = head;
  for (let i = 1; i <= arrLen; i++) {
    if (i === arrLen) {
      curr.next = null;
      break;
    }
    curr.next = arr[i];
    curr = curr.next;
  }
  return head;
}
// @lc code=end
