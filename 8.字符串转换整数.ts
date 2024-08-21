/*
请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数。

函数 myAtoi(string s) 的算法如下：

空格：读入字符串并丢弃无用的前导空格（" "）
符号：检查下一个字符（假设还未到字符末尾）为 '-' 还是 '+'。如果两者都不存在，则假定结果为正。
转换：通过跳过前置零来读取该整数，直到遇到非数字字符或到达字符串的结尾。如果没有读取数字，则结果为0。
舍入：如果整数数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231 的整数应该被舍入为 −231 ，大于 231 − 1 的整数应该被舍入为 231 − 1 。
返回整数作为最终结果。

 

示例 1：

输入：s = "42"

输出：42

解释：加粗的字符串为已经读入的字符，插入符号是当前读取的字符。

带下划线线的字符是所读的内容，插入符号是当前读入位置。
第 1 步："42"（当前没有读入字符，因为没有前导空格）
         ^
第 2 步："42"（当前没有读入字符，因为这里不存在 '-' 或者 '+'）
         ^
第 3 步："42"（读入 "42"）
           ^
示例 2：

输入：s = " -042"

输出：-42

解释：

第 1 步："   -042"（读入前导空格，但忽视掉）
            ^
第 2 步："   -042"（读入 '-' 字符，所以结果应该是负数）
             ^
第 3 步："   -042"（读入 "042"，在结果中忽略前导零）
               ^
示例 3：

输入：s = "1337c0d3"

输出：1337

解释：

第 1 步："1337c0d3"（当前没有读入字符，因为没有前导空格）
         ^
第 2 步："1337c0d3"（当前没有读入字符，因为这里不存在 '-' 或者 '+'）
         ^
第 3 步："1337c0d3"（读入 "1337"；由于下一个字符不是一个数字，所以读入停止）
             ^
示例 4：

输入：s = "0-1"

输出：0

解释：

第 1 步："0-1" (当前没有读入字符，因为没有前导空格)
         ^
第 2 步："0-1" (当前没有读入字符，因为这里不存在 '-' 或者 '+')
         ^
第 3 步："0-1" (读入 "0"；由于下一个字符不是一个数字，所以读入停止)
          ^
示例 5：

输入：s = "words and 987"

输出：0

解释：

读取在第一个非数字字符“w”处停止。

 

提示：

0 <= s.length <= 200
s 由英文字母（大写和小写）、数字（0-9）、' '、'+'、'-' 和 '.' 组成


*/

function myAtoi(s: string): number {
  // 去除前导空格
  s = s.trim();
  if (s.length === 0) return 0;

  // 定义变量
  let sign = 1; // 符号，默认正数
  let index = 0;
  let result = 0;

  // 检查第一个字符是否为符号
  if (s[index] === "+" || s[index] === "-") {
    sign = s[index] === "-" ? -1 : 1;
    index++;
  }

  // 逐个字符读取数字
  while (index < s.length) {
    const char = s[index];
    if (char < "0" || char > "9") break; // 遇到非数字字符则停止
    result = result * 10 + (char.charCodeAt(0) - "0".charCodeAt(0)); // 累积计算结果
    index++;
  }

  // 考虑符号并进行范围限制
  result *= sign;
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);
  if (result > INT_MAX) return INT_MAX;
  if (result < INT_MIN) return INT_MIN;

  return result;
}

// 测试用例
console.log(myAtoi("42")); // 输出: 42
console.log(myAtoi("   -042")); // 输出: -42
console.log(myAtoi("1337c0d3")); // 输出: 1337
console.log(myAtoi("0-1")); // 输出: 0
console.log(myAtoi("words and 987")); // 输出: 0

/*
代码解释：
去除前导空格：

使用 trim() 方法去掉字符串前后的空格。
处理符号：

检查字符串的第一个字符是否为 '+' 或 '-'，如果是，记录符号并将索引向后移动一位。
读取数字并转换：

通过循环依次读取每一个字符，判断是否为数字。将数字字符转换为对应的数值并累积到结果中。
处理越界情况：

在计算结果时，需要确保结果在 32 位有符号整数范围内，若超过范围则返回相应的边界值（INT_MAX 或 INT_MIN）。
返回结果：

最终返回经过符号处理和边界检查后的结果。
这个算法的时间复杂度是 O(n)，其中 n 是字符串的长度。这个实现方法简单且高效，适合于处理包含正负号、前导空格以及溢出情况的字符串。


*/
