$(function() {
	var bodyWidth = $("body").width();
	var container = $(".comparison-box");
	var containerWidth = container.width();
	var containerHeightString = container.height()+"px";
	var canMove = 0;
	var proportionDesktop = 508/1161;
	var proportionMobile = 828/560;
	var window_width = $(window).width();
	var initClipX_deskop = containerWidth*21/100+"px";
	var initClipX_mobile = containerWidth*50/100+"px";
	// var deviation = (bodyWidth-containerWidth)/2;
	// var deviationPercent = (bodyWidth-containerWidth)/bodyWidth/2*100;

	initContainer(proportionDesktop,proportionMobile);

	if (window_width<800) {
		containerHeightString = container.height()+"px";
		$(".image-box-1 img").attr('src', 'images/m01.jpg');
		$(".image-box-2 img").attr('src', 'images/m02.jpg');
		$(".scrollbar").css('left', '50%');
		$(".image-box-2").css('clip', "rect(0,"+initClipX_mobile+","+containerHeightString+",0)");
	}else {
		containerHeightString = container.height()+"px";
		$(".image-box-1 img").attr('src', 'images/d01.jpg');
		$(".image-box-2 img").attr('src', 'images/d02.jpg');
		$(".scrollbar").css('left', '21%');
		$(".image-box-2").css('clip', "rect(0,"+initClipX_deskop+","+containerHeightString+",0)");
	}


	//按下左鍵
	$(".scrollbar").mousedown(function(e) {
		canMove = 1;
		bodyWidth = $("body").width();
		containerWidth = container.width();
		containerHeightString = container.height()+"px";
		// deviation = (bodyWidth-containerWidth)/2;
		// deviationPercent = (bodyWidth-containerWidth)/bodyWidth/2*100;
		var firstX = (e.pageX - $(".wrap").offset().left)/containerWidth*100+"%";
		var firstClipChangeX = e.pageX - $(".wrap").offset().left+"px";
		$(this).css('left', firstX);
		$(".image-box-2").css('clip', "rect(0,"+firstClipChangeX+","+containerHeightString+",0)");

		$(".scrollbar").mousemove(function(e) {
			if (canMove==1) {
				var moveX = (e.pageX - $(".wrap").offset().left)/containerWidth*100+"%";
				var moveChangeX = e.pageX - $(".wrap").offset().left+"px";
				if(e.pageX - $(".wrap").offset().left<0) {
					moveX = 0+"%";
					moveChangeX = 0+"px";
				}else if (e.pageX - $(".wrap").offset().left>containerWidth) {
					moveX = 100+"%";
					moveChangeX = containerWidth+"px";
				}
				$(this).css('left', moveX);
				$(".image-box-2").css('clip', "rect(0,"+moveChangeX+","+containerHeightString+",0)");
				//console.log(moveX)
			}
		});
	});

	$(".scrollbar").on('touchmove',function(e){
		e.preventDefault();
		canMove = 1;
		bodyWidth = $("body").width();
		containerWidth = container.width();
		containerHeightString = container.height()+"px";
		// deviation = (bodyWidth-containerWidth)/2;
		// deviationPercent = (bodyWidth-containerWidth)/bodyWidth/2*100;
		if (canMove==1) {
			var moveX = (e.originalEvent.touches[0].pageX - $(".wrap").offset().left)/containerWidth*100+"%";
			var moveChangeX = e.originalEvent.touches[0].pageX - $(".wrap").offset().left+"px";

			if(e.originalEvent.touches[0].pageX - $(".wrap").offset().left<0) {
				moveX = 0+"%";
				moveChangeX = 0+"px";
			}else if (e.originalEvent.touches[0].pageX - $(".wrap").offset().left>containerWidth) {
				moveX = 100+"%";
				moveChangeX = containerWidth+"px";
			}

			$(this).css('left', moveX);
			$(".image-box-2").css('clip', "rect(0,"+moveChangeX+","+containerHeightString+",0)");

		}
	});

	//放開左鍵
	$(".scrollbar").mouseup(function(e) {
		// $(".scrollbar, .image-box-2").css('transition-duration', '0.4s');
		// setTimeout(function() {
		// 	$(".scrollbar, .image-box-2").css('transition-duration', '0.15s');
		// },400)
		canMove = 0;

	});

	//移出瀏覽器
	$(document).mouseleave(function() {
		canMove = 0;
	});

	var resizeTimer = false;
	$(window).on("resize", function() {
		if (resizeTimer) {
			clearTimeout(resizeTimer);
		}
		resizeTimer = setTimeout(initContainer,100);
	});
})

function initContainer(proportionDesktop,proportionMobile) {
	var container = $(".comparison-box");
	var containerWidth = container.width();
	var containerHeightString = container.height()+"px";
	var canMove = 0;
	var proportionDesktop = 508/1161;
	var proportionMobile = 828/560;
	var window_width = $(window).width();
	if (window_width<800) {
		$(".image-box-1 img").attr('src', 'images/m01.jpg');
		$(".image-box-2 img").attr('src', 'images/m02.jpg');
		$(".comparison-box").css('height', containerWidth*proportionMobile);
	}else {
		$(".image-box-1 img").attr('src', 'images/d01.jpg');
		$(".image-box-2 img").attr('src', 'images/d02.jpg');
		$(".comparison-box").css('height', containerWidth*proportionDesktop);
	};
	$(".scrollbar").css('left', '50%');
	$(".image-box-2").css('clip', "auto");
}
