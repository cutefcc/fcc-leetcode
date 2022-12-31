/*
 * @lc app=leetcode id=739 lang=typescript
 *
 * [739] Daily Temperatures
 *
 * https://leetcode.com/problems/daily-temperatures/description/
 *
 * algorithms
 * Medium (66.59%)
 * Likes:    9842
 * Dislikes: 226
 * Total Accepted:    556.8K
 * Total Submissions: 838.6K
 * Testcase Example:  '[73,74,75,71,69,72,76,73]'
 *
 * Given an array of integers temperatures represents the daily temperatures,
 * return an array answer such that answer[i] is the number of days you have to
 * wait after the i^th day to get a warmer temperature. If there is no future
 * day for which this is possible, keep answer[i] == 0 instead.
 *
 *
 * Example 1:
 * Input: temperatures = [73,74,75,71,69,72,76,73]
 * Output: [1,1,4,2,1,1,0,0]
 * Example 2:
 * Input: temperatures = [30,40,50,60]
 * Output: [1,1,1,0]
 * Example 3:
 * Input: temperatures = [30,60,90]
 * Output: [1,1,0]
 *
 *
 * Constraints:
 *
 *
 * 1 <= temperatures.length <= 10^5
 * 30 <= temperatures[i] <= 100
 *
 *
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  // 第一肯定能想到暴力解法，时间复杂度是O(n^2)

  // 其次可以用单调栈的思想，时间复杂度是O(n)
  let len: number = temperatures.length;
  let stack: number[] = [0]; // 单调栈，用来存储下标
  let res: number[] = Array(len).fill(0); // 初始化结果数组
  // 循环从索引1开始，到len - 1结束
  for (let i = 1; i < len; i++) {
    // 取得栈顶元素
    let top = stack[stack.length - 1];
    // 判断当前元素和栈顶元素的关系
    if (temperatures[i] < temperatures[top]!) {
      stack.push(i);
    } else if (temperatures[i] === temperatures[top]) {
      stack.push(i);
    } else {
      // 后面的元素比栈顶的大
      while (
        stack.length > 0 &&
        temperatures[stack[stack.length - 1]] < temperatures[i]
      ) {
        let index = stack.pop()!;
        res[index] = i - index;
      }
      stack.push(i);
    }
  }
  return res;
}
// @lc code=end
