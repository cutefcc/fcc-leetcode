// 字符串 反转，并找到出现次数最多的字符, 避免使用js原生语法
// input ： string
// abccec  ->  ceccba   c

function findString(str) {
  // 反转字符串，过程中计数
  // 两个指针
  let l = 0;
  let r = str.length - 1;
  let map = {};
  let res = Array(str.length);
  while (l <= r) {
    // 左指针 的字符，计数
    if (map[str[l]]) {
      map[str[l]] = map[str[l]] + 1;
    } else {
      map[str[l]] = 1;
    }
    // 右指针 的字符，计数
    if (map[str[r]]) {
      map[str[r]] = map[str[r]] + 1;
    } else {
      map[str[r]] = 1;
    }
    // 交换位置
    let temp = str[l];
    res[l] = str[r];
    res[r] = temp;

    l++;
    r--;
  }
  // 从map 找到maxStr
  let maxStr = str[0]; // 初始化
  let max = 1; // 次数
  Object.keys(map).forEach((item) => {
    if (map[item] > max) {
      max = map[item];
      maxStr = item;
    }
  });

  return [res.join(""), maxStr];
}
let s = "abccec";
console.log(findString(s));
