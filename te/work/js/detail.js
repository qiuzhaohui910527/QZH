// JavaScript Document
$(function(){
		/*
		二维码的运动效果
		bug：开始时用css方法中opacity效果 难看。想换渐变效果，开始没加stop()，效果没出来通过查询jq手册得知
		*/
		$("#yi,#erweima").mouseover(function(){
			$("#erweima").stop().slideDown(500)
			
		});
		$("#yi,#erweima").mouseout(function(){
			$("#erweima").stop().slideUp(500)
		});
		/*
		横向导航栏的效果 li背景和a的字体颜色
		bug：通过查jq手册得知find()方法可以在jquery框架中拿去子元素
		*/
		$(".caidan").mouseover(function(){
			$(this).css("background","red");
			$(this).find("a").css("color","white");
		});
		$(".caidan").mouseout(function(){
			$(this).css("background","white");
			$(this).find("a").css("color","#666");
		});
		/*
		搜索框点击事件
		用焦点进行操控
		1 聚焦时div出现
		2 btn点击时div隐藏且触发失去聚焦
		3 鼠标浮动input外框时解除失去聚焦且解除dom点击，鼠标离开时失去聚焦隐藏div，绑定dom点击时触发blur，鼠标离开时设置一个间歇隐藏div触发失焦。
		bug:1聚焦后设置dom失焦是全局失焦，不符合要求
			2设置blur时点击需要显示的div不能继续存在
			3点击div中的选项时会直接失焦，不能进行链接
		
		*/
		
		$("#sousuo").focus(function(){//聚焦显现
			$("#search-dianji").show();
		});
		
		$('#btn').click(function(){
			$('#search-dianji').hide();//点击时隐藏
			$('#sousuo').trigger('blur');//点击时触发blur
		})
		
		var timer = null;
		$('#search-search').hover(function(){
				clearTimeout(timer);
				$('#sousuo').off('blur')//解除bulr
				$(document).off('click')//解除点击
		},function(){
			$('#sousuo').on('blur',function(){//失去聚焦
				$('#search-dianji').hide()//隐藏
			})
				$(document).on('click',function(){
				
					$('#sousuo').trigger('blur');//dom点击时触发blur
				})
			timer = setTimeout(function(){//鼠标离开时设置一个间歇
				$('#search-dianji').hide();//隐藏
				$('#sousuo').trigger('blur');//触发blur
			},2000)
		});
		$(".lis li").hover(function(){
			$(this).find("img").stop().animate({opacity:0.5},200);
		},function(){
			$(this).find("img").stop().animate({opacity:1},200);
		});
		/*
		浮过下拉
		*/
		$(".xiala").hover(function(){
			$(this).find(".baoyou").stop().slideDown(200);
		},function(){
			$(this).find(".baoyou").stop().slideUp(200);
		});
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
	// Simple elevator usage.电梯返回顶部效果
	var elementButton = document.querySelector('.dingdan-10-1');
	var elevator = new Elevator({
		element: elementButton,
		mainAudio: '../music/elevator-music.mp3', // Music from http://www.bensound.com/
		endAudio:  '../music/ding.mp3'
	});
})
