/*
 * @lc app=leetcode id=92 lang=typescript
 *
 * [92] Reverse Linked List II
 *
 * https://leetcode.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (45.40%)
 * Likes:    8502
 * Dislikes: 380
 * Total Accepted:    600.9K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * Given the head of a singly linked list and two integers left and right where
 * left <= right, reverse the nodes of the list from position left to position
 * right, and return the reversed list.
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,4,5], left = 2, right = 4
 * Output: [1,4,3,2,5]
 *
 *
 * Example 2:
 *
 *
 * Input: head = [5], left = 1, right = 1
 * Output: [5]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the list is n.
 * 1 <= n <= 500
 * -500 <= Node.val <= 500
 * 1 <= left <= right <= n
 *
 *
 *
 * Follow up: Could you do it in one pass?
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

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  // 虚拟头节点，以防止left为1的情况
  let dummyHead: ListNode = new ListNode(0, head);
  // leftPre为left节点的前驱，以方便进行头插法
  let leftPre: ListNode = dummyHead;
  let count = 0;
  // 先找到leftPre节点
  while (count < left - 1) {
    leftPre = leftPre.next;
    count++;
  }
  // 将left到right的节点依次通过头插法插入到leftPre后面
  let p: ListNode = leftPre.next; // p就是当前遍历的节点 left
  let tail: ListNode = p; // 记录尾节点
  for (let i = left; i < right + 1; i++) {
    let temp: ListNode = p; // 当前节点
    p = p.next; // p 为当前节点的下一个节点
    temp.next = leftPre.next; // 链接当前节点的下一个节点为 leftPre 的后一个
    leftPre.next = temp; // leftPre 链接上当前节点
  }
  // 上面运行结束后，tail 就为中间那个链表的最后一个节点，
  // 而p为需要反转的链表的后面那个节点
  // 把剩下的不需要反转的接上
  tail.next = p;
  return dummyHead.next;
}
// @lc code=end
