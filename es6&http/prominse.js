/* 
    Promise意在让异步代码变得干净和直观，让异步代码变得井然有序  
*/
let promise = new Promise(function(resolve,reject){
    $.ajax({
        type: 'get',
        url: '',
        dataType: 'json',
        data: {
    
        },
        success: (res) => {
            if (!res.success) {
                reject(res.data);
                return
            }

            resolve(res.data)
        }
    })
});

promise.then(function(data){
    console.log(data);
    return this;
}).then(function(data){
    console.log(data);
    return this;
});