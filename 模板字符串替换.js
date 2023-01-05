// 你可以使用正则表达式来匹配 ${a.b.c} 这样的占位符，然后使用 eval() 函数来获取 data 中对应的值，然后用 replace() 函数替换占位符，最后返回替换后的字符串。
// 问题 ：给定一组存在 ${a.b.c} 形式占位符的字符串和一组数据，将字符串中的占位替换成真实的数据并输出;
// */

const data = {
  date: "2022年9月",
  model: "iPhone 14",
  price: { startPrice: 5999 },
};

const tpl =
  "苹果公司在 ${date} 发布了全新的 ${model} 系列手机，起售价格 ${price.startPrice} 元";

// 1. 你可以使用正则表达式来匹配 ${a.b.c} 这样的占位符，然后使用 eval() 函数来获取 data 中对应的值，然后用 replace() 函数替换占位符，最后返回替换后的字符串。
// 但是，这种方法存在被恶意注入的风险，因此并不是一种推荐的方法。更好的方法是使用模板引擎，比如 Mustache、handlebars 等。
function parse(tpl, data) {
  return tpl.replace(/\${([^}]+)}/g, (match, key) => eval(`data.${key}`));
}

console.log(parse(tpl, data));
