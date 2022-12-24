/*
 * @lc app=leetcode id=160 lang=typescript
 *
 * [160] Intersection of Two Linked Lists
 *
 * https://leetcode.com/problems/intersection-of-two-linked-lists/description/
 *
 * algorithms
 * Easy (53.41%)
 * Likes:    11915
 * Dislikes: 1078
 * Total Accepted:    1.2M
 * Total Submissions: 2.2M
 * Testcase Example:  '8\n[4,1,8,4,5]\n[5,6,1,8,4,5]\n2\n3'
 *
 * Given the heads of two singly linked-lists headA and headB, return the node
 * at which the two lists intersect. If the two linked lists have no
 * intersection at all, return null.
 *
 * For example, the following two linked lists begin to intersect at node c1:
 *
 * The test cases are generated such that there are no cycles anywhere in the
 * entire linked structure.
 *
 * Note that the linked lists must retain their original structure after the
 * function returns.
 *
 * Custom Judge:
 *
 * The inputs to the judge are given as follows (your program is not given
 * these inputs):
 *
 *
 * intersectVal - The value of the node where the intersection occurs. This is
 * 0 if there is no intersected node.
 * listA - The first linked list.
 * listB - The second linked list.
 * skipA - The number of nodes to skip ahead in listA (starting from the head)
 * to get to the intersected node.
 * skipB - The number of nodes to skip ahead in listB (starting from the head)
 * to get to the intersected node.
 *
 *
 * The judge will then create the linked structure based on these inputs and
 * pass the two heads, headA and headB to your program. If you correctly return
 * the intersected node, then your solution will be accepted.
 *
 *
 * Example 1:
 *
 *
 * Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA =
 * 2, skipB = 3
 * Output: Intersected at '8'
 * Explanation: The intersected node's value is 8 (note that this must not be 0
 * if the two lists intersect).
 * From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as
 * [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are
 * 3 nodes before the intersected node in B.
 * - Note that the intersected node's value is not 1 because the nodes with
 * value 1 in A and B (2^nd node in A and 3^rd node in B) are different node
 * references. In other words, they point to two different locations in memory,
 * while the nodes with value 8 in A and B (3^rd node in A and 4^th node in B)
 * point to the same location in memory.
 *
 *
 * Example 2:
 *
 *
 * Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3,
 * skipB = 1
 * Output: Intersected at '2'
 * Explanation: The intersected node's value is 2 (note that this must not be 0
 * if the two lists intersect).
 * From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as
 * [3,2,4]. There are 3 nodes before the intersected node in A; There are 1
 * node before the intersected node in B.
 *
 *
 * Example 3:
 *
 *
 * Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB =
 * 2
 * Output: No intersection
 * Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it
 * reads as [1,5]. Since the two lists do not intersect, intersectVal must be
 * 0, while skipA and skipB can be arbitrary values.
 * Explanation: The two lists do not intersect, so return null.
 *
 *
 *
 * Constraints:
 *
 *
 * The number of nodes of listA is in the m.
 * The number of nodes of listB is in the n.
 * 1 <= m, n <= 3 * 10^4
 * 1 <= Node.val <= 10^5
 * 0 <= skipA < m
 * 0 <= skipB < n
 * intersectVal is 0 if listA and listB do not intersect.
 * intersectVal == listA[skipA] == listB[skipB] if listA and listB
 * intersect.
 *
 *
 *
 * Follow up: Could you write a solution that runs in O(m + n) time and use
 * only O(1) memory?
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

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  // 返回两个单链表相交的节点，如果没有相交就返回null
  // 如果用额外的空间，很容易想到 - 先遍历一个链表headA，存储在数组里吗
  // 再去遍历第二个链表，看第二个链表的元素在不在上述数组中
  // 这样时间复杂度是：O(m) + O(n * m) 空间复杂度是O(m)
  //   if (!headA || !headB) return null;
  //   let arr: ListNode[] = [];
  //   let currA = headA;
  //   let currB = headB;
  //   while (currA) {
  //     arr.push(currA);
  //     currA = currA.next;
  //   }
  //   while (currB) {
  //     if (arr.findIndex((item) => item === currB) !== -1) {
  //       return currB;
  //     }
  //     currB = currB.next;
  //   }
  //   return null;
  // 下面是一个时间复杂度是：O(m + n) 空间复杂度是O(1) 的解法
  // 思路是：先求的两个链表的长度，再在对齐的位置进行比较
  function getListNodeLen(head: ListNode | null): number {
    let curr = head;
    let res: number = 0;
    while (curr) {
      res++;
      curr = curr.next;
    }
    return res;
  }
  let lenA = getListNodeLen(headA);
  let lenB = getListNodeLen(headB);
  let currA = headA;
  let currB = headB;
  // 保证A是最长的那一个链表，currA 是指向最长链表的 表头
  if (lenA < lenB) {
    currA = headB;
    currB = headA;
    let temp = lenA;
    lenA = lenB;
    lenB = temp;
  }
  let x = lenA - lenB;
  // 将最长链表移动到和 最短链表相同长度
  while (x > 0) {
    currA = currA.next;
    x--;
  }
  // 同时遍历这两个链表(后面的长度是相同的了)看是否有相同元素
  while (currA) {
    if (currA === currB) {
      return currA;
    }
    currA = currA.next;
    currB = currB.next;
  }
  return null;
}
// @lc code=end
