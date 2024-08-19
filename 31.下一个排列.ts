/* 
整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。

例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
给你一个整数数组 nums ，找出 nums 的下一个排列。

必须 原地 修改，只允许使用额外常数空间。



示例 1：

输入：nums = [1,2,3]
输出：[1,3,2]
示例 2：

输入：nums = [3,2,1]
输出：[1,2,3]
示例 3：

输入：nums = [1,1,5]
输出：[1,5,1]


*/

/* 步骤：
找到需要交换的元素：

从数组的末尾开始，找到第一个前面的元素小于后面的元素的索引 i，即 nums[i] < nums[i + 1]。这个位置之前的部分已经是最大的降序排列了。
找到需要替换的元素：

在数组末尾，找到第一个大于 nums[i] 的元素，并记录其索引 j。这是在右边部分找到的最小的大于 nums[i] 的元素。
交换元素：

交换 nums[i] 和 nums[j]。
反转后面的部分：

反转 nums[i + 1] 之后的部分，使其变为最小的升序排列。
TypeScript 实现：
*/

/* 
复杂度分析：
时间复杂度： O(n)，其中 n 是数组的长度。我们最多进行两次遍历，一次找到位置，一次反转数组的部分。
空间复杂度： O(1)，只使用了常数级别的额外空间。
*/
function nextPermutation(nums: number[]): void {
  let i = nums.length - 2;

  // Step 1: Find the first decreasing element
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;

    // Step 2: Find the element to swap with
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }

    // Step 3: Swap the elements
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // Step 4: Reverse the remaining part
  reverse(nums, i + 1);
}

function reverse(nums: number[], start: number): void {
  let left = start;
  let right = nums.length - 1;

  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}

// 示例用法
let nums = [1, 2, 3];
nextPermutation(nums);
console.log(nums); // 输出: [1, 3, 2]
