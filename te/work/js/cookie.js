/**
 * Created by Master on 2016/9/30.
 */
/*
添加 cookie
作用 保存信息
param
name
value
date
path
domain
secure
 */
function setCookie(name,value,date,path,domain,secure) {//username = aaa password = bbb
    var str = "";
    if(value.length<=0){
        //alert("未输入cookie信息");
        return "";
    }else{
        str = name+"="+value;
    }
    if(date!=null){
        str += ";expires="+date;
    }
    if(path){
        str +=";path="+path;
    }
    if(domain){
        str +=";domain="+domain;
    }
    if(secure){
        str +=";secure";
    }
    document.cookie = str;
}
/*
封装拿值
username
 */
function getCookie(name) {
    var str = document.cookie;//username=aaa; password=123456
    var reg = /\s/ig;
    str = str.replace(reg,"");//username=aaa;password=123456
    var arr = str.split(";");//["username=aaa","password=123456"];
    for(var i=0;i<arr.length;i++){
        var arr2 = arr[i].split("=");//["username","aaa"]
        if(arr2[0]==name){
            return arr2[1];
        }
    }
    return "";


}

function removeCookie(name,value) {
    var str = name+"="+value+";expires="+new Date();
    document.cookie = str;
}