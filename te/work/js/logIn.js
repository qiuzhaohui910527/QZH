// JavaScript Document
$(function(){
	/*帐号*/
	$("#uu-name").focus(function(){
		$(this).attr("placeholder","");
	});
	$("#uu-name").blur(function(){
		$(this).attr("placeholder","邮箱/手机号/用户名");
	});
	/*密码*/
	$("#pp-name").focus(function(){
		$(this).attr("placeholder","");
		$(this).attr("type","password");
	});
	$("#pp-name").blur(function(){
		if(this.value==""){
			$(this).attr("placeholder","请输入密码");
		}
		$(this).attr("type","password");
	});
	/*
		
	*/
	var ccc=0;
	$(".more1").click(function(){
		
		if(ccc%2==0){
			$(".moreicon").css("background","url('../images/login/bg2.png') no-repeat -14px -113px");
			$(".more_login").slideDown(200);	
			ccc+=1;
		}else{
			$(".moreicon").css("background","url('../images/login/bg2.png') no-repeat 0 -113px");
			$(".more_login").slideUp(200);
			ccc+=1;
		}
		
	});
	/*
    checkCodeBox点击更换验证码
    */
	$("#checkCode-box").html(create());
	
	$("#checkCode-box").click(function(){
		
		$("#checkCode-box").html(create());
		
	});
	/*
	验证码生成
	*/
	function create(){
		var arr=[0,1,2,3,4,5,6,7,8,9];
		var str="";
		for(var i=0;i<4;i++){
			var index=Math.round(Math.random()*(arr.length-1));
			str+=arr[index];
		}
		return str;
	}
	/*
	点击登录时帐号密码已注册才能登录
	*/
	$("#login_submit").click(function(){
		
		var name=getCookie("username");//拿用户名的值
		var pwd=getCookie("password");//那密码的值
		//进行比较
		if($("#uu-name").val()==name&&$("#pp-name").val()==pwd&&$("#checkCode").val()==$("#checkCode-box").html()){
			open("success.html");//location.href="index.html";
			var date=new Date();
			date.setFullYear(date.getFullYear()+100);
			setCookie("flag1","true",date);//注册时存一个cookie（flag1=true）用作返回使用
		}else{
			alert("用户名或密码错误")
		}
	});
	
})