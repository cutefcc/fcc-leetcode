class TreeNode {
  val;
  left;
  right;
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
function hasPathSum(root, targetSum) {
  // 检测一颗树是否有这样的一条路径：root ro leaf  节点 的sum 等于 target
  // 想到递归的方式去计算sum，辅助函数（用于递归） 计算这颗树所有路径的和 存一个数组返回，后面检查这个数组里面有没有target
  if (!root) return false;
  function pathSum(r) {
    if (!r.left && !r.right) return [r.val]; // 递归的退出条件
    if (!r.left && r.right) return pathSum(r.right).map((item) => item + r.val);
    if (r.left && !r.right) return pathSum(r.left).map((item) => item + r.val);
    return [
      ...pathSum(r.left).map((item) => item + r.val),
      ...pathSum(r.right).map((item) => item + r.val),
    ];
  }

  return pathSum(root).findIndex((item) => item === targetSum) !== -1;
}
console.log(
  hasPathSum(
    new TreeNode(1, new TreeNode(3, new TreeNode(5)), new TreeNode(4)),
    6
  )
);
