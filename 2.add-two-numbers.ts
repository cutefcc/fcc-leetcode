/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (39.85%)
 * Likes:    23137
 * Dislikes: 4473
 * Total Accepted:    3.3M
 * Total Submissions: 8.3M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order, and each of their nodes
 * contains a single digit. Add the two numbers and return the sum as a linked
 * list.
 *
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 *
 *
 * Example 1:
 *
 *
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 *
 *
 * Example 2:
 *
 *
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 *
 *
 * Example 3:
 *
 *
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in each linked list is in the range [1, 100].
 * 0 <= Node.val <= 9
 * It is guaranteed that the list represents a number that does not have
 * leading zeros.
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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let currL1 = l1;
  let currL2 = l2;
  let flag = false; // 是否有进位
  let res: ListNode[] = [];
  if (l1 === null && l2 === null) {
    return null;
  }
  while (currL1 || currL2 || flag) {
    let temp =
      (currL1 ? currL1.val : 0) + (currL2 ? currL2.val : 0) + (flag ? 1 : 0);
    if (temp >= 10) {
      flag = true;
      res.push(new ListNode(temp % 10));
    } else {
      flag = false;
      res.push(new ListNode(temp));
    }
    if (currL1) {
      currL1 = currL1.next;
    }
    if (currL2) {
      currL2 = currL2.next;
    }
  }
  for (let i = 0; i < res.length; i++) {
    if (i !== res.length - 1) {
      res[i].next = res[i + 1];
    } else {
      res[i].next = null;
    }
  }
  return res[0];
}
// @lc code=end
