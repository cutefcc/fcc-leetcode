/*
 * @lc app=leetcode id=146 lang=typescript
 *
 * [146] LRU Cache
 *
 * https://leetcode.com/problems/lru-cache/description/
 *
 * algorithms
 * Medium (40.49%)
 * Likes:    16124
 * Dislikes: 699
 * Total Accepted:    1.2M
 * Total Submissions: 3.1M
 * Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n' +
  '[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'
 *
 * Design a data structure that follows the constraints of a Least Recently
 * Used (LRU) cache.
 * 
 * Implement the LRUCache class:
 * 
 * 
 * LRUCache(int capacity) Initialize the LRU cache with positive size
 * capacity.
 * int get(int key) Return the value of the key if the key exists, otherwise
 * return -1.
 * void put(int key, int value) Update the value of the key if the key exists.
 * Otherwise, add the key-value pair to the cache. If the number of keys
 * exceeds the capacity from this operation, evict the least recently used
 * key.
 * 
 * 
 * The functions get and put must each run in O(1) average time complexity.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input
 * ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
 * [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
 * Output
 * [null, null, null, 1, null, -1, null, -1, 3, 4]
 * 
 * Explanation
 * LRUCache lRUCache = new LRUCache(2);
 * lRUCache.put(1, 1); // cache is {1=1}
 * lRUCache.put(2, 2); // cache is {1=1, 2=2}
 * lRUCache.get(1);    // return 1
 * lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
 * lRUCache.get(2);    // returns -1 (not found)
 * lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
 * lRUCache.get(1);    // return -1 (not found)
 * lRUCache.get(3);    // return 3
 * lRUCache.get(4);    // return 4
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 1 <= capacity <= 3000
 * 0 <= key <= 10^4
 * 0 <= value <= 10^5
 * At most 2 * 10^5 calls will be made to get and put.
 * 
 * 
 */
class MyListNode {
  key?: number;
  val?: number;
  pre: MyListNode | null;
  next: MyListNode | null;
  constructor(key?: number, value?: number) {
    this.key = key;
    this.val = value;
    this.pre = null;
    this.next = null;
  }
}
// @lc code=start
class LRUCache {
  capacity: number;
  hasTable: Map<number, MyListNode>;
  count: number;
  dummyHead: MyListNode;
  dummyTail: MyListNode;
  // 是一个设计类型的题目，设计一个LRU Cache 也就是Least Recently Used 最近最少使用
  // 最好实现一个O(1) 时间复杂度的算法
  // 首先数据的读取get 要O(1) 的话，数据结构肯定是 Map 了，光靠hashMap 是不行的，因为要判断最近 or 很久没使用的
  // 数组的插入和移动 删除 都是O(n) 故 排除掉
  // 双向链表就ok的 添加 删除都是O(1)
  // 故结合hashMap 和 双向链表
  constructor(capacity: number) {
    this.capacity = capacity;
    this.hasTable = new Map<number, MyListNode>();
    this.count = 0; // 用来计数的，判断是否超出 capacity
    this.dummyHead = new MyListNode(); // 虚拟头节点
    this.dummyTail = new MyListNode(); // 虚拟尾节点
    // 将虚拟头节点 和 虚拟尾节点构建为 双向链表
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.next = this.dummyHead;
  }

  get(key: number): number {
    // 需要看 hasTable 有没有存进来过
    // 如果没有找到就返回-1
    if (!this.hasTable.has(key)) {
      return -1;
    }
    const node = this.hasTable.get(key)!;
    // 有的情况，还需要修改双向链表的顺序 - 将这个节点放到双向链表的头部
    this.moveToHead(node);
    // 如果有就返回对应值
    return node.val!;
  }

  put(key: number, value: number): void {
    // 先判断超出限制没有
    if (this.count < this.capacity) {
      // 再判断是否已经在map里面了
      let isIn = this.hasTable.has(key);
      if (isIn) {
        // 修改值，然后移动到head
        const node = this.hasTable.get(key)!;
        node.val = value;
        this.moveToHead(node);
      } else {
        let node = new MyListNode(key, value);
        this.hasTable.set(key, node);
        this.addToHead(node);
        this.count++;
      }
    } else {
      // 已经超出限制了
      // 再判断是否已经在map里面了
      let isIn = this.hasTable.has(key);
      if (isIn) {
        // 修改值，然后移动到head
        const node = this.hasTable.get(key)!;
        node.val = value;
        this.moveToHead(node);
      } else {
        let node = new MyListNode(key, value);
        this.hasTable.set(key, node);
        this.addToHead(node);
        // 删除最后一个
        let lastNode = this.dummyTail.pre!;
        let lastNodePre = lastNode.pre!;
        lastNodePre.next = this.dummyTail;
        this.dummyTail.pre = lastNodePre;
        this.hasTable.delete(lastNode.key!);
      }
    }
  }

  moveToHead(node: MyListNode) {
    this.removeFromList(node);
    this.addToHead(node);
  }
  removeFromList(node: MyListNode) {
    let tempPre = node.pre!;
    let tempNext = node.next!;
    tempPre.next = tempNext;
    tempNext.pre = tempPre;
  }
  addToHead(node: MyListNode) {
    let tempNext = this.dummyHead.next!;
    this.dummyHead.next = node;
    node.pre = this.dummyHead;
    node.next = tempNext;
    tempNext.pre = node;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
