//完整的实现
class Promise {
  constructor(fn) {
    this.callbacks = [];
    this.state = "pending"; //增加状态
    this.value = null; //保存结果
    fn(this._resolve.bind(this));
  }
  then(onFulfilled) {
    return new Promise((resolve) => {
      this._handle({
        onFulfilled: onFulfilled || null,
        resolve: resolve,
      });
    });
  }
  _handle(callback) {
    if (this.state === "pending") {
      this.callbacks.push(callback);
      return;
    }
    //如果then中没有传递任何东西
    if (!callback.onFulfilled) {
      callback.resolve(this.value);
      return;
    }
    var ret = callback.onFulfilled(this.value);
    callback.resolve(ret);
  }
  _resolve(value) {
    this.state = "fulfilled"; //改变状态
    this.value = value; //保存结果
    this.callbacks.forEach((callback) => this._handle(callback));
  }
}

new Promise((resolve) => {
  setTimeout(function () {
    resolve("hello");
  }, 1000);
}).then(function (res) {
  console.log(res);
});
