/*
 * @lc app=leetcode id=54 lang=typescript
 *
 * [54] Spiral Matrix
 *
 * https://leetcode.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (43.90%)
 * Likes:    10092
 * Dislikes: 980
 * Total Accepted:    938.4K
 * Total Submissions: 2.1M
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 *
 *
 * Example 1:
 *
 *
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [1,2,3,6,9,8,7,4,5]
 *
 *
 * Example 2:
 *
 *
 * Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 *
 *
 *
 * Constraints:
 *
 *
 * m == matrix.length
 * n == matrix[i].length
 * 1 <= m, n <= 10
 * -100 <= matrix[i][j] <= 100
 *
 *
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  // 横的当做 x 轴，竖的当 y 轴。
  // 时间和空间都是O(n)
  let rowBegin: number = 0,
    rowEnd: number = matrix.length - 1,
    colBegin: number = 0,
    colEnd: number = matrix[0].length - 1;

  let result: number[] = [];
  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    //move right
    for (let i = colBegin; i <= colEnd; i++) {
      result.push(matrix[rowBegin][i]);
    }
    rowBegin++; // mark row as traversed after moving right

    //move down
    for (let i = rowBegin; i <= rowEnd; i++) {
      result.push(matrix[i][colEnd]);
    }
    colEnd--; //mark column as traversed after moving down

    //move left
    if (rowBegin <= rowEnd) {
      for (let i = colEnd; i >= colBegin; i--) {
        result.push(matrix[rowEnd][i]);
      }
    }
    rowEnd--; //mark end row as traversed after moving left

    //move up
    if (colBegin <= colEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        result.push(matrix[i][colBegin]);
      }
    }
    colBegin++; //mark begining column as traversed after moving up
  }

  return result;
}
// @lc code=end
