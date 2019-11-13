Function.prototype.before = function (fun) {
  let _this = this
  return function () {
    fun.apply(this, arguments)
    _this.apply(this, arguments)
    return _this
  }
}

Function.prototype.after = function (fun) {
  return function () {
    fun.apply(this, arguments)
  }
}

var func = function (data) {
  console.log(`main函数${data}`);
}

func.bind(this, '主参数').before(function (data) {
  console.log(`处理前数据+${data}`);
})("前参数").after(function (data) {
  console.log(`处理后数据+${data}`);
})('后参数')
