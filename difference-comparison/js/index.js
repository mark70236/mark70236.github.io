$(function() {
	var containerWidth = $(".comparison-box").width();
	var containerHeightString = $(".comparison-box").height()+"px";
	var canMove = 0;
	$(".scrollbar").mousedown(function(e) {
		canMove = 1;
		var firstX = (e.pageX - $(".wrap").offset().left)/containerWidth*100+"%";
		var firstClipChangeX = e.pageX - $(".wrap").offset().left+"px";
		$(this).css('left', firstX);
		$(".image-box-2").css('clip', "rect(0,"+firstClipChangeX+","+containerHeightString+",0)");
		console.log("down")
		$(".scrollbar").mousemove(function(e) {
			if (canMove==1) {
				var moveX = (e.pageX - $(".wrap").offset().left)/containerWidth*100+"%";
				var moveChangeX = e.pageX - $(".wrap").offset().left+"px";
				$(this).css('left', moveX);
				$(".image-box-2").css('clip', "rect(0,"+moveChangeX+","+containerHeightString+",0)");
				console.log(moveX)
			}
		});
	});
		$(".comparison-box").mousemove(function(e) {
			if (canMove==1) {
				e = $(this).find('.scrollbar')
				var moveX = (e.pageX - $(".wrap").offset().left)/containerWidth*100+"%";
				var moveChangeX = e.pageX - $(".wrap").offset().left+"px";
				$(this).css('left', moveX);
				$(".image-box-2").css('clip', "rect(0,"+moveChangeX+","+containerHeightString+",0)");
				console.log(moveX)
			}
		});

	$(".scrollbar").mouseup(function(e) {
		canMove = 0;
		console.log("up")
	});
	$(".comparison-box").mouseover(function(e) {
		canMove = 0;
	});
})