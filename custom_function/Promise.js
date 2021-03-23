class Promise {
  constructor(fn) {
    this.callbacks = [];
    this.state = "pending"; 
    this.value = null;
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
    if (!callback.onFulfilled) {
      callback.resolve(this.value);
      return;
    }
    var ret = callback.onFulfilled(this.value);
    callback.resolve(ret);
  }
  _resolve(value) {
    this.state = "fulfilled";
    this.value = value; 
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
