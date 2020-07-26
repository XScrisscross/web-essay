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

-动态路由 /a/:a/b/:b  fullPath: 带参绝对路径  hash:   matched:匹配记录   meta:元信息   name:   params:    path: 绝对路径  query:    redirectedFrom: 参数响应,组件复用,不重新加载,通配符  to  from  next(false/{path})  $route  /a-* 匹配 嵌套路由 编程式导航:js改路由指向,go,push,replace(无history) 命名路由/命名视图  声明式/编程式:对象或字符串传参{name}  命名视图:同级或嵌套式,混用 别名(指向同,起名)与重定向(重新指向) 组件传参解耦:布尔值/对象/函数 history模式 过度 思路:路由的钩子和组件生命周期的钩子都可以去获取数据 路由钩子顺序:触发 -> beforeRouterLeave -> beforeEach(全局前置) -> beforeRouterUpdate(传参变化) -> beforeRouterEnter -> beforeResolve(全局后置,异步路由及组件完成后执行) -> afterEach(全局后置)

-分模块的权限：外层套壳子watch路由变化做权限

-less客户端js渲染 sass服务端渲染
嵌套(标识符) 静默注释  属性嵌套  运算 变量  甚至函数/逻辑/传参 分文件引入@import  
最重要的混入(.name{} / @mixin name{})和继承
混入看做代码赋值(用于高度可重用的样式) 继承于类名叠加(用于通用样式下的细微扩展组合) 

# 1.什么是声明式渲染？
 - 命令式： 实现过程靠逻辑来实现页面的渲染
 - 声明式： 只关注结果，不注重过程，在渲染视图处放入需求结果
# 2.响应式的数据存在状况？
 - 实例被创建时就已经存在于 data 中的 property 才是响应式的
 - 意思是vm实例化后，再重新创建值是不会驱动使徒的更新
# 3.Object.freeze()方法？
 - 经过这个函数处理过的对象属性无法更改
 - 既无法同过Onject.definde来实现数据驱动视图，更新渲染
# 4.Vue.component()
 - 定义组件的原生api
# 5.如何动态绑定事件名属性名？
 - v-bind:[attributeName] 
 - v-on:[eventName] (eventName:click|focus...)
 - [null] 动态参数求值为null时解除绑定
 - [params] params最好不使用js表达式(有一定的约束,空格等不支持)
# 6.修饰与缩写
 - 修饰与缩写都可适用于动态绑定的属性
# 7.计算属性初衷
 - 用于替代一些复杂模板语法里面的js表达式
 - 响应式依赖，值变化会重新计算，不变化会会使用原值结果，从而缓存
 - 有提供setter,还有默认的getter
# 8.侦听器
 - 用于观察组件间数据流动，路由变化..处理数据变化后的动作
# 9.样式绑定
 - 对象的方式进行切换
 - 数组的方式进行叠加
# 10.key值
 - v-if渲染组件时会适当的销毁和创建组件,如果渲染同一组件时他们的key是相同的
 - 给dom绑定不同的key值就会创建新的dom,而不是在原有的dom上更新事件，侦听等附加属性
# 11.for与if
 - 一起使用时，for的优先级更高，就是先遍历在判断  
# 12.数组对象的更新与维护
 - vue对某些数组方法进行维护，通过vue实例调方法会触发视图更新
 - 所以原有的数组对象的变化是不会驱动视图的
