/**
 * Created by Master on 2016/11/9.
 */
$(function(){
    var name=getCookie("username");//拿用户名的值
    console.log(name);
    $("#cookie-name").html(name);
    $("#shopping").click(function(){
        location.href="index.html";
    });
})