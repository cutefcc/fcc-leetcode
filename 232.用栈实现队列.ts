/*
请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：

实现 MyQueue 类：

void push(int x) 将元素 x 推到队列的末尾
int pop() 从队列的开头移除并返回元素
int peek() 返回队列开头的元素
boolean empty() 如果队列为空，返回 true ；否则，返回 false
说明：

你 只能 使用标准的栈操作 —— 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
 

示例 1：

输入：
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
输出：
[null, null, null, 1, 1, false]

解释：
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false
 

提示：

1 <= x <= 9
最多调用 100 次 push、pop、peek 和 empty
假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）
 

进阶：

你能否实现每个操作均摊时间复杂度为 O(1) 的队列？换句话说，执行 n 个操作的总时间复杂度为 O(n) ，即使其中一个操作可能花费较长时间。

*/

class MyQueue {
  private inStack: number[] = [];
  private outStack: number[] = [];

  push(x: number): void {
    this.inStack.push(x);
  }

  pop(): number {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop()!);
      }
    }
    return this.outStack.pop()!;
  }

  peek(): number {
    if (this.outStack.length === 0) {
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop()!);
      }
    }
    return this.outStack[this.outStack.length - 1];
  }

  empty(): boolean {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }
}

// 示例用法
const myQueue = new MyQueue();
myQueue.push(1);
myQueue.push(2);
console.log(myQueue.peek()); // 输出: 1
console.log(myQueue.pop()); // 输出: 1
console.log(myQueue.empty()); // 输出: false

/*
详细解释：
push(x: number): void：

直接将元素压入 inStack。在栈中，新的元素总是被添加到栈的顶部，这也符合队列的“尾部”添加操作。
pop(): number：

首先检查 outStack 是否为空。如果为空，则将 inStack 中的所有元素逐一弹出并压入 outStack。这样，outStack 中的元素顺序就变成了 FIFO，可以直接弹出栈顶元素。
peek(): number：

同样，如果 outStack 为空，则将 inStack 中的所有元素压入 outStack。然后直接返回 outStack 的栈顶元素，但不弹出它。
empty(): boolean：

只要 inStack 和 outStack 都为空，则队列为空。
时间复杂度分析：
push 操作：O(1)
pop 操作：均摊时间复杂度为 O(1)，因为每个元素最多只会被移动两次（从 inStack 到 outStack，然后从 outStack 弹出）。
peek 操作：O(1)
empty 操作：O(1)
这种方法的最大优点是它能够在实现 FIFO 队列的同时，保证每个操作的均摊时间复杂度为 O(1)。


*/
