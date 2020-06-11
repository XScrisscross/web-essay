1.语法规范(AMD,CMD,commonJS,ES6)模块化规范,是为了将js模块化
2.node.js遵循commonjs语法规范 require/exports --运行时调用,赋值运算
  es6模块化 import/export --编译时调用,引用时解构
3.require/exports -- import/export
  require/exports
  exports.fn = fn
  moudle.exports = fn
  let fn = require('fn')  
4.AMD CMD COMMONJS ES6
  AMD CMD COMMONJS ES6的出现是因为前端只有全局变量和局部变量,无法做到模块化,即我想用什么就引入什么,而不必有些东西引入却不使用,就像common.js中的定义的公用方法,只是部分使用,
  可以分文件实现,但是当体积变大,文件之间相互依赖时(依赖jq写组件等),会出现命名冲突,文件过多,管理混乱,模块化可以做到即引即用
  首先,node.js的出现提出了模块化的概念,出现了commonjs这种node的规范,但是他是同步加载,不适用于浏览器端,因为浏览器端加载文件要看网速的快慢,这就会造成在网速不好的时候,造成阻塞
  于是AMD诞生,一种异步加载方式:AMD是一种规范,出自于requirejs,requirejs是一个前端浏览器框架,可以将前端代码模块化,并且是支持浏览器运行的,AMD正式推行的一种规范,相当于语法
      definde定义,require引入
  同时tb仿制CMD,是seajs的规范,不同之处在他是就近依赖,就是我什么时候想用,就在那个地方引入使用,而AMD先前置定义后使用,在加载的时候也是不一样的,AMD是在加载完一个模块后就直接调用,但是CMD是在加载完所有模块后再进行回调
  ES6的模块化语法是后面ECMSRIPT推出的前端模块化规范,import/export,前置依赖,先声明后使用
  那么现在常用的规范  commonjs  ?? 因为webpack是node写的,遵循commonjs,所以..  前端架构用webpack+npm类库->node.js->commonjs规范
                    es6模块化  ?? ECMSRIPT规定,浏览器实现,谁敢不从
5.npm cnpm yarn 按装 卸载 配置 查询  (全局/本地)
