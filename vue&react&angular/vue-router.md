### 1.动态路由匹配
- 匹配形式:/a/:a/b/:b,即可以动态传参,params可以在$router对象里面取
- 统配符使用 `{path: '/user-*'} {/path: '/user-*'}`
### 2.嵌套路由
- 子级路由不必写父级路由,会自动拼接
- 包含参数( to  from  next(false/{path}))
### 3.编程式导航
- js控制:`this.$router.push({path:"/a/b"})`
### 4.命名路由
- 即name参数,起个名字
### 5.命名视图
- `<router-view class="view one"></router-view>`
- `<router-view class="view two" name="a"></router-view>`
- `<router-view class="view three" name="b"></router-view>`
- `{ path: '/',  components: {  default: Foo,  a: Bar, b: Baz } } `
### 6.重定向与别名
- redirect:` { path: '/a', redirect: '/b' }`,url会重新跳转
- alias:`{ path: '/a', component: A, alias: '/b' }`,访问a和b的url各自,访问组件相同
### 7.路由组件传参
- 路由传参解耦布尔模式
- `{ path: '/user/:id', component: User, props: true }`
- `props: ['id']`
- 函数模式
- `{ path: '/search', component: SearchUser, props: (route) => ({ query: route.query.q }) }`
- URL /search?q=vue 会将 {query: 'vue'} 作为属性传递给 SearchUser 组件
### 8.模式
- history
- hash
### 9.路由钩子
- `{ path: '/foo',component: Foo,beforeEnter: (to, from, next) => {  // ... } }`
### 10.钩子函数生命周期
- 触发 -> beforeRouterLeave -> beforeEach(全局前置) -> beforeRouterUpdate(传参变化) -> beforeRouterEnter -> beforeResolve(全局后置,异步路由及组件完成后执行) -> afterEach(全局后置)
### 11.路由懒加载
- `const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')`
- `const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue')`
- `const Baz = () => import(/* webpackChunkName: "group-foo" */ './Baz.vue')`
