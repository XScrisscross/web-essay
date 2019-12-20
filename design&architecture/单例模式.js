let Singleton = function (name) {
  this.name = name;
  this.instance = null;
}

Singleton.prototype.getName = function () {
  return this.name;
}

Singleton.getInstance = function (name) {
  if (!this.instance) {
    this.instance = new Singleton(name);
  }
  return this.instance;
}

let a = Singleton.getInstance("item1");
let b = Singleton.getInstance("item2"); // 这个时候返回的是name为item1的单例对象

console.log(a); // Singleton { name: 'item1', instance: null }
console.log(b); // Singleton { name: 'item1', instance: null }
console.log(a === b); // true

// 此类单例是通过get的方式获取,需要知道他就是个单例,我们需要在new的时候判断后自动创建单例
// 通过js缓存的方式
// 真实的单例对象
let OtherSingleton = function () {
}

// 单例处理
let excuOtherSingleton = (function () {
  let cache = null
  return function () {
    return cache || (cache = new OtherSingleton())
  }
})(OtherSingleton)


console.log(new excuOtherSingleton() === new excuOtherSingleton()); // true
