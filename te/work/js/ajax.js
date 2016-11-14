/**
 * Created by Master on 2016/10/10.
 */
/*
封装ajax
封装一个ajax对象 功能 做异步请求 ，拿到 服务器数据

 */
var ajax = {
    /*
    参数列表
    1 url
    2 func 回调函数
     */
    get: function (url,func) {
        var xhr = new XMLHttpRequest();

        xhr.open("get",url,true);

        xhr.send(null);

        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4 && xhr.status == 200){
                var str = xhr.responseText;//用str接收 xhr的返回数据，然后扔入回调函数进行处理
                func(str);
            }
        }
    },
    /*
    url
    data
    func
     */
    post: function (url,data,func) {
        var xhr = new XMLHttpRequest();
        xhr.open("post",url,true);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(data);
        xhr.onreadystatechange = function () {
            if(xhr.readyState == 4 && xhr.status == 200){
                var str = xhr.responseText;//用str接收 xhr的返回数据，然后扔入回调函数进行处理
                func(str);
            }
        }
    }
}