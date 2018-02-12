$(function() {
	// var hsbOption = 0;
	// $(".header-search-box i, .header-search-lightbox").click(function() {
	// 	//alert(hsbOption);
	// 	if (hsbOption == 0) {
	// 		if ($(".header-search-lightbox").hasClass('active')) {
	// 			$(".header-search-lightbox").removeClass('active');
	// 			hsbOption = 0;
	// 		}else {
	// 			$(".header-search-lightbox").addClass('active');
	// 			hsbOption = 1;
	// 			return false;
	// 		}
	// 	}else { return false; }
	// });

	// $("body").click(function() {
	// 	//alert("body"+hsbOption);
	// 	if (hsbOption == 1) {
	// 		$(".header-search-lightbox").removeClass('active');
	// 		hsbOption = 0;
	// 	}
	// })

	// $(".main-menu .main >ul >li").mouseover(function() {
	// 	$(this).addClass('active');
	// });
	// $(".main-menu .main >ul >li").mouseleave(function() {
	// 	$(this).removeClass('active');
	// });


	// //手機版選單收合控制
	// $(".mobile-menu-btn").click(function() {
	// 	if ($(".mobile-menu, .mobile-black-mask").hasClass('active')) {
	// 		$(".mobile-menu, .mobile-black-mask").removeClass('active');
	// 	}else {
	// 		$(".mobile-menu, .mobile-black-mask").addClass('active');
	// 		return false;
	// 	}
	// });
	// $(window).on("resize", function() {
	// 	var window_width = $(window).width()
	// 	if (window_width > 1400) {
	// 		if ($(".mobile-menu, .mobile-black-mask").hasClass('active')) {
	// 			$(".mobile-menu, .mobile-black-mask").removeClass('active');
	// 		}
	// 	}
	// });

	// $(".mobile-menu >ul >li.parent").click(function() {
	// 	if ($(this).find('ul').hasClass('active')) {
	// 		$(this).find('ul').removeClass('active');
	// 		$(this).find('i').removeClass('fa-minus').addClass('fa-plus');
	// 	}else {
	// 		$(this).find('ul').addClass('active');
	// 		$(this).find('i').removeClass('fa-plus').addClass('fa-minus');
	// 	}
	// });



	// $(window).scroll(function () {
	// 	var scrollVal = $(this).scrollTop();
	// 	//console.log(scrollVal);
	// 	if (scrollVal > 123) {
	// 			if ($("header").hasClass('hide')) {
	// 					return false;
	// 			}else {
	// 					$("header").addClass('hide');
	// 					$(".mobile-menu, .mobile-black-mask").addClass('top-mode');
	// 			}
	// 	}
	// 	if (scrollVal < 123) {
	// 		$("header").removeClass('hide');
	// 		$(".mobile-menu, .mobile-black-mask").removeClass('top-mode');
	// 	}
	// })


	//cookie
	function SetCookie(name, value) {
		var Days = 1; // save 10 day
		var exp  = new Date();
		exp.setTime(exp.getTime() + Days*24*60*60*1000);
		document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
	}
	function getCookie(name) {
		var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
		 if(arr != null) return unescape(arr[2]); return null;
	}

	if(getCookie("uamask") == null) {
		var person = prompt("請輸入識別碼");
		if (person == "wakeup") {
			SetCookie ("uamask", true);
		}
		else {
			window.location.href = 'https://www.google.com';
		}
	}
})
