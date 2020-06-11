1.mvc与mvvm的概念
    mvc:
    m:model vue中的data数据
    v:view 页面中的dom
    c:controller  控制层
    mvvm:
    m:model vue中的data数据
    v:view 页面中的dom
    vm:view-model 数据传递和渲染
    mvvm的优势,无需controller来操作dom,dom与数据绑定,以后只需要操作数据即可

2.vue指令:
    v-cloak  解决文本闪烁

    v-text[=""]  填充纯文本(原始值)
    v-html[=""]  填充html  跨站脚本攻击
    v-pre  显示原始信息   

    v-once  数据/组件渲染一次

    v-model[=""]  双向数据绑定(一般用于表单/组件操作,不适用于div等)
    v-bind  单向绑定(用于数据渲染)简写 :

3.单向绑定与双向绑定
    双向绑定是由单向绑定实现的
    双向绑定一般用于表单/组件  即视图改变使数据改变,数据改变使视图也发生改变
    单向绑定用于数据的渲染  单纯的数据改变来控制视图的改变

4.事件:
    @keyup 按键抬起触发
    @input 输入改变的的时候触发
    @change 失去焦点触发
    v-on:   ===    @

5.事件修饰符
    .stop 阻止冒泡
    .prevent 阻止默认事件

6.按键修饰符
    .enter
    .delete
    .keyCode值(.enter/.65/.a/.自定义)
    自定义按键修饰符:Vue.config.keyCodes.名称 = 键值

6.1属性绑定  
:  想绑谁绑谁  使用参数

7.简写
    v-on: --- @
    v-bind: --- :

8.绑定样式class类名
    通过对象来进行绑定(设定对象的true/false来进行控制)
    通过数组来进行绑定(通过函数变量置为空字符串)
    绑定的样式不会对原来的样式有影响
    都可以使用变量来进行绑定,js直接操作,也可以直接命名为和class名相同

操作style样式 -- 不建议
:style  可以用数组对象形式的变量

select/checkbox/radio的数据绑定

计算属性(computed)/方法(methods)区别/侦听器(watch)   
    computed是基于它们的响应式依赖--进行缓存--的,只要data属性发生改变就会重新计算一次(computed里面会使用到data中的值,也就是依赖)
    computed不需要在data中定义属性  ,但依赖data中的属性
    computed必须有返回值 (简单计算)

    methods每次使用都会重新计算  (配合事件)

    watch中的属性必须在data中定义,因为需要监听值在data中定义  (复杂/异步处理)
    watch有新旧值参数,可以监听地址

过滤器(filter)
    分全局filter和局部filters
    对数据进行统一特定处理(格式化数据)
    过滤器可多个叠加使用
    差值表达式和绑定属性中可以使用(使用管道符 | )
    filter参数
    
指令与过滤器
    都有全局和局部定义
    指令定义后面跟一个对象
    过滤器后面跟一个方法

生命周期
    beforeCreat
    created --> data和methods可以使用
    beforemount --> 挂载模板,访问不到数据
    mounted --> 挂载数据
    beforeUpdate --> 旧数据
    Updated --> 新数据
    beforeDestory
    Destoryed

数组的变异方法(自动响应式)
    `push()`往数组最后面添加一个元素，成功返回当前数组的长度
    `pop()`删除数组的最后一个元素，成功返回删除元素的值
    `shift()`删除数组的第一个元素，成功返回删除元素的值
    `unshift()`往数组最前面添加一个元素，成功返回当前数组的长度
    `splice()`有三个参数，第一个是想要删除的元素的下标（必选），第二个是想要删除的个数（必选），第三个是删除 后想要在原位置替换的值
    `sort()  使数组按照字符编码默认从小到大排序,成功返回排序后的数组
    `reverse()  将数组倒序，成功返回倒序后的数组

数组的响应式处理(手动响应式)及普通处理
    vue.set("对象/数组","索引/属性","值")
    vm.set(vm.item,index,value)
    vm.$set(vm.item,index,value)
    vm.item.属性 = 值 // 无数据响应变化

过滤器定义必须在创建vue实例之前

组件化开发
    模板根节点只能有一个
    data必须是一个函数要有返回值
    组件命名注册时驼峰使用时帕斯卡
    全局和局部组件

局部组件
    局部组件只能在其父组件中使用,全局在所有地方都可以使用

组件使用
    创建 + 挂载 可以多层嵌套挂载

短横线与驼峰
    dom中用短横线 其他用驼峰

子传父数据
    不推荐直接操作props中的属性,会对父产生影响
    props推荐单向数据流,
    如何子操作父数据? 
    子类$emit()触发父的方法(须在父中定义),达到了子操作父,但是数据呢??

插槽

promise
    处理 在控制异步程序顺序出现的回调地狱

传参
    ?的形式  restful / 的形式 对象的形式
    post\put 
    {

    }

    delete/get
    params: {

    }

aysnc/await
同时出现,进一步简化异步任务

promise  
异步编程解决方案,解决回调地狱的问题,在new Promise实例中处理异步任务
实例对象通过then/catch/finally来抓取异步任务返回的结果,  回调地狱  如何解决的?   关键在内部return又一个新的promise实例

fetch
fetch是原生的js,没有使用xhr,也不是ajax的进一步封装,基于promise,代替ajax

axios

关于vue mouted钩子函数 echarts实例化无法用document取到对应dom  $refs取 配 nextIic()
某些组件弹框  隐藏时无法取到
vue中创建动态视图,创建动态数据即可,视图用数据对应
创建一个前置的加载  -> index中创建,router中消除,初始加载页面时白屏
