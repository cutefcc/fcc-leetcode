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

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// 用空间换时间，先放入数组，再排序，再连接
function sortList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  // 第一种方式，需要额外的空间
  let arr: ListNode[] = [];
  let cur: ListNode | null = head;
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

// 用归并排序，不需要额外的空间 时间复杂度始终为 O(n log n)
function sortList2(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let pre: ListNode | null = null;
  while (fast && fast.next) {
    pre = slow;
    slow = slow!.next;
    fast = fast.next.next;
  }
  pre!.next = null;
  let l1 = sortList2(head);
  let l2 = sortList2(slow);
  return merge(l1, l2);
}

function merge(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let dummy = new ListNode();
  let cur = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next!;
  }
  cur.next = l1 ? l1 : l2;
  return dummy.next;
}
// @lc code=end
