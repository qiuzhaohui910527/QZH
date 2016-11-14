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
		透明轮播
		*/
		var index=0;//0,1,2,3,4,5,下标
		$("#banner-btn li").click(function(){//点击每一个点的时候
			$("#banner-btn li").attr("class","");//黑点的calss变成空
			$(this).attr("class","active");//当前的黑点class为active
			index=$(this).index();//index等于当前黑点的index数字
			$("#banner-img li").eq(index).stop().animate({opacity:1,zIndex:1},500);//第index个图片的op等于1
			$("#banner-img li").eq(index).siblings().stop().animate({opacity:0,zIndex:0},500);//其他的图片op为0
			
		});
		var timer2=setInterval(auto,3000);//设置定时器
		$("#banner-img").hover(function(){
			clearInterval(timer2);
		},function(){
			timer2=setInterval(auto,3000);
		});
		function auto(){//封装自动变化
			index++;//index每次加1
			if(index>=$("#banner-btn").find("li").length){//判定如果index大于等于黑点的个数
				index=0;//下标值为0
			}
			$("#banner-img").find("li").eq(index).stop().animate({opacity:1,zIndex:1},500);
			
			$("#banner-img").find("li").eq(index).siblings().stop().animate({opacity:0,zIndex:0},500);
			$("#banner-btn li").eq(index).siblings().attr("class","");
			$("#banner-btn li").eq(index).attr("class","active");
		};
		
		/*
		淡入淡出
		*/
		
		$(".touming").find("img").hover(function(){
			$(this).stop().animate({opacity:0.5},200);
		},function(){
			$(this).stop().animate({opacity:1},200);
		});
		$(".touming").click(function(){
			open("detail.html")
		});
		/*
		多个透明
		*/
		$("#content-top-center-two ul").find("li").hover(function(){
			$(this).stop().animate({opacity:0.5},200);
		},function(){
			$(this).stop().animate({opacity:1},200);
		});
		
		/*
		隐藏黑框上浮
		*/
		$('#content-2-center').find('li').hover(function(){
			$(this).find('.yincangkuang').stop(true,false).animate({'bottom':'1px'},350);
		},function(){
			$(this).find('.yincangkuang').stop(true,false).animate({'bottom':'-20px'},350);
		});
		/*
		五张图半透明
		*/
		$("#content-3-bottom").find("li").hover(function(){
			$(this).stop().animate({opacity:0.5},200);
		},function(){
			$(this).stop().animate({opacity:1},200);
		});
		/*
		滚动条
		1滚动条距离大于100出现左边框
		2小于100时左边框消失
		*/
		$(document).scroll(function(){
			var top=$(document).scrollTop();//获取滚动条高度
			if(top>=100){
				$("#zuobianlan").css("display","block");
			}
			if(top<=100){
				$("#zuobianlan").css("display","none");
			}
		});
		/*
		上边框的滚动条效果
		1滚动条距离大于500出现上边框
		2小于500时上边框消失
		*/
		
		$(document).scroll(function(){
			var top=$(document).scrollTop();//获取滚动条高度
			if(top>=500){
				$("#shangbiankuang").css("display","block");
			}
			if(top<=500){
				$("#shangbiankuang").css("display","none");
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



		/*
		json
		*/
		var btn=document.getElementById("jiazaimore");
		var list=document.getElementById("libiao");

		btn.onclick=function(){
			var url="http://localhost/ajaxtest01/json/index.json";
			function func(str){
				var arr=eval("("+str+")");
				console.log(arr);
				for(var i=0;i<arr.length;i++){
					var obj=arr[i];//{"src":"../images/index/1101.jpg"}
					//第一个
					var img=document.createElement("img");
					var a=document.createElement("a");
					var div1=document.createElement("div");
					var divF=document.createElement("div");
					img.src=arr[0].src;
					a.appendChild(img);

					var div2=document.createElement("div");
					var a2=document.createElement("a");
					a2.innerHTML=arr[0].names;
					console.log(a2.innerHTML)
					var span1=document.createElement("span");
					span1.innerHTML=arr[0].days;
					div2.appendChild(a2);
					div2.appendChild(span1);
					div2.className="shangpinming";

					var div3=document.createElement("div");
					div3.className="huodong";
					var span2=document.createElement("span");
					span2.className="zhekou";
					span2.innerHTML=arr[0].zhekou;
					var span3=document.createElement("span");
					span3.className="shoucang";
					span3.innerHTML=arr[0].shoucang;
					div3.appendChild(span2);
					div3.appendChild(span3);

					div1.appendChild(a);
					div1.appendChild(div2);
					div1.appendChild(div3);
					div1.className="bianju lis";

					//第二个
					var img1=document.createElement("img");
					var a3=document.createElement("a");
					var box1=document.createElement("div");
					img1.src=arr[1].src;
					a3.appendChild(img1);

					var box1_1=document.createElement("div");
					var a4=document.createElement("a");
					a4.innerHTML=arr[1].names;
					console.log(a4.innerHTML)
					var span2_1=document.createElement("span");
					span2_1.innerHTML=arr[1].days;
					box1_1.appendChild(a4);
					box1_1.appendChild(span2_1);
					box1_1.className="shangpinming";

					var box1_2=document.createElement("div");
					box1_2.className="huodong";
					var span2_2=document.createElement("span");
					span2_2.className="zhekou";
					span2_2.innerHTML=arr[1].zhekou;
					var span2_3=document.createElement("span");
					span3.className="shoucang";
					span3.innerHTML=arr[1].shoucang;
					box1_2.appendChild(span2_2);
					box1_2.appendChild(span2_3);

					box1.appendChild(a3);
					box1.appendChild(box1_1);
					box1.appendChild(box1_2);
					box1.className="bianju lis";
					//第3个
					var img3=document.createElement("img");
					var az=document.createElement("a");
					var box2=document.createElement("div");
					img3.src=arr[2].src;
					az.appendChild(img3);

					var box2_1=document.createElement("div");
					var az1=document.createElement("a");
					az1.innerHTML=arr[2].names;
					console.log(a4.innerHTML)
					var span3_1=document.createElement("span");
					span3_1.innerHTML=arr[2].days;
					box2_1.appendChild(az1);
					box2_1.appendChild(span3_1);
					box2_1.className="shangpinming";

					var box2_2=document.createElement("div");
					box2_2.className="huodong";
					var span2_4=document.createElement("span");
					span2_4.className="zhekou";
					span2_4.innerHTML=arr[2].zhekou;
					var span2_5=document.createElement("span");
					span2_5.className="shoucang";
					span2_5.innerHTML=arr[2].shoucang;
					box2_2.appendChild(span2_4);
					box2_2.appendChild(span2_5);

					box2.appendChild(az);
					box2.appendChild(box2_1);
					box2.appendChild(box2_2);
					box2.className="bianju lis";
					//第4个
					var img4=document.createElement("img");
					var az4=document.createElement("a");
					var box3=document.createElement("div");
					img4.src=arr[3].src;
					az4.appendChild(img4);

					var box3_1=document.createElement("div");
					var az5=document.createElement("a");
					az5.innerHTML=arr[3].names;
					var span4_1=document.createElement("span");
					span4_1.innerHTML=arr[3].days;
					box3_1.appendChild(az1);
					box3_1.appendChild(span4_1);
					box3_1.className="shangpinming";

					var box3_2=document.createElement("div");
					box3_2.className="huodong";
					var span3_4=document.createElement("span");
					span3_4.className="zhekou";
					span3_4.innerHTML=arr[3].zhekou;
					var span3_5=document.createElement("span");
					span3_5.className="shoucang";
					span3_5.innerHTML=arr[3].shoucang;
					box3_2.appendChild(span3_4);
					box3_2.appendChild(span3_5);

					box3.appendChild(az4);
					box3.appendChild(box3_1);
					box3.appendChild(box3_2);
					box3.className="lis";



				}
				divF.className="mokuai";
				divF.appendChild(div1);
				divF.appendChild(box1);
				divF.appendChild(box2);
				divF.appendChild(box3);
				list.appendChild(divF);
			}
			ajax.get(url,func)
		};
	//alert($(window).height());
	// Simple elevator usage.//电梯效果
	var elementButton = document.querySelector('.dingdan-10-1');
	var elevator = new Elevator({
		element: elementButton,
		mainAudio: '../music/elevator-music.mp3', // Music from http://www.bensound.com/
		endAudio:  '../music/ding.mp3'
	});
	$(function(){
		$(".img").delay(1000).animate({left:"0px"},700);
		//p1 p2 p3
		$(".p1").delay(1300).animate({top:"0px"},500);
		$(".p2").delay(1500).animate({top:"30px"},700);
		$(".p3").delay(2000).animate({opacity:1},700);
		$(".p3").click(function(){
			//$(".mask").css("position","absolute");
			//$(".mask").css("left","-100%");
			$("body").css("overflow","auto");
			//$(".mask").css("display","none");
			//$(".snow").css("display","none");
			$("body").find(".mask",".snow","script").remove();
			$(document).find("canvas").remove();
		});
	});
	})