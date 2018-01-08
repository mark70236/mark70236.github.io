$(function() {
	//判斷Mac作業系統
	 if (navigator.userAgent.indexOf('Mac OS X') != -1) {
            $("body").addClass('mac-user')
      }

	$(".main-banner-box").slick({
		dots: false,
		infinite: true,
		speed: 1000,
		centerPadding: '60px',
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		autoplay: false,
		autoplaySpeed: 6000,
		variableWidth: true,
	});
	$(".health-box .article-box > ul").slick({
		infinite: true,
		speed: 1000,
		centerPadding: '0px',
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		autoplay: true,
		autoplaySpeed: 3000,
		variableWidth: true,
	});
})