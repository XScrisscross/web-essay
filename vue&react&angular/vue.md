### 1.什么是声明式渲染？
- 命令式： 实现过程靠逻辑来实现页面的渲染
- 声明式： 只关注结果，不注重过程，在渲染视图处放入需求结果
### 2.响应式的数据存在状况？
- 实例被创建时就已经存在于 data 中的 property 才是响应式的
- 意思是vm实例化后，再重新创建值是不会驱动使徒的更新
### 3.Object.freeze()方法？
- 经过这个函数处理过的对象属性无法更改
- 既无法同过Onject.definde来实现数据驱动视图，更新渲染
### 4.Vue.component()
- 定义组件的原生api
### 5.如何动态绑定事件名属性名？
- v-bind:[attributeName] 
- v-on:[eventName] (eventName:click|focus...)
- [null] 动态参数求值为null时解除绑定
- [params] params最好不使用js表达式(有一定的约束,空格等不支持)
### 6.修饰与缩写
- 修饰与缩写都可适用于动态绑定的属性
- v-on - @
- v-bind - :
- v-slot - #
### 7.计算属性初衷
- 用于替代一些复杂模板语法里面的js表达式
- 响应式依赖，值变化会重新计算，不变化会会使用原值结果，从而缓存
- 有提供setter,还有默认的getter
### 8.侦听器
- 用于观察组件间数据流动，路由变化..处理数据变化后的动作
### 9.样式绑定
- 对象的方式进行切换
- 数组的方式进行叠加
### 10.key值
- v-if渲染组件时会适当的销毁和创建组件,如果渲染同一组件时他们的key是相同的
- 给dom绑定不同的key值就会创建新的dom,而不是在原有的dom上更新事件，侦听等附加属性
# 11.for与if
- 一起使用时，for的优先级更高，就是先遍历在判断  
### 12.数组对象的更新与维护
- vue对某些数组方法进行维护，通过vue实例调方法会触发视图更新
- 所以原有的数组对象的变化是不会驱动视图的
### 13.指令与过滤器
- 都有全局和局部定义
- 指令定义后面跟一个对象
- 过滤器后面跟一个方法
- filter:支持多个,支持传参,第一个参数为过滤参数
### 14.响应式的操作方法
- 数组的变异方法(自动响应式)
  - `push()`往数组最后面添加一个元素，成功返回当前数组的长度
  - `pop()`删除数组的最后一个元素，成功返回删除元素的值
  - `shift()`删除数组的第一个元素，成功返回删除元素的值
  - `unshift()`往数组最前面添加一个元素，成功返回当前数组的长度
  - `splice()`有三个参数，第一个是想要删除的元素的下标（必选），第二个是想要删除的个数（必选），第三个是删除 后想要在原替换的值
  - `sort()`  使数组按照字符编码默认从小到大排序,成功返回排序后的数组
  - `reverse()`  将数组倒序，成功返回倒序后的数组
- 数组的响应式处理(手动响应式)及普通处理
  - vue.set("对象/数组","索引/属性","值")
  - vm.set(vm.item,index,value)
  - vm.$set(vm.item,index,value)
  - vm.item.属性 = 值 // 无数据响应变化
### 15.keep-alive
- tab切换时会创建新的组件,keep-alive可以将其缓存,提高效率
- `<keep-alive><component v-bind:is="currentTabComponent"></component></keep-alive>`
### 16.异步加载组件
- `components: {'my-component': () => import('./my-async-component')}`
### 17.插槽
- 匿名插槽
  - `<component>message</component>`
  - `<template><div><slot></slot></div></template>`
- 具名插槽 
  - `<component #s1 >message</component>`
  - `<template><div><slot name="s1"></slot></div></template>`
- 作用域插槽 
  - 不同于上面,思路是子组件获取数据,数据存在于子组件,父组件通过scope-slot访问绑定到子组件的`<slot><slot>`的数据
  - 父组件访问子组件数据,然后进行操作,在作为模板插入到子组件
  - `<component #s1 slot-scope="data"><div>{{data}}<div></component>`
  - `<template><div><slot name="s1" :data="data"></slot></div></template>`