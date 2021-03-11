Function.prototype.myCall = function(context) {
  context = context || global;
  context.fn = this;
  let res = eval('context.fn('+Array.from(arguments).slice(1)+')');
  delete context.fn;
  return res;
}
let obj = {a: 1, b: 2};
function test(c) {
  return this.a + this.b + c;
}
console.log(test.myCall(obj, 'hello'))
console.log(obj)