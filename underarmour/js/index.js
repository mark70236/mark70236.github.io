$(function() {
	//判斷Mac作業系統
	 if (navigator.userAgent.indexOf('Mac OS X') != -1) {
		$("body").addClass('mac-user')
	}

	//控制首頁登入區塊＆紅利點數區塊置頂功能
	var headerHeight = $("header").height();
	var mainOffsetTop = $(".main-fuction-box").offset().top-headerHeight;
	var wrapOffsetTop = $(".wrap").offset().top-headerHeight;
	$(window).on("resize", function() {
		headerHeight = 0;
		headerHeight = $("header").height();
		mainOffsetTop = 0;
		mainOffsetTop = $(".main-fuction-box").offset().top-headerHeight;
		wrapOffsetTop = 0;
		wrapOffsetTop = $(".wrap").offset().top-headerHeight;
	})

	$(window).scroll(function () {
		headerHeight = 0;
		headerHeight = $("header").height();
		$(".main-fuction-box.fix-top").css('top', headerHeight);
		var fullWidth = $(window).width();
		var scrollVal = $(this).scrollTop();
		// var headerHeight = $("header").height();
		// var mainBannerHeight = $(".top-box").height();
		//var mainFuctionBoxHeight = $(".main-fuction-box").height();
		//var mainHeight = headerHeight + mainBannerHeight;
		// var mainHeightStart = mainHeight - mainFuctionBoxHeight;
		// var mainHeightEnd = mainHeight - mainFuctionBoxHeight;

		if (fullWidth<900) {
			if ( scrollVal > wrapOffsetTop ) {
					if ($(".main-fuction-box").hasClass('fix-top')) {
							return false;
					}else {
						$(".main-fuction-box").addClass('fix-top');
					}
			}
			if ( scrollVal < wrapOffsetTop ) {
				$(".main-fuction-box").removeClass('fix-top');
				$(".main-fuction-box").css('top', 'auto');
			}
		}else {
			if ( scrollVal > mainOffsetTop ) {
					if ($(".main-fuction-box").hasClass('fix-top')) {
							return false;
					}else {
						$(".main-fuction-box").addClass('fix-top');
					}
			}
			if ( scrollVal < mainOffsetTop ) {
				$(".main-fuction-box").removeClass('fix-top');
				$(".main-fuction-box").css('top', 'auto');
			}
		}
	})
})
