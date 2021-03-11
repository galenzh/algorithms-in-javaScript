Function.prototype.myApply = function(context, args) {
  context = context || global;
  context.fn = this;
  let res = eval('context.fn('+args+')');
  delete context.fn;
  return res;
}
let obj = {a: 1, b: 2};
function test(c) {
  return this.a + this.b + c;
}
console.log(test.myApply(obj, [3]))
console.log(obj)