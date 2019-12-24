/*
表单校验
*/
// 将校验规则封装成策略对象
let startegies = {
  isNotEmpty: function (value, errorMsg) {
    if (value === '') {
      return errorMsg;
    }
  },
  minLength: function (value, length, errorMsg) {
    if (value.length < length) {
      return errorMsg;
    }
  },
  maxLength: function (value, length, errorMsg) {
    if (value.length > length) {
      return errorMsg;
    }
  },
  isMobile: function (value, errorMsg) {
    if (!/^1[3|5|8][0-9]{9}$/.test(value)) {
      return errorMsg;
    }
  },
  isIntNumber: function (value, errorMsg) {
    if (Object.is(+value, NaN) || value.indexOf('.') !== -1) {
      return errorMsg;
    }
  }
};
// Context对象Validator
let Validator = function () {
  this.cache = [];
}
Validator.prototype.add = function (dom, rule, errorMsg) {
  let arg = rule.split(':');
  this.cache.push(function () {
    let strategy = arg.shift();
    arg.unshift(dom.value);
    arg.push(errorMsg);
    return startegies[strategy].apply(dom, arg);
  });
}
Validator.prototype.start = function () {
  for (let i = 0; i < this.cache.length; i++) {
    let msg = this.cache[i]();
    if (msg) {
      return msg;
    }
  }
}
/*
使用示例
let myForm = document.getElementById('myForm');
let validateFunc = function() {
    let validator = new Validator();
    validator.add(myForm.username, 'isNotEmpty', '用户名不能为空');
    validator.add(myForm.username, 'minLength:6', '用户名最少为6位');
    validator.add(myForm.username, 'maxLength:16', '用户名最多为16位');
    validator.add(myForm.username, 'isIntNumber', '用户名只能为纯数字');
    let errorMsg = validator.start();
    return errorMsg;
}
myForm.onsubmit = function() {
    let errorMsg = validateFunc();
    if (errorMsg) {
        alert(errorMsg);
        return false;
    }
}*/

