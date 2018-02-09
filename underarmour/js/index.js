$(function() {
	//判斷Mac作業系統
	 if (navigator.userAgent.indexOf('Mac OS X') != -1) {
		$("body").addClass('mac-user')
	}


	//錨點功能 滑到長照搜尋區塊
	// $(".ad-search-box .footer-btn a").click(function() {
	// 		var pos = $(".ltc-box").offset().top;
	// 		$("html,body").animate({ scrollTop: pos-100 }, 700);
	// });


})
