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
		/*
		商品展示图片
		*/
		$(".small-pic").find("li").hover(function(){
			var count=1;
			$(this).attr("class","cur");
			$(this).siblings().attr("class","");
			var src2=$(this).find("img").attr("src2");
			$(".big-pic").find("img").attr("src",src2);
		});
		/*
		
		*/
		$(".span2").hover(function(){
			$(".wb").css("display","block");
		},function(){
			$(".wb").css("display","none");
		});
		$(".wb").hover(function(){
			$(this).css("display","block");
		},function(){
			$(this).css("display","none");
		});
		/**/
		$(".ps").hover(function(){
			$(".ps-1").css("display","block");
		},function(){
			$(".ps-1").css("display","none");
		});
		/**/
		$(".dddd").find("li").hover(function(){
			$(this).find(".info").css("display","block");
		},function(){
			$(this).find(".info").css("display","none");
		});
		/**/
		$(".z0,.fanjifen").hover(function(){
			$(".fanjifen").css("display","block");
		},function(){
			$(".fanjifen").css("display","none");
		});
		/*
		点击北京出现地区
		1点击下一出现
		2再点击消失
		3点击x也消失
		*/
		var index=0;
		$(".beijing").click(function(){
			if(index%2==0){
				$(".diqu").animate({opacity:1},300);
				$(".diqu").css("display","block");
				index+=1;
				console.log(index)
			}else{
				$(".diqu").animate({opacity:0},300);
				$(".diqu").css("display","none");
				index+=1;	
			}
		});
		$(".xxx").click(function(){
			$(".diqu").animate({opacity:0},300);
			$(".diqu").css("display","none");
		});
		$(".diqu li").click(function(){
			$(".beijing").html($(this).html());
		});
		/*
		bug：一直用li中的a拿其余的li中的a发现siblings只能找其余通报元素
		*/
		
		$(".bianhuan li").click(function(){
			//console.log($(".bianhuan li a"))//拿到4个a
			$(this).css("border","1px solid red");
			//console.log($(this));
			$(this).siblings().css("border","1px solid white");
			var src2=$(this).attr("src2");
			$(".big-pic").find("img").attr("src",src2);
			$(".small-pic").find("li").attr("class","");
			/*
			var date=new Date();
			date.setFullYear(date.getFullYear()+100);
			setCookie(yanse,$(this).yanse,date);
			*/
		});

		/**/
		$(".chima ul li").click(function(){
			$(this).css("border","2px solid red");
			$(this).siblings().css("border","1px solid #ccc");
		});
		/*
		加减号
		*/
		
		var vall=1;
		$(".i2").click(function(){
			if($(".shuliang p input").val()<5){
				//console.log($(".shuliang p input").val());
				var val=$(".shuliang p input").val();
				vall++;
				val=vall;
				$(".shuliang p input").attr("value",val)
				console.log(val);
			}
		});
		$(".i1").click(function(){
			if($(".shuliang p input").val()>1){
				var val=$(".shuliang p input").val();
				vall--;
				val=vall;
				$(".shuliang p input").attr("value",val)
			}
		});
		/*$(".shuliang p input").keypress(function(){
			if($(".shuliang p input").val()>5){
				$(".xianzhi p").css("display","block");
			}
		});*/
		var timer=setInterval(function(){
			if($(".shuliang p input").val()>5){
				$(".xianzhi p").css("display","block");
			}else{
				$(".xianzhi p").css("display","none");
			}
		},100);
		/*
		宝贝详情点击状态
		其他点击也是这个css
		*/
		$(".jieshao span").click(function(){
			$(this).attr("class","tongyong");
			$(this).siblings().attr("class","");
		});
		/*
		滚动条到一定高度宝贝详情跟随视口定位
		*/
		$(document).scroll(function(){
			var top=$(document).scrollTop();//获取滚动条高度
			if(top>=750){
				$("#fixedd").css("display","block")
				if(top<=18950){
					$(".c2r-7").attr("class","c2r-7 c-7fixed");
				}else{
					$(".c2r-7").attr("class","c2r-7 c-7absolute");
				}
			}
			if(top<750){
				$("#fixedd").css("display","none");
				$(".c2r-7").attr("class","c2r-7");
			}
			
		});
		/*
		.c-7fixed
		.c2r-7
		*/
		
		$(document).scroll(function(){
			var top=$(document).scrollTop();
			/*商品参数*/
			if(top>=850&&top<950){
				$(".c2r-7 li").eq(1).attr("class","cur-2");
				$(".cur-2").siblings().attr("class","");
			}
			if(top<850){
				$(".c2r-7 li").eq(0).attr("class","cur-2");
				$(".cur-2").siblings().attr("class","");	
			}
			/*发货物流*/
			if(top>=950&&top<1050){
				$(".c2r-7 li").eq(2).attr("class","cur-2");
				$(".cur-2").siblings().attr("class","");
			}
			
			/*商品尺码*/
			if(top>=1050&&top<1400){
				$(".c2r-7 li").eq(3).attr("class","cur-2");
				$(".cur-2").siblings().attr("class","");
			}
			
			/*商品展示*/
			if(top>=1400&&top<18790){
				$(".c2r-7 li").eq(4).attr("class","cur-2");
				$(".cur-2").siblings().attr("class","");
			}
			/*售后保障*/
			if(top>=18790&&top<18970){
				$(".c2r-7 li").eq(5).attr("class","cur-2");
				$(".cur-2").siblings().attr("class","");
			}
			/*90天评价*/
			if(top>=18970){
				$(".c2r-7 li").eq(6).attr("class","cur-2");
				$(".cur-2").siblings().attr("class","");
			}
			/*
			左边栏运动效果
			*/
			console.log(top);
			if(top>=3150){
				$(".c2l-4").attr("class","c2l-4 zuofixed")	
			}
			if(top<3150){
				$(".c2l-4").attr("class","c2l-4")	
			}
			if(top>=18735){
				$(".c2l-4").attr("class","c2l-4 c2r-4ab")
			}
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



	// Simple elevator usage.
	var elementButton = document.querySelector('.dingdan-10-1');
	var elevator = new Elevator({
		element: elementButton,
		mainAudio: '../music/elevator-music.mp3', // Music from http://www.bensound.com/
		endAudio:  '../music/ding.mp3'
	});


})