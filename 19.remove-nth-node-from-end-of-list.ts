/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (40.08%)
 * Likes:    14164
 * Dislikes: 589
 * Total Accepted:    1.8M
 * Total Submissions: 4.5M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given the head of a linked list, remove the n^th node from the end of the
 * list and return its head.
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 *
 *
 * Example 2:
 *
 *
 * Input: head = [1], n = 1
 * Output: []
 *
 *
 * Example 3:
 *
 *
 * Input: head = [1,2], n = 1
 * Output: [1]
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes in the list is sz.
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 *
 *
 *
 * Follow up: Could you do this in one pass?
 *
 */

// @lc code=start
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // 如何找到倒数第n个元素？
  // 先搞一个虚拟头节点，快慢指针，快指针先走n+1步，再快慢指针一起走，当快指针走到null时，慢指针指向的就是被删除元素的前一个节点
  if (!head) return null;
  let root = new ListNode(0, head);
  let slow = root;
  let fast = root;
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return root.next;
}
// @lc code=end
