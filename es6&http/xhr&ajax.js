/*  
    ajax异步请求-get
    1.创建异步对象
    var xhr = new XMLHttpRequest();
    2.设置open请求方式
    xhr.open("get","xxx.php?xxx="+xxx);
    3.设置请求头setRequestHeader('key':'value'),get方式不需要设置请求头
    4.设置请求体(发送请求):send(key=value&key=value),get请求不需要在这个位置来传递参数
    send(null);


    ---------------------xhr2.0----------------------
    5.设置超时
    xhr.timeout = 2000;
    xhr.ontimeout = function(e){
        console.log(e);
    }

    6.表单数据直接传递,相当于jquery中的表单序列化    
    获取表单
    var myform = document.querySelector("#form");
    将表单做为参数传递，在创建formData对象的时候
    var formdata = new FormData(myform)
    特点之一：可以自由的追加参数
    formdata.append("address","传智播客");
    生成的formData对象就可以直接做为异步对象的参数传递
    xhr.send(formdata);
    -------------------------------------

    ajax异步请求-post
    1.创建异步对象
    var xhr = new XMLHttpRequest();
    2.设置open请求方式
    xhr.open("post","xxx.php");
    3.设置请求头setRequestHeader('key':'value')
    setRequestHeader('Content-Type':'application/x-www-form-urlencoded')
    4.设置请求体(发送请求):send('key=value&key=value')
    send('key=value&key=value');

    ---------------------xhr2.0----------------------
    5.设置超时
    xhr.timeout = 2000;
    xhr.ontimeout = function(e){
        console.log(e);
    }

    6.表单数据直接传递,相当于jquery中的表单序列化    
    获取表单
    var myform = document.querySelector("#form");
    将表单做为参数传递，在创建formData对象的时候
    var formdata = new FormData(myform)
    特点之一：可以自由的追加参数
    formdata.append("address","传智播客");
    生成的formData对象就可以直接做为异步对象的参数传递
    xhr.send(formdata);

    -------------------------------------

    响应报文(xhr.status:可以获取当前服务器的响应状态)：
    报文行：响应状态码 响应状态信息  200 ok
    报文头：服务器返回给客户端的一些额外信息  
    报文体：服务器返回给客户端的数据 responseText:普通字符串  responseXML：符合xml格式的字符串

    响应成功后：
    1.服务器成功响应 
    2.数据已经回到客户端并且可以使用了

    响应状态码(readystate)
    0:创建了异步对象,但是还没有真正的去发送请求
    1.调用了send方法,正在发送请求
    2.send方法执行完毕了,已经收到服务器的响应内容--原始内容，还不可以使用
    3.正在解析数据
    4.响应内容解析完毕,可以使用了 

    v3.0 对象方式传输数据

    ajax:jquery-ajax参数
    url 接口地址
    type 请求方式
    timeout 请求超时
    dataType 服务器返回格式
    data 发送请求数据
    beforeSend:function () {} 请求发起前调用
    success 成功响应后调用
    error 错误响应时调用
    complete 响应完成时调用（包括成功和失败）
    $("form").serialize():序列化表单   key=value$key=value形式

    -----------------json解析--------------------
    1、Javascript 解析方法
    JSON对象   JSON.parse()、 JSON.stringify()
    2、PHP解析方法
    json_encode()、json_decode()
    总结：JSON体积小、解析方便且高效，在实际开发成为首选

    -----------------模版引擎--------------------
    作用:渲染数据时代替字符串拼接
    ------->   转到正则替换.html

    -----------------跨域访问--------------------
    同源:域名,协议,端口号完全一样
    解决跨域请求
    1.服务端设置cors(在需要垮的 域 里面设置可以被访问的 域)
    header( 'Access-Control-Allow-Origin:*' ); 
    header( 'Access-Control-Allow-Origin:http://www.study.com');
    2.利用script()标签的src属性来进行跨域
    普通访问无法跨域,也无法跨域请求数据,jsonp实现原理,ajax判断如果是jsonp格式,
    就动态创建一个script标签,在本域名获取数据,返回一个可立即调用的函数字符串,
    这个字符串在src属性中可跨域访问
*/
var $ = {
    getData: function (data) {
        if (data && typeof data == "object") {
            var str = "";
            for (var key in data) {
                str += key + "=" + data[key] + "&";
            }
            return str.substr(0, str.length - 1);
        }
    },

    ajax: function (option) {
        var type = option.type.toLowerCase() || "get";
        var url = option.url;
        var data = option.data || "";
        var dataType = option.dataType.toLowerCase();
        var str = this.getData(data);
        var success = option.success;

        // 解构方式
        // let { name: myName, age: myAge, sex: mySex } = person;
        // let { type: type, url: url, data: data, dataType: dataType, str: str, success: success } =option;

        var xhr = new XMLHttpRequest();

        if (type == "get") {
            xhr.open(type, url + "?" + str);
            str = null;
        }

        if (type == "post") {
            xhr.open(type, url);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }

        xhr.send(str);

        // xhr.onreadystatechange = function () {
        //     if (xhr.status == 200 && xhr.readyState == 4) {
        //         if (dataType == "string") {
        //             var res = xhr.responseText;
        //         } else if (dataType == "json") {
        //             var res = JSON.parse(xhr.responseText);
        //         } else {
        //             var res = xhr.responseXML;
        //         }
        //         success && success(res);
        //     }
        // };

        // onload方式
        xhr.onload = function () {
            if (dataType == "string") {
                var res = xhr.responseText;
            } else if (dataType == "json") {
                var res = JSON.parse(xhr.responseText);
            } else {
                var res = xhr.responseXML;
            }
            success && success(res);
        }
    }
}
// ajax({
//     type: "post",
//     url: "php/php.php",
//     data: {
//         name: "xiaoming",
//         age: 18
//     },
//     dataType: "string",
//     succeed: function () {
//         console.log(res);
//     }
// });