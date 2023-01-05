/*
问题 1：给定一组存在 ${a.b.c} 形式占位符的字符串和一组数据，将字符串中的占位替换成真实的数据并输出;
*/

const data = {
  date: "2022年9月",
  model: "iPhone 14",
  price: { startPrice: 5999 },
};

const tpl =
  "苹果公司在 ${date} 发布了全新的 ${model} 系列手机，起售价格 ${price.startPrice} 元";

function parse(tpl, data) {
  return tpl.replace(/\${([^}]+)}/g, (match, key) => eval(`data.${key}`));
}

/*
问题 2： 写个Monkey函数，返回的对象提供eat和sleep两个函数，支持链式调用。具体调用方式如下所示：
Monkey('Alan').eat('Banana').sleep(4).eat('Apple').sleep(5).eat('Pear')
代码执行后输出:
my name is Alan
I eat Banana
等待 4 s
I eat Apple
等待 5 s
I eat Pear
*/

class Monkey {
  private name: string;
  private tasks: Function[] = []; // 任务 给放数组里面
  private run: boolean;
  constructor(name: string) {
    console.log(`my name is ${name}`);
    this.name = name;
    this.run = false;
  }

  checkRun() {
    if (!this.run) this.next();
  }

  private next() {
    const task = this.tasks.shift(); // 取出当前 tasks 的第一个任务
    if (task) {
      console.log("000");
      task();
      //   this.run = true;
    } else {
      this.run = false;
    }
  }

  eat(food: string) {
    const task = () => {
      console.log(`I eat ${food}`);
      this.next(); // 立刻执行
    };
    this.tasks.push(task);
    this.checkRun();
    return this; // 链式调用
  }

  sleep(seconds: number) {
    console.log("33");
    const task = () => {
      setTimeout(() => {
        console.log(111);
        this.next();
      }, seconds * 1000);
    };
    this.tasks.push(task);
    this.checkRun();
    return this; // 链式调用
  }
}

const alan = new Monkey("Alan");
alan.eat("Banana").sleep(4).eat("Apple").sleep(5).eat("Pear");

console.log(parse(tpl, data));
