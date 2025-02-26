/*******************************************************************************
  函 数 名		:  Date.Format
  功能描述		:  日期格式化
  输入参数		:  s
  返 回 值		:  s
*******************************************************************************/
Date.prototype.getFormatTime = function (s) {
  const Week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  s = s.replace(/YYYY/g, this.getFullYear())
  s = s.replace(/MM/g, (this.getMonth() + 1).toString().padStart(2, '0'))
  s = s.replace(/DD/g, this.getDate().toString().padStart(2, '0'))
  s = s.replace(/hh/g, this.getHours().toString().padStart(2, '0'))
  s = s.replace(/mm/g, this.getMinutes().toString().padStart(2, '0'))
  s = s.replace(/ss/g, this.getSeconds().toString().padStart(2, '0'))
  s = s.replace(/W/g, Week[this.getDay()])
  return s
}
var date = new Date(1570608963293).getFormatTime("YYYY-MM-DD W hh:mm:ss")
console.log(date);
/*******************************************************************************
  函 数 名		:  getTimeByAfterNDay
  功能描述		:  获取nTime后时间
  输入参数		:  f,n
  返 回 值		:  Date
*******************************************************************************/
Date.prototype.getAfterNTime = function (f, n) {
  switch (f) {
    case 'Y':
      return new Date(new Date(this).setFullYear(new Date(this).getFullYear() + n))
    case 'M':
      return new Date(new Date(this).setMonth(new Date(this).getMonth() + n))
    case 'D':
      return new Date(new Date(this).setDate(new Date(this).getDate() + n))
    case 'h':
      return new Date(new Date(this).setHours(new Date(this).getHours() + n))
    case 'm':
      return new Date(new Date(this).setMinutes(new Date(this).getMinutes() + n))
    case 's':
      return new Date(new Date(this).setSeconds(new Date(this).getSeconds() + n))
    default:
      return new Date(c)
  }
}
var after = new Date().getAfterNTime('D', 5)
console.log(after.getFormatTime("YYYY-MM-DD W hh:mm:ss"));
/*******************************************************************************
  函 数 名		:  getURLParams
  功能描述		:  URL参数获取
  输入参数		:  none
  返 回 值		:  o
*******************************************************************************/
String.prototype.getURLParams = function () {
  let s = ''
  let o = {}
  s = this.split('?')[1]
  if (s.includes('&')) {
    s.split('&').forEach((v) => {
      o[v.split('=')[0]] = v.split('=')[1]
    })
    return o
  }
  o[s.split('=')[0]] = s.split('=')[1]
  return o
}
var params = 'http://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&ch=&tn=baidu&bar=&wd=js+常用的工具函数&oq=js+switch&rsv_pq=8994c91c000053c0&rsv_t=6baa6phVjb%2Bytax3rctHbSThfKmyh%2B8EQ4NFCNAbSGGPjmIQJ3Fs5wUKKjk&rqlang=cn'.getURLParams()
console.log(params);
/*******************************************************************************
  函 数 名		:  getSuffix
  功能描述		:  后缀名获取
  输入参数		:  f
  返 回 值		:  s
*******************************************************************************/
String.prototype.getSuffixStr = function () {
  return this.split('.').slice(-1)[0];
}

var suffix = "ab.cc".getSuffixStr();
console.log(suffix);

/*******************************************************************************
  函 数 名		:  $ajax
  功能描述		:  ajax封装
  输入参数		:  o
  返 回 值		:  Promise
*******************************************************************************/
const $ajax = function (o) {
  return new Promise(function (resolve, reject) {
    $.ajax({
      url: o.url,
      data: o.data || {},
      type: o.type || "GET",
      dataType: o.dataType || "json",
      async: o.async || true,
      success: function (data) {
        resolve(data);
      },
      error: function (error) {
        reject(error)
      }
    });
  })
}

// 1.逐步
$ajax({ url }).then((res) => {
  console.log(res);
})

// 2.统一
Promise.all([p1, p2, p3]).then(function (res) {
  console.log(res);
})
