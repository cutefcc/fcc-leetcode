/*
 * @lc app=leetcode id=56 lang=typescript
 *
 * [56] Merge Intervals
 *
 * https://leetcode.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (46.00%)
 * Likes:    17614
 * Dislikes: 614
 * Total Accepted:    1.8M
 * Total Submissions: 3.8M
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * Given an array of intervals where intervals[i] = [starti, endi], merge all
 * overlapping intervals, and return an array of the non-overlapping intervals
 * that cover all the intervals in the input.
 *
 *
 * Example 1:
 *
 *
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlap, merge them into
 * [1,6].
 *
 *
 * Example 2:
 *
 *
 * Input: intervals = [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= intervals.length <= 10^4
 * intervals[i].length == 2
 * 0 <= starti <= endi <= 10^4
 *
 *
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  if (!intervals || !intervals.length) return [];
  intervals.sort((a, b) => a[0] - b[0]); // 按照第一个数进行排序
  let ans = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    // 如果后一个区间和前一个区间有重合，就合并
    if (ans[ans.length - 1][1] >= intervals[i][0]) {
      ans[ans.length - 1][1] = Math.max(
        ans[ans.length - 1][1],
        intervals[i][1]
      );
    } else {
      // 没有重合
      ans.push(intervals[i]);
    }
  }
  return ans;
}
// @lc code=end
