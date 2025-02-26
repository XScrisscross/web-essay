
/**
 * 缓动动画封装:c3已实现
 * @param {Object}
 * @returns {Promise}
 */
// 常见的缓动算法,所有的方法接受四个参数
// 第一个参数，动画已经消耗的时间
// 第二个参数，小球的原始位置
// 第三个参数，小球目标位置
// 第四个参数，动画持续的总时间
let tween = {
  linear: function (t, b, c, d) {
    return c * t / d + b;
  },
  easeIn: function (t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  easeOut: function (t, b, c, d) {
    return c * ((t = t / d - 1) * t + 1) + b;
  },
  strongEaseIn: function (t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },
  strongEaseOut: function (t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  sineaseIn: function (t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  sineaseOut: function (t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
};

let Animate = function (dom) {
  this.dom = dom; //进行运动的节点
  this.startTime = 0; // 动画开始时间
  this.startPos = 0; // 动画开始时，dom节点的位置，初始位置
  this.endPos = 0; // 动画结束时，dom节点的位置，目标位置
  this.propertyName = null; // dom节点需要改变的css属性名
  this.easing = null; // 缓动算法
  this.duration = null; // 动画持续时间
}
Animate.prototype.start = function (propertyName, endPos, duration, easing) {
  this.startTime = +new Date; // 动画启动时间
  this.startPos = this.dom.getBoundingClientRect()[propertyName]; // dom节点初始位置
  this.propertyName = propertyName; // dom节点需要改变的css属性名
  this.endPos = endPos; // dom节点目标位置
  this.duration = duration; // 动画持续时间
  this.easing = tween[easing]; // 缓动算法
  let self = this;
  let timeId = setInterval(function () {
    if (self.step() === false) {
      clearInterval(timeId);
    }
  }, 19);
}
Animate.prototype.step = function () {
  let t = +new Date;
  if (t >= (this.startTime + this.duration)) {
    this.update(this.endPos);
    return false;
  }
  let pos = this.easing(t - this.startTime, this.startPos, this.endPos - this.startPos, this.duration);
  this.update(pos);
}
Animate.prototype.update = function (pos) {
  this.dom.style[this.propertyName] = pos + 'px';
}

/*
使用示例
let ball = document.getElementById('ball');
let animate1 = new Animate(ball);
animate1.start('left', 800, 1000, 'linear');
*/
