// JavaScript Document


	$(function(){
		/*
		点击箭头向上
		*/
		/*
		做法失败
		var flag=true;
		
		$(".more").click(function(){
			if(flag==true){
				$(".more").stop().css("background","url('../images/register/jiantou.png') no-repeat 27px 5px");
				$(".yincang").css("display","block");
				flag==false;
			}else{
				$(".more").stop().css("background","url('../images/register/jiantou.png') no-repeat 27px -15px");
				$(".yincang").css("display","none");
				flag=true;
			}
		});
		*/
		/*
		正确做法
		判断点击次数，每点击一次index加1，当index%2==0时是点击双数次数，点击一次箭头向上，双数时向下
		*/
		var index=0;
		$(".more").click(function(){
			index+=1;
			if(index%2==0){
				$(".more").stop().css("background","url('../images/register/jiantou.png') no-repeat 27px -15px");
				$(".yincang").css("display","none");
			}else{
				$(".more").stop().css("background","url('../images/register/jiantou.png') no-repeat 27px 5px");
				$(".yincang").css("display","block");
			}
		});
		/*
		注册验证
		bug 拿不到当前值，是用错了attr，该用val拿没有内容的当前值
		*/
		//手机号
		var flag1=false;
		var flag2=false;
		var flag3=false;
		var flag4=false;
		var flag5=true;
		$("#phone").click(function(){//点击input时提示
			$(".tishi1").html("为了您的账户安全，请填写常用手机号");
			$(".tishi1").css("color","#999");
			$("#phone").css("border","1px solid #ccc");
			$("#phone").attr("placeholder","");
			$(".duigou1").css("display","none");//点击是先清除上次正确的状态
		});
		$("#phone").blur(function(){//失去焦点时
			var str=$("#phone").val();//当前value值
			console.log(str);
			var reg1=/^1[0-9]{10}$/;//1开头的11个数字
			if(reg1.test(str)){//正则比较value值,如果符合
				$(".duigou1").css("display","block");
				$(".tishi1").html("");
				flag1=true;
				$("#getY").css("color","#333").attr("href","#");
			}else if(str==""){//没有输入时的状态
				$(".tishi1").html("请输入手机号码");
				$(".tishi1").css("color","red");
				$("#phone").css("border","1px solid #ea9292");
				$("#phone").attr("placeholder","手机号码");
			}else{//有输入时且不符合要求时的状态
				$(".tishi1").html("手机号码格式错误");
				$(".tishi1").css("color","red");
				$("#phone").css("border","1px solid #ea9292");
				$("#phone").attr("placeholder","手机号码");
			}
		});
		//密码
		/*
		1 6-24
		2 不能是纯数字
		3 不能含空格
		*/
		$("#pasd").click(function(){//点击是下框文本显示的要求
			$(".tishi2").html("6-24位字符，不能是纯数字，不能含空格");
			$(".tishi2").css("color","#999");
			$("#phone").css("border","1px solid #ccc");
			$("#phone").attr("placeholder","");
			$(".duigou2").css("display","none");//点击是先清除上次正确的状态
		});
		$("#pasd").blur(function(){
			var str=$("#pasd").val();//拿value值			
			var reg2=/^[^ ]{1,}$/; //不能空格
			var reg3=/^\w{6,24}$/;//6-24
			var reg4=/^\d{6,}$/;//6个以上纯数字
			if(reg2.test(str)){//比较看是否有空格
				if(reg3.test(str)){//6-24个字符
					if(reg4.test(str)){//输入的全是数字
						$(".tishi2").html("密码不能使用纯数字");
						$(".tishi2").css("color","red");
						$("#pasd").css("border","1px solid #ea9292");
					}else{//输入的不只有数字,可以做密码
						$(".duigou2").css("display","block");
						$(".tishi2").html("");
						$("#pasd").css("border","1px solid #ccc");
						flag2=true;
					}
				}else if(str.length<6){//密码长度小于6
					$(".tishi2").html("密码过短，最短支持6个字符");
					$(".tishi2").css("color","red");
					$("#pasd").css("border","1px solid #ea9292");
				}
			}else if(str==""){//密码没有输入时
				$(".tishi2").html("请输入密码");
				$(".tishi2").css("color","red");
				$("#pasd").css("border","1px solid #ea9292");
			}else{//密码中有空格时
				$(".tishi2").html("密码不能包含空格");
				$(".tishi2").css("color","red");
				$("#pasd").css("border","1px solid #ea9292");
			}
		});
		/*
		确认密码
		*/
		$("#pasd2").click(function(){//点击是下框文本显示的要求
			$(".tishi3").html("请再次输入您的密码");
			$(".tishi3").css("color","#999");
			$("#pasd2").css("border","1px solid #ccc");
			$("#pasd2").attr("placeholder","");
			$(".duigou3").css("display","none");//点击是先清除上次正确的状态
		});
		$("#pasd2").blur(function(){//失焦时
			var str2=$("#pasd2").val();//拿value值			
			var reg2=/^[^ ]{1,}$/; //不能空格
			var reg3=/^\w{6,24}$/;//6-24
			var reg4=/^\d{6,}$/;//6个以上纯数字
			if(reg2.test(str2)){//比较看是否有空格
				if(reg3.test(str2)){//6-24个字符
					if(reg4.test(str2)){//输入的全是数字
						$(".tishi3").html("密码不能使用纯数字");
						$(".tishi3").css("color","red");
						$("#pasd2").css("border","1px solid #ea9292");
					}else if(str2==$("#pasd").val()){//密码进行比较一样时	
						$(".duigou3").css("display","block");
						$(".tishi3").html("");
						$("#pasd2").css("border","1px solid #ccc");
						flag3=true;
					}else{//密码不一样时
						$(".tishi3").html("两次密码输入不一致");
						$(".tishi3").css("color","red");
						$("#pasd2").css("border","1px solid #ea9292");
					}
				}else if(str2.length<6){//密码长度小于6
					$(".tishi3").html("密码过短，最短支持6个字符");
					$(".tishi3").css("color","red");
					$("#pasd2").css("border","1px solid #ea9292");
				}
			}else if(str2==""){//密码没有输入时
				$(".tishi3").html("请输入密码");
				$(".tishi3").css("color","red");
				$("#pasd2").css("border","1px solid #ea9292");
			}else{//密码中有空格时
				$(".tishi3").html("密码不能包含空格");
				$(".tishi3").css("color","red");
				$("#pasd2").css("border","1px solid #ea9292");
			}
		});
		/*
		验证码
		*/
		$("#yanzhengma").click(function(){
			$(".tishi4").html("验证码");
			$(".tishi4").css("color","#999");
			$("#yanzhengma").css("border","1px solid #ccc");
			$("#yanzhengma").attr("placeholder","");
		});
		$("#yanzhengma").blur(function(){
			var str3=$("#yanzhengma").val();
			if(str3==""){
				$(".tishi4").html("请输入验证码");
				$(".tishi4").css("color","red");
				$("#yanzhengma").css("border","1px solid #ea9292");
			}else if(str3==1111){
				$(".tishi4").html("验证码正确");
				$(".tishi4").css("color","green");
				flag4=true;
			}else{
				$(".tishi4").html("验证码错误");
				$(".tishi4").css("color","red");
				$("#yanzhengma").css("border","1px solid #ea9292");
			}
		});
		/*
		获取验证码点击事件
		1手机号不正确不能点击
		2手机号正确点击弹出对话框
		*/
		$("#getY").click(function(){
			if($(".duigou1").css("display")=="block"){//如果手机号正确
				$("#tanchukuang").css("display","block");//弹出框
			}
		});
		/*
		点击关闭关掉弹出框
		*/
		$("#close").click(function(){
			$("#tanchukuang").css("display","none");
		});
		$("#icon4").click(function(){
			$("#tanchukuang").css("display","none");
		});
		/*
		所有都符合要求后可以注册
		*/
		$("#submitA").click(function(){
			$("#remember").change(function(){
				if($("#remember").prop("checked")){
					flag5=true;
				}else{
					flag5=false;
				}
			});
			if(flag1==true&&flag2==true&&flag3==true&&flag4==true&&flag5==true){
				/*
				设置cookie
				*/
				var date=new Date();
				date.setFullYear(date.getFullYear()+100);
				setCookie("username",$('#phone').val(),date);
				setCookie("password",$('#pasd').val(),date);
				setCookie("flag1","true");//注册时存一个cookie（flag1=true）
				console.log($("#pasd").val());
				open("login.html")
			}
		});
		
		
	});
	
