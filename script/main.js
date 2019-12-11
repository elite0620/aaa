$(function(){
	//popup
	$(".notice>li").eq(0).click(function(){
		$(".popup").css("display","block");
	})
	$(".close").click(function(){
		$(".popup").css("display","none");
	})
	
	//nav
	$("#nav>li").mouseover(function(){
		$(this).children(".sub").css("display","block");
	})
	$("#nav>li").mouseout(function(){
		$(this).children(".sub").css("display","none");
	})
	
	//banner
	
	var sNum=0;
	
	var obj=$(".banner>li").clone();
	$(".banner").append(obj);
	
	setInterval(function(){
		
		if(sNum==3){
			sNum=0;
			$(".banner").css("margin-top",0);
		}
		
		sNum++;
		$(".banner").stop().animate({
			"margin-top":-sNum*300+"px"
		},1000)
	},3000)
	
	//gallery
	
	$(".gallery>li").mouseover(function(){
		$(this).css("opacity",0.5).siblings().css("opacity",1);
	})
	
	
	
})