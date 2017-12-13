jQuery(function() {
	var bodyWidth = jQuery("body").width();
	var container = jQuery(".comparison-box");
	var containerWidth = container.width();
	var containerHeightString = container.height()+"px";
	var canMove = 0;
	var proportionDesktop = 508/1161;
	var proportionMobile = 828/560;
	var window_width = jQuery(window).width();
	var initClipX_deskop = containerWidth*21/100+"px";
	var initClipX_mobile = containerWidth*50/100+"px";
	// var deviation = (bodyWidth-containerWidth)/2;
	// var deviationPercent = (bodyWidth-containerWidth)/bodyWidth/2*100;

	initContainer(proportionDesktop,proportionMobile);

	if (window_width<800) {
		containerHeightString = container.height()+"px";
		jQuery(".image-box-1 img").attr('src', 'images/m01.jpg');
		jQuery(".image-box-2 img").attr('src', 'images/m02.jpg');
		jQuery(".scrollbar").css('left', '50%');
		jQuery(".image-box-2").css('clip', "rect(0,"+initClipX_mobile+","+containerHeightString+",0)");
	}else {
		containerHeightString = container.height()+"px";
		jQuery(".image-box-1 img").attr('src', 'images/d01.jpg');
		jQuery(".image-box-2 img").attr('src', 'images/d02.jpg');
		jQuery(".scrollbar").css('left', '21%');
		jQuery(".image-box-2").css('clip', "rect(0,"+initClipX_deskop+","+containerHeightString+",0)");
	}


	//按下左鍵
	jQuery(".scrollbar").mousedown(function(e) {
		canMove = 1;
		bodyWidth = jQuery("body").width();
		containerWidth = container.width();
		containerHeightString = container.height()+"px";
		// deviation = (bodyWidth-containerWidth)/2;
		// deviationPercent = (bodyWidth-containerWidth)/bodyWidth/2*100;
		var firstX = (e.pageX - container.offset().left)/containerWidth*100+"%";
		var firstClipChangeX = e.pageX - container.offset().left+"px";
		jQuery(this).css('left', firstX);
		jQuery(".image-box-2").css('clip', "rect(0,"+firstClipChangeX+","+containerHeightString+",0)");

		jQuery(".scrollbar").mousemove(function(e) {
			if (canMove==1) {
				var moveX = (e.pageX - container.offset().left)/containerWidth*100+"%";
				var moveChangeX = e.pageX - container.offset().left+"px";
				if(e.pageX - container.offset().left<0) {
					moveX = 0+"%";
					moveChangeX = 0+"px";
				}else if (e.pageX - container.offset().left>containerWidth) {
					moveX = 100+"%";
					moveChangeX = containerWidth+"px";
				}
				jQuery(this).css('left', moveX);
				jQuery(".image-box-2").css('clip', "rect(0,"+moveChangeX+","+containerHeightString+",0)");
				//console.log(moveX)
			}
		});
	});

	//手機版適用-判定touchmove
	jQuery(".scrollbar").on('touchmove',function(e){
		e.preventDefault();
		canMove = 1;
		bodyWidth = jQuery("body").width();
		containerWidth = container.width();
		containerHeightString = container.height()+"px";
		// deviation = (bodyWidth-containerWidth)/2;
		// deviationPercent = (bodyWidth-containerWidth)/bodyWidth/2*100;
		if (canMove==1) {
			var moveX = (e.originalEvent.touches[0].pageX - container.offset().left)/containerWidth*100+"%";
			var moveChangeX = e.originalEvent.touches[0].pageX - container.offset().left+"px";

			if(e.originalEvent.touches[0].pageX - container.offset().left<0) {
				moveX = 0+"%";
				moveChangeX = 0+"px";
			}else if (e.originalEvent.touches[0].pageX - container.offset().left>containerWidth) {
				moveX = 100+"%";
				moveChangeX = containerWidth+"px";
			}

			jQuery(this).css('left', moveX);
			jQuery(".image-box-2").css('clip', "rect(0,"+moveChangeX+","+containerHeightString+",0)");

		}
	});

	//放開左鍵時取消抓取
	jQuery(".scrollbar").mouseup(function(e) {
		canMove = 0;
	});

	//移出容器時取消抓取
	container.mouseleave(function() {
		canMove = 0;
	});


	//螢幕寬變化時初始化場景
	var resizeTimer = false;
	jQuery(window).on("resize", function() {
		if (resizeTimer) {
			clearTimeout(resizeTimer);
		}
		resizeTimer = setTimeout(initContainer,100);
	});
})

//初始化
function initContainer(proportionDesktop,proportionMobile) {
	var container = jQuery(".comparison-box");
	var containerWidth = container.width();
	var containerHeightString = container.height()+"px";
	var canMove = 0;
	var proportionDesktop = 508/1161;
	var proportionMobile = 828/560;
	var window_width = jQuery(window).width();
	if (window_width<800) {
		jQuery(".image-box-1 img").attr('src', 'images/m01.jpg');
		jQuery(".image-box-2 img").attr('src', 'images/m02.jpg');
		jQuery(".comparison-box").css('height', containerWidth*proportionMobile);
	}else {
		jQuery(".image-box-1 img").attr('src', 'images/d01.jpg');
		jQuery(".image-box-2 img").attr('src', 'images/d02.jpg');
		jQuery(".comparison-box").css('height', containerWidth*proportionDesktop);
	};
	jQuery(".scrollbar").css('left', '50%');
	jQuery(".image-box-2").css('clip', "auto");
}
