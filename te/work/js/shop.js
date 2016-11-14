/**
 * Created by Master on 2016/11/9.
 */
/*
 登陆后跳转区别
 */
var name=getCookie("username");//拿用户名的值
var pwd=getCookie("password");//那密码的值
var flag = getCookie("flag1");
//进行比较
if( flag = "true"){//等于true时设置首页显示用户名
    $(".now-user a").html(name);
    $(".now-user").css("display","block");
    $(".now-user a").attr("title",name);
    $(".zhuxiao").css("display","block");
}
var flag1 = getCookie("flag1");
if(flag1=="false"){//拿到cookie为false时回归原来状态
    $(".now-user").css("display","none");
    $(".zhuxiao").css("display","none");
}
/*
 出现一个注销按钮,点击后用户名消失返回原状态
 */
$(".zhuxiao").click(function(){
    setCookie("flag1","false");//点击修改cookie的flag1的值为false
    $(".now-user").css("display","none");
    $(".zhuxiao").css("display","none");
});