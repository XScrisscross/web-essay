// 存储可以通过闭包来实现,缓存如何实现 -> 传参到对应的结果
function excuData () {
  let cache = {}
  return function (a, b, c) {
    if (cache.hasOwnProperty(`${a},${b},${c}`)) {
      console.log('这是缓存数据');
      return cache[`${a},${b},${c}`]
    } else {
      let result = 0
      // 超长费时逻辑
      for (let index = 0; index < 10000; index++) {
        result += index + a
      }
      for (let index = 0; index < 10000; index++) {
        result += index + b
      }
      for (let index = 0; index < 10000; index++) {
        result += index + c
      }
      // 超长费时逻辑

      // 限定存储量
      if (Object.keys(cache).length > 5) {
        console.log('超过存储范围是删除');
        delete cache[Object.keys(cache)[0]]
        console.log('删除后:');
        console.log(cache);
      }

      cache[`${a},${b},${c}`] = result
      console.log('这是初次计算数据');
      
      return result
    }
  }
}
let excu = excuData()
excu(1, 2, 3)
excu(2, 2, 3)
excu(1, 2, 3)
excu(1, 2, 3)
excu(1, 2, 3)
excu(1, 2, 3)
excu(1, 2, 3)
excu(1, 2, 3)
excu(1, 23, 3)
excu(1, 42, 3)
excu(1, 42, 33)
excu(1, 2, 34)
excu(1, 211, 34)
excu(1, 211, 3411)
excu(11, 2, 34)
