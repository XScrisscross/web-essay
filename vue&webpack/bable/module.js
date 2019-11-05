let name = "jack";
let age = 44;

export let num = 998;
export let fn = function () {
    console.log("fn")
}

export default {
    name,
    age,
}

/*
    1.默认导出只能有一次

    2.可以一起导出也可以放入对象一起导出

    3.导出可以重命名

    4.默认导出可以一起使用

*/