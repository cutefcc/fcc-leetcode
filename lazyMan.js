// 问题 2： 写个Monkey函数，返回的对象提供eat和sleep两个函数，支持链式调用。具体调用方式如下所示：
// Monkey('Alan').eat('Banana').sleep(4).eat('Apple').sleep(5).eat('Pear')
// 代码执行后输出:
// my name is Alan
// I eat Banana
// 等待 4 s
// I eat Apple
// 等待 5 s
// I eat Pear

// 解法1 Promise + Async
// 链式调用时，将任务包装成一个 promise 对象并放入队列，并返回 this
// 链式调用结束时，开始执行 promsie 队列，利用 async/await 去控制。
// 这个执行是通过实例化时 setTimeout 实现的
class _LazyMan {
  constructor(name) {
    let task = function () {
      return new Promise((r) => {
        console.log(`my name is ${name}!`);
        r();
      });
    };
    this.callbacks = [task];
    // 异步 宏任务
    setTimeout(() => this.flushCallback(), 0);
  }
  async flushCallback() {
    console.log("hhh");
    for (let i = 0; i < this.callbacks.length; i++) {
      await this.callbacks[i].call(this);
    }
  }
  sleep(delay) {
    console.log(
      ".sleep 链式调用 是同步的，会先于constructor 里最后一行的 异步代码执行"
    );
    let task = function () {
      return new Promise((r) => {
        setTimeout(() => {
          console.log(`等待 ${delay} s`);
          r();
        }, delay * 1000);
      });
    };

    this.callbacks.push(task);
    return this;
  }
  eat(sth) {
    console.log(
      ".eat 链式调用 是同步的，会先于constructor 里最后一行的 异步代码执行"
    );
    this.callbacks.push(() => {
      return new Promise((r) => {
        console.log(`I eat ${sth}`);
        r();
      });
    });
    return this;
  }
  //   sleepFirst(delay) {
  //     let task = function () {
  //       return new Promise((r) => {
  //         setTimeout(() => {
  //           console.log(`等待 ${delay} s`);
  //           r();
  //         }, delay * 1000);
  //       });
  //     };
  //     this.callbacks.unshift(task);
  //     return this;
  //   }
}
function Monkey(name) {
  return new _LazyMan(name);
}
Monkey("Alan").eat("Banana").sleep(4).eat("Apple").sleep(5).eat("Pear");

// 解法2 纯 Callback 队列中存放所有任务，执行机制为：取出队头任务，执行完任务调用 next 继续取。头直到队列为空
// class _LazyMan2 {
//   constructor(name) {
//     this.queue = [
//       () => {
//         console.log(`Hi! This is ${name}!`);
//         this.next();
//       },
//     ];
//     setTimeout(() => this.next(), 0);
//   }
//   next() {
//     let task = this.queue.shift();
//     if (task) {
//       task.call(this);
//     }
//   }
//   sleep(delay) {
//     this.queue.push(() => {
//       setTimeout(() => {
//         console.log(`Wake up after ${delay}`);
//         this.next();
//       }, delay * 1000);
//     });
//     return this;
//   }
//   eat(sth) {
//     this.queue.push(() => {
//       console.log(`Eat ${sth}`);
//       this.next();
//     });
//     return this;
//   }
//   //   sleepFirst(delay) {
//   //     this.queue.unshift(() => {
//   //       setTimeout(() => {
//   //         console.log(`Wake up after ${delay}`);
//   //         this.next();
//   //       }, delay * 1000);
//   //     });
//   //     return this;
//   //   }
// }
// function LazyMan(name) {
//   return new _LazyMan2(name);
// }
// LazyMan("Alan").eat("Banana").sleep(4).eat("Apple").sleep(5).eat("Pear");
