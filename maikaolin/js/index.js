// banner	
	var i=0;
	var timer=null;
	timer=setInterval(autoplay,3000)
	function autoplay(){		
		$("#banner li").eq(i).fadeTo(2000,0);
		$("#banner i").eq(i).css("background","orange").siblings().css("background","#ccc");
		i++;
		if(i==2){
			i=0;
			$("#banner li").fadeTo(2000,1);
		}		

	}
	
// 鼠标划入，计时器停止
$("#banner").hover(function(){
	$("#banner span").css("display","block");
	clearInterval(timer);	
	// 点击
		$("#sp1").click(function(){
			i++;
			if(i==1){
				i=1;
				
			}
			$("#banner li").fadeTo(10,1);
			$("#banner li").eq(i).fadeTo(1000,0);
			$("#banner i").eq(i).css("background","orange").siblings().css("background","#ccc");									
		})
		$("#sp2").click(function(){
			i--;
			if(i==0){
				i=0;
				
			}
			$("#banner li").fadeTo(10,1);
			$("#banner li").eq(i).fadeTo(1000,0);
			$("#banner i").eq(i).css("background","orange").siblings().css("background","#ccc");
			
		})
},function(){
	$("#banner span").css("display","none");
	timer=setInterval(autoplay,3000);
})

// nav 两侧跟随
$(window).scroll(function(){
	var sTop=$(document).scrollTop();
	$(".navR").css("top",sTop+70);
	$("#last").css("display","none");
	$(".navL ul").css("top",sTop);
	$(".navM").css("top",sTop);
	if(sTop>70){
		$("#last").css("display","block");		
	}
})
$("#last").click(function(){
	$("body,html").animate({"scrollTop":0},1000);
})
$(".navL li").hover(function(){
	$(this).css("background","rgba(255,255,255,0.5)");
	if($(this).index()==1){
		$(".navM").css("display","block");
	}else{
		$(".navM").css("display","none");
	}
},function(){
	$(this).css("background","url(img/bg.jpg) no-repeat 0 43px");
})

$(".navM li").hover(function(){
	$(this).css("background","rgba(255,255,255,0.5)");
},function(){
	$(this).css("background","url(img/bg.jpg) no-repeat 0 43px");
})

$("#kefu1").hover(function(){
	$("#kefu").css("display","block");
},function(){
	$("#kefu").css("display","none");
})

// 内容图 特效
$(".conR").hover(function(){
	$(this).css("background","pink")
	$(this).find("img").animate({"marginLeft":0})
},function(){
	$(this).css("background","#fff")
	$(this).find("img").animate({"marginLeft":8})
})
$(".conL").hover(function(){
	$(this).css("background","yellowgreen")
	$(this).find("img").animate({"marginLeft":-8})
},function(){
	$(this).css("background","#fff")
	$(this).find("img").animate({"marginLeft":0})
})
