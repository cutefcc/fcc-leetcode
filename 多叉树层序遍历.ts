// 需求：多叉树层序遍历，也就是将城市打平输出

interface IList {
  name: string;
  children?: IList[];
}

const list: IList[] = [
  {
    name: "河南",
    children: [
      {
        name: "信阳",
        children: [{ name: "商城" }, { name: "固始" }],
      },
      {
        name: "南阳",
        children: [{ name: "镇平" }, { name: "新野" }],
      },
    ],
  },
  {
    name: "安徽",
    children: [
      {
        name: "六安",
        children: [{ name: "金寨" }, { name: "霍邱" }],
      },
      {
        name: "合肥",
        children: [{ name: "肥东" }, { name: "肥西" }],
      },
    ],
  },
];

function consoleCity(arr: IList[]): string[] {
  let root = {
    name: "",
    children: arr,
  };
  let queue = [root] as IList[];
  let res: string[] = [];

  while (queue.length > 0) {
    let len: number = queue.length; // 代表当前层有多少个节点
    for (let i = 0; i < len; i++) {
      let pop = queue.shift()!; // 出队
      res.push(pop.name); // 遍历
      // 判断children是否存在 - 数组长度length > 0 , 给入队列
      if (
        pop.children &&
        Array.isArray(pop.children) &&
        pop.children.length > 0
      ) {
        for (let i = 0; i < pop.children.length; i++) {
          queue.push(pop.children[i]);
        }
      }
    }
  }
  return res.slice(1);
}
console.log(consoleCity(list));
