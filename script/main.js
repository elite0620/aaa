$(function () {
	//공지사항 첫번째를 클릭하면 popup
	$(".notice>li").eq(0).click(function () {
		$(".popup").css("display", "block");
	})
	$(".close").click(function () {
		$(".popup").css("display", "none");
	})

	//#nav>li에 mouseover - sub 보이도록
	//#nav>li에 mouseout - sub 사라지도록
	$("#nav>li").mouseover(function () {
		$(".sub").stop().fadeIn(300);
	})
	$("#nav>li").mouseout(function () {
		$(".sub").stop().fadeOut(300);
	})

	//tabTitle>li를 클릭 해당하는 tabCont>ul 보이도록 - 형제는 사라지도록

	$(".tabTitle>li").click(function () {

		var sTab = $(this).index();
		$(".tabCont>ul").eq(sTab).css("display", "block").siblings().css("display", "none");

		$(this).addClass("active").siblings().removeClass("active");
	})

	//배너 옆으로 3초마다 
	var sNum = 0;
	var obj = $(".banner>li").clone();
	$(".banner").append(obj);

	setInterval(function () {
		
		if(sNum==3){
			sNum=0;
			$(".banner").css("margin-left",0);
		}
		sNum++;
		$(".banner").stop().animate({
			"margin-left":-sNum*100+"%"
		},1000)

	}, 3000)

})
