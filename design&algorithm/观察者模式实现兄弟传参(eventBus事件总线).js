// 构造EventBus,观察者? 发布订阅模式 ,构造实现
function EventBusClass () {
  this.msgQueues = {}
}

EventBusClass.prototype = {
  // 将消息保存到当前的消息队列中
  on: function(msgName, func) {
    if (this.msgQueues.hasOwnProperty(msgName)) {
      if (typeof this.msgQueues === 'function') {
        this.msgQueues[msgName] = [this.msgQueues[msgName], func]
      } else {
        this.msgQueues[msgName] = [...this.msgQueues[msgName], func]
      }
    } else {
      this.msgQueues[msgName] = func;
    }
  },
  // 消息队列中仅保存一个消息
  one: function(msgName, func) {
    // 无需检查msgName是否存在
    this.msgQueues[msgName] = func;
  },
  // 发送消息
  emit: function(msgName, msg) {
    if (!this.msgQueues.hasOwnProperty(msgName)) {
      return
    }
    if (typeof this.msgQueues[msgName] === 'function') {
      this.msgQueues[msgName](msg)
    } else {
      this.msgQueues[msgName].map((fn) => {
        fn(msg)
      })
    }
  },
  // 移除消息
  off: function(msgName) {
    if (!this.msgQueues.hasOwnProperty(msgName)) {
      return
    }
    delete this.msgQueues[msgName]
  }
}

// 将EventBus放到window对象中
const EventBus = new EventBusClass()
window.EventBus = EventBus

// 订阅消息
function subscribe () {
  EventBus.on('first-event', function(msg) {
    alert(`订阅的消息是：${msg}`);
  });
}

// 发送消息
function emit () {
  const msgInput = document.getElementById("msgInputId")
  EventBus.emit('first-event', msgInput.value)
}

// 移除消息
function off (msgName) {
  EventBus.off(msgName)
}
