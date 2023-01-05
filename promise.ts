let p1 = new Promise((resolve, reject) => {
  resolve("成功");
  reject("失败");
});
console.log("p1", p1);
