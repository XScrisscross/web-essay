/*  
    调用函数生成一个控制器
    next()执行
    yield暂停

    暂停和执行有什么用,就是暂停的时候可以执行异步,
    异步完了可以执行同步


    这里处理异步请求,模拟异步 否则  Generator is already running

    妈的  真难搞  需要es6的书........

    生成器函数的特点
    该函数可以在同步代码中暂停和执行
    暂停的时候执行异步任务,
    并且异步任务的参数可以通过next()传到同步中
    ???ajax
*/

function fn() {
    //假设这是一个ajax请求
    //数据请求到会执行it.next
    setTimeout(function(){
        var data = "hello"
        console.log(data);
        it.next(data+"-----");
    },2000)
}

//这里是函数生成器
function* g() {
    console.log(1);
    
    //当异步操作完毕yield会得到值
    //这里会自动继续执行
    var data = yield fn();

    console.log(data);
}
var it = g();
it.next();

// function g() {
//     console.log(1);
    
//     //当异步操作完毕yield会得到值
//     //这里会自动继续执行
//     setTimeout(function(){
//         var data = "hello"
//         console.log(data);
//     },2000)

//     console.log(2);
// }
// g();


