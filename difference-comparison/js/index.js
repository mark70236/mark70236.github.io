$(function() {
	var container = $(".comparison-box")
	var containerWidth = container.width();
	var containerHeightString = container.height()+"px";
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
				if(e.pageX - $(".wrap").offset().left<0) {
					moveX = 0+"%";
					moveChangeX = 0+"px";
				}else if (e.pageX - $(".wrap").offset().left>containerWidth) {
					moveX = 100+"%";
					moveChangeX = containerWidth+"px";
				}
				$(this).css('left', moveX);
				$(".image-box-2").css('clip', "rect(0,"+moveChangeX+","+containerHeightString+",0)");
				console.log(moveX)
			}
		});
	});

	$(".scrollbar").mouseup(function(e) {
		canMove = 0;
		console.log("up")
	});
})