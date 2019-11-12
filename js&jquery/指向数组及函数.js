// 1.new运算过程
/**
 * 1、创建一个空对象；
 * 2、该空对象的原型指向构造函数（链接原型）：将构造函数的 prototype 赋值给对象的 __proto__属性；
 * 3、绑定 this：将对象作为构造函数的 this 传进去，并执行该构造函数；
 * 4、返回新对象：如果构造函数返回的是一个对象，则返回该对象；否则（若没有返回值或者返回基本类型），返回第一步中新创建的对象；
 */
// 2.call,apply,bind区别及原理
// call传参单个
// apply传参数组
// bind只绑定不执行
// 3.函数函数的反柯里化，将一些方法提取出来变成公共的方法
Function.prototype.uncurrying = function () {
  let self = this;
  return function () {
    let obj = Array.prototype.shift.call(arguments);
    return self.apply(obj, arguments);
  }
}
/*
使用示例
let push = Array.prototype.push.uncurrying();
let obj = {};
push(obj, 1);
push(obj, 2);
*/
